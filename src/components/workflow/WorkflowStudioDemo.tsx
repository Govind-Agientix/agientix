import { useState, useMemo } from "react";
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
  Users,
} from "lucide-react";
import { WorkflowNode, type WorkflowNodeType } from "./WorkflowNode";

const nodeTypes = {
  workflow: WorkflowNode,
};

const initialNodes: WorkflowNodeType[] = [
  {
    id: "1",
    type: "workflow",
    position: { x: 50, y: 100 },
    data: {
      title: "Email Received",
      subtitle: "Trigger on new email",
      icon: Mail,
      status: "success",
    },
  },
  {
    id: "2",
    type: "workflow",
    position: { x: 300, y: 40 },
    data: {
      title: "AI Classifier",
      subtitle: "Categorize intent",
      icon: Bot,
      status: "success",
    },
  },
  {
    id: "3",
    type: "workflow",
    position: { x: 300, y: 160 },
    data: {
      title: "Priority Check",
      subtitle: "Evaluate urgency",
      icon: AlertTriangle,
      status: "idle",
    },
  },
  {
    id: "4",
    type: "workflow",
    position: { x: 550, y: 100 },
    data: {
      title: "Route to Agent",
      subtitle: "Assign to team",
      icon: Users,
      status: "idle",
    },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-4", source: "3", target: "4" },
];

const templates = [
  { name: "Support Triage", icon: Ticket },
  { name: "Lead Routing", icon: Zap },
];

const connectors = [
  { name: "Email", icon: Mail, connected: true },
  { name: "Ticketing", icon: Ticket, connected: true },
  { name: "Slack", icon: MessageSquare, connected: false },
];

export function WorkflowStudioDemo() {
  const [activeTab, setActiveTab] = useState("inspector");

  return (
    <div className="h-[560px] w-full bg-background rounded-xl overflow-hidden border border-border shadow-xl flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-3">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 text-sm">
            <span className="text-muted-foreground">Workflow Studio</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-foreground">AI Support Triage</span>
          </div>
          {/* Status chip */}
          <Badge variant="secondary" className="text-xs font-normal">
            Draft
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 text-xs">
            <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
            Reset
          </Button>
          <Button variant="outline" size="sm" className="h-8 text-xs">
            <Play className="h-3.5 w-3.5 mr-1.5" />
            Test run
          </Button>
          <Button size="sm" className="h-8 text-xs gradient-bg text-primary-foreground">
            <Upload className="h-3.5 w-3.5 mr-1.5" />
            Publish
          </Button>
        </div>
      </div>

      {/* Prompt Bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/20">
        <div className="flex-1 relative">
          <Input
            placeholder="Describe your workflow… e.g., 'Route urgent tickets to senior agents'"
            className="h-9 pr-24 text-sm bg-background border-border"
          />
        </div>
        <Button size="sm" className="h-9 px-4 gradient-bg text-primary-foreground">
          <Sparkles className="h-4 w-4 mr-1.5" />
          Generate
        </Button>
      </div>

      {/* Main 3-Column Layout */}
      <div className="flex-1 flex min-h-0">
        {/* Left Panel */}
        <div className="w-48 border-r border-border bg-muted/10 flex flex-col">
          <ScrollArea className="flex-1">
            <div className="p-3">
              {/* Templates */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Templates
                </h4>
                <div className="space-y-1">
                  {templates.map((template) => (
                    <button
                      key={template.name}
                      className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-foreground hover:bg-muted/50 transition-colors text-left"
                    >
                      <template.icon className="h-4 w-4 text-primary" />
                      <span>{template.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Connectors */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Connectors
                </h4>
                <div className="space-y-1">
                  {connectors.map((connector) => (
                    <button
                      key={connector.name}
                      className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-foreground hover:bg-muted/50 transition-colors text-left"
                    >
                      <connector.icon className="h-4 w-4 text-accent" />
                      <span className="flex-1">{connector.name}</span>
                      {connector.connected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Center - React Flow Canvas */}
        <div className="flex-1 relative bg-muted/5">
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
            fitView
            proOptions={{ hideAttribution: true }}
            className="bg-transparent"
          >
            <Background gap={16} size={1} color="hsl(var(--border))" />
            <Controls className="!bg-background !border-border !shadow-md" />
            <MiniMap 
              className="!bg-background !border-border"
              nodeColor="hsl(var(--primary))"
              maskColor="hsl(var(--muted) / 0.5)"
            />
          </ReactFlow>
        </div>

        {/* Right Panel */}
        <div className="w-56 border-l border-border bg-muted/10 flex flex-col">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
            <TabsList className="w-full rounded-none border-b border-border bg-transparent h-10 p-0">
              <TabsTrigger
                value="inspector"
                className="flex-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none text-xs"
              >
                Inspector
              </TabsTrigger>
              <TabsTrigger
                value="copilot"
                className="flex-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none text-xs"
              >
                AI Copilot
              </TabsTrigger>
            </TabsList>
            <TabsContent value="inspector" className="flex-1 m-0 p-3">
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-muted/30 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">AI Classifier</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Categorizes incoming requests using NLP
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">
                  Select a node to view properties
                </div>
              </div>
            </TabsContent>
            <TabsContent value="copilot" className="flex-1 m-0 p-3">
              <div className="space-y-2">
                <div className="flex items-start gap-2 p-2 rounded-lg bg-primary/5 border border-primary/20">
                  <Sparkles className="h-4 w-4 text-primary mt-0.5" />
                  <p className="text-xs text-foreground">
                    Try: "Add a Slack notification when priority is high"
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  Ask me to modify or extend your workflow
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Bottom Run Log */}
      <div className="h-24 border-t border-border bg-muted/20">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Run Log
          </h4>
          <Badge variant="outline" className="text-xs font-normal">
            3 runs today
          </Badge>
        </div>
        <ScrollArea className="h-[calc(100%-32px)]">
          <div className="px-4 py-2 space-y-1.5">
            <div className="flex items-center gap-2 text-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              <span className="text-muted-foreground">12:34 PM</span>
              <span className="text-foreground">Ticket #4521 routed to Senior Agent</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              <span className="text-muted-foreground">12:31 PM</span>
              <span className="text-foreground">Ticket #4520 classified as "Billing"</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Clock className="h-3.5 w-3.5 text-amber-500" />
              <span className="text-muted-foreground">12:28 PM</span>
              <span className="text-foreground">Awaiting response from Slack connector…</span>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
