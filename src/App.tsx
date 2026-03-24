import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CreatorPage from "./pages/CreatorPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* ── Creator case-study pages ── */}
          {/* Routes are driven by src/data/creators.ts — add a creator there
              and it automatically gets a page at /:slug              */}
          <Route path="/victoria"  element={<CreatorPage />} />
          <Route path="/sebastian" element={<CreatorPage />} />
          <Route path="/sophia"    element={<CreatorPage />} />
          <Route path="/amara"     element={<CreatorPage />} />
          <Route path="/mia"       element={<CreatorPage />} />
          <Route path="/yuki"      element={<CreatorPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
