import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "AI Assistants", href: "/platform#assistants" },
      { label: "Workflow Agents", href: "/platform#agents" },
      { label: "Integrations", href: "/platform#integrations" },
      { label: "Marketplace", href: "/marketplace" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { label: "HR & Employee Experience", href: "/solutions/hr" },
      { label: "IT Service Management", href: "/solutions/it" },
      { label: "Finance & Operations", href: "/solutions/finance" },
      { label: "Customer Support", href: "/solutions/support" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Webinars", href: "/resources/webinars" },
      { label: "Case Studies", href: "/resources/case-studies" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Partners", href: "/company/partners" },
      { label: "Values", href: "/company/values" },
      { label: "Trust & Security", href: "/trust" },
      { label: "Contact", href: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookies" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-display font-bold text-xl">Agientix</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Agentic AI that delivers results. We build and deploy AI agents that handle real work across your tools.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-background transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Agientix AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            contact@agientix.ai
          </p>
        </div>
      </div>
    </footer>
  );
}
