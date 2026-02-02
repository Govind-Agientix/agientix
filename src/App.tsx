import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import Marketplace from "./pages/Marketplace";
import Resources from "./pages/Resources";
import About from "./pages/company/About";
import Leadership from "./pages/company/Leadership";
import Partners from "./pages/company/Partners";
import Values from "./pages/company/Values";
import Trust from "./pages/Trust";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import Legal from "./pages/Legal";
import Training from "./pages/Training";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:type" element={<Solutions />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:type" element={<Resources />} />
          <Route path="/company/about" element={<About />} />
          <Route path="/company/leadership" element={<Leadership />} />
          <Route path="/company/partners" element={<Partners />} />
          <Route path="/company/values" element={<Values />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/legal/:type" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
