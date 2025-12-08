import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CloudOff,
  CreditCard,
  Shield,
  Wallet,
  GraduationCap,
  Users,
  ClipboardCheck,
  Languages,
  Gamepad2,
  UserCircle,
  Settings,
  Calendar,
  BarChart3,
  Lock,
  Eye,
  UserCog,
  School,
  Headphones,
  Lightbulb,
  TrendingUp,
  Target,
  Map,
  ArrowLeft,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "AI Tutor",
    description: "Step-by-step explanations in math, science, reading, and more.",
  },
  {
    icon: Users,
    title: "Teacher's Aide",
    description: "Helps you plan lessons, projects, and experiments so you're never on your own.",
  },
  {
    icon: ClipboardCheck,
    title: "Adaptive Assessments",
    description: "Generates and grades quizzes with instant, guided feedback and clear reporting.",
  },
  {
    icon: Languages,
    title: "Multilingual Translator",
    description: "Explains and translates in your family's languages for content and conversation.",
  },
  {
    icon: Gamepad2,
    title: "Story & Game Engine",
    description: "Turns lessons into stories, simulations, and games to keep kids engaged.",
  },
  {
    icon: UserCircle,
    title: "Likeness Studio (optional)",
    description: "Create personalized avatars and materials that never leave your network.",
  },
];

const steps = [
  {
    icon: Settings,
    title: "Set up once",
    description: "We deliver a preconfigured tower, set up student logins and Chromebooks, and align the system with your curriculum.",
  },
  {
    icon: Calendar,
    title: "Daily use",
    description: "Kids log in to their profile, get guided lessons, ask the AI tutor questions, and take quick checks for understanding.",
  },
  {
    icon: BarChart3,
    title: "Review & report",
    description: "Parents get clear dashboards and printable summaries for portfolios, learning plans, and voucher compliance.",
  },
];

const safetyPoints = [
  {
    icon: Lock,
    title: "No student data in the cloud",
    description: "All tutoring, testing, and creative work stay on your home tower. Nothing is sent to external servers.",
  },
  {
    icon: Eye,
    title: "You control your child's digital likeness",
    description: "If you choose to create a personalized avatar model, it is trained and stored only on your local network. You can revoke its use at any time.",
  },
  {
    icon: UserCog,
    title: "Parent in the loop",
    description: "You decide which apps are active, what content is allowed, and when the system is on.",
  },
];

const charterCards = [
  {
    icon: School,
    title: "Charter classrooms",
    description: "One tower per classroom or per floor. The AI tutor and assessment engine support teachers with planning and differentiation.",
  },
  {
    icon: Headphones,
    title: "ELL simultranslation",
    description: "Teacher speaks once; students hear the lesson in their own language through headsets. Our \"Soul Bridge\" speech-to-speech module runs fully offline, preserving the teacher's voice and pacing.",
  },
  {
    icon: Lightbulb,
    title: "After-school pods",
    description: "Mixed-age pods use the tower for project-based learning, science simulations, and language practice—without needing district IT or cloud subscriptions.",
  },
];

const investorColumns = [
  {
    icon: TrendingUp,
    title: "Market",
    description: "States are shifting billions in public funds into homeschool and ESA programs. Each Soul Interface tower can serve an entire family or homeschool collective.",
  },
  {
    icon: Target,
    title: "Differentiation",
    description: "Fully offline AI tutor, translator, and assessment engine. Strong technical moat around privacy and local likeness control. Hardware + software bundle with no required subscriptions.",
  },
  {
    icon: Map,
    title: "Roadmap",
    description: "Early pilots with homeschool families and pods. Seed round of $900K to scale Florida homeschool deployments and simultranslation pilots with charters.",
  },
];

const faqs = [
  {
    question: "Does it work without internet?",
    answer: "Yes. Once the tower is set up, all tutoring and translation can run without internet access.",
  },
  {
    question: "Is this allowed under ESA / voucher rules?",
    answer: "The tower is educational technology and curriculum support. Families in voucher programs typically can use funds for devices and software that support learning. We will work with you to align purchases with your state's guidelines.",
  },
  {
    question: "What does it cost?",
    answer: "Pricing depends on configuration and support. In most cases, one tower can serve an entire family or homeschool pod. Contact us to discuss your setup.",
  },
  {
    question: "What curriculum does it use?",
    answer: "Soul Interface doesn't replace your curriculum—it amplifies it. The AI tutor and tools align to common K–8 learning goals and can be configured to work alongside popular homeschool curricula.",
  },
  {
    question: "Is my child's data safe?",
    answer: "Student work, progress, and any avatar models are stored locally on your tower, not in the cloud. You can delete them at any time.",
  },
];

