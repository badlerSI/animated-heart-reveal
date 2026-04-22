
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import Vision from "./pages/Vision";
import Investors from "./pages/Investors";
import Homeschool from "./pages/Homeschool";
import Vehicular from "./pages/Vehicular";
import Work from "./pages/Work";
import Extreme from "./pages/Extreme";
import Light from "./pages/Light";
import Heavy from "./pages/Heavy";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Pangea from "./pages/Pangea";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import ScrollToTop from "./components/ScrollToTop";

// SOUL Tools pages (si.tools / soulinterface.tools)
import LearnPage from "./pages/soul-tools/LearnPage";
import TeachPage from "./pages/soul-tools/TeachPage";
import CreatePage from "./pages/soul-tools/CreatePage";
import YearbookPage from "./pages/soul-tools/YearbookPage";
import AdminPage from "./pages/soul-tools/AdminPage";
import EtcherPage from "./pages/soul-tools/EtcherPage";
import WanderPage from "./pages/soul-tools/WanderPage";
import CounselorPage from "./pages/soul-tools/CounselorPage";
import GuardianPage from "./pages/soul-tools/GuardianPage";
import SoulToolsNotFound from "./pages/soul-tools/SoulToolsNotFound";

const queryClient = new QueryClient();

const isToolsDomain = ["si.tools", "soulinterface.tools"].includes(
  window.location.hostname
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        {isToolsDomain ? (
          <Routes>
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/teach" element={<TeachPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/yearbook" element={<YearbookPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/etcher" element={<EtcherPage />} />
            <Route path="/wander" element={<WanderPage />} />
            <Route path="/counselor" element={<CounselorPage />} />
            <Route path="/guardian" element={<GuardianPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<SoulToolsNotFound />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/news" element={<News />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/education" element={<Homeschool />} />
            <Route path="/vehicular" element={<Vehicular />} />
            <Route path="/work" element={<Work />} />
            <Route path="/extreme" element={<Extreme />} />
            <Route path="/light" element={<Light />} />
            <Route path="/heavy" element={<Heavy />} />
            <Route path="/student" element={<Student />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/pangea" element={<Pangea />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support" element={<Support />} />
            <Route path="/chromebook" element={<Navigate to="/student" replace />} />

            {/* Phase 3 retired-page redirects. Targets will be renamed in Phase 4 (/heritage) and Phase 10 (/for-investors). */}
            <Route path="/autonomous" element={<Navigate to="/vehicular" replace />} />
            <Route path="/sema" element={<Navigate to="/vehicular" replace />} />
            <Route path="/partner" element={<Navigate to="/vehicular" replace />} />
            <Route path="/tech" element={<Navigate to="/investors" replace />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
