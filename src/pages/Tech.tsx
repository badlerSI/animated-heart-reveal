
const Tech = () => {
  return (
    <div className="min-h-screen bg-[#0d0d12] flex flex-col items-center justify-start px-4 py-16">
      {/* Full-size technology diagram with neon glow */}
      <div className="w-full max-w-4xl mb-16">
        <img
          src="/lovable-uploads/54485ca6-5ac5-4c73-b7bd-eace775bc1ee.png"
          alt="Technology diagram showing what makes our clockwork soul tick"
          className="w-full h-auto object-contain neon-glow"
        />
      </div>

      {/* Investment text with glowing email link */}
      <div className="max-w-4xl text-center">
        <p className="text-lg md:text-xl leading-relaxed text-cyan-white/90 font-outfit">
          The specifics are still under wraps, but if you think you might be interested in investing in Soul Interface, please email{" "}
          <a
            href="mailto:tech@soulinterface.ai"
            className="text-cyan-white hover:text-cyan-300 transition-all duration-300"
            style={{
              textShadow: "0 0 8px rgba(0, 255, 255, 0.6)",
              filter: "drop-shadow(0 0 4px rgba(0, 255, 255, 0.4))"
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.textShadow = "0 0 12px rgba(0, 255, 255, 0.9)";
              target.style.filter = "drop-shadow(0 0 8px rgba(0, 255, 255, 0.7))";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.textShadow = "0 0 8px rgba(0, 255, 255, 0.6)";
              target.style.filter = "drop-shadow(0 0 4px rgba(0, 255, 255, 0.4))";
            }}
          >
            tech@soulinterface.ai
          </a>{" "}
          and we would be more than happy to send you a detailed technology briefing.
        </p>
      </div>
    </div>
  );
};

export default Tech;
