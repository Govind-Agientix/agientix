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
  Blocks,
  Globe,
  Server,
  Folder,
  Bell,
  Clipboard,
  Archive,
  Bookmark,
  Plus
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

// Section names for spotlight
type SectionName = "apps" | "core" | "governance" | "security";
const sectionOrder: SectionName[] = ["apps", "core", "governance", "security"];

export function PlatformMapAnimated() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionName>("apps");

  // Cycle through reasoning loop steps every 1400ms
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % 3);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  // Cycle through spotlight sections every 3000ms
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => {
        const currentIndex = sectionOrder.indexOf(prev);
        return sectionOrder[(currentIndex + 1) % sectionOrder.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Hover box class for consistent styling
  const hoverBox = "transition-all duration-300 hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5";
  
  // Spotlight class for active section
  const getSpotlightClass = (section: SectionName) => 
    activeSection === section 
      ? "ring-2 ring-primary/20 bg-primary/5 transition-all duration-500" 
      : "transition-all duration-500";

  return (
    <section id="platform-map" className="section-padding bg-secondary/20">
      {/* Inline styles for animations */}
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .orbit-ring {
          animation: orbit-spin 12s linear infinite;
        }
        @keyframes flow-dash {
          to { stroke-dashoffset: -20; }
        }
        .flow-line {
          stroke-dasharray: 8 4;
          animation: flow-dash 0.8s linear infinite;
        }
        .flow-line-slow {
          stroke-dasharray: 6 6;
          animation: flow-dash 1.2s linear infinite;
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
        <div className="relative rounded-2xl border bg-card p-4 md:p-6 lg:p-8">
          {/* CTA Button - Pinned in card header (outside scroll) */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
            {/* Animated Callout - Decorative */}
            <div 
              className="absolute -left-32 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1 hidden sm:flex"
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

          {/* Scrollable Diagram Wrapper */}
          <div className="overflow-x-auto -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 mt-10 md:mt-6">
            <div className="min-w-[980px] max-w-5xl mx-auto relative">
              {/* Animated Connector Lines SVG Overlay */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-[1] hidden lg:block"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Arrow marker */}
                  <marker 
                    id="arrowhead" 
                    markerWidth="8" 
                    markerHeight="6" 
                    refX="7" 
                    refY="3" 
                    orient="auto"
                  >
                    <polygon 
                      points="0 0, 8 3, 0 6" 
                      fill="hsl(var(--primary))" 
                      opacity="0.6"
                    />
                  </marker>
                  <marker 
                    id="arrowhead-accent" 
                    markerWidth="8" 
                    markerHeight="6" 
                    refX="7" 
                    refY="3" 
                    orient="auto"
                  >
                    <polygon 
                      points="0 0, 8 3, 0 6" 
                      fill="hsl(var(--accent))" 
                      opacity="0.6"
                    />
                  </marker>
                </defs>
                
                {/* Built-in apps -> Reasoning Engine */}
                <path 
                  d="M 200 140 C 200 180, 180 200, 180 240"
                  className="flow-line"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.5"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* Conversations API -> Reasoning Engine */}
                <path 
                  d="M 350 170 C 350 200, 280 220, 220 250"
                  className="flow-line"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                  markerEnd="url(#arrowhead-accent)"
                />
                
                {/* Reasoning Engine -> Feature boxes */}
                <path 
                  d="M 280 300 C 320 300, 360 280, 400 270"
                  className="flow-line-slow"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* Feature boxes -> Right modules */}
                <path 
                  d="M 620 260 C 680 260, 720 220, 780 200"
                  className="flow-line"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* Plugins -> Permissions bar */}
                <path 
                  d="M 400 420 C 400 460, 450 480, 500 490"
                  className="flow-line-slow"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.3"
                />
                
                {/* Permissions -> Business systems */}
                <path 
                  d="M 500 510 C 500 540, 500 560, 500 580"
                  className="flow-line-slow"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.3"
                  markerEnd="url(#arrowhead)"
                />
              </svg>

              {/* Diagram Container */}
              <div className="flex gap-4 lg:gap-6 relative z-[2]">
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
              <div className={`mb-6 p-3 -m-3 rounded-xl ${getSpotlightClass("apps")} relative`}>
                {/* Row of 3 boxes + Scoped agents badge */}
                <div className="grid grid-cols-3 gap-3 mb-3 relative">
                  {/* Universal Assistant */}
                  <div className={`p-3 rounded-lg bg-primary/5 border border-primary/20 ${hoverBox}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Bot className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-semibold">Universal Assistant</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mb-2">100+ languages</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-primary/10 text-primary">Web app</span>
                      <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-primary/10 text-primary inline-flex items-center gap-0.5">
                        Chat apps
                        <MessageSquare className="w-2 h-2" />
                        <Smartphone className="w-2 h-2" />
                        <Laptop className="w-2 h-2" />
                        <Mail className="w-2 h-2" />
                      </span>
                      <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-primary/10 text-primary">Service portals</span>
                      <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-primary/10 text-primary">Intranets</span>
                    </div>
                  </div>
                  
                  {/* Enterprise Search */}
                  <div className={`p-3 rounded-lg bg-primary/5 border border-primary/20 ${hoverBox}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Search className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-semibold">Enterprise Search</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mb-2">Precise and granular control</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-primary/10 text-primary">AI summaries</span>
                      <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-primary/10 text-primary">Vetted answers</span>
                      <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-primary/10 text-primary">Filters</span>
                      <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-primary/10 text-primary">Search results page</span>
                    </div>
                  </div>
                  
                  {/* Specialized Agents */}
                  <div className={`p-3 rounded-lg bg-primary/5 border border-primary/20 ${hoverBox}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-semibold">Specialized Agents</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mb-2">First-party apps</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-primary/10 text-primary">World Knowledge</span>
                      <span className="px-1.5 py-0.5 text-[9px] font-medium rounded border border-dashed border-muted-foreground/50 text-muted-foreground">etc.</span>
                    </div>
                  </div>
                  
                  {/* Scoped agents badge - positioned to the right */}
                  <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    {/* Connecting line */}
                    <div className="w-4 h-px bg-foreground/40" aria-hidden="true" />
                    {/* Badge */}
                    <div className="px-2.5 py-1.5 rounded-full bg-foreground text-background text-[10px] font-semibold whitespace-nowrap">
                      Scoped agents
                    </div>
                  </div>
                </div>
                
                {/* Conversations API bar */}
                <div className={`flex items-center justify-between px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 ${hoverBox}`}>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Conversations API</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground">Support agent-to-agent and custom entry points</span>
                </div>
              </div>

              {/* D) Core Architecture Area */}
              <div className={`flex gap-4 mb-6 p-3 -m-3 rounded-xl ${getSpotlightClass("core")}`}>
                {/* Left: Agentic Reasoning Engine */}
                <div className={`flex-1 p-4 rounded-xl bg-amber-50 border border-amber-200 ${hoverBox}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="w-5 h-5 text-amber-700" />
                    <span className="text-sm font-semibold text-amber-900">Agentic Reasoning Engine</span>
                  </div>
                  
                  {/* Loop Container - dashed outline */}
                  <div className="relative border-2 border-dashed border-amber-300 rounded-2xl p-4 bg-amber-50/50">
                    {/* Three circles with arrows */}
                    <div className="flex items-center justify-center gap-2">
                      {/* Circle 1: Makes intelligent plans */}
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-14 h-14 rounded-full bg-white border-2 border-amber-400 flex items-center justify-center shadow-sm">
                          <RotateCcw className="w-5 h-5 text-amber-600" />
                        </div>
                        <span className="text-[9px] font-medium text-amber-800 text-center leading-tight max-w-16">Makes intelligent plans</span>
                      </div>
                      
                      {/* Arrow 1->2 */}
                      <svg width="24" height="16" viewBox="0 0 24 16" className="shrink-0 -mt-6" aria-hidden="true">
                        <path d="M2 8 L18 8 M14 4 L18 8 L14 12" stroke="currentColor" strokeWidth="2" fill="none" className="text-amber-400" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      
                      {/* Circle 2: Executes the right tools */}
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-14 h-14 rounded-full bg-white border-2 border-amber-400 flex items-center justify-center shadow-sm">
                          <Wrench className="w-5 h-5 text-amber-600" />
                        </div>
                        <span className="text-[9px] font-medium text-amber-800 text-center leading-tight max-w-16">Executes the right tools</span>
                      </div>
                      
                      {/* Arrow 2->3 */}
                      <svg width="24" height="16" viewBox="0 0 24 16" className="shrink-0 -mt-6" aria-hidden="true">
                        <path d="M2 8 L18 8 M14 4 L18 8 L14 12" stroke="currentColor" strokeWidth="2" fill="none" className="text-amber-400" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      
                      {/* Circle 3: Observes and adapts */}
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-14 h-14 rounded-full bg-white border-2 border-amber-400 flex items-center justify-center shadow-sm">
                          <Eye className="w-5 h-5 text-amber-600" />
                        </div>
                        <span className="text-[9px] font-medium text-amber-800 text-center leading-tight max-w-16">Observes and adapts</span>
                      </div>
                    </div>
                    
                    {/* Curved return arrow (bottom) */}
                    <svg className="absolute -bottom-1 left-1/2 -translate-x-1/2" width="120" height="20" viewBox="0 0 120 20" aria-hidden="true">
                      <path d="M110 4 C 100 16, 20 16, 10 4" stroke="currentColor" strokeWidth="2" fill="none" className="text-amber-300" strokeDasharray="4 3" />
                      <path d="M14 2 L10 6 L6 2" stroke="currentColor" strokeWidth="2" fill="none" className="text-amber-300" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Right: Feature boxes - pale gold, compact */}
                <div className="w-56 shrink-0 grid grid-cols-1 gap-1.5 content-start">
                  {/* 1) Robust LLM ecosystem */}
                  <div className={`p-2 rounded-lg bg-amber-50 border border-amber-200 ${hoverBox}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Route className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span className="text-[11px] font-semibold text-amber-900">Robust LLM ecosystem</span>
                    </div>
                    <div className="flex items-center gap-1 ml-5">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-2.5 h-2.5 rounded-full bg-amber-300/60 border border-amber-400/40" />
                      ))}
                    </div>
                  </div>
                  
                  {/* 2) Agentic Automation */}
                  <div className={`p-2 rounded-lg bg-amber-50 border border-amber-200 ${hoverBox}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span className="text-[11px] font-semibold text-amber-900">Agentic Automation</span>
                    </div>
                    <div className="ml-5 flex flex-wrap gap-x-2 gap-y-0.5">
                      <span className="text-[9px] text-amber-700">• Resolves tasks</span>
                      <span className="text-[9px] text-amber-700">• Generates plans</span>
                      <span className="text-[9px] text-amber-700">• Checks policies</span>
                      <span className="text-[9px] text-amber-700">• Executes actions</span>
                    </div>
                  </div>
                  
                  {/* 3) Memory Types */}
                  <div className={`p-2 rounded-lg bg-amber-50 border border-amber-200 ${hoverBox}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Database className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span className="text-[11px] font-semibold text-amber-900">Memory Types</span>
                    </div>
                    <div className="ml-5 flex flex-wrap gap-x-2 gap-y-0.5">
                      <span className="text-[9px] text-amber-700">• Semantic</span>
                      <span className="text-[9px] text-amber-700">• Episodic</span>
                      <span className="text-[9px] text-amber-700">• Working</span>
                      <span className="text-[9px] text-amber-700">• Procedural</span>
                    </div>
                  </div>
                  
                  {/* 4) Structured data analysis */}
                  <div className={`flex items-center gap-2 p-2 rounded-lg bg-amber-50 border border-amber-200 ${hoverBox}`}>
                    <FileText className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span className="text-[11px] font-semibold text-amber-900">Structured data analysis</span>
                  </div>
                  
                  {/* 5) Safety guardrails */}
                  <div className={`flex items-center gap-2 p-2 rounded-lg bg-amber-50 border border-amber-200 ${hoverBox}`}>
                    <Shield className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span className="text-[11px] font-semibold text-amber-900">Safety guardrails</span>
                  </div>
                </div>
              </div>

              {/* E) Under Core - Plugins Row */}
              <div className="space-y-3">
                {/* Plugins row: 2 small boxes + 1 big Plugins box */}
                <div className="flex gap-3 relative">
                  {/* Left small boxes */}
                  <div className="flex flex-col gap-2 w-40 shrink-0">
                    <div className={`p-2.5 rounded-lg bg-secondary/30 border ${hoverBox}`}>
                      <div className="flex items-center gap-2 mb-0.5">
                        <Plug className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                        <span className="text-xs font-semibold">Ways to connect</span>
                      </div>
                      <p className="text-[9px] text-muted-foreground ml-5">Content connectors with self-serve setup</p>
                    </div>
                    <div className={`p-2.5 rounded-lg bg-secondary/30 border ${hoverBox}`}>
                      <div className="flex items-center gap-2 mb-0.5">
                        <SearchCode className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                        <span className="text-xs font-semibold">Search techniques</span>
                      </div>
                      <p className="text-[9px] text-muted-foreground ml-5">Indexed, live, hybrid</p>
                    </div>
                  </div>
                  
                  {/* Big Plugins box */}
                  <div className={`flex-1 p-3 rounded-lg bg-secondary/30 border ${hoverBox}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Puzzle className="w-4 h-4 text-muted-foreground shrink-0" />
                      <span className="text-sm font-semibold">Plugins</span>
                    </div>
                    
                    <div className="flex gap-4">
                      {/* Group A: Search */}
                      <div className="flex-1">
                        <div className="flex items-start gap-1">
                          <span className="text-muted-foreground text-lg leading-none">[</span>
                          <div>
                            <p className="text-[10px] font-semibold text-muted-foreground mb-1">Search</p>
                            <div className="flex flex-wrap gap-1">
                              <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-muted text-muted-foreground">Knowledge bases</span>
                              <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-muted text-muted-foreground">Files & business systems</span>
                              <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-muted text-muted-foreground">World knowledge</span>
                            </div>
                          </div>
                          <span className="text-muted-foreground text-lg leading-none">]</span>
                        </div>
                      </div>
                      
                      {/* Group B: Action */}
                      <div className="flex-1">
                        <div className="flex items-start gap-1">
                          <span className="text-muted-foreground text-lg leading-none">[</span>
                          <div>
                            <p className="text-[10px] font-semibold text-muted-foreground mb-1">Action</p>
                            <div className="flex flex-wrap gap-1">
                              <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-muted text-muted-foreground">IT</span>
                              <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-muted text-muted-foreground">HR</span>
                              <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-muted text-muted-foreground">Finance/procurement</span>
                              <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-muted text-muted-foreground">Marketing</span>
                              <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-muted text-muted-foreground">Sales</span>
                              <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-muted text-muted-foreground">Engineering</span>
                              <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-muted text-muted-foreground">Facilities</span>
                              <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-muted text-muted-foreground">Legal</span>
                              <span className="px-1.5 py-0.5 text-[9px] font-medium rounded border border-dashed border-muted-foreground/50 text-muted-foreground">etc.</span>
                            </div>
                          </div>
                          <span className="text-muted-foreground text-lg leading-none">]</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Custom tools badge - positioned to the right */}
                  <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    {/* Connecting line */}
                    <div className="w-4 h-px bg-foreground/40" aria-hidden="true" />
                    {/* Badge */}
                    <div className="px-2.5 py-1.5 rounded-full bg-foreground text-background text-[10px] font-semibold whitespace-nowrap">
                      Custom tools
                    </div>
                  </div>
                </div>

                {/* Permissions bar with dashed line */}
                <div className="relative py-4">
                  {/* Dashed horizontal line */}
                  <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-amber-400/50" aria-hidden="true" />
                  
                  {/* Left label */}
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-medium text-amber-700 bg-card px-1">
                    Permissions mirroring
                  </span>
                  
                  {/* Right label */}
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-medium text-amber-700 bg-card px-1">
                    Access control lists
                  </span>
                  
                  {/* Center pill */}
                  <div className="relative flex justify-center">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-300 shadow-sm ${hoverBox}`}>
                      <Lock className="w-4 h-4 text-amber-600" />
                      <span className="text-xs font-semibold text-amber-800">Permissions and access controls</span>
                    </div>
                  </div>
                  
                  {/* Downward arrow to systems row */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full flex flex-col items-center" aria-hidden="true">
                    <div className="w-px h-4 bg-amber-400/60" />
                    <svg width="12" height="8" viewBox="0 0 12 8" className="text-amber-400/60">
                      <path d="M1 1 L6 6 L11 1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* 100+ Business Systems */}
                <div className={`p-3 rounded-lg bg-muted/50 border mt-4 ${hoverBox}`}>
                  <p className="text-xs font-semibold text-center text-muted-foreground mb-3">
                    100+ business and content systems
                  </p>
                  <div className="flex items-center justify-center gap-1.5 flex-wrap">
                    {/* System icon tiles - 16 generic icons */}
                    {[
                      Mail, Calendar, FileText, Database, Cloud, Globe, 
                      Server, HardDrive, Folder, FolderOpen, Users, 
                      MessageSquare, Bell, Clipboard, Archive, Bookmark
                    ].map((Icon, i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-md bg-background border border-border flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-sm hover:border-primary/30"
                      >
                        <Icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                    ))}
                    
                    {/* Bring your own system tile */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 ml-2">
                      <div className="w-6 h-6 rounded-md bg-primary/20 border border-dashed border-primary/50 flex items-center justify-center">
                        <Plus className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-[10px] font-medium text-primary leading-tight max-w-[100px]">
                        Bring your own system via Agientix Gateway
                      </span>
                    </div>
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
              <div className="mt-6 space-y-3">
                {/* Governance bar */}
                <div className={`flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 ${hoverBox} ${getSpotlightClass("governance")}`}>
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
                      <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-xs font-medium text-emerald-700 transition-all duration-200 hover:bg-emerald-500/30">
                        <item.icon className="w-3 h-3" />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security bar */}
                <div className={`flex items-center gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 ${hoverBox} ${getSpotlightClass("security")}`}>
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
                      <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 text-xs font-medium text-blue-700 transition-all duration-200 hover:bg-blue-500/30">
                        <item.icon className="w-3 h-3" />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
