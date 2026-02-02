import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
                Get in touch
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to transform your operations with AI agents? 
                Let's talk about how Agientix can help.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">Innovate@Agientix.ai</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">407-307-0855</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-muted-foreground">Orlando, FL</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6">
                <h3 className="font-semibold mb-3">What to expect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Personalized demo of relevant use cases
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    No pressure, just conversation
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 border shadow-lg">
              <h2 className="font-display text-2xl font-bold mb-6">Request a demo</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Thanks for reaching out!</h3>
                  <p className="text-muted-foreground">We'll be in touch within 24 hours to schedule your demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name *</label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name *</label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Work Email *</label>
                    <Input type="email" placeholder="john@company.com" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company *</label>
                    <Input placeholder="Your company" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Job Title</label>
                    <Input placeholder="Your role" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">What are you interested in?</label>
                    <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option>Getting a demo</option>
                      <option>Pricing information</option>
                      <option>Technical questions</option>
                      <option>Partnership inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea placeholder="Tell us about your use case..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Submit request <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our{" "}
                    <a href="/legal/privacy" className="underline">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
