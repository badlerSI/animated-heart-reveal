import { useEffect } from "react";
import AnimatedLogo from "../components/AnimatedLogo";
import ScrollContent from "../components/ScrollContent";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Soul Interface — Cloud-Free AI Assistant for Cars";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Cloud-free, screen-optional, privacy-centered, in-vehicle, customizable AI assistant");
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://soulinterface.ai/';

    // Set Open Graph meta tags
    const ogTags = {
      'og:type': 'website',
      'og:url': 'https://soulinterface.ai/',
      'og:title': 'Soul Interface — Cloud-Free AI Assistant for Cars',
      'og:description': "Cloud-free, screen-optional, privacy-centered, in-vehicle, customizable AI assistant",
      'og:image': '/lovable-uploads/4f6fbcc1-56c4-4684-b67c-dbf671788af0.png',
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
  }, []);

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
