import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, MessageSquare, FileText, Calendar, BarChart, Users } from "lucide-react";

const agentPacks = [
  {
    icon: MessageSquare,
    name: "Support Triage Agent",
    description: "Automatically classify, route, and respond to support tickets.",
    tools: ["Zendesk", "Slack", "Email"],
  },
  {
    icon: FileText,
    name: "Invoice Reconciliation Agent",
    description: "Match invoices to POs, flag exceptions, and process approvals.",
    tools: ["SAP", "NetSuite", "Email"],
  },
  {
    icon: Users,
    name: "Employee Onboarding Agent",
    description: "Guide new hires through onboarding with automated provisioning.",
    tools: ["Workday", "Okta", "Slack"],
  },
  {
    icon: BarChart,
    name: "Sales Ops Update Agent",
    description: "Keep CRM data fresh with automated updates and reminders.",
    tools: ["Salesforce", "Slack", "Calendar"],
  },
  {
    icon: Calendar,
    name: "Scheduling Agent",
    description: "Coordinate meetings across teams and time zones effortlessly.",
    tools: ["Google Calendar", "Outlook", "Slack"],
  },
  {
    icon: Bot,
    name: "Knowledge Base Agent",
    description: "Answer questions instantly from your documentation and wikis.",
    tools: ["Confluence", "Notion", "Slack"],
  },
];

export function MarketplacePreview() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            AI agent marketplace
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pre-built agent packs you can deploy fast—or we'll build custom ones for your workflow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentPacks.map((pack) => (
            <div
              key={pack.name}
              className="bg-card rounded-xl p-6 border hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <pack.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{pack.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{pack.description}</p>
              <div className="flex flex-wrap gap-2">
                {pack.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs bg-secondary px-2 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button size="lg" asChild>
            <Link to="/marketplace">
              Browse marketplace
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/marketplace#custom">Request a custom agent</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
