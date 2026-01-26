import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const reasons = [
  { num: "01", title: "Fast launch", desc: "Pilot in 1–3 weeks with a clear rollout plan." },
  { num: "02", title: "Built for real work", desc: "Agents that do tasks end-to-end, not just chat." },
  { num: "03", title: "Integration-ready", desc: "Connect your tools and keep workflows in one place." },
  { num: "04", title: "Secure by design", desc: "Access control, approvals, audit trails, and governance." },
  { num: "05", title: "Measurable ROI", desc: "Track time saved, cost avoided, and adoption by team." },
  { num: "06", title: "Scales with you", desc: "Start small, expand across departments with confidence." },
];

export function SixReasonsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-16">
          Six reasons teams choose <span className="gradient-text">Agientix</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.num} className="bg-card rounded-xl p-6 border hover-lift">
              <span className="text-4xl font-bold text-primary/20">{r.num}</span>
              <h3 className="font-semibold text-lg mt-2 mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/contact">Get a demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
