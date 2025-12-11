import { Link, useLocation } from "react-router-dom";

interface PageFooterProps {
  glowing?: boolean;
}

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Educational", path: "/education" },
  { label: "Vehicular", path: "/vehicular" },
  { label: "Workplace", path: "/work" },
  { label: "Autonomous", path: "/autonomous" },
  { label: "Extreme", path: "/extreme" },
];

const PageFooter = ({ glowing = false }: PageFooterProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const cyan = "#1bbdc5";
  const cyanMuted = "#5BA8C4";
  const cyanDim = "#4A8DA8";

  return (
    <footer className="px-6 py-12 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p style={{ color: cyanDim }}>Soul Interface © 2025</p>
          
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              const linkStyle = glowing
                ? {
                    color: isActive ? cyan : cyanMuted,
                    textShadow: isActive 
                      ? `0 0 10px ${cyan}, 0 0 20px ${cyan}, 0 0 30px ${cyan}` 
                      : `0 0 8px ${cyanMuted}`,
                  }
                : {
                    color: isActive ? cyan : cyanMuted,
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
