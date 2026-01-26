import { PageLayout } from "@/components/layout/PageLayout";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Monitor, DollarSign, Headphones, Check } from "lucide-react";

const solutions = {
  hr: {
    icon: Users,
    title: "HR & Employee Experience",
    subtitle: "Transform your people operations with AI",
    description: "Automate HR workflows, provide instant employee support, and create seamless experiences from onboarding to offboarding.",
    benefits: [
      "24/7 employee self-service for common HR questions",
      "Automated onboarding workflows with provisioning",
      "PTO requests and approvals handled automatically",
      "Benefits enrollment guidance and support",
      "Performance review reminders and coordination",
      "Exit interview scheduling and offboarding",
    ],
    metrics: [
      { value: "80%", label: "Reduction in HR ticket volume" },
      { value: "5 hrs", label: "Saved per new hire onboarding" },
      { value: "95%", label: "Employee satisfaction score" },
    ],
  },
  it: {
    icon: Monitor,
    title: "IT Service Management",
    subtitle: "Streamline IT operations at scale",
    description: "Reduce ticket volume, accelerate resolution times, and free your IT team to focus on strategic initiatives.",
    benefits: [
      "Automated password resets and account unlocks",
      "Software provisioning and access requests",
      "Incident triage and intelligent routing",
      "Knowledge base answers for common issues",
      "Asset management and tracking",
      "Compliance and security policy enforcement",
    ],
    metrics: [
      { value: "60%", label: "Faster ticket resolution" },
      { value: "70%", label: "Reduction in L1 tickets" },
      { value: "3x", label: "IT team productivity" },
    ],
  },
  finance: {
    icon: DollarSign,
    title: "Finance & Operations",
    subtitle: "Automate financial workflows with precision",
    description: "Streamline invoice processing, expense management, and financial reporting with AI agents that never miss a detail.",
    benefits: [
      "Automated invoice matching and processing",
      "Expense report validation and approval routing",
      "Vendor onboarding and management",
      "Budget tracking and variance alerts",
      "Month-end close task automation",
      "Audit trail and compliance documentation",
    ],
    metrics: [
      { value: "90%", label: "Faster invoice processing" },
      { value: "50%", label: "Reduction in manual errors" },
      { value: "4 days", label: "Faster month-end close" },
    ],
  },
  support: {
    icon: Headphones,
    title: "Customer Support",
    subtitle: "Deliver exceptional customer experiences",
    description: "Provide instant, accurate support across channels while empowering your agents to handle complex cases.",
    benefits: [
      "24/7 automated responses for common queries",
      "Intelligent ticket classification and routing",
      "Real-time agent assist with suggested responses",
      "Multi-language support without additional staff",
      "Proactive customer outreach and follow-ups",
      "Customer sentiment analysis and escalation",
    ],
    metrics: [
      { value: "40%", label: "Reduction in response time" },
      { value: "3x", label: "Agent productivity" },
      { value: "25%", label: "Improvement in CSAT" },
    ],
  },
};

function SolutionPage({ solutionKey }: { solutionKey: keyof typeof solutions }) {
  const solution = solutions[solutionKey];
  const Icon = solution.icon;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Icon className="w-4 h-4" />
                Solutions
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                {solution.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{solution.subtitle}</p>
              <p className="text-lg text-muted-foreground mb-8">{solution.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Get a demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/resources/case-studies">See case studies</Link>
                </Button>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border shadow-lg">
              <h3 className="font-semibold text-lg mb-6">What you can automate</h3>
              <ul className="space-y-4">
                {solution.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Proven results</h2>
            <p className="text-muted-foreground">Real outcomes from real deployments</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {solution.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-5xl font-bold gradient-text mb-2">
                  {metric.value}
                </div>
                <p className="text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to transform your {solutionKey === "hr" ? "HR" : solutionKey === "it" ? "IT" : solutionKey === "finance" ? "finance" : "support"} operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how Agientix can help you achieve similar results.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}

function SolutionsOverview() {
  return (
    <PageLayout>
      <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              AI solutions for every team
            </h1>
            <p className="text-xl text-muted-foreground">
              Pre-built solutions designed for your specific needs, deployable in weeks not months.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(solutions).map(([key, solution]) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={key}
                  to={`/solutions/${key}`}
                  className="bg-card rounded-xl p-8 border hover-lift group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{solution.subtitle}</p>
                  <span className="inline-flex items-center text-primary font-medium">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
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

export default function Solutions() {
  const { type } = useParams<{ type?: string }>();
  
  if (type && type in solutions) {
    return <SolutionPage solutionKey={type as keyof typeof solutions} />;
  }
  
  return <SolutionsOverview />;
}
