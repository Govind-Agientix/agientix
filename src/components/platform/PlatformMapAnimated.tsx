import { useState, useEffect, ComponentType } from "react";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Brand Logo Tile Component
interface BrandLogoTileProps {
  icon: ComponentType<{ size?: number; color?: string }>;
  name: string;
}

function BrandLogoTile({ icon: Icon, name }: BrandLogoTileProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            className="w-8 h-8 rounded-md bg-background border border-border flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-sm hover:border-primary/30"
            aria-label={name}
          >
            <Icon size={18} color="default" />
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="text-xs">
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

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

// Section names for spotlight tour
type SectionName = "apps" | "conversations" | "core" | "plugins" | "permissions" | "systems" | "rightStack" | "governance" | "security" | "cta";
const sectionOrder: SectionName[] = ["apps", "conversations", "core", "plugins", "permissions", "systems", "rightStack", "governance", "security", "cta"];

export function PlatformMapAnimated() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionName>("apps");
  const [activeLoopIndex, setActiveLoopIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Cycle through reasoning loop steps every 1400ms
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % 3);
    }, 1400);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Cycle through loop circles every 1400ms
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveLoopIndex((prev) => (prev + 1) % 3);
    }, 1400);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Cycle through spotlight sections every 2200ms (pausable)
  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;
    const interval = setInterval(() => {
      setActiveSection((prev) => {
        const currentIndex = sectionOrder.indexOf(prev);
        return sectionOrder[(currentIndex + 1) % sectionOrder.length];
      });
    }, 2200);
    return () => clearInterval(interval);
  }, [prefersReducedMotion, isPaused]);

  // Pause/resume handlers
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Hover box class for consistent styling
  const hoverBox = "transition-all duration-300 hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5";
  
  // Spotlight class for active section
  const getSpotlightClass = (section: SectionName) => 
    activeSection === section 
      ? "ring-2 ring-primary/30 bg-primary/5 shadow-lg shadow-primary/10 transition-all duration-500" 
      : "transition-all duration-500";

  // Loop circle active class
  const getLoopCircleClass = (index: number) => {
    const isActive = activeLoopIndex === index && !prefersReducedMotion;
    return isActive
      ? "border-amber-500 bg-amber-50 shadow-lg shadow-amber-200/50 scale-105"
      : "border-amber-400 bg-white shadow-sm";
  };

  return (
    <section id="platform-map" className="section-padding bg-secondary/20">
      {/* Inline styles for animations */}
      <style>{`
        @keyframes dash-flow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -24; }
        }
        .dash-flow-animate {
          animation: dash-flow 1.5s linear infinite;
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
        .flow-line-reduced {
          animation: none;
        }
        @keyframes cta-glow {
          0%, 100% { box-shadow: 0 0 0 0 hsl(var(--primary) / 0.4); }
          50% { box-shadow: 0 0 20px 8px hsl(var(--primary) / 0.3); }
        }
        .cta-glow-active {
          animation: cta-glow 1.2s ease-in-out;
        }
        @keyframes callout-pulse {
          0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
          50% { transform: translateY(-4px) scale(1.05); opacity: 0.9; }
        }
        .callout-pulse-active {
          animation: callout-pulse 0.6s ease-in-out 2;
        }
        @media (prefers-reduced-motion: reduce) {
          .orbit-ring {
            animation: none;
          }
          .flow-line, .flow-line-slow {
            animation: none;
          }
          .dash-flow-animate {
            animation: none;
          }
          .cta-glow-active {
            animation: none;
          }
          .callout-pulse-active {
            animation: none;
          }
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

        {/* Main Card - with pause on hover */}
        <div 
          className="relative rounded-2xl border bg-card p-4 md:p-6 lg:p-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* CTA Button - Pinned in card header (outside scroll) */}
          <div className={`absolute top-4 right-4 md:top-6 md:right-6 z-20 rounded-lg p-1 -m-1 ${getSpotlightClass("cta")}`}>
            {/* Animated Callout - Decorative (pointer-events-none to not block clicks) */}
            <div 
              className="absolute -left-32 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1 hidden sm:flex"
              aria-hidden="true"
            >
              {/* Label Bubble */}
              <div className={`
                px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold whitespace-nowrap shadow-lg
                ${!prefersReducedMotion ? 'animate-bounce' : ''}
                ${activeSection === "cta" && !prefersReducedMotion ? 'callout-pulse-active' : ''}
              `}>
                Demo starts here
              </div>
              {/* Curved Arrow */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className={`text-primary ${!prefersReducedMotion ? 'animate-pulse' : ''}`}
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
            
            <Button 
              size="sm" 
              asChild 
              className={`relative ${activeSection === "cta" && !prefersReducedMotion ? 'cta-glow-active' : ''}`}
            >
              <Link to="/demo" aria-label="See it in action (demo)">
                See it in action
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Scrollable Diagram Wrapper - fixed 1280px canvas */}
          <div className="overflow-x-auto -mx-4 md:-mx-6 lg:-mx-8 mt-10 md:mt-6">
            <div className="min-w-[1280px] w-[1280px] mx-auto relative px-4 md:px-6 lg:px-8">
              {/* Animated Connector Lines SVG Overlay */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-[1] hidden lg:block"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Arrow markers */}
                  <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" opacity="0.6" />
                  </marker>
                  <marker id="arrowhead-amber" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#d97706" opacity="0.5" />
                  </marker>
                  <marker id="arrowhead-muted" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--muted-foreground))" opacity="0.4" />
                  </marker>
                </defs>
                
                {/* 1. Built-in Apps (Universal Assistant) -> Conversations API */}
                <path 
                  d="M 180 130 C 180 160, 320 160, 350 150"
                  className={prefersReducedMotion ? '' : 'flow-line'}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.4"
                  strokeDasharray="6 4"
                />
                
                {/* 2. Built-in Apps (Enterprise Search) -> Conversations API */}
                <path 
                  d="M 350 130 C 350 145, 380 155, 400 160"
                  className={prefersReducedMotion ? '' : 'flow-line'}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.35"
                  strokeDasharray="6 4"
                />
                
                {/* 3. Conversations API -> Core (Agentic Reasoning Engine) */}
                <path 
                  d="M 400 185 C 400 220, 280 230, 200 260"
                  className={prefersReducedMotion ? '' : 'flow-line-slow'}
                  stroke="#d97706"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.45"
                  strokeDasharray="8 5"
                  markerEnd="url(#arrowhead-amber)"
                />
                
                {/* 4. Core Loop -> Feature boxes (right side) */}
                <path 
                  d="M 320 320 C 380 320, 420 290, 480 280"
                  className={prefersReducedMotion ? '' : 'flow-line-slow'}
                  stroke="#d97706"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.35"
                  strokeDasharray="5 4"
                />
                
                {/* 5. Core -> Plugins row */}
                <path 
                  d="M 250 380 C 250 420, 300 440, 350 450"
                  className={prefersReducedMotion ? '' : 'flow-line'}
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.3"
                  strokeDasharray="6 4"
                  markerEnd="url(#arrowhead-muted)"
                />
                
                {/* 6. Plugins box -> Permissions bar */}
                <path 
                  d="M 450 500 C 450 530, 480 550, 500 570"
                  className={prefersReducedMotion ? '' : 'flow-line-slow'}
                  stroke="#d97706"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.35"
                  strokeDasharray="5 4"
                />
                
                {/* 7. Permissions -> Business Systems */}
                <path 
                  d="M 500 590 C 500 610, 500 630, 500 650"
                  className={prefersReducedMotion ? '' : 'flow-line-slow'}
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.3"
                  strokeDasharray="4 3"
                  markerEnd="url(#arrowhead-muted)"
                />
                
                {/* 8. Feature boxes -> Right module stack (Operators) */}
                <path 
                  d="M 640 280 C 700 280, 740 240, 780 220"
                  className={prefersReducedMotion ? '' : 'flow-line'}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.35"
                  strokeDasharray="6 4"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 9. Plugins -> Right module stack (Developers) */}
                <path 
                  d="M 640 470 C 700 470, 750 420, 790 380"
                  className={prefersReducedMotion ? '' : 'flow-line-slow'}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.3"
                  strokeDasharray="5 4"
                />
                
                {/* 10. Core -> Governance bar */}
                <path 
                  d="M 300 400 C 300 680, 200 720, 150 740"
                  className={prefersReducedMotion ? '' : 'flow-line-slow'}
                  stroke="#10b981"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.25"
                  strokeDasharray="8 6"
                />
                
                {/* 11. Core -> Security bar */}
                <path 
                  d="M 320 400 C 340 700, 250 760, 180 780"
                  className={prefersReducedMotion ? '' : 'flow-line-slow'}
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.25"
                  strokeDasharray="8 6"
                />
                
                {/* 12. Scoped Agents -> Right modules */}
                <path 
                  d="M 620 100 C 700 100, 760 140, 790 180"
                  className={prefersReducedMotion ? '' : 'flow-line'}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.3"
                  strokeDasharray="6 4"
                />
              </svg>

              {/* Diagram Container - 3-column grid */}
              <div className="grid grid-cols-[180px_1fr_300px] gap-4 lg:gap-6 relative z-[2]">
            {/* Left Labels Column */}
            <div className="flex flex-col gap-4 pt-2">
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
                <div className={`flex items-center justify-between px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 ${hoverBox} ${getSpotlightClass("conversations")}`}>
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
                  
                  {/* Loop Container - dashed outline with flowing dash animation (no rotation) */}
                  <div className="relative p-4 bg-amber-50/50 rounded-2xl">
                    {/* SVG dashed border with animated stroke-dashoffset */}
                    <svg 
                      className="absolute inset-0 w-full h-full pointer-events-none" 
                      aria-hidden="true"
                      preserveAspectRatio="none"
                    >
                      <rect 
                        x="1" 
                        y="1" 
                        width="calc(100% - 2px)" 
                        height="calc(100% - 2px)" 
                        rx="16" 
                        ry="16"
                        fill="none"
                        stroke="#fcd34d"
                        strokeWidth="2"
                        strokeDasharray="12 6"
                        className={prefersReducedMotion ? '' : 'dash-flow-animate'}
                      />
                    </svg>
                    
                    {/* Static content inside */}
                    <div className="relative z-10">
                      {/* Three circles with arrows */}
                      <div className="flex items-center justify-center gap-2">
                        {/* Circle 1: Makes intelligent plans */}
                        <div className="flex flex-col items-center gap-1.5">
                          <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${getLoopCircleClass(0)}`}>
                            <RotateCcw className={`w-5 h-5 transition-colors duration-300 ${activeLoopIndex === 0 ? 'text-amber-700' : 'text-amber-600'}`} />
                          </div>
                          <span className="text-[9px] font-medium text-amber-800 text-center leading-tight max-w-16">Makes intelligent plans</span>
                        </div>
                        
                        {/* Arrow 1->2 */}
                        <svg width="24" height="16" viewBox="0 0 24 16" className="shrink-0 -mt-6" aria-hidden="true">
                          <path d="M2 8 L18 8 M14 4 L18 8 L14 12" stroke="currentColor" strokeWidth="2" fill="none" className="text-amber-400" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        
                        {/* Circle 2: Executes the right tools */}
                        <div className="flex flex-col items-center gap-1.5">
                          <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${getLoopCircleClass(1)}`}>
                            <Wrench className={`w-5 h-5 transition-colors duration-300 ${activeLoopIndex === 1 ? 'text-amber-700' : 'text-amber-600'}`} />
                          </div>
                          <span className="text-[9px] font-medium text-amber-800 text-center leading-tight max-w-16">Executes the right tools</span>
                        </div>
                        
                        {/* Arrow 2->3 */}
                        <svg width="24" height="16" viewBox="0 0 24 16" className="shrink-0 -mt-6" aria-hidden="true">
                          <path d="M2 8 L18 8 M14 4 L18 8 L14 12" stroke="currentColor" strokeWidth="2" fill="none" className="text-amber-400" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        
                        {/* Circle 3: Observes and adapts */}
                        <div className="flex flex-col items-center gap-1.5">
                          <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${getLoopCircleClass(2)}`}>
                            <Eye className={`w-5 h-5 transition-colors duration-300 ${activeLoopIndex === 2 ? 'text-amber-700' : 'text-amber-600'}`} />
                          </div>
                          <span className="text-[9px] font-medium text-amber-800 text-center leading-tight max-w-16">Observes and adapts</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Curved return arrow (bottom) */}
                    <svg className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-10" width="120" height="20" viewBox="0 0 120 20" aria-hidden="true">
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
              <div className={`space-y-3 p-3 -m-3 rounded-xl ${getSpotlightClass("plugins")}`}>
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
                <div className={`relative py-4 rounded-xl ${getSpotlightClass("permissions")}`}>
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
                <div className={`p-3 rounded-lg bg-muted/50 border mt-4 ${hoverBox} ${getSpotlightClass("systems")}`}>
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

            {/* F) Right-side Modules Column - fills 300px grid column */}
            <div className={`flex flex-col gap-4 p-2 -m-2 rounded-xl ${getSpotlightClass("rightStack")}`}>
              {/* For operators - no code */}
              <div className="rounded-xl bg-foreground text-background p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider opacity-70 mb-3">
                  For operators — no code
                </p>
                <div className="space-y-2">
                  {/* Assistant Builder */}
                  <div className="p-2 rounded-lg bg-background/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="w-3.5 h-3.5" />
                      <span className="text-xs font-semibold">Assistant Builder</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20">Content scoping</span>
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20">Plugin scoping</span>
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20">User allow list</span>
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20">Assistant prompt</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-center">
                      <div className="flex-1 h-px bg-background/30" />
                      <span className="text-[8px] opacity-70">Review + publish</span>
                      <div className="flex-1 h-px bg-background/30" />
                    </div>
                  </div>
                  
                  {/* Assistant Store */}
                  <div className="p-2 rounded-lg bg-background/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Store className="w-3.5 h-3.5" />
                      <span className="text-xs font-semibold">Assistant Store</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20">Prospecting coach</span>
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20">Security analyst</span>
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20">Recruiting assistant</span>
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20">RFP writer</span>
                      <span className="px-1.5 py-0.5 text-[8px] rounded border border-dashed border-background/40">etc.</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-center">
                      <div className="flex-1 h-px bg-background/30" />
                      <span className="text-[8px] opacity-70">Review + publish</span>
                      <div className="flex-1 h-px bg-background/30" />
                    </div>
                  </div>
                </div>
              </div>

              {/* For developers - pro code */}
              <div className="rounded-xl bg-foreground text-background p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider opacity-70 mb-3">
                  For developers — pro code
                </p>
                <div className="space-y-2">
                  {/* Agent Studio */}
                  <div className="p-2 rounded-lg bg-background/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Blocks className="w-3.5 h-3.5" />
                      <span className="text-xs font-semibold">Agent Studio</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20 text-center">Plugin Workspace</span>
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20 text-center">MCP Workspace</span>
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20 text-center">Agent Architect</span>
                    </div>
                  </div>
                  
                  {/* AI Agent Marketplace */}
                  <div className="p-2 rounded-lg bg-background/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Package className="w-3.5 h-3.5" />
                      <span className="text-xs font-semibold">AI Agent Marketplace</span>
                    </div>
                    <span className="inline-block px-1.5 py-0.5 text-[7px] font-semibold uppercase rounded bg-amber-500 text-amber-950 mb-2">
                      Instant access
                    </span>
                    <div className="flex flex-wrap gap-1 mb-2">
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20">Business initiatives</span>
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20">Collections</span>
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20">MCP plugins</span>
                      <span className="px-1.5 py-0.5 text-[8px] rounded bg-background/20">Sharing</span>
                    </div>
                    <div className="flex items-center gap-2 text-[8px] opacity-70">
                      <span>One-click install</span>
                      <span>•</span>
                      <span>Personalization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

              {/* G) Bottom Bars - inside 1200px canvas */}
              <div className="mt-6 space-y-3">
                {/* Governance bar */}
                <div className={`flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 ${hoverBox} ${getSpotlightClass("governance")}`}>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 shrink-0">
                    Governance
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Streamline config",
                      "Agentix Setup",
                      "AI Assistant Insights",
                      "Value insights",
                      "Data API",
                      "Employee Experience Insights",
                      "Employee Comms",
                      "Knowledge Studio"
                    ].map((label, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-[9px] font-medium text-emerald-700 transition-all duration-200 hover:bg-emerald-500/30">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Security bar */}
                <div className={`flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 ${hoverBox} ${getSpotlightClass("security")}`}>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-700 shrink-0">
                    Security
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "SSO/SAML",
                      "SCIM",
                      "RBAC",
                      "Audit logs",
                      "Encryption",
                      "Redaction",
                      "DLP",
                      "Data residency"
                    ].map((label, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-full bg-blue-500/20 text-[9px] font-medium text-blue-700 transition-all duration-200 hover:bg-blue-500/30">
                        {label}
                      </span>
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
