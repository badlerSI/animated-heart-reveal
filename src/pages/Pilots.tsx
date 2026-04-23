import { useEffect } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import PageFooter from "@/components/PageFooter";

const Pilots = () => {
  useEffect(() => {
    document.title = "Pilots | Soul Interface";
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200">
      <section className="px-6 pt-24 pb-12 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Active <span style={{ color: "#1bbdc5" }}>Pilots</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-400">
          Soul Interface is being deployed in real classrooms. Specific partners and locations are kept private out of respect for the schools, families, and students involved.
        </p>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-2xl mx-auto text-center mt-8">
          <Users className="w-10 h-10 mx-auto mb-4" style={{ color: "#1bbdc5" }} strokeWidth={1.5} />
          <h3 className="text-2xl font-bold text-white mb-3">Want to host a pilot?</h3>
          <p className="text-gray-400 mb-6">
            We are actively partnering with homeschool co-ops, charter networks, and microschools.
          </p>
          <a
            href="mailto:contact@soulinterface.ai?subject=Pilot%20Inquiry"
            className="inline-block px-8 py-3 rounded-full font-medium transition-colors"
            style={{ background: "#1bbdc5", color: "#0a0a0f" }}
          >
            Get in touch
          </a>
        </div>
      </section>

      <PageFooter />
    </div>
  );
};

export default Pilots;