const Homeschool = () => {
  useEffect(() => {
    document.title = "Private AI for Homeschoolers | Soul Interface";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Soul Interface is an offline AI tutor and teacher's aide that lives in your home – no cloud, no ads, no data leaving your network.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d12] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d12]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/a31111c7-f4ed-47e8-8d33-0d4480f635d8.png" alt="Soul Interface" className="h-8 w-8" />
            <span className="font-semibold text-lg">Soul Interface</span>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Private AI for <span className="text-[#2CE0D0]">Homeschoolers</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Soul Interface is an offline AI tutor and teacher's aide that lives in your home – no cloud, no ads, no data leaving your network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-[#2CE0D0] text-black font-semibold hover:bg-[#2CE0D0]/90 px-6 py-6 text-base"
                >
                  <a href="mailto:hello@soulinterface.ai?subject=Homeschool%20Demo%20Request">
                    Request a Homeschool Demo
                  </a>
                </Button>
                <a
                  href="mailto:hello@soulinterface.ai?subject=Investor%20Overview%20Request"
                  className="text-[#2CE0D0] hover:text-[#2CE0D0]/80 underline underline-offset-4 text-center sm:text-left py-3"
                >
                  Download 1-Page Investor Overview
                </a>
              </div>
              <p className="mt-6 text-sm text-white/60">
                Built by an 8th-grade science teacher and AI engineer.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#141420] rounded-2xl h-64 md:h-80 flex items-center justify-center border border-white/10 shadow-[0_0_60px_rgba(44,224,208,0.1)]">
                <div className="text-center text-white/40">
                  <GraduationCap className="w-16 h-16 mx-auto mb-3 text-[#2CE0D0]/50" />
                  <span className="text-sm">Tower + Kids Illustration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 md:py-20 px-4 bg-[#0a0a0f]">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why homeschool families need a <span className="text-[#2CE0D0]">different kind</span> of EdTech
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Homeschool parents want the best of modern AI without handing their child's data to Big Tech. Soul Interface gives you a complete learning environment in one tower – tutor, translator, assessment engine, storyteller – all running locally in your home.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: CloudOff, text: "No cloud: Lessons, assessments, and even image generation stay on your network." },
                  { icon: CreditCard, text: "No subscriptions: One tower can serve your whole homeschool collective." },
                  { icon: Shield, text: "No content roulette: You choose the curriculum and guardrails." },
                  { icon: Wallet, text: "Voucher-friendly: Designed to fit ESA / homeschool voucher spending models like Florida's." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5">
                    <item.icon className="w-6 h-6 text-[#2CE0D0] flex-shrink-0 mt-0.5" />
                    <p className="text-white/80">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#141420] rounded-2xl h-64 md:h-80 flex items-center justify-center border border-white/10">
                <div className="text-center text-white/40">
                  <div className="w-20 h-20 mx-auto mb-3 bg-[#2CE0D0]/10 rounded-xl flex items-center justify-center">
                    <div className="w-12 h-16 bg-[#2CE0D0]/30 rounded" />
                  </div>
                  <span className="text-sm">Tower Product Image</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Soul Interface <span className="text-[#2CE0D0]">Homeschool Tower</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  The Soul Interface Tower is a dedicated AI computer for your homeschool. It runs large language models, generative graphics, and assessments entirely offline, serving multiple kids over your home Wi-Fi.
                </p>
                <p className="text-sm text-white/50 italic">
                  Powered by on-device large language and diffusion models tuned for education.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 bg-[#141420] rounded-xl border border-white/10 hover:border-[#2CE0D0]/30 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-[#2CE0D0] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-20 px-4 bg-[#0a0a0f]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How it fits into your <span className="text-[#2CE0D0]">homeschool week</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-[#2CE0D0]/10 flex items-center justify-center mb-4 border border-[#2CE0D0]/30">
                      <step.icon className="w-8 h-8 text-[#2CE0D0]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#2CE0D0] text-black font-bold flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/4 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#2CE0D0]/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Privacy Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Safety and privacy <span className="text-[#2CE0D0]">by design</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {safetyPoints.map((point) => (
                <div key={point.title} className="p-6 bg-[#141420] rounded-xl border border-white/10">
                  <point.icon className="w-10 h-10 text-[#2CE0D0] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
                  <p className="text-white/70 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-white/50 italic">
              We are developing IP around local, consent-driven control of AI likeness models for children.
            </p>
          </div>
        </section>

        {/* Charters / Microschools Section */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#0d1a1a] to-[#0d0d12]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Also built for <span className="text-[#2CE0D0]">charters, microschools, and learning pods</span>
            </h2>
            <p className="text-lg text-white/80 text-center mb-12 max-w-3xl mx-auto">
              The same offline AI stack that powers our homeschool tower can serve charter schools, microschools, and community learning pods.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {charterCards.map((card) => (
                <div key={card.title} className="p-6 bg-[#141420]/80 rounded-xl border border-[#2CE0D0]/20 hover:border-[#2CE0D0]/40 transition-colors">
                  <card.icon className="w-10 h-10 text-[#2CE0D0] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-white/70">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#141420] rounded-2xl h-64 md:h-80 flex items-center justify-center border border-white/10">
                <div className="text-center text-white/40">
                  <UserCircle className="w-20 h-20 mx-auto mb-3 text-[#2CE0D0]/50" />
                  <span className="text-sm">Founder Photo</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  From 8th-grade science teacher to <span className="text-[#2CE0D0]">AI toolmaker</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  Soul Interface was founded by Ben Adler, an 8th-grade science teacher who spent years teaching in high-need schools in Oakland. His students designed rockets in Kerbal, ran simulations on school laptops, and learned that the right tech can flip a class from checked-out to fully engaged.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  During and after the pandemic, he saw both the power and the limits of virtual learning. Soul Interface is his answer: AI that amplifies great teaching—without exporting kids' data to the cloud.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investor Angle Section */}
        <section className="py-16 md:py-20 px-4 bg-[#0a0a0f]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why this matters for <span className="text-[#2CE0D0]">investors</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {investorColumns.map((col) => (
                <div key={col.title} className="p-6 bg-[#141420] rounded-xl border border-white/10">
                  <col.icon className="w-10 h-10 text-[#2CE0D0] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{col.title}</h3>
                  <p className="text-white/70">{col.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                asChild
                className="bg-[#2CE0D0] text-black font-semibold hover:bg-[#2CE0D0]/90 px-8 py-6 text-base"
              >
                <a href="mailto:hello@soulinterface.ai?subject=Investor%20Brief%20Request">
                  Request Investor Brief
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently asked <span className="text-[#2CE0D0]">questions</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#141420] rounded-xl border border-white/10 px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-[#2CE0D0] transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <img src="/lovable-uploads/a31111c7-f4ed-47e8-8d33-0d4480f635d8.png" alt="Soul Interface" className="h-10 w-10" />
                <span className="font-semibold text-xl">Soul Interface</span>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
                <Link to="/" className="hover:text-[#2CE0D0] transition-colors">Home</Link>
                <Link to="/homeschool" className="text-[#2CE0D0]">Homeschool</Link>
                <Link to="/sema" className="hover:text-[#2CE0D0] transition-colors">Auto</Link>
                <Link to="/tech" className="hover:text-[#2CE0D0] transition-colors">Technology</Link>
                <Link to="/vision" className="hover:text-[#2CE0D0] transition-colors">About</Link>
                <Link to="/investors" className="hover:text-[#2CE0D0] transition-colors">Investors</Link>
              </div>
              <a
                href="mailto:hello@soulinterface.ai"
                className="text-[#2CE0D0] hover:text-[#2CE0D0]/80 transition-colors"
              >
                hello@soulinterface.ai
              </a>
            </div>
            <p className="text-center text-white/50 text-sm mt-8">
              © {new Date().getFullYear()} Soul Interface Inc.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Homeschool;
