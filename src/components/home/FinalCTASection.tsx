import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-accent text-white">
      <div className="container-wide text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to put agentic AI to work?
        </h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
          Let's discuss how Agientix can transform your operations with AI agents that deliver real results.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
            <Link to="/contact">Get a demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10" asChild>
            <Link to="/contact">Contact our team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
