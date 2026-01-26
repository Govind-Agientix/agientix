import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Bot, MessageSquare, FileText, Calendar, BarChart, Users, Mail, Settings, Database, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Support", "HR", "Finance", "IT", "Sales", "Operations"];

const agents = [
  { icon: MessageSquare, name: "Support Triage Agent", category: "Support", description: "Automatically classify, route, and respond to support tickets.", tools: ["Zendesk", "Slack"], popular: true },
  { icon: FileText, name: "Invoice Reconciliation Agent", category: "Finance", description: "Match invoices to POs, flag exceptions, and process approvals.", tools: ["SAP", "NetSuite"], popular: true },
  { icon: Users, name: "Employee Onboarding Agent", category: "HR", description: "Guide new hires through onboarding with automated provisioning.", tools: ["Workday", "Okta"], popular: true },
  { icon: BarChart, name: "Sales Ops Update Agent", category: "Sales", description: "Keep CRM data fresh with automated updates and reminders.", tools: ["Salesforce"], popular: false },
  { icon: Calendar, name: "Scheduling Agent", category: "Operations", description: "Coordinate meetings across teams and time zones.", tools: ["Google Calendar", "Outlook"], popular: false },
  { icon: Bot, name: "Knowledge Base Agent", category: "Support", description: "Answer questions instantly from your documentation.", tools: ["Confluence", "Notion"], popular: true },
  { icon: Mail, name: "Email Triage Agent", category: "Operations", description: "Sort, prioritize, and route incoming emails automatically.", tools: ["Gmail", "Outlook"], popular: false },
  { icon: Settings, name: "IT Provisioning Agent", category: "IT", description: "Automate software access requests and provisioning.", tools: ["Okta", "ServiceNow"], popular: false },
  { icon: Database, name: "Data Sync Agent", category: "Operations", description: "Keep data consistent across multiple systems.", tools: ["Salesforce", "HubSpot"], popular: false },
  { icon: Shield, name: "Compliance Check Agent", category: "Finance", description: "Automated compliance verification and documentation.", tools: ["Custom"], popular: false },
  { icon: Users, name: "Exit Interview Agent", category: "HR", description: "Coordinate offboarding and collect feedback.", tools: ["Workday", "Slack"], popular: false },
  { icon: MessageSquare, name: "Customer Feedback Agent", category: "Support", description: "Collect and analyze customer feedback at scale.", tools: ["Zendesk", "Slack"], popular: false },
];

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = agents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(search.toLowerCase()) || 
                          agent.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || agent.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              AI Agent <span className="gradient-text">Marketplace</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Pre-built agent packs ready to deploy in days—or request a custom agent for your unique workflow.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search agents..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Agent Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((agent) => (
              <div
                key={agent.name}
                className="bg-card rounded-xl p-6 border hover-lift relative"
              >
                {agent.popular && (
                  <span className="absolute top-4 right-4 text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <agent.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{agent.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{agent.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.tools.map((tool) => (
                    <span key={tool} className="text-xs bg-secondary px-2 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/contact">Learn more</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Agent CTA */}
      <section id="custom" className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="bg-card rounded-2xl p-8 md:p-12 border text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Need something custom?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We'll build a tailored agent for your unique workflow. From discovery to deployment in 2-3 weeks.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Request a custom agent <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
