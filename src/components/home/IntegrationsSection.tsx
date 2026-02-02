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

const categories = ["All", "HR", "Finance", "IT", "Sales", "Collaboration", "Logistics"];

interface Integration {
  name: string;
  category: string;
  status: "available" | "soon" | "by-request";
  Icon?: IconType;
}

const integrations: Integration[] = [
  { name: "Workday", category: "HR", status: "available" },
  { name: "ADP", category: "HR", status: "available", Icon: SiAdp },
  { name: "BambooHR", category: "HR", status: "available" },
  { name: "Salesforce", category: "Sales", status: "available", Icon: SiSalesforce },
  { name: "HubSpot", category: "Sales", status: "available", Icon: SiHubspot },
  { name: "Microsoft Teams", category: "Collaboration", status: "available" },
  { name: "Slack", category: "Collaboration", status: "available", Icon: SiSlack },
  { name: "Google Workspace", category: "Collaboration", status: "available", Icon: SiGoogle },
  { name: "ServiceNow", category: "IT", status: "available" },
  { name: "Jira", category: "IT", status: "available", Icon: SiJira },
  { name: "Zendesk", category: "IT", status: "available", Icon: SiZendesk },
  { name: "SAP", category: "Finance", status: "available", Icon: SiSap },
  { name: "NetSuite", category: "Finance", status: "available" },
  { name: "QuickBooks", category: "Finance", status: "available", Icon: SiIntuit },
  { name: "Notion", category: "Collaboration", status: "available", Icon: SiNotion },
  { name: "Confluence", category: "Collaboration", status: "available", Icon: SiConfluence },
  { name: "Asana", category: "Collaboration", status: "soon", Icon: SiAsana },
  { name: "Monday.com", category: "Collaboration", status: "soon" },
  // Logistics
  { name: "project44", category: "Logistics", status: "by-request" },
  { name: "FourKites", category: "Logistics", status: "by-request" },
  { name: "Shippeo", category: "Logistics", status: "by-request" },
  { name: "CargoWise", category: "Logistics", status: "by-request" },
  { name: "PortPro", category: "Logistics", status: "by-request" },
  { name: "Samsara", category: "Logistics", status: "by-request" },
  { name: "Geotab", category: "Logistics", status: "by-request" },
  { name: "Trimble", category: "Logistics", status: "by-request" },
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
                integration.status !== "available" && "opacity-60"
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
              {integration.status === "soon" && (
                <span className="absolute top-2 right-2 text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded font-medium">
                  Soon
                </span>
              )}
              {integration.status === "by-request" && (
                <span className="absolute top-2 right-2 text-[10px] bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 px-1.5 py-0.5 rounded font-medium">
                  By request
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-8">
          Logos are trademarks of their respective owners. Integration availability varies by plan and scope.
        </p>
      </div>
    </section>
  );
}
