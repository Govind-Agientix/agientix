import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Handshake, Building, Globe } from "lucide-react";
import { useState } from "react";

export default function Partners() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Handshake className="w-4 h-4" />
                Partner Ecosystem
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
                Partner with Agientix
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're building our partner ecosystem to bring agentic AI to more organizations. 
                Join us as a technology, implementation, or channel partner.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Building, label: "System Integrators" },
                  { icon: Globe, label: "Technology Partners" },
                  { icon: Handshake, label: "Resellers" },
                ].map((type) => (
                  <div key={type.label} className="bg-card rounded-lg p-4 border text-center">
                    <type.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium">{type.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Inquiry Form */}
            <div className="bg-card rounded-2xl p-8 border shadow-lg">
              <h2 className="font-display text-2xl font-bold mb-6">Partner with us</h2>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Thank you for your interest!</h3>
                  <p className="text-muted-foreground">We'll be in touch within 2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input placeholder="Your company" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="john@company.com" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Partnership Type</label>
                    <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option>System Integrator</option>
                      <option>Technology Partner</option>
                      <option>Reseller / Channel Partner</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea placeholder="Tell us about your partnership interest..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit inquiry <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
