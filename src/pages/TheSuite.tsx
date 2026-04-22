import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Presentation,
  Sparkles,
  BookImage,
  LayoutDashboard,
  Wand2,
  Compass,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Users,
} from "lucide-react";
import PageFooter from "@/components/PageFooter";

const TheSuite = () => {
  useEffect(() => {
    document.title = "The Suite — Soul Interface";
  }, []);

  const apps = [
    { name: "SOUL Learner", icon: GraduationCap, desc: "AI-assisted tutoring for students. Practice, explore, get unstuck." },
    { name: "SOUL Teacher", icon: Presentation, desc: "Lesson planning, classroom flow, and substitute-safe modes." },
    { name: "SOUL Creator", icon: Sparkles, desc: "AI content creation: writing, images, music, code." },
    { name: "SOUL Yearbook", icon: BookImage, desc: "Digital yearbook platform for the whole school." },
    { name: "SOUL Admin", icon: LayoutDashboard, desc: "Attendance, permissions, parent messaging, records." },
    { name: "SOUL Etcher", icon: Wand2, desc: "AI image generation and on-prem LoRA training." },
    { name: "SOUL Wander", icon: Compass, desc: "Open-ended exploration and curiosity for kids." },
    { name: "SOUL Counselor", icon: HeartHandshake, desc: "Private student wellbeing and support." },
    { name: "SOUL Guardian", icon: ShieldCheck, desc: "Parent and guardian visibility into learning." },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200">
      <section className="px-6 pt-24 pb-12 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          The <span style={{ color: "#1bbdc5" }}>Suite</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Nine AI-powered apps. One sovereign platform. Every Soul Interface tower ships with the entire suite, fully offline, no subscriptions.
        </p>
      </section>

      {/* App Grid */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-xl bg-[#12121a] border border-white/10 hover:border-[#1bbdc5]/40 transition-colors"
            >
              <app.icon className="w-9 h-9 mb-3" style={{ color: "#1bbdc5" }} strokeWidth={1.5} />
              <h3 className="font-semibold text-white text-lg mb-1">{app.name}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{app.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Practice / Explore */}
      <section className="px-6 py-20 bg-[#0d0d14]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Practice and Explore</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#12121a] border border-white/10">
              <CheckCircle2 className="w-8 h-8 mb-3" style={{ color: "#1bbdc5" }} />
              <h3 className="font-semibold text-white text-lg mb-2">Practice</h3>
              <p className="text-gray-400 leading-relaxed">
                Standards-aligned drills, adaptive quizzes, and immediate Socratic feedback. Students get unstuck without giving up.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#12121a] border border-white/10">
              <Compass className="w-8 h-8 mb-3" style={{ color: "#1bbdc5" }} />
              <h3 className="font-semibold text-white text-lg mb-2">Explore</h3>
              <p className="text-gray-400 leading-relaxed">
                Open-ended curiosity, safe by default. Kids ask big questions and get answers grounded in your curated library.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alma */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="w-10 h-10 mx-auto mb-4" style={{ color: "#1bbdc5" }} strokeWidth={1.5} />
          <h2 className="text-3xl font-bold text-white mb-4">Meet Alma</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Alma is the voice and personality at the heart of the Suite. Patient, curious, accurate, and customizable to your school's values. {/* TODO(ben): finalize Alma description and pronoun policy */}
          </p>
        </div>
      </section>

      {/* Teacher widgets */}
      <section className="px-6 py-20 bg-[#0d0d14]">
        <div className="max-w-4xl mx-auto">
          <Users className="w-10 h-10 mb-4" style={{ color: "#1bbdc5" }} strokeWidth={1.5} />
          <h2 className="text-3xl font-bold text-white mb-4">Teacher Widgets</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Drop-in components teachers actually use: a live classroom dashboard, attendance, exit-ticket builders, ELL translation, parent-letter drafting, and substitute-safe class flow.
          </p>
          <p className="text-sm text-gray-500">{/* TODO(ben): list specific widgets shipped at v1 */}Full widget list coming soon.</p>
        </div>
      </section>

      <PageFooter />
    </div>
  );
};

export default TheSuite;
