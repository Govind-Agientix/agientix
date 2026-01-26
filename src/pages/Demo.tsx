import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export default function Demo() {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              See Agientix in action
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Watch how our AI agents handle real work—from simple Q&A to complex multi-step workflows.
            </p>

            {/* Video Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-card mb-12">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold mb-4">
              Want a personalized demo?
            </h2>
            <p className="text-muted-foreground mb-8">
              See how Agientix can work for your specific use cases with a live walkthrough.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Request a demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
