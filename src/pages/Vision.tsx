
const Vision = () => {
  return (
    <div className="min-h-screen bg-[#0d0d12] flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        {/* Desktop Layout: Side by side */}
        <div className="hidden md:flex md:items-center md:gap-8 h-screen">
          {/* Left column - Text (60%) */}
          <div className="md:w-3/5 space-y-6">
            <div className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-cyan-white/90 font-outfit">
              <p className="mb-6">
                We believe the most powerful computers ever put in a car shouldn't just look outward—they should look within. While the industry races toward autonomous driving, we're pioneering something equally transformative: automotive AI that truly understands you.
              </p>
              <p className="mb-6">
                Imagine vehicles free from the tyranny of screens, where natural conversation replaces menu mazes. Where your car's intelligence stays private, powerful, and personal. Where cutting-edge GPUs create not just safety features, but genuine companionship for every journey.
              </p>
              <p>
                We're assembling existing technologies in revolutionary ways to make cars more human, not less. While others build for a future where everyone increasingly ignores the road, we're building for drivers who love the journey. Soul Interface doesn't replace driving engagement—it turbocharges it, all while keeping your eyes on the road, with both hands on the wheel, and your left foot on the clutch.
              </p>
            </div>
          </div>

          {/* Right column - Image (40%) */}
          <div className="md:w-2/5 flex justify-center items-center">
            <img
              src="/lovable-uploads/e6e23cf2-c76d-4008-b21a-185e409bcf82.png"
              alt="Vision illustration"
              className="object-contain w-full h-full max-h-[90vh] opacity-80"
              style={{
                filter: "drop-shadow(0 0 4px rgba(51, 240, 240, 0.5))",
                animation: "flickerGlow 3s ease-in-out infinite alternate"
              }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile Layout: Same as desktop but stacked vertically */}
        <div className="md:hidden flex flex-col items-center gap-8 min-h-screen justify-center px-6">
          {/* Text */}
          <div className="w-full">
            <div className="text-base leading-relaxed text-cyan-white/95 font-outfit space-y-4">
              <p>
                We believe the most powerful computers ever put in a car shouldn't just look outward—they should look within. While the industry races toward autonomous driving, we're pioneering something equally transformative: automotive AI that truly understands you.
              </p>
              <p>
                Imagine vehicles free from the tyranny of screens, where natural conversation replaces menu mazes. Where your car's intelligence stays private, powerful, and personal. Where cutting-edge GPUs create not just safety features, but genuine companionship for every journey.
              </p>
              <p>
                We're assembling existing technologies in revolutionary ways to make cars more human, not less. While others build for a future where everyone increasingly ignores the road, we're building for drivers who love the journey. Soul Interface doesn't replace driving engagement—it turbocharges it, all while keeping your eyes on the road, with both hands on the wheel, and your left foot on the clutch.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full flex justify-center">
            <img
              src="/lovable-uploads/e6e23cf2-c76d-4008-b21a-185e409bcf82.png"
              alt="Vision illustration"
              className="object-contain w-full max-w-md h-auto opacity-80"
              style={{
                filter: "drop-shadow(0 0 4px rgba(51, 240, 240, 0.5))",
                animation: "flickerGlow 3s ease-in-out infinite alternate"
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
