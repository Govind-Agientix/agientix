import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Agientix transformed our HR operations. What used to take days now happens in minutes, and our employees love the instant responses.",
    name: "Sarah Chen",
    title: "VP of People Operations",
    company: "TechCorp Inc.",
    hasVideo: true,
  },
  {
    quote: "The speed of implementation was incredible. We went from concept to production in just 2 weeks, and the ROI was immediate.",
    name: "Michael Rodriguez",
    title: "CIO",
    company: "Global Manufacturing Co.",
    hasVideo: false,
  },
  {
    quote: "Security was our top concern, and Agientix exceeded our expectations. The governance controls give us complete visibility and control.",
    name: "Jennifer Williams",
    title: "CISO",
    company: "Financial Services Ltd.",
    hasVideo: true,
  },
  {
    quote: "Our support team is now 3x more productive. The AI handles routine queries, letting our agents focus on complex issues.",
    name: "David Kim",
    title: "Director of Customer Success",
    company: "SaaS Platform Co.",
    hasVideo: false,
  },
  {
    quote: "The marketplace agents saved us months of development time. We deployed a complete onboarding solution in days.",
    name: "Emily Thompson",
    title: "Head of IT",
    company: "Healthcare Network",
    hasVideo: true,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Agentic AI that takes care of business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how leading companies are transforming their operations with Agientix.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/10" />
            
            <div className="relative">
              <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>

                {testimonials[currentIndex].hasVideo && (
                  <Button variant="outline" size="sm" className="hidden sm:flex">
                    <Play className="w-4 h-4 mr-2" />
                    Watch video
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
