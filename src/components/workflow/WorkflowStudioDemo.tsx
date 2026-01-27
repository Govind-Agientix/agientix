import { useState, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type Edge,
} from "@xyflow/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronRight,
  RotateCcw,
  Play,
  Upload,
  Sparkles,
  Mail,
  Ticket,
  MessageSquare,
  Zap,
  Bot,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileText,
  Shield,
  UserCheck,
  Database,
  type LucideIcon,
  PanelLeftClose,
  PanelRightClose,
} from "lucide-react";
import { WorkflowNode, type WorkflowNodeType, type NodeStatus } from "./WorkflowNode";

const nodeTypes = {
  workflow: WorkflowNode,
};

// ==================== TEMPLATE DEFINITIONS ====================

interface WorkflowTemplate {
  id: string;
  name: string;
  icon: LucideIcon;
  nodes: WorkflowNodeType[];
  edges: Edge[];
}

const supportTriageTemplate: WorkflowTemplate = {
  id: "support-triage",
  name: "AI Support Triage",
  icon: Ticket,
  nodes: [
    {
      id: "trigger",
      type: "workflow",
      position: { x: 50, y: 120 },
      data: {
        title: "Message Received",
        subtitle: "Trigger on new message",
        icon: Mail,
        status: "idle" as NodeStatus,
      },
    },
    {
      id: "classifier",
      type: "workflow",
      position: { x: 280, y: 60 },
      data: {
        title: "AI Classifier",
        subtitle: "Intent + urgency",
        icon: Bot,
        status: "idle" as NodeStatus,
      },
    },
    {
      id: "guardrail",
      type: "workflow",
      position: { x: 280, y: 180 },
      data: {
        title: "Policy Check",
        subtitle: "Guardrail validation",
        icon: Shield,
        status: "idle" as NodeStatus,
      },
    },
    {
      id: "router",
      type: "workflow",
      position: { x: 510, y: 120 },
      data: {
        title: "Urgency Router",
        subtitle: "Urgent → Slack, else Ticket",
        icon: Zap,
        status: "idle" as NodeStatus,
      },
    },
    {
      id: "ticket",
      type: "workflow",
      position: { x: 740, y: 60 },
      data: {
        title: "Create Ticket",
        subtitle: "Action: ticketing system",
        icon: Ticket,
        status: "idle" as NodeStatus,
      },
    },
    {
      id: "slack",
      type: "workflow",
      position: { x: 740, y: 180 },
      data: {
        title: "Notify Slack",
        subtitle: "Action: send alert",
        icon: MessageSquare,
        status: "idle" as NodeStatus,
      },
    },
  ],
  edges: [
    { id: "e-trigger-classifier", source: "trigger", target: "classifier", animated: true },
    { id: "e-trigger-guardrail", source: "trigger", target: "guardrail", animated: true },
    { id: "e-classifier-router", source: "classifier", target: "router" },
    { id: "e-guardrail-router", source: "guardrail", target: "router" },
    { id: "e-router-ticket", source: "router", target: "ticket" },
    { id: "e-router-slack", source: "router", target: "slack" },
  ],
};

const invoiceAuditTemplate: WorkflowTemplate = {
  id: "invoice-audit",
  name: "Invoice Audit & Posting",
  icon: FileText,
  nodes: [
    {
      id: "trigger",
      type: "workflow",
      position: { x: 50, y: 120 },
      data: {
        title: "Invoice Received",
        subtitle: "Trigger on new invoice",
        icon: FileText,
        status: "idle" as NodeStatus,
      },
    },
    {
      id: "extractor",
      type: "workflow",
      position: { x: 280, y: 120 },
      data: {
        title: "AI Extractor",
        subtitle: "Extract fields",
        icon: Bot,
        status: "idle" as NodeStatus,
      },
    },
    {
      id: "matcher",
      type: "workflow",
      position: { x: 510, y: 60 },
      data: {
        title: "Match & Dedupe",
        subtitle: "Guardrail validation",
        icon: Shield,
        status: "idle" as NodeStatus,
      },
    },
    {
      id: "approval",
      type: "workflow",
      position: { x: 510, y: 180 },
      data: {
        title: "Human Approval",
        subtitle: "If variance > threshold",
        icon: UserCheck,
        status: "idle" as NodeStatus,
      },
    },
    {
      id: "post-erp",
      type: "workflow",
      position: { x: 740, y: 120 },
      data: {
        title: "Post to AP/ERP",
        subtitle: "Action: ERP integration",
        icon: Database,
        status: "idle" as NodeStatus,
      },
    },
  ],
  edges: [
    { id: "e-trigger-extractor", source: "trigger", target: "extractor", animated: true },
    { id: "e-extractor-matcher", source: "extractor", target: "matcher" },
    { id: "e-extractor-approval", source: "extractor", target: "approval" },
    { id: "e-matcher-erp", source: "matcher", target: "post-erp" },
    { id: "e-approval-erp", source: "approval", target: "post-erp" },
  ],
};

const allTemplates: WorkflowTemplate[] = [supportTriageTemplate, invoiceAuditTemplate];

