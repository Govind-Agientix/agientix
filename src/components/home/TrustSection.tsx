import { Shield, Lock, Eye, Users, FileCheck, Server } from "lucide-react";

const securityFeatures = [
  { icon: Lock, text: "Encryption in transit and at rest" },
  { icon: Users, text: "Role-based access control" },
  { icon: Eye, text: "Audit logs + activity tracking" },
  { icon: FileCheck, text: "Data minimization and scoped access" },
  { icon: Shield, text: "Human-in-the-loop approvals for sensitive actions" },
  { icon: Server, text: "No customer data used to train public models" },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Security built in for regulated workflows
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Enterprise-grade security and governance controls designed for organizations that can't compromise on data protection.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm mt-2">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="font-semibold mb-6">Compliance & Certifications</h3>
            <div className="grid grid-cols-3 gap-4">
              {["SOC 2", "GDPR", "HIPAA", "ISO 27001", "CCPA", "PCI DSS"].map((cert) => (
                <div key={cert} className="text-center p-4 rounded-lg bg-secondary/50">
                  <span className="text-sm font-medium">{cert}</span>
                  <p className="text-xs text-muted-foreground mt-1">Aligned</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
