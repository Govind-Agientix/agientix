import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PlatformMapAnimated() {
  return (
    <section id="platform-map" className="section-padding bg-secondary/20">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Agentix Platform Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A modern agentic system: connect apps, reason, act, govern, and secure.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative rounded-2xl border bg-card p-6 md:p-8">
          {/* CTA Button - Top Right */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <Button size="sm" asChild>
              <Link to="/demo">
                See it in action
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Placeholder Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 md:mt-4">
            {/* Left: Diagram Placeholder */}
            <div className="flex items-center justify-center min-h-[300px] rounded-xl border-2 border-dashed border-border bg-muted/30">
              <p className="text-muted-foreground font-medium">Diagram goes here</p>
            </div>

            {/* Right: Modules Placeholder */}
            <div className="flex items-center justify-center min-h-[300px] rounded-xl border-2 border-dashed border-border bg-muted/30">
              <p className="text-muted-foreground font-medium">Modules go here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
