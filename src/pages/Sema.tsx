import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Educational", path: "/education" },
  { label: "Vehicular", path: "/vehicular" },
  { label: "Workplace", path: "/work" },
  { label: "Autonomous", path: "/autonomous" },
  { label: "Extreme", path: "/extreme" },
];

const Sema = () => { 
  const location = useLocation();
  const currentPath = location.pathname;
  const cyan = "#1bbdc5";
  const cyanMuted = "#5BA8C4";
  const cyanDim = "#4A8DA8";

  useEffect(() => {
    document.title = "SEMA 2025 — Soul Interface";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Ace at SEMA 2025 - Soul Interface's first automotive AI prototype.");
    }

    return () => {
      document.title = "Soul Interface | Sovereign AI";
      if (metaDescription) {
        metaDescription.setAttribute("content", "Cloud-free, screen-optional, privacy-centered, customizable AI assistant");
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Full-screen background image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/ace-sema-2025.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="fixed inset-0 z-0 bg-black/40" />
      
      {/* Main content */}
      <div className="flex-1 relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <p 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed"
          style={{
            color: cyan,
            textShadow: `0 0 10px ${cyan}, 0 0 20px ${cyan}, 0 0 30px ${cyan}, 0 0 40px ${cyan}`
          }}
        >
          Ace really enjoyed rocking out with you tonight! Follow us on{' '}
          <a 
            href="https://www.linkedin.com/company/107125976/admin/dashboard/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
          >
            LinkedIn
          </a>
          {' '}and check out our other innovative edge AI products below!
        </p>
      </div>
      
      {/* Glowing footer navigation */}
      <footer className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p style={{ color: cyanDim, textShadow: `0 0 8px ${cyanDim}` }}>
              Soul Interface © 2026
            </p>
            
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="hover:underline transition-colors text-sm sm:text-base"
                    style={{
                      color: isActive ? cyan : cyanMuted,
                      textShadow: isActive 
                        ? `0 0 10px ${cyan}, 0 0 20px ${cyan}, 0 0 30px ${cyan}` 
                        : `0 0 8px ${cyanMuted}`,
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sema;
