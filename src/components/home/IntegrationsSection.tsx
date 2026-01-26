import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["All", "HR", "Finance", "IT", "Sales", "Collaboration"];

const integrations = [
  { name: "Workday", category: "HR", available: true },
  { name: "ADP", category: "HR", available: true },
  { name: "BambooHR", category: "HR", available: true },
  { name: "Salesforce", category: "Sales", available: true },
  { name: "HubSpot", category: "Sales", available: true },
  { name: "Microsoft Teams", category: "Collaboration", available: true },
  { name: "Slack", category: "Collaboration", available: true },
  { name: "Google Workspace", category: "Collaboration", available: true },
  { name: "ServiceNow", category: "IT", available: true },
  { name: "Jira", category: "IT", available: true },
  { name: "Zendesk", category: "IT", available: true },
  { name: "SAP", category: "Finance", available: true },
  { name: "NetSuite", category: "Finance", available: true },
  { name: "QuickBooks", category: "Finance", available: true },
  { name: "Notion", category: "Collaboration", available: true },
  { name: "Confluence", category: "Collaboration", available: true },
  { name: "Asana", category: "Collaboration", available: false },
  { name: "Monday.com", category: "Collaboration", available: false },
];

export function IntegrationsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" 
    ? integrations 
    : integrations.filter(i => i.category === activeFilter);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Works with the tools you already run
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamlessly connect to your existing tech stack with our growing library of integrations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeFilter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {filtered.map((integration) => (
            <div
              key={integration.name}
              className={cn(
                "relative aspect-square rounded-xl border bg-card flex flex-col items-center justify-center p-4 transition-all hover:shadow-lg hover:-translate-y-1",
                !integration.available && "opacity-60"
              )}
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-2">
                <span className="text-lg font-bold text-muted-foreground">
                  {integration.name.charAt(0)}
                </span>
              </div>
              <span className="text-xs text-center font-medium line-clamp-1">
                {integration.name}
              </span>
              {!integration.available && (
                <span className="absolute top-2 right-2 text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded">
                  Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
