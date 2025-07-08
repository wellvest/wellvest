import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WaitlistProvider } from "@/contexts/WaitlistContext";
import WaitlistModalWrapper from "@/components/WaitlistModalWrapper";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WaitlistProvider>
        <Toaster />
        <Sonner />
        <WaitlistModalWrapper />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </WaitlistProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
