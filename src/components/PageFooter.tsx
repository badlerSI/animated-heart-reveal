import { Link, useLocation } from "react-router-dom";

interface PageFooterProps {
  glowing?: boolean;
  accentColor?: string;
  mutedColor?: string;
  dimColor?: string;
  excludeLinks?: string[];
}

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Educational", path: "/education" },
  { label: "Vehicular", path: "/vehicular" },
  { label: "Workplace", path: "/work" },
  { label: "Autonomous", path: "/autonomous" },
  { label: "Extreme", path: "/extreme" },
  { label: "The Light", path: "/light" },
  { label: "The Heavy", path: "/heavy" },
];

const PageFooter = ({ 
  glowing = false,
  accentColor = "#1bbdc5",
  mutedColor = "#5BA8C4",
  dimColor = "#4A8DA8",
  excludeLinks = []
}: PageFooterProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const accent = accentColor;
  const muted = mutedColor;
  const dim = dimColor;

  return (
    <footer className="px-6 py-12 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p style={{ color: dim }}>Soul Interface © 2026</p>
          
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {navLinks
              .filter(link => !excludeLinks.includes(link.path))
              .map((link) => {
              const isActive = currentPath === link.path;
              const linkStyle = glowing
                ? {
                    color: isActive ? accent : muted,
                    textShadow: isActive 
                      ? `0 0 10px ${accent}, 0 0 20px ${accent}, 0 0 30px ${accent}` 
                      : `0 0 8px ${muted}`,
                  }
                : {
                    color: isActive ? accent : muted,
                  };
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="hover:underline transition-colors text-sm sm:text-base"
                  style={linkStyle}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
