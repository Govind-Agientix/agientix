import { useState } from "react";
import { Bot, Workflow, Plug, FileText, BarChart3, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SiSlack,
  SiSalesforce,
  SiGoogle,
  SiJira,
  SiNotion,
  SiZendesk,
  SiConfluence,
  SiHubspot,
} from "@icons-pack/react-simple-icons";

const logoCloudIcons = [
  { Icon: SiSlack, name: "Slack" },
  { Icon: SiSalesforce, name: "Salesforce" },
  { Icon: SiGoogle, name: "Google" },
  { Icon: SiJira, name: "Jira" },
  { Icon: SiNotion, name: "Notion" },
  { Icon: SiZendesk, name: "Zendesk" },
  { Icon: SiConfluence, name: "Confluence" },
  { Icon: SiHubspot, name: "HubSpot" },
];

const categories = [
  {
    id: "assistants",
    icon: Bot,
    title: "AI Assistants",
    description: "Conversational AI for knowledge retrieval, Q&A, and employee/customer support.",
    outcomes: [
      "Instant answers from knowledge bases",
      "24/7 employee self-service",
      "Reduced ticket volume",
      "Consistent support quality",
      "Multi-language support",
      "Context-aware responses",
    ],
  },
  {
    id: "workflow",
    icon: Workflow,
    title: "Workflow Agents",
    description: "Multi-step task execution that handles complex processes end-to-end.",
    outcomes: [
      "Automated onboarding flows",
      "Multi-system orchestration",
      "Approval routing",
      "Exception handling",
      "Status tracking",
      "Audit trail generation",
    ],
  },
  {
    id: "integration",
    icon: Plug,
    title: "Integration Agents",
    description: "Connect disparate systems and trigger actions across your tech stack.",
    outcomes: [
      "Real-time data sync",
      "Cross-platform automation",
      "API orchestration",
      "Event-driven workflows",
      "Legacy system bridges",
      "Data transformation",
    ],
  },
  {
    id: "document",
    icon: FileText,
    title: "Document Agents",
    description: "Extract, classify, summarize, and validate documents automatically.",
    outcomes: [
      "Invoice processing",
      "Contract analysis",
      "Form extraction",
      "Document classification",
      "Compliance checking",
      "Summary generation",
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics Agents",
    description: "Generate dashboards, insights, and anomaly detection on demand.",
    outcomes: [
      "Automated reporting",
      "KPI monitoring",
      "Anomaly detection",
      "Trend analysis",
      "Natural language queries",
      "Real-time dashboards",
    ],
  },
  {
    id: "governance",
    icon: Shield,
    title: "Governance & Safety",
    description: "Built-in approvals, audit trails, and access control for regulated workflows.",
    outcomes: [
      "Role-based access",
      "Approval workflows",
      "Complete audit logs",
      "Policy enforcement",
      "Data governance",
      "Compliance reporting",
    ],
  },
];

export function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Built across the AI categories that matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From conversational assistants to complex workflow automation—we cover the full spectrum of agentic AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Category List */}
          <div className="space-y-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory.id === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300",
                    isActive
                      ? "bg-card shadow-lg border-l-4 border-primary"
                      : "hover:bg-card/50"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                    isActive ? "gradient-bg text-white" : "bg-secondary text-muted-foreground"
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-semibold text-lg transition-colors",
                      isActive ? "text-primary" : "text-foreground"
                    )}>
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Category Details */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border sticky top-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
                <activeCategory.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">{activeCategory.title}</h3>
                <p className="text-muted-foreground">{activeCategory.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                Example Outcomes
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {activeCategory.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated Logo Cloud */}
            <div className="mt-8 pt-8 border-t">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="flex gap-6 animate-logo-scroll">
                  {logoCloudIcons.map((item, i) => (
                    <div
                      key={i}
                      title={item.name}
                      className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0"
                    >
                      <item.Icon size={20} color="default" title={item.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
