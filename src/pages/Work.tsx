import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Scale, 
  DollarSign, 
  Server, 
  Briefcase, 
  Heart, 
  Building, 
  ShieldCheck, 
  Palette, 
  Ship,
  Plug,
  Users,
  Database,
  Filter,
  Check,
  Lock,
  FileText,
  Settings,
  Infinity
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageFooter from "@/components/PageFooter";

const Work = () => {
  useEffect(() => {
    document.title = "At Work — Soul Interface";
  }, []);

  // Matching education page color scheme
  const cyan = "#1bbdc5";
  const cyanMuted = "#5BA8C4";

  const painPoints = [
    { 
      icon: Shield, 
      title: "Security Review", 
      description: "Where does the data go? Who can access it? What if the vendor is breached?" 
    },
    { 
      icon: Scale, 
      title: "Compliance Review", 
      description: "Does this violate HIPAA, GDPR, PCI, data residency, or client trust?" 
    },
    { 
      icon: DollarSign, 
      title: "Budget Review", 
      description: "So we're signing up for how many dollars a month, forever?" 
    },
  ];

  const industries = [
    {
      id: "law",
      icon: Briefcase,
      title: "Law & Professional Services",
      pain: "You can't upload client files to public AI without risking privilege or ethics violations. Every new SaaS triggers another 40-page vendor risk questionnaire.",
      solution: "Run contract analysis, e-discovery, brief drafting, and translation entirely in-house. Point Soul at millions of documents on your internal file shares — none of it ever leaves your network. Tell clients a story they actually like: \"Yes, we use AI. No, your data never leaves our building.\""
    },
    {
      id: "healthcare",
      icon: Heart,
      title: "Healthcare & Life Sciences",
      pain: "HIPAA, PHI, IRB constraints, and security teams that (correctly) won't tolerate sending patient data to random clouds.",
      solution: "Run summarization, coding, and analytics on clinical notes and research data without PHI ever crossing the WAN boundary. Use multilingual speech and translation locally for patient interactions. Bring the same unit into a lab, a hospital, or a remote clinic — same trusted box, same policies."
    },
    {
      id: "finance",
      icon: Building,
      title: "Finance & Critical Infrastructure",
      pain: "Data residency, audits, and regulators who read the fine print. Cloud providers love your data; regulators don't.",
      solution: "Keep trading data, customer records, and risk models inside your own four walls while still getting LLM-grade analysis. Treat Soul like any other on-prem system in your risk register — one vendor, one DPIA, one threat model. No \"shadow SaaS\" exploding your third-party risk profile."
    },
    {
      id: "defense",
      icon: ShieldCheck,
      title: "Defense & Government",
      pain: "Air-gapped networks, denied environments, and missions where \"we'll just call an API\" is a joke.",
      solution: "Use Soul as a portable AI HQ: live translation, document search, summarization, and planning completely offline. Drop one into a forward operating base, a mobile command vehicle, or a secure facility — no external traffic required. When connectivity is impossible or forbidden, your AI still works."
    },
    {
      id: "creative",
      icon: Palette,
      title: "Creative Studios & Media",
      pain: "Cloud GPU bills that explode, and NDAs that say \"no third-party training on our assets.\"",
      solution: "Treat Soul as a shared render and AI effects box for the team — one-time purchase instead of perpetual GPU rentals. Run generative art, upscaling, and style transfer models locally on sensitive pre-release content. Use it as a private \"remote GPU\" for Photoshop, After Effects, Blender, Unreal — wherever the heavy lifting lives."
    },
    {
      id: "remote",
      icon: Ship,
      title: "Remote, Maritime & Offline",
      pain: "Yachts, ships, mines, and remote sites where Starlink is expensive or forbidden, and latency kills cloud AI.",
      solution: "Give crews and field teams full AI capabilities even when the internet is down, expensive, or politically sensitive. Analyze sensor data, maps, drone footage, and documents on site, instead of shipping it off to a datacenter. When the satellite link goes dark, your AI doesn't."
    },
  ];

  const howItWorks = [
    { icon: Plug, title: "Place & Power", description: "Put the unit in a secure room or rack. Power + Ethernet." },
    { icon: Users, title: "Connect Your People", description: "Team accesses via web UI, CLI, or API inside your LAN." },
    { icon: Database, title: "Point at Your Data", description: "File shares, documents, logs — all indexed locally." },
    { icon: Filter, title: "Optional: External Filter", description: "Summarize and redact before anything leaves your network." },
  ];

  const compliancePoints = [
    { icon: Lock, title: "Data Locality", description: "All processing occurs on your hardware. No silent mirroring to a training cluster." },
    { icon: FileText, title: "No Shared Training", description: "Your prompts and corpora are not used to train a global model. Ever." },
    { icon: Shield, title: "Clear Perimeter", description: "The threat model is \"this one box in this one place,\" not a thousand opaque microservices." },
    { icon: Check, title: "Simple Vendor Story", description: "One vendor, one contract, one processor — instead of a new subprocessor each time." },
  ];

  const ownershipPoints = [
    { icon: DollarSign, title: "No Subscriptions, Ever", description: "One purchase, it's yours. No per-seat tax. No usage-based surprises." },
    { icon: Infinity, title: "Free Updates for Life", description: "Updating your software doesn't cost us anything to distribute, so we don't charge you anything." },
    { icon: Server, title: "Complete Out of the Box", description: "Comes with the full Soul Stack — our comprehensive software suite and extensive databases — included with every unit." },
    { icon: Settings, title: "Fully Customizable", description: "We can add whatever you need — industry-specific data, specialized configurations, custom integrations." },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Tight radius glow - small blur values for iOS Safari compatibility */}
      <style>
        {`
          @-webkit-keyframes cyanPulseTight {
            0%, 100% {
              opacity: 0.9;
              -webkit-filter: 
                drop-shadow(0 0 8px rgba(255, 255, 255, 1))
                drop-shadow(0 0 15px rgba(27, 189, 197, 1))
                drop-shadow(0 0 25px rgba(27, 189, 197, 0.9));
              filter: 
                drop-shadow(0 0 8px rgba(255, 255, 255, 1))
                drop-shadow(0 0 15px rgba(27, 189, 197, 1))
                drop-shadow(0 0 25px rgba(27, 189, 197, 0.9));
            }
            50% {
              opacity: 1;
              -webkit-filter: 
                drop-shadow(0 0 12px rgba(255, 255, 255, 1))
                drop-shadow(0 0 25px rgba(27, 189, 197, 1))
                drop-shadow(0 0 40px rgba(27, 189, 197, 0.95));
              filter: 
                drop-shadow(0 0 12px rgba(255, 255, 255, 1))
                drop-shadow(0 0 25px rgba(27, 189, 197, 1))
                drop-shadow(0 0 40px rgba(27, 189, 197, 0.95));
            }
          }
          @keyframes cyanPulseTight {
            0%, 100% {
              opacity: 0.9;
              filter: 
                drop-shadow(0 0 8px rgba(255, 255, 255, 1))
                drop-shadow(0 0 15px rgba(27, 189, 197, 1))
                drop-shadow(0 0 25px rgba(27, 189, 197, 0.9));
            }
            50% {
              opacity: 1;
              filter: 
                drop-shadow(0 0 12px rgba(255, 255, 255, 1))
                drop-shadow(0 0 25px rgba(27, 189, 197, 1))
                drop-shadow(0 0 40px rgba(27, 189, 197, 0.95));
            }
          }
        `}
      </style>

      {/* Visual Centerpiece - AI Unbound by Red Tape */}
      <section className="px-6 pt-20 pb-12 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            AI Unbound by Red Tape
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Image container - tight glow on overlay image only */}
            <div className="relative inline-block">
              {/* Base image - red tape figure with lightning */}
              <img 
                src="/lovable-uploads/RedTape-2.png" 
                alt="Figure breaking free from red tape with AI energy"
                className="max-w-full h-auto relative z-10"
              />
              {/* Cyan accent overlay - tight drop-shadow glow */}
              <img 
                src="/lovable-uploads/TapeGlow.png"
                alt=""
                aria-hidden="true"
                className="absolute top-0 left-0 max-w-full h-auto z-20 pointer-events-none"
                style={{
                  mixBlendMode: 'screen',
                  WebkitAnimation: 'cyanPulseTight 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                  animation: 'cyanPulseTight 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                  WebkitTransform: 'translateZ(0)',
                  transform: 'translateZ(0)',
                  willChange: 'opacity, filter',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                }}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-lg mt-8 max-w-2xl mx-auto text-[#e0f4ff]"
          >
            A portable, sovereign AI appliance you buy once and own outright. No cloud, no subscriptions, 
            no surprise risk reviews.
          </motion.p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="px-6 py-20 bg-[#0d0d14]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Your AI project keeps dying in the same three meetings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: cyanMuted }}
          >
            In most organizations, AI doesn't fail in the demo. It fails in review.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-3">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl text-center border bg-[#12121a]"
                style={{ borderColor: `${cyan}30` }}
              >
                <point.icon className="w-10 h-10 mx-auto mb-4" style={{ color: cyan }} />
                <h3 className="font-bold text-lg mb-2 text-[#f0f8ff]">{point.title}</h3>
                <p style={{ color: cyanMuted }}>{point.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg mt-12 max-w-2xl mx-auto"
            style={{ color: cyan }}
          >
            Soul Interface eliminates these conversations. No data leaves, no third-party training, no recurring costs to justify.
          </motion.p>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            A sovereign AI supercomputer that fits in a carry-on
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-2xl mx-auto text-[#e0f4ff]"
          >
            Soul Interface for Work is a compact, high-end AI workstation running the full Soul Stack entirely offline. 
            Roll it off a flight, into a rack, or under a desk. Your team accesses it over your internal network 
            like a private, on-prem AI "cloud" — except there is no external API, no streaming of customer data, 
            and you own the stack end-to-end.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-semibold"
            style={{ color: cyan }}
          >
            You're not a tenant in someone else's data center. You're the landlord of your own AI.
          </motion.p>
        </div>
      </section>

      {/* Industry Verticals Section */}
      <section className="px-6 py-20 bg-[#0d0d14]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Who It's For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg mb-12"
            style={{ color: cyanMuted }}
          >
            Industries where data security isn't optional — it's the law.
          </motion.p>

          <Accordion type="single" collapsible className="space-y-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={industry.id} 
                  className="rounded-xl border bg-[#12121a] px-6"
                  style={{ borderColor: `${cyan}30` }}
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <industry.icon className="w-6 h-6 flex-shrink-0" style={{ color: cyan }} />
                      <span className="font-bold text-lg text-[#f0f8ff]">{industry.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="pl-10 space-y-4">
                      <div>
                        <p className="font-semibold text-[#f0f8ff] mb-1">The pain:</p>
                        <p style={{ color: cyanMuted }}>{industry.pain}</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1" style={{ color: cyan }}>Soul Interface:</p>
                        <p className="text-[#e0f4ff]">{industry.solution}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg mb-12"
            style={{ color: cyanMuted }}
          >
            Plug Soul into your network, not into the internet.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl text-center border bg-[#12121a]"
                style={{ borderColor: `${cyan}30` }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0a0a0f] font-bold"
                  style={{ backgroundColor: cyan }}
                >
                  {index + 1}
                </div>
                <step.icon className="w-8 h-8 mx-auto mb-3" style={{ color: cyan }} />
                <h3 className="font-bold text-[#f0f8ff] mb-2">{step.title}</h3>
                <p className="text-sm" style={{ color: cyanMuted }}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="px-6 py-20 bg-[#0d0d14]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Compliance-First by Design
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg mb-12"
            style={{ color: cyanMuted }}
          >
            Built so legal, security, and audit all breathe easier.
          </motion.p>

          <div className="grid gap-4 sm:grid-cols-2">
            {compliancePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-xl flex items-start gap-4 border bg-[#12121a]"
                style={{ borderColor: `${cyan}25` }}
              >
                <point.icon className="w-7 h-7 flex-shrink-0" style={{ color: cyan }} />
                <div>
                  <h3 className="font-bold text-[#f0f8ff]">{point.title}</h3>
                  <p className="text-sm" style={{ color: cyanMuted }}>{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership Model Section */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Buy Your AI. Own It Forever.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: cyanMuted }}
          >
            Most workplace AI charges per user, per month, forever. We sell you a machine. You own it. That's it.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-2">
            {ownershipPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border bg-[#12121a]"
                style={{ borderColor: `${cyan}30` }}
              >
                <point.icon className="w-10 h-10 mb-4" style={{ color: cyan }} />
                <h3 className="font-bold text-lg mb-2 text-[#f0f8ff]">{point.title}</h3>
                <p style={{ color: cyanMuted }}>{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-[#0d0d14]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Ready to give your org AI without the compliance headache?
          </motion.h2>
          
          <motion.a
            href="mailto:contact@soulinterface.ai?subject=Soul Interface for Work Inquiry"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg text-[#0a0a0f] transition-all hover:opacity-90"
            style={{ backgroundColor: cyan }}
          >
            Talk to Sales
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg mt-12 text-[#e0f4ff]"
          >
            Work should be the place where AI makes things simpler — not where risk, latency, and subscription sprawl make it harder.
          </motion.p>
        </div>
      </section>

      <PageFooter />
    </div>
  );
};

export default Work;
