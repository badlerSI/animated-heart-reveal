
import AnimatedLogo from "../components/AnimatedLogo";
import ScrollContent from "../components/ScrollContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0d0d12] overflow-x-hidden">
      {/* Logo Section */}
      <div className="w-full h-screen flex items-center justify-center">
        <AnimatedLogo />
      </div>
      
      {/* Scrollable Content Section */}
      <ScrollContent />
    </div>
  );
};

export default Index;
