import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Workflow, Plug, Shield, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Assistants",
    description: "Conversational AI that answers questions, retrieves knowledge, and provides 24/7 support across channels.",
    id: "assistants",
  },
  {
    icon: Workflow,
    title: "Workflow Agents",
    description: "Multi-step automation that handles complex processes end-to-end—from intake to completion.",
    id: "agents",
  },
  {
    icon: Plug,
    title: "Native Integrations",
    description: "Pre-built connectors to 50+ enterprise tools. Connect your stack in minutes, not months.",
    id: "integrations",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 aligned, role-based access, audit logs, and human-in-the-loop approvals for sensitive actions.",
    id: "security",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Go from concept to production in 1-3 weeks with our proven implementation methodology.",
    id: "deployment",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Track adoption, measure ROI, and continuously optimize with built-in analytics dashboards.",
    id: "analytics",
  },
];

export default function Platform() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              The complete <span className="gradient-text">agentic AI</span> platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build, deploy, and manage AI agents that handle real work across your organization. 
              From simple Q&A to complex multi-step workflows—all on one secure platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get a demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo">See it in action</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your operations with AI agents.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Connect", desc: "Integrate your existing tools and data sources with our pre-built connectors." },
              { step: "02", title: "Configure", desc: "Define your workflows, set up guardrails, and customize agent behavior." },
              { step: "03", title: "Deploy", desc: "Launch your agents and start seeing results immediately with real-time monitoring." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex w-16 h-16 rounded-2xl gradient-bg items-center justify-center text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Platform capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale AI agents across your organization.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                id={feature.id}
                className="bg-card rounded-xl p-6 border hover-lift"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready to see the platform in action?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo and see how Agientix can transform your operations.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
