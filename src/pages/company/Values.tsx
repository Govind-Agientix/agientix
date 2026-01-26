import { PageLayout } from "@/components/layout/PageLayout";
import { Star, Users, Zap, Target, Eye, TrendingUp, Clock } from "lucide-react";

const values = [
  {
    icon: Star,
    title: "Excellence",
    description: "We hold ourselves to the highest standards. Good enough isn't good enough—we strive for exceptional in everything we do.",
  },
  {
    icon: Users,
    title: "Ownership",
    description: "We take full responsibility for our work and its outcomes. When we commit, we deliver.",
  },
  {
    icon: Zap,
    title: "Action",
    description: "We bias toward action. We'd rather learn by doing than wait for perfect information.",
  },
  {
    icon: Target,
    title: "Execution",
    description: "Ideas are cheap; execution is everything. We focus on shipping real value, not just talking about it.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We communicate openly and honestly—with each other, with customers, and with partners.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "We're always learning, always improving. Feedback is a gift, and failure is an opportunity.",
  },
  {
    icon: Clock,
    title: "Speed",
    description: "We move fast without breaking things. In a world of rapid change, speed is a competitive advantage.",
  },
];

export default function Values() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              What drives us
            </h1>
            <p className="text-xl text-muted-foreground">
              Our values aren't just words on a wall—they're how we make decisions, 
              how we work together, and how we serve our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 border hover-lift"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