const connectors = [
  { name: "Email", icon: Mail, connected: true },
  { name: "Ticketing", icon: Ticket, connected: true },
  { name: "Slack", icon: MessageSquare, connected: false },
];

// ==================== COMPONENT ====================

export function WorkflowStudioDemo() {
  const [activeTab, setActiveTab] = useState("inspector");
  const [promptValue, setPromptValue] = useState("");
  const [currentTemplate, setCurrentTemplate] = useState<WorkflowTemplate>(supportTriageTemplate);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [runLogs, setRunLogs] = useState<Array<{ time: string; message: string; status: "success" | "pending" }>>([]);
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);

  const loadTemplate = useCallback((template: WorkflowTemplate) => {
    setCurrentTemplate(template);
    setSelectedNodeId(null);
    setRunLogs([]);
  }, []);

  const handleGenerate = useCallback(() => {
    const lowerPrompt = promptValue.toLowerCase().trim();
    
    if (lowerPrompt.includes("invoice") || lowerPrompt.includes("billing") || lowerPrompt.includes("ap")) {
      loadTemplate(invoiceAuditTemplate);
    } else {
      loadTemplate(supportTriageTemplate);
    }
  }, [promptValue, loadTemplate]);

  const handleTemplateClick = useCallback((template: WorkflowTemplate) => {
    loadTemplate(template);
  }, [loadTemplate]);

  const handleReset = useCallback(() => {
    loadTemplate(supportTriageTemplate);
    setPromptValue("");
  }, [loadTemplate]);

  return (
    <div className="w-full bg-background rounded-xl overflow-hidden border border-border shadow-2xl flex flex-col h-[480px] sm:h-[520px] md:h-[560px]">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-border bg-muted/30 shrink-0">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 text-xs sm:text-sm min-w-0">
            <span className="text-muted-foreground hidden sm:inline">Workflow Studio</span>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground hidden sm:block" />
            <span className="font-medium text-foreground truncate">{currentTemplate.name}</span>
          </div>
          {/* Status chip */}
          <Badge variant="secondary" className="text-[10px] sm:text-xs font-normal shrink-0">
            Draft
          </Badge>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <Button variant="ghost" size="sm" className="h-7 sm:h-8 text-[10px] sm:text-xs px-2 sm:px-3" onClick={handleReset}>
            <RotateCcw className="h-3 w-3 sm:h-3.5 sm:w-3.5 sm:mr-1.5" />
            <span className="hidden sm:inline">Reset</span>
          </Button>
          <Button variant="outline" size="sm" className="h-7 sm:h-8 text-[10px] sm:text-xs px-2 sm:px-3">
            <Play className="h-3 w-3 sm:h-3.5 sm:w-3.5 sm:mr-1.5" />
            <span className="hidden sm:inline">Test run</span>
          </Button>
          <Button size="sm" className="h-7 sm:h-8 text-[10px] sm:text-xs px-2 sm:px-3 gradient-bg text-primary-foreground">
            <Upload className="h-3 w-3 sm:h-3.5 sm:w-3.5 sm:mr-1.5" />
            <span className="hidden sm:inline">Publish</span>
          </Button>
        </div>
      </div>

      {/* Prompt Bar */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 border-b border-border bg-muted/20 shrink-0">
        <div className="flex-1 relative">
          <Input
            value={promptValue}
            onChange={(e) => setPromptValue(e.target.value)}
            placeholder="Describe your workflow…"
            className="h-8 sm:h-9 text-xs sm:text-sm bg-background border-border"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleGenerate();
            }}
          />
        </div>
        <Button 
          size="sm" 
          className="h-8 sm:h-9 px-3 sm:px-4 gradient-bg text-primary-foreground shrink-0"
          onClick={handleGenerate}
        >
          <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 sm:mr-1.5" />
          <span className="hidden sm:inline">Generate</span>
        </Button>
      </div>

      {/* Main Layout - Responsive */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden">
        {/* Left Panel - Hidden on mobile by default, toggleable */}
        <div className={`${showLeftPanel ? 'flex' : 'hidden'} md:flex w-full md:w-44 lg:w-48 border-b md:border-b-0 md:border-r border-border bg-muted/10 flex-col shrink-0 max-h-32 md:max-h-none`}>
          <ScrollArea className="flex-1">
            <div className="p-2 sm:p-3">
              {/* Templates */}
              <div className="mb-3 md:mb-4">
                <h4 className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 sm:mb-2">
                  Templates
                </h4>
                <div className="flex md:flex-col gap-1">
                  {allTemplates.map((template) => {
                    const Icon = template.icon;
                    const isActive = currentTemplate.id === template.id;
                    return (
                      <button
                        key={template.id}
                        onClick={() => handleTemplateClick(template)}
                        className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm transition-colors text-left ${
                          isActive 
                            ? "bg-primary/10 text-primary font-medium" 
                            : "text-foreground hover:bg-muted/50"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                        <span className="truncate">{template.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Connectors - Hidden on mobile */}
              <div className="hidden md:block">
                <h4 className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 sm:mb-2">
                  Connectors
                </h4>
                <div className="space-y-1">
                  {connectors.map((connector) => {
                    const Icon = connector.icon;
                    return (
                      <button
                        key={connector.name}
                        className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-foreground hover:bg-muted/50 transition-colors text-left"
                      >
                        <Icon className="h-4 w-4 text-accent shrink-0" />
                        <span className="flex-1 truncate">{connector.name}</span>
                        {connector.connected && (
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Center - React Flow Canvas */}
        <div className="flex-1 relative bg-muted/5 min-h-[280px] sm:min-h-[320px] md:min-h-0 h-full w-full">
          <ReactFlow
            nodes={currentTemplate.nodes}
            edges={currentTemplate.edges}
            nodeTypes={nodeTypes}
            fitView
            proOptions={{ hideAttribution: true }}
            className="bg-transparent"
            onNodeClick={(_, node) => setSelectedNodeId(node.id)}
            onPaneClick={() => setSelectedNodeId(null)}
          >
            <Background gap={16} size={1} color="hsl(var(--border))" />
            <Controls className="!bg-background !border-border !shadow-md" />
            <MiniMap 
              className="!bg-background !border-border hidden sm:block"
              nodeColor="hsl(var(--primary))"
              maskColor="hsl(var(--muted) / 0.5)"
            />
          </ReactFlow>
          
          {/* Mobile panel toggles */}
          <div className="absolute bottom-2 left-2 flex gap-1 md:hidden">
            <Button
              variant="outline"
              size="sm"
              className="h-7 w-7 p-0 bg-background/90"
              onClick={() => setShowLeftPanel(!showLeftPanel)}
            >
              <PanelLeftClose className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7 w-7 p-0 bg-background/90"
              onClick={() => setShowRightPanel(!showRightPanel)}
            >
              <PanelRightClose className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

        {/* Right Panel - Hidden on mobile by default */}
        <div className={`${showRightPanel ? 'flex' : 'hidden'} md:flex w-full md:w-48 lg:w-56 border-t md:border-t-0 md:border-l border-border bg-muted/10 flex-col shrink-0 max-h-36 md:max-h-none`}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
            <TabsList className="w-full rounded-none border-b border-border bg-transparent h-9 sm:h-10 p-0 shrink-0">
              <TabsTrigger
                value="inspector"
                className="flex-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none text-[10px] sm:text-xs"
              >
                Inspector
              </TabsTrigger>
              <TabsTrigger
                value="copilot"
                className="flex-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none text-[10px] sm:text-xs"
              >
                AI Copilot
              </TabsTrigger>
            </TabsList>
            <TabsContent value="inspector" className="flex-1 m-0 p-2 sm:p-3 overflow-auto">
              <div className="space-y-2 sm:space-y-3">
                {selectedNodeId ? (
                  (() => {
                    const selectedNode = currentTemplate.nodes.find(n => n.id === selectedNodeId);
                    if (!selectedNode) return null;
                    const Icon = selectedNode.data.icon;
                    return (
                      <div className="p-2 sm:p-3 rounded-lg bg-muted/30 border border-border">
                        <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                          <span className="text-xs sm:text-sm font-medium truncate">{selectedNode.data.title}</span>
                        </div>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">
                          {selectedNode.data.subtitle}
                        </p>
                        <div className="mt-2 pt-2 border-t border-border">
                          <span className="text-[9px] sm:text-[10px] uppercase text-muted-foreground">Status</span>
                          <p className="text-[10px] sm:text-xs capitalize">{selectedNode.data.status}</p>
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  <div className="text-[10px] sm:text-xs text-muted-foreground">
                    Click a node to view its properties
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="copilot" className="flex-1 m-0 p-2 sm:p-3 overflow-auto">
              <div className="space-y-2">
                <div className="flex items-start gap-2 p-2 rounded-lg bg-primary/5 border border-primary/20">
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-[10px] sm:text-xs text-foreground">
                    Try: "Add a Slack notification when priority is high"
                  </p>
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  Ask me to modify your workflow
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Bottom Run Log */}
      <div className="h-16 sm:h-20 md:h-24 border-t border-border bg-muted/20 shrink-0">
        <div className="flex items-center justify-between px-3 sm:px-4 py-1.5 sm:py-2 border-b border-border">
          <h4 className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Run Log
          </h4>
          <Badge variant="outline" className="text-[10px] sm:text-xs font-normal">
            {runLogs.length === 0 ? "No runs" : `${runLogs.length} entries`}
          </Badge>
        </div>
        <ScrollArea className="h-[calc(100%-28px)] sm:h-[calc(100%-32px)]">
          <div className="px-3 sm:px-4 py-1.5 sm:py-2 space-y-1 sm:space-y-1.5">
            {runLogs.length === 0 ? (
              <p className="text-[10px] sm:text-xs text-muted-foreground italic">
                Run a test to see execution logs here…
              </p>
            ) : (
              runLogs.map((log, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] sm:text-xs">
                  {log.status === "success" ? (
                    <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500 shrink-0" />
                  ) : (
                    <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-500 shrink-0" />
                  )}
                  <span className="text-muted-foreground shrink-0">{log.time}</span>
                  <span className="text-foreground truncate">{log.message}</span>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
