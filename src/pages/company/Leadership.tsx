import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, ArrowRight } from "lucide-react";

const leaders = [
  {
    name: "Alex Chen",
    title: "Co-Founder & CEO",
    image: null,
    bio: "Alex has spent 15+ years building enterprise software at companies like Salesforce and ServiceNow. He founded Agientix after seeing firsthand how much time enterprises waste on repetitive tasks that could be automated with AI. Alex holds a CS degree from Stanford and an MBA from Wharton. When not building the future of work, he's an avid hiker and amateur chef.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Kim",
    title: "Co-Founder & CTO",
    image: null,
    bio: "Sarah is an AI/ML expert with deep experience in natural language processing and enterprise systems. Previously, she led AI research at Google and built ML infrastructure at Stripe. She holds a PhD in Computer Science from MIT, where her research focused on making AI systems more reliable and interpretable. Sarah is passionate about building AI that's both powerful and trustworthy.",
    linkedin: "#",
    twitter: "#",
  },
];

export default function Leadership() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">Leadership</h1>
            <p className="text-xl text-muted-foreground">
              Meet the team building the future of agentic AI for enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Leaders */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {leaders.map((leader) => (
              <div key={leader.name} className="bg-card rounded-2xl p-8 border">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center text-white text-3xl font-bold shrink-0">
                    {leader.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold">{leader.name}</h2>
                    <p className="text-primary font-medium">{leader.title}</p>
                    <div className="flex gap-3 mt-3">
                      <a href={leader.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={leader.twitter} className="text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Join our team</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented people who share our vision for the future of AI.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get in touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
