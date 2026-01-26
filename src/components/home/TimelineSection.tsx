import { Lightbulb, Wrench, Rocket, Check } from "lucide-react";

const timelineSteps = [
  {
    week: "Week 1",
    title: "Discover + Design",
    icon: Lightbulb,
    items: [
      "Define use cases and success metrics",
      "Map data sources and integrations",
      "Create security and governance plan",
      "Design agent architecture",
    ],
  },
  {
    week: "Week 2",
    title: "Build + Integrate",
    icon: Wrench,
    items: [
      "Connect your existing tools",
      "Build and configure agents",
      "Set up approvals and guardrails",
      "Implement security controls",
    ],
  },
  {
    week: "Week 3",
    title: "Test + Launch",
    icon: Rocket,
    items: [
      "Quality assurance testing",
      "User acceptance testing",
      "Team training and documentation",
      "Go-live and monitoring",
    ],
  },
];

const pillars = [
  { label: "Built-in Apps", color: "bg-primary" },
  { label: "Core Architecture", color: "bg-accent" },
  { label: "Delivery", color: "bg-primary" },
  { label: "Governance", color: "bg-accent" },
  { label: "Security", color: "bg-primary" },
];

export function TimelineSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            From idea to production in <span className="gradient-text">1–3 weeks</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology gets you from concept to working AI agents faster than you thought possible.
          </p>
        </div>

        {/* Pillars */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium text-white ${pillar.color}`}
            >
              {pillar.label}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-border hidden lg:block" />

          <div className="grid md:grid-cols-3 gap-8">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={index} className="relative">
                  {/* Week Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                    {step.week}
                  </div>

                  {/* Card */}
                  <div className="bg-card rounded-2xl p-6 shadow-lg border hover-lift">
                    <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="font-display text-xl font-bold mb-4">{step.title}</h3>
                    
                    <ul className="space-y-3">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          Typical time-to-value: ~8 weeks for full rollout (adjustable by scope)
        </p>
      </div>
    </section>
  );
}
