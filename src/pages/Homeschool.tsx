import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Wifi, Settings, BookOpen, Brain, Languages, Gamepad2, LayoutDashboard, ChevronDown, AlertTriangle, Eye, Radio, Skull, ShieldCheck, UserCheck, Bell, Bug, Cpu, Library, BookText, ImagePlus, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Homeschool = () => {
  const [showScrollPrompt, setShowScrollPrompt] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    childrenPerClass: "",
    demoOption: "",
    message: ""
  });

  useEffect(() => {
    document.title = "Soul Interface | Safe AI for Homeschool";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "A private, offline AI tutor with Wikipedia, classic literature, and a massive curated library. Patent pending. No cloud. No ads. Works with any Chromebook.");
    }

    const timer = setTimeout(() => setShowScrollPrompt(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Demo Request - " + formData.demoOption);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Organization: ${formData.organization}\n` +
      `Children per Class: ${formData.childrenPerClass}\n` +
      `Preferred Demo: ${formData.demoOption}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:contact@soulinterface.ai?subject=${subject}&body=${body}`;
    setDemoModalOpen(false);
  };

  const dangers = [
    { icon: AlertTriangle, title: "AI chatbots with no guardrails", description: "ready to answer any question" },
    { icon: Eye, title: "Data harvesters", description: "your child's every click, sold to advertisers" },
    { icon: Radio, title: "Algorithmic rabbit holes", description: "designed to addict, not educate" },
    { icon: Skull, title: "Deepfakes and manipulation", description: "they can't tell what's real anymore" },
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
    { icon: Palette, title: "AI Creative Labs", description: "Make games, music, and art — AI as copilot" },
    { icon: LayoutDashboard, title: "Parent Dashboard", description: "See progress, set limits" },
    { icon: Bug, title: "$1K Bad Behavior Bug Bounty", description: "Report bypasses, get paid" },
    { icon: Cpu, title: "Chromebook Supercharger", description: "Run Blender, simulations, and advanced apps" },
  ];

  const libraryItems = [
    { icon: Library, text: "All of Wikipedia — age-filtered and safe" },
    { icon: BookText, text: "Thousands of public domain classics with original illustrations" },
    { icon: ImagePlus, text: "Curated Wikimedia images and educational resources" },
    { icon: Settings, text: "Add your own curriculum, books, and materials" },
  ];

  const childrenOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "15", "20", "25", "30"];

  // Unified cyan color
  const cyan = "#2FC5ED";
  const cyanMuted = "#5BA8C4";
  const cyanDim = "#4A8DA8";

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Section 1: Text Hero */}
      <section className="min-h-[70vh] md:min-h-[60vh] pt-12 md:pt-8 flex flex-col items-center justify-center px-6 text-center relative bg-[#0a0a0f]">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
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
            style={{ color: cyanMuted, fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            You think that's safe?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 4, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl mt-6"
            style={{ color: cyanDim, fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Have you <em>seen</em> the internet lately?
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollPrompt ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm" style={{ color: cyan }}>scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" style={{ color: cyan }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: Shark Image */}
      <section className="bg-[#0a0a0f] overflow-visible py-8">
        <img 
          src="/lovable-uploads/shark7.png" 
          alt="Child surfing above shark - the dangers of the open internet"
          className="w-full h-auto"
        />
      </section>

      {/* Section 3: What's Lurking */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
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
                className="p-4 sm:p-6 rounded-xl border bg-[#12121a]"
                style={{ borderColor: `${cyan}30` }}
              >
                <div className="flex items-start gap-4">
                  <danger.icon className="w-6 h-6 flex-shrink-0" style={{ color: cyan }} />
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: cyan }}>{danger.title}</h3>
                    <p style={{ color: cyanMuted }}>{danger.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The Pivot */}
      <section className="px-6 py-24 text-center bg-[#0a0a0f]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
            style={{ color: cyan, fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            What if there was a GPT made just for learning?
          </h2>
          <p className="text-lg sm:text-xl text-[#e0f4ff]">
            No ads. No algorithms. No data leaving your home.
          </p>
        </motion.div>
      </section>

      {/* Soul Wave Machine Image */}
      <section className="px-6 pt-24 pb-16 bg-[#0a0a0f] overflow-visible">
        <div className="max-w-3xl mx-auto overflow-visible">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center overflow-visible relative"
          >
            {/* Base image - cyan lines, no effects */}
            <img 
              src="/lovable-uploads/SoulWaveMachineBlue.png" 
              alt="Soul Interface wave machine with surfer boy - offline AI learning device"
              className="max-w-full h-auto relative z-10"
            />
            {/* White glow overlay - subtle pulsing effect */}
            <img 
              src="/lovable-uploads/SoulWaveMachineWhite.png"
              alt=""
              aria-hidden="true"
              className="max-w-full h-auto absolute inset-0 z-20 pointer-events-none"
              style={{
                mixBlendMode: 'screen',
                animation: 'kanjiPulse 3s ease-in-out infinite'
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Section 5: The Solution */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#f0f8ff]"
              style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
            >
              Meet Soul Interface
            </h2>
            <p className="text-xl sm:text-2xl" style={{ color: cyan }}>
              A private AI that lives in your home
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg mb-12 max-w-2xl mx-auto text-[#e0f4ff]"
          >
            A patent-pending offline AI tower that connects to any Chromebook, laptop, or tablet your family already owns. 
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
                className="p-6 rounded-xl text-center border bg-[#12121a]"
                style={{ borderColor: `${cyan}30` }}
              >
                <benefit.icon className="w-10 h-10 mx-auto mb-4" style={{ color: cyan }} />
                <h3 className="font-bold text-lg mb-2 text-[#f0f8ff]">{benefit.title}</h3>
                <p style={{ color: cyanMuted }}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Features */}
      <section className="px-6 py-20 bg-[#0d0d14]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
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
                className="p-5 rounded-xl flex items-start gap-4 bg-[#12121a]"
              >
                <feature.icon className="w-8 h-8 flex-shrink-0" style={{ color: cyan }} />
                <div>
                  <h3 className="font-bold text-[#f0f8ff]">{feature.title}</h3>
                  <p className="text-sm" style={{ color: cyanMuted }}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Content Library */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            A complete learning library — already loaded
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg mb-12"
            style={{ color: cyanMuted }}
          >
            No empty box. Soul Interface comes pre-loaded with a massive, curated knowledge base.
          </motion.p>

          <div className="grid gap-4 sm:grid-cols-2">
            {libraryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-xl flex items-center gap-4 border bg-[#0d0d14]"
                style={{ borderColor: `${cyan}25` }}
              >
                <item.icon className="w-7 h-7 flex-shrink-0" style={{ color: cyan }} />
                <p className="text-[#e0f4ff]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Chromebook Callout */}
      <section className="px-6 py-12" style={{ background: cyan }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-3">
            <p className="font-bold text-lg text-[#0a0a0f]">
              ✓ Works with any Chromebook being used in schools today
            </p>
            <p className="font-bold text-lg text-[#0a0a0f]">
              ✓ No special hardware for your kids — just the tower for your home
            </p>
            <p className="font-bold text-lg text-[#0a0a0f]">
              ✓ Set up in under an hour
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Safety & Privacy */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Your home. Your rules. Your data.
          </motion.h2>

          <div className="space-y-4 text-lg text-[#e0f4ff]">
            <p className="flex items-center justify-center gap-3">
              <ShieldCheck className="w-6 h-6 flex-shrink-0" style={{ color: cyan }} />
              No student data in the cloud
            </p>
            <p className="flex items-center justify-center gap-3">
              <UserCheck className="w-6 h-6 flex-shrink-0" style={{ color: cyan }} />
              You control your child's digital likeness
            </p>
            <p className="flex items-center justify-center gap-3">
              <Bell className="w-6 h-6 flex-shrink-0" style={{ color: cyan }} />
              Parent always in the loop
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Founder Story */}
      <section className="px-6 py-20 bg-[#0d0d14]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-6 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Built by a teacher who gets it
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed"
            style={{ color: cyanMuted }}
          >
            Soul Interface was founded by Ben Adler, an 8th-grade science teacher from Oakland. 
            He spent years watching kids circumvent every safeguard and get up to shockingly bad behavior on supposedly safe school computers. 
            This is his answer: AI that amplifies great teaching — without the sharks.
          </motion.p>
        </div>
      </section>

      {/* Section 11: CTA */}
      <section className="px-6 py-24 text-center bg-[#0a0a0f]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Ready to take your kids offline?
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 p-6 rounded-xl border"
            style={{ 
              background: `linear-gradient(135deg, rgba(47, 197, 237, 0.08) 0%, rgba(139, 90, 43, 0.08) 100%)`,
              borderColor: `${cyan}30`
            }}
          >
            <p className="text-lg sm:text-xl font-bold mb-2" style={{ color: cyan }}>
              Pre-Order Pioneer Edition Now for Q1 2026 Delivery
            </p>
            <p className="text-sm sm:text-base text-[#c4a574]">
              Limited Edition Launch Case With Real Wood Veneer
            </p>
          </motion.div>

          <Button
            onClick={() => setDemoModalOpen(true)}
            size="lg"
            className="w-full sm:w-auto px-12 py-6 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 text-[#0a0a0f]"
            style={{ 
              background: cyan,
              boxShadow: `0 0 30px rgba(47, 197, 237, 0.5)`
            }}
          >
            Request a Demo
          </Button>

          <p className="mt-6" style={{ color: cyanDim }}>
            Questions? Email{" "}
            <a 
              href="mailto:contact@soulinterface.ai" 
              className="underline hover:no-underline"
              style={{ color: cyan }}
            >
              contact@soulinterface.ai
            </a>
          </p>
        </motion.div>
      </section>

      {/* Demo Request Modal */}
      <Dialog open={demoModalOpen} onOpenChange={setDemoModalOpen}>
        <DialogContent 
          className="max-w-lg border-0 bg-[#0d1520]"
          style={{ boxShadow: `0 0 60px rgba(47, 197, 237, 0.25)` }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-[#f0f8ff]">
              See Soul Interface in Action
            </DialogTitle>
            <DialogDescription className="text-center space-y-2 pt-2">
              <p style={{ color: cyanMuted }}>
                Join us at <span style={{ color: cyan }}>FETC 2026</span> in Orlando (January 11-14) or book an in-person Pioneer Edition demo in Florida the 3rd week of January.
              </p>
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#e0f4ff]">Name</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-0 bg-[#1a2535] text-[#f0f8ff]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#e0f4ff]">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-0 bg-[#1a2535] text-[#f0f8ff]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization" className="text-[#e0f4ff]">Organization / School Name</Label>
              <Input
                id="organization"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="border-0 bg-[#1a2535] text-[#f0f8ff]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[#e0f4ff]">Number of Children per Class</Label>
              <Select
                value={formData.childrenPerClass}
                onValueChange={(value) => setFormData({ ...formData, childrenPerClass: value })}
              >
                <SelectTrigger className="border-0 bg-[#1a2535] text-[#f0f8ff]">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent 
                  className="bg-[#1a2535]"
                  style={{ borderColor: `${cyan}30` }}
                >
                  {childrenOptions.map((num) => (
                    <SelectItem 
                      key={num} 
                      value={num}
                      className="text-[#f0f8ff] focus:bg-[#2FC5ED20] focus:text-[#2FC5ED]"
                    >
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-[#e0f4ff]">Preferred Demo Option</Label>
              <Select
                value={formData.demoOption}
                onValueChange={(value) => setFormData({ ...formData, demoOption: value })}
              >
                <SelectTrigger className="border-0 bg-[#1a2535] text-[#f0f8ff]">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent 
                  className="bg-[#1a2535]"
                  style={{ borderColor: `${cyan}30` }}
                >
                  <SelectItem 
                    value="FETC 2026 Orlando (Jan 11-14)"
                    className="text-[#f0f8ff] focus:bg-[#2FC5ED20] focus:text-[#2FC5ED]"
                  >
                    FETC 2026 in Orlando (Jan 11-14)
                  </SelectItem>
                  <SelectItem 
                    value="In-Person Florida (3rd week of Jan)"
                    className="text-[#f0f8ff] focus:bg-[#2FC5ED20] focus:text-[#2FC5ED]"
                  >
                    In-Person Florida Demo (3rd week of Jan)
                  </SelectItem>
                  <SelectItem 
                    value="California / Northern Nevada In-Person (TBD)"
                    className="text-[#f0f8ff] focus:bg-[#2FC5ED20] focus:text-[#2FC5ED]"
                  >
                    California / Northern Nevada In-Person (TBD)
                  </SelectItem>
                  <SelectItem 
                    value="Virtual Demo"
                    className="text-[#f0f8ff] focus:bg-[#2FC5ED20] focus:text-[#2FC5ED]"
                  >
                    Virtual Demo
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-[#e0f4ff]">Message (optional)</Label>
              <Textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-0 resize-none bg-[#1a2535] text-[#f0f8ff]"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-6 text-lg font-bold rounded-full transition-all duration-300 hover:scale-[1.02] text-[#0a0a0f]"
              style={{ 
                background: cyan,
                boxShadow: `0 0 20px rgba(47, 197, 237, 0.4)`
              }}
            >
              Submit Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="px-6 py-12 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p style={{ color: cyanDim }}>Soul Interface © 2025</p>
            
            <nav className="flex flex-wrap justify-center gap-6">
              <Link to="/#use-cases" className="hover:underline" style={{ color: cyanMuted }}>Home</Link>
              <Link to="/education" className="hover:underline" style={{ color: cyan }}>Education</Link>
              <Link to="/news" className="hover:underline" style={{ color: cyanMuted }}>News</Link>
              <Link to="/tech" className="hover:underline" style={{ color: cyanMuted }}>Tech</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homeschool;
