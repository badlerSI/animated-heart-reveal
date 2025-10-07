import { useEffect } from "react";
import { useImagePreloader } from "../hooks/useImagePreloader";

const Partner = () => {
  const imageLoaded = useImagePreloader("/lovable-uploads/28631674-4b61-4d51-8fea-ef232cea859d.png");

  useEffect(() => {
    // Set page title
    document.title = "Partner with Soul Interface";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Partner with us to shape the next generation of customizable in-vehicle AI personas.");
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://soulinterface.ai/partner';

    // Set Open Graph meta tags
    const ogTags = {
      'og:type': 'article',
      'og:url': 'https://soulinterface.ai/partner',
      'og:title': 'Partner with Soul Interface',
      'og:description': "Partner with us to shape the next generation of customizable in-vehicle AI personas.",
      'og:image': '/lovable-uploads/28631674-4b61-4d51-8fea-ef232cea859d.png',
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
      {/* Car image with neon glow */}
      <div className="w-full max-w-4xl mb-16 relative">
        {!imageLoaded && (
          <div className="w-full h-64 bg-[#0d0d12] animate-pulse rounded"></div>
        )}
        <img
          src="/lovable-uploads/28631674-4b61-4d51-8fea-ef232cea859d.png"
          alt="AiSha LLC partnership - Neon car illustration"
          className={`w-full h-auto object-contain neon-glow transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0 absolute top-0'
          }`}
        />
      </div>

      {/* AiSha partnership text */}
      <div className="max-w-4xl text-center mb-16">
        <p className="text-lg md:text-xl leading-relaxed text-cyan-white/90 font-outfit">
          We have teamed up with AiSha LLC to integrate Soul Interface into the greatest 240Zs ever conceived. Steel with a real soul, premiering Q3 2025.
        </p>
      </div>

      {/* Partnership opportunities text with glowing email link */}
      <div className="max-w-4xl text-center border-t border-cyan-white/20 pt-16">
        <p className="text-lg md:text-xl leading-relaxed text-cyan-white/90 font-outfit">
          We are currently exploring hardware and software partnerships, as well as automotive OEM, resto mod and autonomous ride hailing vehicle collaborations. If you think your company could interface well with ours, shoot us an email:{" "}
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
