import { useEffect } from "react";
import { Shield } from "lucide-react";
import PageFooter from "@/components/PageFooter";

const Extreme = () => {
  useEffect(() => {
    document.title = "Just in Case — Soul Interface";
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d12] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <Shield className="w-20 h-20 mb-8" style={{ color: "#1bbdc5" }} />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Just in Case
        </h1>
        <p className="text-xl text-gray-400 max-w-xl mb-12">
          Off-grid AI for when the world goes dark. Run your own weather station, access critical knowledge, and stay informed—no internet required.
        </p>
      </div>
      <PageFooter />
    </div>
  );
};

export default Extreme;
