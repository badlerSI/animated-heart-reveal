
const Partner = () => {
  return (
    <div className="min-h-screen bg-[#0d0d12] flex flex-col items-center justify-start px-4 py-16">
      {/* Car image with neon glow */}
      <div className="w-full max-w-4xl mb-16">
        <img
          src="/lovable-uploads/28631674-4b61-4d51-8fea-ef232cea859d.png"
          alt="AiSha LLC partnership - Neon car illustration"
          className="w-full h-auto object-contain neon-glow"
        />
      </div>

      {/* AiSha partnership text */}
      <div className="max-w-4xl text-center mb-16">
        <p className="text-lg md:text-xl leading-relaxed text-cyan-white/90 font-outfit">
          We have teamed up with AiSha LLC to integrate soul interface into the greatest 240Zs ever conceived. Steel with a real soul, premiering Q3 2025.
        </p>
      </div>

      {/* Partnership opportunities text with glowing email link */}
      <div className="max-w-4xl text-center border-t border-cyan-white/20 pt-16">
        <p className="text-lg md:text-xl leading-relaxed text-cyan-white/90 font-outfit">
          We are currently exploring hardware and software partnerships. As well as automotive OEMs, resto mods and autonomous ride hailing vehicle collaborations. If you think your company could interface well with ours, shoot us an email:{" "}
          <a
            href="mailto:partners@soulinterface.ai"
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
            partners@soulinterface.ai
          </a>
        </p>
      </div>
    </div>
  );
};

export default Partner;
