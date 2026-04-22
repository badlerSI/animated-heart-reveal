import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";
import PageFooter from "@/components/PageFooter";

const Pilots = () => {
  useEffect(() => {
    document.title = "Pilots — Soul Interface";
  }, []);

  const pilots = [
    {
      name: "Mariposa",
      location: "California",
      status: "Planned",
      blurb: "Rural microschool pilot bringing offline AI tutoring to students with limited broadband.",
      // TODO(ben): exact Mariposa pilot date and partner
    },
    {
      name: "ROP1",
      location: "TBD",
      status: "In planning",
      blurb: "Career and technical education pilot using SOUL Teacher and Creator for project-based learning.",
    },
    {
      name: "Spring 2026 Charter",
      location: "Florida",
      status: "Spring 2026",
      blurb: "Charter network pilot with paid implementation, ELL focus, and parent-dashboard rollout.",
    },
  ];

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
          Where Soul Interface is being deployed in real classrooms, today.
        </p>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {pilots.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-[#12121a] border border-white/10"
            >
              <h2 className="text-xl font-bold text-white mb-3">{p.name}</h2>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                <MapPin size={14} style={{ color: "#1bbdc5" }} /> {p.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Calendar size={14} style={{ color: "#1bbdc5" }} /> {p.status}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{p.blurb}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center mt-16">
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
