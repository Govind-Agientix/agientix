import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Users, FileCheck, Server, CheckCircle, ArrowRight } from "lucide-react";

const securityFeatures = [
  { icon: Lock, title: "Encryption", description: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256)." },
  { icon: Users, title: "Access Control", description: "Role-based access control with principle of least privilege." },
  { icon: Eye, title: "Audit Logging", description: "Complete audit trail of all actions and data access." },
  { icon: FileCheck, title: "Data Governance", description: "Configurable data retention and deletion policies." },
  { icon: Shield, title: "Human-in-the-Loop", description: "Approval workflows for sensitive or high-risk actions." },
  { icon: Server, title: "Data Isolation", description: "Customer data is logically isolated and never shared." },
];

const certifications = [
  { name: "SOC 2 Type II", status: "Aligned", description: "Security, availability, and confidentiality controls" },
  { name: "GDPR", status: "Compliant", description: "EU data protection and privacy" },
  { name: "HIPAA", status: "Aligned", description: "Healthcare data protection" },
  { name: "ISO 27001", status: "In Progress", description: "Information security management" },
  { name: "CCPA", status: "Compliant", description: "California consumer privacy" },
  { name: "PCI DSS", status: "Aligned", description: "Payment card data security" },
];

export default function Trust() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Trust & Security
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Security built for the enterprise
            </h1>
            <p className="text-xl text-muted-foreground">
              We know that trust is earned. That's why security, privacy, and governance 
              are built into every layer of our platform—not bolted on as an afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">Security controls</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="bg-card rounded-xl p-6 border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">Compliance & Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-card rounded-xl p-6 border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{cert.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    cert.status === "Compliant" ? "bg-green-100 text-green-700" :
                    cert.status === "Aligned" ? "bg-blue-100 text-blue-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {cert.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-8 text-center">Our commitments</h2>
            <div className="space-y-4">
              {[
                "We never use your data to train public AI models",
                "We provide complete visibility into how your data is used",
                "We support data residency requirements",
                "We enable you to delete your data at any time",
                "We notify you immediately of any security incidents",
                "We undergo regular third-party security audits",
              ].map((commitment, index) => (
                <div key={index} className="flex items-center gap-3 bg-card rounded-lg p-4 border">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span>{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Questions about security?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our security team is happy to answer your questions and provide additional documentation.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Contact security team <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
