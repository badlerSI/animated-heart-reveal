
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Tech from "./pages/Tech";
import Partner from "./pages/Partner";
import News from "./pages/News";
import Vision from "./pages/Vision";
import Investors from "./pages/Investors";
import Homeschool from "./pages/Homeschool";
import Vehicular from "./pages/Vehicular";
import Work from "./pages/Work";
import Extreme from "./pages/Extreme";
import Autonomous from "./pages/Autonomous";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/news" element={<News />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/sema" element={<Navigate to="/education" replace />} />
          
          <Route path="/investors" element={<Investors />} />
          <Route path="/education" element={<Homeschool />} />
          <Route path="/vehicular" element={<Vehicular />} />
          <Route path="/work" element={<Work />} />
          <Route path="/extreme" element={<Extreme />} />
          <Route path="/autonomous" element={<Autonomous />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
