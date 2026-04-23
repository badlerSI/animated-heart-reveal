
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import About from "./pages/About";
import Investors from "./pages/Investors";
import Homeschool from "./pages/Homeschool";
import Heritage from "./pages/Heritage";
import Work from "./pages/Work";
import Extreme from "./pages/Extreme";
import Light from "./pages/Light";
import Heavy from "./pages/Heavy";
import SuperHeavy from "./pages/SuperHeavy";
import Towers from "./pages/Towers";
import TheSuite from "./pages/TheSuite";
import Pilots from "./pages/Pilots";
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
            <Route path="/about" element={<About />} />
            <Route path="/for-investors" element={<Investors />} />
            <Route path="/schools" element={<Homeschool />} />
            <Route path="/heritage" element={<Heritage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/extreme" element={<Extreme />} />
            <Route path="/light" element={<Light />} />
            <Route path="/heavy" element={<Heavy />} />
            <Route path="/superheavy" element={<SuperHeavy />} />
            <Route path="/SUPERheavy" element={<Navigate to="/superheavy" replace />} />
            <Route path="/towers" element={<Towers />} />
            <Route path="/the-suite" element={<TheSuite />} />
            <Route path="/pilots" element={<Pilots />} />
            <Route path="/student" element={<Student />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/pangea" element={<Pangea />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support" element={<Support />} />
            <Route path="/chromebook" element={<Navigate to="/student" replace />} />

            {/* Renames from earlier phases. */}
            <Route path="/vision" element={<Navigate to="/about" replace />} />
            <Route path="/homeschool" element={<Navigate to="/schools" replace />} />
            <Route path="/education" element={<Navigate to="/schools" replace />} />
            <Route path="/investors" element={<Navigate to="/for-investors" replace />} />
            <Route path="/vehicular" element={<Navigate to="/heritage" replace />} />
            <Route path="/autonomous" element={<Navigate to="/heritage" replace />} />
            <Route path="/sema" element={<Navigate to="/heritage" replace />} />
            <Route path="/partner" element={<Navigate to="/heritage" replace />} />
            <Route path="/tech" element={<Navigate to="/for-investors" replace />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
