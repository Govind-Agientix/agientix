import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Bot, 
  Search, 
  Users, 
  MessageSquare, 
  Brain,
  RotateCcw,
  Wrench,
  Eye,
  Route,
  Zap,
  Database,
  FileText,
  Shield,
  Plug,
  SearchCode,
  Puzzle,
  Lock,
  Settings,
  BarChart3,
  LineChart,
  Activity,
  Gauge,
  FileCheck,
  Key,
  ScrollText,
  ShieldCheck,
  EyeOff,
  Building2,
  Mail,
  Calendar,
  FolderOpen,
  HardDrive,
  Cloud,
  Smartphone,
  Laptop,
  CreditCard,
  Headphones,
  Package,
  Truck,
  Store,
  Blocks
} from "lucide-react";

// Business system icons for the bottom row
const businessIcons = [
  Building2, Mail, Calendar, FolderOpen, HardDrive, Cloud, 
  Smartphone, Laptop, CreditCard, Headphones, Package, Truck, Store, Blocks
];

// Loop step data
const loopSteps = [
  { icon: RotateCcw, label: "Plans" },
  { icon: Wrench, label: "Executes tools" },
  { icon: Eye, label: "Observes & improves" },
];

export function PlatformMapAnimated() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Cycle through steps every 1400ms
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % 3);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="platform-map" className="section-padding bg-secondary/20">
      {/* Inline styles for orbit animation */}
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .orbit-ring {
          animation: orbit-spin 12s linear infinite;
        }
      `}</style>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Agentix Platform Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A modern agentic system: connect apps, reason, act, govern, and secure.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative rounded-2xl border bg-card p-4 md:p-6 lg:p-8 overflow-x-auto">
          {/* CTA Button - Top Right with Callout */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
            {/* Animated Callout - Decorative */}
            <div 
              className="absolute -left-32 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1"
              aria-hidden="true"
            >
              {/* Label Bubble */}
              <div className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold whitespace-nowrap animate-bounce shadow-lg">
                Demo starts here
              </div>
              {/* Curved Arrow */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-primary animate-pulse"
              >
                <path 
                  d="M4 12 C 8 12, 12 8, 16 8 L 14 5 M 16 8 L 14 11" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            <Button size="sm" asChild>
              <Link to="/demo" aria-label="See it in action (demo)">
                See it in action
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Diagram Container */}
          <div className="flex gap-4 lg:gap-6 mt-10 md:mt-6 min-w-[900px]">
            {/* Left Labels Column */}
            <div className="flex flex-col gap-4 w-28 shrink-0 pt-2">
              <div className="h-[140px] flex items-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Built-in apps
                </span>
              </div>
              <div className="flex-1 flex items-start pt-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Core architecture
                </span>
              </div>
            </div>

            {/* A) Outer Diagram Frame */}
            <div className="flex-1 rounded-xl border-2 border-border bg-background p-4 lg:p-6">
              
              {/* C) Built-in Apps Area */}
              <div className="mb-6">
                {/* Row of 3 boxes */}
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <Bot className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">Universal Assistant</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <Search className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">Enterprise Search</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <Users className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">Specialized Agents</span>
                  </div>
                </div>
                {/* Conversations API bar */}
                <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-accent/10 border border-accent/30">
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Conversations API</span>
                </div>
              </div>

              {/* D) Core Architecture Area */}
              <div className="flex gap-4 mb-6">
                {/* Left: Agentic Reasoning Engine */}
                <div className="w-44 shrink-0 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold">Agentic Reasoning Engine</span>
                  </div>
                  {/* Loop Area with Orbit */}
                  <div className="relative flex flex-col items-center gap-2 py-4">
                    {/* Dashed Orbit Ring */}
                    <div 
                      className="orbit-ring absolute inset-0 rounded-full border-2 border-dashed border-primary/30 pointer-events-none"
                      style={{ margin: "-8px" }}
                      aria-hidden="true"
                    />
                    
                    {/* Loop Steps */}
                    {loopSteps.map((step, index) => {
                      const isActive = index === activeStepIndex;
                      const StepIcon = step.icon;
                      return (
                        <div
                          key={step.label}
                          className={`
                            relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                            transition-all duration-500 ease-in-out
                            ${isActive 
                              ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background shadow-lg shadow-primary/30" 
                              : "bg-primary/15 text-muted-foreground"
                            }
                          `}
                        >
                          <StepIcon className={`w-3 h-3 transition-all duration-500 ${isActive ? "scale-110" : "scale-100"}`} />
                          {step.label}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Feature boxes */}
                <div className="flex-1 grid grid-cols-3 gap-2 content-start">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary/50 border">
                    <Route className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-xs font-medium">LLM routing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary/50 border">
                    <Zap className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-xs font-medium">Automation</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary/50 border">
                    <Database className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-xs font-medium">Memory</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary/50 border">
                    <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-xs font-medium">Structured extraction</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary/50 border">
                    <Shield className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-xs font-medium">Safety guardrails</span>
                  </div>
                </div>
              </div>

              {/* E) Under Core */}
              <div className="space-y-3">
                {/* Row of 3 boxes */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30 border">
                    <Plug className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-sm font-medium">Ways to connect</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30 border">
                    <SearchCode className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-sm font-medium">Search techniques</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30 border">
                    <Puzzle className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-sm font-medium">Plugins & tools</span>
                  </div>
                </div>

                {/* Permissions bar */}
                <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
                  <Lock className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-amber-700">Permissions & access controls</span>
                </div>

                {/* 100+ Business Systems */}
                <div className="p-3 rounded-lg bg-muted/50 border">
                  <p className="text-xs font-semibold text-center text-muted-foreground mb-2">
                    100+ business systems
                  </p>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {businessIcons.map((Icon, i) => (
                      <div key={i} className="w-7 h-7 rounded bg-background border flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* F) Right-side Modules Column */}
            <div className="w-44 shrink-0 flex flex-col gap-4">
              {/* For operators - no code */}
              <div className="rounded-xl bg-foreground text-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-3">
                  For operators — no code
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-background/10">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm font-medium">Assistant Builder</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-background/10">
                    <Store className="w-4 h-4" />
                    <span className="text-sm font-medium">Assistant Store</span>
                  </div>
                </div>
              </div>

              {/* For developers - pro code */}
              <div className="rounded-xl bg-foreground text-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-3">
                  For developers — pro code
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-background/10">
                    <Blocks className="w-4 h-4" />
                    <span className="text-sm font-medium">Agent Studio</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-background/10">
                    <Package className="w-4 h-4" />
                    <span className="text-sm font-medium">AI Agent Marketplace</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* G) Bottom Bars */}
          <div className="mt-6 space-y-3 min-w-[900px]">
            {/* Governance bar */}
            <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mr-2">
                Governance
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Settings, label: "Setup" },
                  { icon: BarChart3, label: "Insights" },
                  { icon: LineChart, label: "Analytics" },
                  { icon: Activity, label: "Monitoring" },
                  { icon: Gauge, label: "Performance" },
                  { icon: FileCheck, label: "Compliance" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-xs font-medium text-emerald-700">
                    <item.icon className="w-3 h-3" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Security bar */}
            <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 mr-2">
                Security
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Key, label: "SSO/SAML" },
                  { icon: ScrollText, label: "Audit Logs" },
                  { icon: ShieldCheck, label: "Encryption" },
                  { icon: Lock, label: "RBAC" },
                  { icon: EyeOff, label: "Redaction" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 text-xs font-medium text-blue-700">
                    <item.icon className="w-3 h-3" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
