import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiAdp,
  SiSalesforce,
  SiHubspot,
  SiSlack,
  SiGoogle,
  SiJira,
  SiZendesk,
  SiSap,
  SiNotion,
  SiConfluence,
  SiAsana,
  SiIntuit,
  type IconType,
} from "@icons-pack/react-simple-icons";

const categories = ["All", "HR", "Finance", "IT", "Sales", "Collaboration"];

interface Integration {
  name: string;
  category: string;
  available: boolean;
  Icon?: IconType;
}

const integrations: Integration[] = [
  { name: "Workday", category: "HR", available: true }, // TODO: No icon available
  { name: "ADP", category: "HR", available: true, Icon: SiAdp },
  { name: "BambooHR", category: "HR", available: true }, // TODO: No icon available
  { name: "Salesforce", category: "Sales", available: true, Icon: SiSalesforce },
  { name: "HubSpot", category: "Sales", available: true, Icon: SiHubspot },
  { name: "Microsoft Teams", category: "Collaboration", available: true }, // TODO: No icon available
  { name: "Slack", category: "Collaboration", available: true, Icon: SiSlack },
  { name: "Google Workspace", category: "Collaboration", available: true, Icon: SiGoogle },
  { name: "ServiceNow", category: "IT", available: true }, // TODO: No icon available
  { name: "Jira", category: "IT", available: true, Icon: SiJira },
  { name: "Zendesk", category: "IT", available: true, Icon: SiZendesk },
  { name: "SAP", category: "Finance", available: true, Icon: SiSap },
  { name: "NetSuite", category: "Finance", available: true }, // TODO: No icon available
  { name: "QuickBooks", category: "Finance", available: true, Icon: SiIntuit },
  { name: "Notion", category: "Collaboration", available: true, Icon: SiNotion },
  { name: "Confluence", category: "Collaboration", available: true, Icon: SiConfluence },
  { name: "Asana", category: "Collaboration", available: false, Icon: SiAsana },
  { name: "Monday.com", category: "Collaboration", available: false }, // TODO: No icon available
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
              title={integration.name}
              className={cn(
                "relative aspect-square rounded-xl border bg-card flex flex-col items-center justify-center p-4 transition-all hover:shadow-lg hover:-translate-y-1",
                !integration.available && "opacity-60"
              )}
            >
              {integration.Icon ? (
                <integration.Icon size={20} color="default" title={integration.name} />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-lg font-bold text-muted-foreground">
                    {integration.name.charAt(0)}
                  </span>
                </div>
              )}
              <span className="text-xs text-center font-medium line-clamp-1 mt-2">
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
