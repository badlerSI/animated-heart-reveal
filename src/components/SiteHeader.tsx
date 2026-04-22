import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Schools", path: "/schools" },
  { label: "At Work", path: "/work" },
  { label: "Towers", path: "/towers" },
  { label: "The Suite", path: "/the-suite" },
  { label: "About", path: "/about" },
];

const SiteHeader = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0f]/85 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="text-white font-semibold tracking-tight">
          Soul <span style={{ color: "#1bbdc5" }}>Interface</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm transition-colors hover:text-white"
                style={{ color: active ? "#1bbdc5" : "#9aa0a6" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/5 bg-[#0a0a0f]">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-sm py-1"
                  style={{ color: active ? "#1bbdc5" : "#cfd2d6" }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
