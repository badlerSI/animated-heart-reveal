import { useEffect } from "react";
import { useImagePreloader } from "../hooks/useImagePreloader";

const Tech = () => {
  const imageLoaded = useImagePreloader("/lovable-uploads/3727b0cf-8a17-44f2-97e2-67cc2b9dfb17.png");

  useEffect(() => {
    // Set page title
    document.title = "Soul Interface Technology";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover the patent-pending technology behind Soul Interface's natural, offline AI.");
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://soulinterface.ai/tech';

    // Set Open Graph meta tags
    const ogTags = {
      'og:type': 'article',
      'og:url': 'https://soulinterface.ai/tech',
      'og:title': 'Soul Interface Technology',
      'og:description': "Discover the patent-pending technology behind Soul Interface's natural, offline AI.",
      'og:image': '/og-tech.jpg',
      'og:image:width': '1200',
      'og:image:height': '630'
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

    // Cleanup function to reset to home page meta
    return () => {
      document.title = "Soul Interface — Cloud-Free AI Assistant for Cars";
      if (metaDescription) {
        metaDescription.setAttribute("content", "Cloud-free, screen-optional, privacy-centered, in-vehicle, customizable AI assistant");
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d12] flex flex-col items-center justify-start px-4 py-16">
      {/* Full-size technology diagram with neon glow */}
      <div className="w-full max-w-4xl mb-16 relative">
        {!imageLoaded && (
          <div className="w-full h-64 bg-[#0d0d12] animate-pulse rounded"></div>
        )}
        <img
          src="/lovable-uploads/3727b0cf-8a17-44f2-97e2-67cc2b9dfb17.png"
          alt="Technology diagram showing what makes our clockwork soul tick"
          className={`w-full h-auto object-contain neon-glow transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0 absolute top-0'
          }`}
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
