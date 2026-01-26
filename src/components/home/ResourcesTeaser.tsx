import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, ArrowRight } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    type: "Guide",
    title: "The Complete Guide to Agentic AI",
    description: "Learn how agentic AI differs from traditional automation and chatbots.",
    href: "/resources/guides",
  },
  {
    icon: Video,
    type: "Webinar",
    title: "AI Agents in Action: Live Demo",
    description: "Watch our team deploy a workflow agent in under 30 minutes.",
    href: "/resources/webinars",
  },
  {
    icon: FileText,
    type: "Case Study",
    title: "How TechCorp Saved 1000+ Hours",
    description: "Real results from a real deployment—metrics, timeline, and lessons.",
    href: "/resources/case-studies",
  },
];

export function ResourcesTeaser() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl font-bold mb-2">Resources</h2>
            <p className="text-muted-foreground">Insights, guides, and success stories</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/resources">
              View all resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Link
              key={resource.title}
              to={resource.href}
              className="group bg-card rounded-xl border overflow-hidden hover-lift"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <resource.icon className="w-12 h-12 text-primary/50 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {resource.type}
                </span>
                <h3 className="font-semibold text-lg mt-2 mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
