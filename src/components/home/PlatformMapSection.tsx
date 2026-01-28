import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Brain, Shield, Plug, Workflow, Database, Users, Zap, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const platformNodes = [
  // Left column - Inputs
  { id: "channels", label: "Channels", subtitle: "Slack, Teams, Email, Web", icon: MessageSquare, x: 0, y: 0, col: "left" },
  { id: "integrations", label: "Integrations", subtitle: "50+ Enterprise Tools", icon: Plug, x: 0, y: 1, col: "left" },
  { id: "data", label: "Data Sources", subtitle: "Knowledge & Documents", icon: Database, x: 0, y: 2, col: "left" },
  
  // Center - Core Platform
  { id: "orchestrator", label: "AI Orchestrator", subtitle: "Intent & Routing", icon: Brain, x: 1, y: 0.5, col: "center", primary: true },
  { id: "agents", label: "AI Agents", subtitle: "Task Execution", icon: Bot, x: 1, y: 1.5, col: "center", primary: true },
  { id: "guardrails", label: "Guardrails", subtitle: "Policy & Compliance", icon: Shield, x: 1, y: 2.5, col: "center" },
  
  // Right column - Outputs
  { id: "workflows", label: "Workflows", subtitle: "Automated Actions", icon: Workflow, x: 2, y: 0, col: "right" },
  { id: "approvals", label: "Human-in-Loop", subtitle: "Approvals & Escalation", icon: Users, x: 2, y: 1, col: "right" },
  { id: "actions", label: "Actions", subtitle: "Create, Update, Notify", icon: Zap, x: 2, y: 2, col: "right" },
];

const connections = [
  { from: "channels", to: "orchestrator" },
  { from: "integrations", to: "orchestrator" },
  { from: "data", to: "agents" },
  { from: "orchestrator", to: "agents" },
  { from: "agents", to: "guardrails" },
  { from: "orchestrator", to: "workflows" },
  { from: "agents", to: "approvals" },
  { from: "guardrails", to: "actions" },
];

function PlatformNode({ 
  node, 
  index 
}: { 
  node: typeof platformNodes[0]; 
  index: number;
}) {
  const Icon = node.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`
        relative flex items-center gap-3 p-4 rounded-xl border bg-card shadow-sm
        ${node.primary ? 'border-primary/30 shadow-primary/10 shadow-lg' : 'border-border'}
        hover:shadow-md hover:border-primary/20 transition-all duration-300
      `}
    >
      <div className={`
        w-10 h-10 rounded-lg flex items-center justify-center shrink-0
        ${node.primary ? 'gradient-bg' : 'bg-secondary'}
      `}>
        <Icon className={`w-5 h-5 ${node.primary ? 'text-white' : 'text-foreground'}`} />
      </div>
      <div className="min-w-0">
        <h4 className="font-semibold text-sm leading-tight">{node.label}</h4>
        <p className="text-xs text-muted-foreground truncate">{node.subtitle}</p>
      </div>
      
      {/* Pulse indicator for primary nodes */}
      {node.primary && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
        </span>
      )}
    </motion.div>
  );
}

function AnimatedConnections() {
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" 
      style={{ zIndex: 0 }}
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Animated flowing lines */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M 80 ${120 + i * 100} Q 200 ${150 + i * 50} 320 ${140 + i * 80}`}
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
        />
      ))}
      
      {/* Right side connections */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={`right-${i}`}
          d={`M 480 ${140 + i * 80} Q 580 ${130 + i * 60} 680 ${120 + i * 100}`}
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 + i * 0.2 }}
        />
      ))}
    </svg>
  );
}

export function PlatformMapSection() {
  const leftNodes = platformNodes.filter(n => n.col === "left");
  const centerNodes = platformNodes.filter(n => n.col === "center");
  const rightNodes = platformNodes.filter(n => n.col === "right");

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Platform Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              How <span className="gradient-text">Agientix</span> Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A unified platform that connects your channels, orchestrates AI agents, and delivers automated actions—all with enterprise-grade security.
            </p>
          </motion.div>
        </div>

        {/* Architecture Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Animated connection lines (desktop only) */}
          <AnimatedConnections />
          
          {/* Node Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Left Column - Inputs */}
            <div className="space-y-4">
              <motion.h3 
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 text-center md:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Inputs
              </motion.h3>
              {leftNodes.map((node, i) => (
                <PlatformNode key={node.id} node={node} index={i} />
              ))}
            </div>

            {/* Center Column - Core Platform */}
            <div className="space-y-4 md:pt-8">
              <motion.h3 
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Agientix Core
              </motion.h3>
              {centerNodes.map((node, i) => (
                <PlatformNode key={node.id} node={node} index={i + 3} />
              ))}
            </div>

            {/* Right Column - Outputs */}
            <div className="space-y-4">
              <motion.h3 
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 text-center md:text-right"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Outputs
              </motion.h3>
              {rightNodes.map((node, i) => (
                <PlatformNode key={node.id} node={node} index={i + 6} />
              ))}
            </div>
          </div>

          {/* Flow arrows for mobile */}
          <div className="flex md:hidden justify-center my-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-8 h-px bg-border"></div>
              <ArrowRight className="w-4 h-4" />
              <div className="w-8 h-px bg-border"></div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" asChild>
            <Link to="/demo">
              See it in action
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
