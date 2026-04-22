import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageFooter from "@/components/PageFooter";

const apps = [
  { name: "SOUL Learn", desc: "AI-assisted learning for students" },
  { name: "SOUL Teach", desc: "Classroom management for educators" },
  { name: "SOUL Create", desc: "AI content creation tools" },
  { name: "SOUL Yearbook", desc: "Digital yearbook platform" },
  { name: "SOUL Administrator", desc: "School admin dashboard" },
  { name: "SOUL Etcher", desc: "AI image generation & LoRA training" },
];

const Support = () => {
  useEffect(() => {
    document.title = "Support | SOUL Interface";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "SOUL Interface. Secure Offline Unified Learning Interface. Support and information for the SOUL suite of K-12 educational apps.");
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-300">
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1bbdc5" }}>
            SOUL Interface
          </h1>
          <p className="text-lg text-gray-400 tracking-wide">
            Secure Offline Unified Learning Interface
          </p>
        </header>

        {/* About */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: "#1bbdc5" }}>
            About
          </h2>
          <p className="leading-relaxed">
            SOUL is a suite of six AI-powered learning applications designed for K–12 schools. The entire platform runs on a school's local network with no cloud dependency — student data never leaves the building. SOUL is built with privacy at its core, fully COPPA-compliant, and designed offline-first so learning continues regardless of internet availability.
          </p>
        </section>

        {/* Our Apps */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: "#1bbdc5" }}>
            Our Apps
          </h2>
          <ul className="space-y-4">
            {apps.map((app) => (
              <li key={app.name} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className="font-semibold text-white shrink-0">{app.name}</span>
                <span className="hidden sm:inline text-gray-600">—</span>
                <span className="text-gray-400">{app.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Support */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: "#1bbdc5" }}>
            Support
          </h2>
          <p className="leading-relaxed mb-4">
            Need help? Contact us at{" "}
            <a
              href="mailto:contact@soulinterface.ai"
              className="transition-colors"
              style={{ color: "#1bbdc5" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1bbdc5")}
            >
              contact@soulinterface.ai
            </a>
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            For technical support, please contact your school's IT administrator, as SOUL operates on your school's local network.
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Soul Interface Inc. © 2026. All rights reserved.</p>
          <Link
            to="/privacy"
            className="transition-colors"
            style={{ color: "#1bbdc5" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1bbdc5")}
          >
            Privacy Policy
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Support;
