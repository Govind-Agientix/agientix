import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Users, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              About <span className="gradient-text">Agientix</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to make AI work for everyone—not just data scientists. 
              We build AI agents that deliver real, measurable results for enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that the future of work is agentic—where AI doesn't just assist, but actively 
                takes on tasks and delivers outcomes. Our mission is to make that future accessible to 
                every organization, regardless of their AI expertise.
              </p>
              <p className="text-lg text-muted-foreground">
                We combine deep enterprise experience with cutting-edge AI to build agents that are 
                secure, reliable, and genuinely useful. No hype, no empty promises—just results.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, label: "Results-focused", desc: "Outcomes over outputs" },
                { icon: Heart, label: "Human-centered", desc: "AI that augments, not replaces" },
                { icon: Users, label: "Enterprise-ready", desc: "Security and scale built in" },
                { icon: Lightbulb, label: "Innovation-driven", desc: "Cutting-edge, practical AI" },
              ].map((item) => (
                <div key={item.label} className="bg-card rounded-xl p-6 border">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Simple", desc: "We cut through complexity. Our solutions are elegant, not complicated." },
              { title: "Outcomes-first", desc: "We measure success by your results, not by features shipped." },
              { title: "Partnership", desc: "We work alongside your team, not just for you." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Join us on our mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to transform your operations or join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get in touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/company/leadership">Meet our team</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
