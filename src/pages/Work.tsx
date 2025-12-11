import { useEffect } from "react";
import { Building2 } from "lucide-react";
import PageFooter from "@/components/PageFooter";

const Work = () => {
  useEffect(() => {
    document.title = "At Work — Soul Interface";
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d12] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <Building2 className="w-20 h-20 mb-8" style={{ color: "#1bbdc5" }} />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          At Work
        </h1>
        <p className="text-xl text-gray-400 max-w-xl mb-12">
          Air-gapped AI for secure environments. When data transmission isn't allowed, Soul Interface delivers intelligence without the leak.
        </p>
      </div>
      <PageFooter />
    </div>
  );
};

export default Work;
