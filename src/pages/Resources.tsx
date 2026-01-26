import { PageLayout } from "@/components/layout/PageLayout";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, ArrowRight, Download, Play, Calendar } from "lucide-react";

const resourceTypes = {
  blog: {
    title: "Blog",
    subtitle: "Latest insights on agentic AI and automation",
    icon: FileText,
    items: [
      { title: "What is Agentic AI? A Complete Guide", date: "Jan 15, 2026", readTime: "8 min read", category: "Education" },
      { title: "5 Signs Your Organization is Ready for AI Agents", date: "Jan 10, 2026", readTime: "5 min read", category: "Strategy" },
      { title: "The ROI of Agentic AI: How to Build Your Business Case", date: "Jan 5, 2026", readTime: "10 min read", category: "ROI" },
      { title: "AI Agents vs. Chatbots: What's the Difference?", date: "Dec 28, 2025", readTime: "6 min read", category: "Education" },
      { title: "Security Best Practices for Enterprise AI", date: "Dec 20, 2025", readTime: "7 min read", category: "Security" },
      { title: "How to Measure AI Agent Performance", date: "Dec 15, 2025", readTime: "8 min read", category: "Analytics" },
    ],
  },
  guides: {
    title: "Guides & Whitepapers",
    subtitle: "In-depth resources for planning and implementation",
    icon: BookOpen,
    items: [
      { title: "The Complete Guide to Agentic AI Implementation", type: "Guide", pages: "45 pages" },
      { title: "Enterprise Security Whitepaper", type: "Whitepaper", pages: "22 pages" },
      { title: "ROI Calculator & Planning Template", type: "Template", pages: "Excel + PDF" },
      { title: "Integration Playbook: 50+ Connectors", type: "Guide", pages: "60 pages" },
      { title: "Change Management for AI Adoption", type: "Guide", pages: "30 pages" },
      { title: "Governance Framework for AI Agents", type: "Whitepaper", pages: "18 pages" },
    ],
  },
  webinars: {
    title: "Webinars & Videos",
    subtitle: "On-demand content from our experts",
    icon: Video,
    items: [
      { title: "AI Agents in Action: Live Demo", duration: "45 min", type: "Demo" },
      { title: "From Concept to Production in 3 Weeks", duration: "30 min", type: "Case Study" },
      { title: "Security Deep Dive for Enterprise", duration: "40 min", type: "Technical" },
      { title: "Q&A with Our Founders", duration: "60 min", type: "Interview" },
      { title: "Building Your First Workflow Agent", duration: "35 min", type: "Tutorial" },
      { title: "2026 State of Agentic AI", duration: "50 min", type: "Industry" },
    ],
  },
  "case-studies": {
    title: "Case Studies",
    subtitle: "Real results from real deployments",
    icon: FileText,
    items: [
      { title: "Regional Logistics Provider: 40% Reduction in Manual Updates", industry: "Logistics", result: "40% efficiency gain" },
      { title: "Healthcare Network: 60% HR Ticket Deflection", industry: "Healthcare", result: "60% deflection rate" },
      { title: "Retail Operations: Faster Month-End Close", industry: "Retail", result: "4 days faster" },
      { title: "Tech Company: 3x IT Team Productivity", industry: "Technology", result: "3x productivity" },
      { title: "Financial Services: Automated Compliance", industry: "Finance", result: "90% automated" },
      { title: "Manufacturing: Streamlined Vendor Management", industry: "Manufacturing", result: "$2M saved" },
    ],
  },
};

function ResourceTypePage({ typeKey }: { typeKey: keyof typeof resourceTypes }) {
  const resource = resourceTypes[typeKey];
  const Icon = resource.icon;

  return (
    <PageLayout>
      <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container-wide">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold">{resource.title}</h1>
              <p className="text-muted-foreground">{resource.subtitle}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resource.items.map((item, index) => (
              <div key={index} className="bg-card rounded-xl border overflow-hidden hover-lift group">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  {typeKey === "webinars" ? (
                    <Play className="w-12 h-12 text-primary/50 group-hover:scale-110 transition-transform" />
                  ) : (
                    <Icon className="w-12 h-12 text-primary/50 group-hover:scale-110 transition-transform" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    {Object.entries(item).filter(([key]) => key !== "title").map(([key, value]) => (
                      <span key={key} className="bg-secondary px-2 py-1 rounded">{String(value)}</span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    {typeKey === "webinars" ? "Watch now" : typeKey === "guides" ? "Download" : "Read more"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function ResourcesOverview() {
  return (
    <PageLayout>
      <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-muted-foreground">
              Guides, case studies, webinars, and insights to help you succeed with agentic AI.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(resourceTypes).map(([key, resource]) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={key}
                  to={`/resources/${key}`}
                  className="bg-card rounded-xl p-8 border hover-lift group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{resource.subtitle}</p>
                  <span className="inline-flex items-center text-primary font-medium">
                    Browse {resource.items.length} items <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default function Resources() {
  const { type } = useParams<{ type?: string }>();
  
  if (type && type in resourceTypes) {
    return <ResourceTypePage typeKey={type as keyof typeof resourceTypes} />;
  }
  
  return <ResourcesOverview />;
}
