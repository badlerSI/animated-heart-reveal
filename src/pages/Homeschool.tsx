import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Wifi, Settings, BookOpen, Brain, Languages, Gamepad2, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Homeschool = () => {
  useEffect(() => {
    document.title = "Soul Interface | Safe AI for Homeschool";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "A private, offline AI tutor that lives in your home. No cloud. No ads. No data harvesting. Works with any Chromebook.");
    }
  }, []);

  const dangers = [
    { icon: "🦈", title: "AI chatbots with no guardrails", description: "ready to answer any question" },
    { icon: "🦈", title: "Data harvesters", description: "your child's every click, sold to advertisers" },
    { icon: "🦈", title: "Algorithmic rabbit holes", description: "designed to addict, not educate" },
    { icon: "🦈", title: "Deepfakes and manipulation", description: "they can't tell what's real anymore" },
  ];

  const benefits = [
    { icon: Shield, title: "Completely Offline", description: "All AI runs locally. No data ever leaves your home." },
    { icon: Wifi, title: "Works with Any Device", description: "Chromebooks, tablets, laptops — whatever you've got." },
    { icon: Settings, title: "You're in Control", description: "You decide what's allowed, when it's on, and what it teaches." },
  ];

  const features = [
    { icon: Brain, title: "AI Tutor", description: "Step-by-step help in any subject" },
    { icon: BookOpen, title: "Adaptive Assessments", description: "Quizzes that meet them where they are" },
    { icon: Languages, title: "Multilingual Support", description: "Explains in your family's languages" },
    { icon: Gamepad2, title: "Story & Game Engine", description: "Turns lessons into adventures" },
    { icon: LayoutDashboard, title: "Parent Dashboard", description: "See progress, set limits" },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Section 1: Hero with Shark Background */}
      <section 
        className="min-h-screen flex flex-col items-center justify-start px-6 pt-16 sm:pt-20 text-center relative"
        style={{
          backgroundImage: 'url(/lovable-uploads/NetShark.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient overlay for text readability */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.6) 100%)',
          }}
        />

        <div className="relative z-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: '#f0f8ff', fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            So you let your kids
            <br />
            surf the open internet...
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl mt-8"
            style={{ color: '#7ab8b8', fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            You think that's safe?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 4, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl mt-6"
            style={{ color: '#5a9898', fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Have you <em>seen</em> the internet lately?
          </motion.p>
        </div>

        {/* Scroll indicator at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#3dd9d9' }}>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full mt-2"
              style={{ background: '#3dd9d9' }}
            />
          </div>
        </motion.div>
      </section>

      {/* Section 2: What's Lurking */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ color: '#f0f8ff', fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            What's lurking in the deep?
          </motion.h2>

          <div className="space-y-4">
            {dangers.map((danger, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-4 sm:p-6 rounded-lg border"
                style={{ 
                  background: '#1a1a24',
                  borderColor: '#ff4d4d40'
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{danger.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: '#ff6b35' }}>{danger.title}</h3>
                    <p style={{ color: '#7ab8b8' }}>{danger.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Pivot */}
      <section 
        className="px-6 py-24 text-center"
        style={{ background: '#0d0d12' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
            style={{ color: '#3dd9d9', fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            What if there was an internet made just for learning?
          </h2>
          <p 
            className="text-lg sm:text-xl"
            style={{ color: '#e0f4ff' }}
          >
            No ads. No algorithms. No data leaving your home.
          </p>
        </motion.div>
      </section>

      {/* Section 4: The Solution */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#f0f8ff', fontFamily: 'Helvetica, Arial, sans-serif' }}
            >
              Meet Soul Interface
            </h2>
            <p 
              className="text-xl sm:text-2xl"
              style={{ color: '#3dd9d9' }}
            >
              A private AI that lives in your home
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: '#e0f4ff' }}
          >
            An offline AI tower that connects to any Chromebook, laptop, or tablet your family already owns. 
            Your kids get a brilliant tutor, translator, and creative partner — without ever touching the open internet.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg text-center border"
                style={{ 
                  background: '#141418',
                  borderColor: '#3dd9d940'
                }}
              >
                <benefit.icon className="w-10 h-10 mx-auto mb-4" style={{ color: '#3dd9d9' }} />
                <h3 className="font-bold text-lg mb-2" style={{ color: '#f0f8ff' }}>{benefit.title}</h3>
                <p style={{ color: '#7ab8b8' }}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Features */}
      <section className="px-6 py-20" style={{ background: '#0d0d12' }}>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ color: '#f0f8ff', fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Everything they need to learn — nothing they don't
          </motion.h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-lg flex items-start gap-4"
                style={{ background: '#141418' }}
              >
                <feature.icon className="w-8 h-8 flex-shrink-0" style={{ color: '#3dd9d9' }} />
                <div>
                  <h3 className="font-bold" style={{ color: '#f0f8ff' }}>{feature.title}</h3>
                  <p className="text-sm" style={{ color: '#7ab8b8' }}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Chromebook Callout */}
      <section className="px-6 py-12" style={{ background: '#3dd9d9' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-3">
            <p className="font-bold text-lg" style={{ color: '#0a0a0f' }}>
              ✓ Works with any Chromebook being used in schools today
            </p>
            <p className="font-bold text-lg" style={{ color: '#0a0a0f' }}>
              ✓ No special hardware for your kids — just the tower for your home
            </p>
            <p className="font-bold text-lg" style={{ color: '#0a0a0f' }}>
              ✓ Set up in under an hour
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Safety & Privacy */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
            style={{ color: '#f0f8ff', fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Your home. Your rules. Your data.
          </motion.h2>

          <div className="space-y-4 text-lg" style={{ color: '#e0f4ff' }}>
            <p>🛡️ No student data in the cloud</p>
            <p>🛡️ You control your child's digital likeness</p>
            <p>🛡️ Parent always in the loop</p>
          </div>
        </div>
      </section>

      {/* Section 8: Founder Story */}
      <section className="px-6 py-20" style={{ background: '#0d0d12' }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-6"
            style={{ color: '#f0f8ff', fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Built by a teacher who gets it
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed"
            style={{ color: '#7ab8b8' }}
          >
            Soul Interface was founded by Ben Adler, an 8th-grade science teacher from Oakland. 
            He spent years watching kids get distracted, manipulated, and surveilled by the edtech they were given. 
            This is his answer: AI that amplifies great teaching — without the sharks.
          </motion.p>
        </div>
      </section>

      {/* Section 9: CTA */}
      <section 
        className="px-6 py-24 text-center"
        style={{ background: '#0a0a0f' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
            style={{ color: '#f0f8ff', fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Ready to take your kids offline?
          </h2>

          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto px-12 py-6 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105"
            style={{ 
              background: '#3dd9d9',
              color: '#0a0a0f',
              boxShadow: '0 0 30px rgba(61, 217, 217, 0.4)'
            }}
          >
            <a href="mailto:hello@soulinterface.ai?subject=Homeschool Demo Request">
              Request a Demo
            </a>
          </Button>

          <p className="mt-6" style={{ color: '#5a9898' }}>
            Questions? Email{" "}
            <a 
              href="mailto:hello@soulinterface.ai" 
              className="underline hover:no-underline"
              style={{ color: '#3dd9d9' }}
            >
              hello@soulinterface.ai
            </a>
          </p>
        </motion.div>
      </section>

      {/* Section 10: Footer */}
      <footer className="px-6 py-12 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p style={{ color: '#5a9898' }}>Soul Interface © 2024</p>
            
            <nav className="flex flex-wrap justify-center gap-6">
              <Link to="/" className="hover:underline" style={{ color: '#7ab8b8' }}>Home</Link>
              <Link to="/homeschool" className="hover:underline" style={{ color: '#3dd9d9' }}>Education</Link>
              <Link to="/investors" className="hover:underline" style={{ color: '#7ab8b8' }}>Investors</Link>
              <Link to="/tech" className="hover:underline" style={{ color: '#7ab8b8' }}>Tech</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homeschool;
