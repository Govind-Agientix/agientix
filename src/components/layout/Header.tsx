import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const menuItems = {
  product: {
    title: "Product",
    items: [
      { title: "Platform Overview", description: "See how Agientix works end-to-end", href: "/platform" },
      { title: "AI Assistants", description: "Conversational AI for support and knowledge", href: "/platform#assistants" },
      { title: "Workflow Agents", description: "Multi-step task automation", href: "/platform#agents" },
      { title: "Integrations", description: "Connect your existing tools", href: "/platform#integrations" },
    ],
  },
  solutions: {
    title: "Solutions",
    items: [
      { title: "HR & Employee Experience", description: "Automate HR workflows and support", href: "/solutions/hr" },
      { title: "IT Service Management", description: "Streamline IT operations", href: "/solutions/it" },
      { title: "Finance & Operations", description: "Automate financial processes", href: "/solutions/finance" },
      { title: "Customer Support", description: "AI-powered customer service", href: "/solutions/support" },
    ],
  },
  marketplace: {
    title: "Marketplace",
    items: [
      { title: "Agent Library", description: "Pre-built agents ready to deploy", href: "/marketplace" },
      { title: "Solution Packs", description: "Bundles for specific use cases", href: "/marketplace#packs" },
      { title: "Custom Agents", description: "Request a tailored solution", href: "/marketplace#custom" },
    ],
  },
  resources: {
    title: "Resources",
    items: [
      { title: "Blog", description: "Latest insights and updates", href: "/resources/blog" },
      { title: "Guides & Whitepapers", description: "In-depth resources", href: "/resources/guides" },
      { title: "Webinars", description: "On-demand video content", href: "/resources/webinars" },
      { title: "Case Studies", description: "Customer success stories", href: "/resources/case-studies" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { title: "About Us", description: "Our mission and story", href: "/company/about" },
      { title: "Leadership", description: "Meet our team", href: "/company/leadership" },
      { title: "Partners", description: "Partner ecosystem", href: "/company/partners" },
      { title: "Values", description: "What drives us", href: "/company/values" },
      { title: "Trust & Security", description: "Security and compliance", href: "/trust" },
    ],
  },
};

const ListItem = ({ className, title, children, href, ...props }: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const MobileMenuItem = ({ menu }: { menu: { title: string; items: { title: string; description: string; href: string }[] } }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between py-3 text-lg font-medium">
        {menu.title}
        <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 pb-4">
        {menu.items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="block py-2 pl-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wide flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {/* Mobile: icon-only mark */}
          <img 
            src="/brand/agentix-mark.jpg" 
            alt="Agientix" 
            className="h-20 w-auto object-contain lg:hidden" 
          />
          {/* Desktop: full lockup with wordmark */}
          <img 
            src="/brand/agentix-lockup.png" 
            alt="Agientix" 
            className="hidden lg:block w-80 h-auto object-contain" 
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {Object.values(menuItems).map((menu) => (
              <NavigationMenuItem key={menu.title}>
                <NavigationMenuTrigger className="bg-transparent">{menu.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                    {menu.items.map((item) => (
                      <ListItem key={item.href} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/demo">See it in action</Link>
          </Button>
          <Button asChild>
            <Link to="/contact">Get a demo</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              {/* Mobile CTAs at top */}
              <div className="flex flex-col gap-3 pt-6 pb-6 border-b">
                <Button asChild>
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>Get a demo</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/demo" onClick={() => setMobileOpen(false)}>See it in action</Link>
                </Button>
              </div>

              {/* Mobile Menu Items */}
              <nav className="flex-1 py-6">
                {Object.values(menuItems).map((menu) => (
                  <MobileMenuItem key={menu.title} menu={menu} />
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
