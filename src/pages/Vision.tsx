import { useEffect } from "react";
import { useImagePreloader } from "../hooks/useImagePreloader";

const Vision = () => {
  const imageLoaded = useImagePreloader("/lovable-uploads/e6e23cf2-c76d-4008-b21a-185e409bcf82.png");

  useEffect(() => {
    // Set page title
    document.title = "Our Vision — Soul Interface";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "See how we imagine a future of total automotive freedom.");
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://soulinterface.ai/vision';

    // Set Open Graph meta tags
    const ogTags = {
      'og:type': 'article',
      'og:url': 'https://soulinterface.ai/vision',
      'og:title': 'Our Vision — Soul Interface',
      'og:description': "See how we imagine a future of total automotive freedom.",
      'og:site_name': 'Soul Interface',
      'og:image': '/lovable-uploads/e6e23cf2-c76d-4008-b21a-185e409bcf82.png',
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': 'Concept vehicle showing automotive freedom'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });

    // Set Twitter Card meta tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': 'Our Vision — Soul Interface',
      'twitter:description': "See how we imagine a future of total automotive freedom.",
      'twitter:image': '/lovable-uploads/e6e23cf2-c76d-4008-b21a-185e409bcf82.png'
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });

    // Cleanup function to reset to home page meta
    return () => {
      document.title = "Soul Interface — Cloud-Free AI Assistant for Cars";
      if (metaDescription) {
        metaDescription.setAttribute("content", "Cloud-free, screen-optional, privacy-centered, in-vehicle, customizable AI assistant");
      }
    };
  }, []);

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
          <div className="md:w-2/5 flex justify-center items-center relative">
            {!imageLoaded && (
              <div className="w-full h-96 bg-[#0d0d12] animate-pulse rounded"></div>
            )}
            <img
              src="/lovable-uploads/e6e23cf2-c76d-4008-b21a-185e409bcf82.png"
              alt="Vision illustration"
              className={`object-contain w-full h-full max-h-[90vh] opacity-80 transition-opacity duration-500 ${
                imageLoaded ? 'opacity-80' : 'opacity-0 absolute top-0'
              }`}
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
          <div className="w-full flex justify-center relative">
            {!imageLoaded && (
              <div className="w-full max-w-md h-64 bg-[#0d0d12] animate-pulse rounded"></div>
            )}
            <img
              src="/lovable-uploads/e6e23cf2-c76d-4008-b21a-185e409bcf82.png"
              alt="Vision illustration"
              className={`object-contain w-full max-w-md h-auto opacity-80 transition-opacity duration-500 ${
                imageLoaded ? 'opacity-80' : 'opacity-0 absolute top-0'
              }`}
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
