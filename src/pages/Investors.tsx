import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import PageFooter from "@/components/PageFooter";

const TOTAL_SLIDES = 16;
const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;

const Investors = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isLandscape, setIsLandscape] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(1);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Soul Interface | Investor Pitch Deck";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Soul Interface investor pitch deck. Sovereign AI for education.");
    }
  }, []);

  useEffect(() => {
    const checkOrientation = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsLandscape(width > height);
      setIsMobile(width < 1024);
      
      if (width < 1024) {
        const scaleX = (width - 32) / SLIDE_WIDTH;
        const scaleY = (height - 100) / SLIDE_HEIGHT;
        setScale(Math.min(scaleX, scaleY, 1));
      } else {
        setScale(1);
      }
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < TOTAL_SLIDES) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.key === "ArrowLeft" && currentSlide > 1) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => currentSlide < TOTAL_SLIDES && setCurrentSlide(prev => prev + 1);
  const prevSlide = () => currentSlide > 1 && setCurrentSlide(prev => prev - 1);

  const downloadPDF = async () => {
    if (!slideContainerRef.current || isGeneratingPDF) return;
    
    setIsGeneratingPDF(true);
    const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [SLIDE_WIDTH, SLIDE_HEIGHT] });
    const originalSlide = currentSlide;

    try {
      for (let i = 1; i <= TOTAL_SLIDES; i++) {
        setCurrentSlide(i);
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const canvas = await html2canvas(slideContainerRef.current, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#000000",
          width: SLIDE_WIDTH,
          height: SLIDE_HEIGHT,
        });
        
        const imgData = canvas.toDataURL("image/jpeg", 0.95);
        if (i > 1) pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, 0, SLIDE_WIDTH, SLIDE_HEIGHT);
      }
      
      pdf.save("Soul-Interface-Pitch-Deck.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setCurrentSlide(originalSlide);
      setIsGeneratingPDF(false);
    }
  };

  if (isMobile && !isLandscape) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center p-8 text-center">
        <div className="text-6xl mb-6">📱↔️</div>
        <h2 className="text-2xl font-bold text-white mb-4">Please Rotate Your Device</h2>
        <p className="text-gray-400">This pitch deck is best viewed in landscape mode.</p>
      </div>
    );
  }

  const slideStyle = isMobile ? {
    width: SLIDE_WIDTH,
    height: SLIDE_HEIGHT,
    transform: `scale(${scale})`,
    transformOrigin: "top center",
  } : {
    width: "100%",
    maxWidth: SLIDE_WIDTH,
    aspectRatio: "16/9",
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div
        ref={slideContainerRef}
        className="relative bg-black overflow-hidden"
        style={slideStyle}
      >
        {/* Slide 1: Title */}
        {currentSlide === 1 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12"
            style={{ background: "radial-gradient(ellipse at center, rgba(27,189,197,0.1) 0%, transparent 70%)" }}>
            <img src="/pitch-deck/logo.jpg" alt="Soul Interface" className="h-32 mb-8 object-contain" />
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
              Sovereign Intelligence. No Cloud Required.
            </h1>
            <p className="text-gray-500 text-sm mt-12 tracking-widest">CONFIDENTIAL</p>
          </div>
        )}

        {/* Slide 2: SEMA Proving Ground */}
        {currentSlide === 2 && (
          <div className="absolute inset-0 p-8 md:p-12 overflow-hidden">
            <p className="text-[#1bbdc5] text-sm tracking-wider mb-2">01 SEMA PROVING GROUND</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              We built a talking 240Z to prove that reasoning, edge AI can go anywhere
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { title: "The Constraint", text: "Touchscreens ruin classic interiors. Cloud voice fails in tunnels and dead zones. We needed instant voice, fully offline." },
                { title: "The Learning", text: "We learned to run reasoning + voice models on NVIDIA GPUs (Blackwell) with real-time latency, no cloud dependencies." },
                { title: "The Build", text: "Voice-first assistant, fully offline. Multilingual voice incl. Japanese TTS trained in house. Debuted at SEMA 2025 in 240Z \"Ace.\"" },
                { title: "The Pivot", text: "Cars are fun. Education is urgent. Founder's classroom background + today's safety failures make offline, controlled AI the wedge." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <h3 className="text-[#1bbdc5] font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[#1bbdc5] text-lg font-semibold">KITT is Cool, but Children are our Future</p>
          </div>
        )}

        {/* Slide 3: Full Disclosure */}
        {currentSlide === 3 && (
          <div className="absolute inset-0 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-2">Full Disclosure</h2>
            <p className="text-[#1bbdc5] text-lg mb-6">The Pivot: Taking what we learned at SEMA and turning it to Ed Tech</p>
            <div className="grid grid-cols-2 gap-6 h-[calc(100%-120px)]">
              <div className="flex items-center justify-center">
                <img src="/pitch-deck/ace-slide.jpg" alt="Ace at SEMA 2025" className="max-h-full max-w-full object-contain rounded-lg" />
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { title: "TECHNICAL LEARNING", text: "Warm public reception + clear demand for dependable, local intelligence in vehicles." },
                  { title: "WHY EDUCATION", text: "Kids + cloud AI = safety risk and liability. Parents and schools need controlled, offline AI with real socratic tutor ability now." },
                  { title: "FOCUS NOW", text: "Homeschool + Charters. FETC → summer implementations → fall paid pilots. Same platform stays modular for future knowledge packs." },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                    <h3 className="text-[#1bbdc5] font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Slide 4: The Problem */}
        {currentSlide === 4 && (
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col">
            <p className="text-[#1bbdc5] text-sm tracking-wider mb-2">THE PROBLEM</p>
            <h2 className="text-4xl font-bold text-white mb-2">Cloud AI Is a Liability.</h2>
            <h2 className="text-4xl font-bold text-[#1bbdc5] mb-8">Especially for Kids.</h2>
            <div className="grid grid-cols-3 gap-6 flex-1">
              {[
                { title: "Child Safety", text: "Every cloud AI connects kids to the open internet. Kids find jailbreaks. They share prompt injections on Discord. No parent can monitor what an AI says.", color: "#ef4444" },
                { title: "Data Harvesting", text: "Every question your child asks trains someone else's model. Their homework. Their fears. Their secrets.", color: "#eab308" },
                { title: "No Control", text: "Vendors change policies weekly. Models hallucinate. You can't customize it. You can't audit it. It's rented, not owned.", color: "#1bbdc5" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-900/50 rounded-lg p-5" style={{ borderLeft: `3px solid ${item.color}` }}>
                  <h3 className="font-semibold text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-white text-xl font-semibold mt-6">
              We bring the brain home. <span className="text-[#1bbdc5]">Offline. Private. Yours.</span>
            </p>
          </div>
        )}

        {/* Slide 5: The Solution */}
        {currentSlide === 5 && (
          <div className="absolute inset-0 p-8 md:p-12">
            <p className="text-[#1bbdc5] text-sm tracking-wider mb-2">THE SOLUTION</p>
            <h2 className="text-4xl font-bold text-white mb-8">The Sovereign Classroom</h2>
            <div className="grid grid-cols-2 gap-8 h-[calc(100%-120px)]">
              <div className="flex flex-col gap-4">
                {[
                  { title: "Offline by default", text: "No internet required. Nothing phones home. No jailbreaks. No prompt injections." },
                  { title: "Parent-controlled knowledge", text: "You decide curriculum, values, and boundaries—and what the AI is allowed to use." },
                  { title: "Runs on existing devices", text: "Works on the Chromebooks schools already own. Tower does compute; students use familiar devices." },
                  { title: "ELL-ready translation", text: "Real-time translation for ELL students and parent communication (33 languages)." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1bbdc5] mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                      <p className="text-gray-400 text-xs">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 flex flex-col">
                <p className="text-[#1bbdc5] text-xs mb-3">EXAMPLE INTERACTION</p>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-gray-300">Yeah, why is the sky blue? Is it true that it is reflecting the ocean?</p>
                  </div>
                  <div className="bg-[#1bbdc5]/10 border border-[#1bbdc5]/30 rounded-lg p-3">
                    <p className="text-gray-200">Sure, that's a little off topic, but since you finished early, I would love to help you explore this phenomenon. First let me ask you, is the sky always blue? That could help us answer the reflection question. Also, what do you know about Rainbows?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 6: Cancel the Stack */}
        {currentSlide === 6 && (
          <div className="absolute inset-0 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-1">ONE PURCHASE.</h2>
            <h2 className="text-4xl font-bold text-[#1bbdc5] mb-2">CANCEL THE STACK</h2>
            <p className="text-gray-400 mb-6">Replace subscriptions with an owned classroom OS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {[
                { title: "CURRICULUM", subtitle: "Lesson Plans & Flow", text: "Generate standards-aligned lessons and daily plans in minutes. Keep everything offline and teacher-controlled." },
                { title: "ASSESSMENT", subtitle: "Testing & Feedback", text: "Adaptive quizzes, grading support, and immediate feedback—without training on student work." },
                { title: "CLASSROOM MODE", subtitle: "Substitute-Safe", text: "Any warm body can run class with guardrails. Same plan, same prompts, same boundaries." },
                { title: "ADMIN LAYER", subtitle: "Attendance & Contact", text: "Permissions (DID), attendance, parent messaging, records—one system instead of many logins." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <p className="text-[#1bbdc5] text-xs tracking-wider mb-1">{item.title}</p>
                  <h3 className="text-white font-semibold text-sm mb-2">{item.subtitle}</h3>
                  <p className="text-gray-400 text-xs">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm">One platform now (Education). Future modules later, when the wedge is won.</p>
          </div>
        )}

        {/* Slide 7: ELL Superpower */}
        {currentSlide === 7 && (
          <div className="absolute inset-0 p-8 md:p-12">
            <p className="text-[#1bbdc5] text-sm tracking-wider mb-2">ELL SUPERPOWER</p>
            <h2 className="text-3xl font-bold text-white mb-6">
              Multilingual classrooms + parent communication — <span className="text-[#1bbdc5]">offline.</span>
            </h2>
            <div className="grid grid-cols-3 gap-6 h-[calc(100%-140px)]">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <h3 className="text-[#1bbdc5] font-semibold text-sm mb-3">ELL USE CASES</h3>
                <ul className="text-gray-300 text-xs space-y-2">
                  <li>• In-class translation + comprehension checks</li>
                  <li>• Homework support in native language</li>
                  <li>• Parent communication + conferences</li>
                  <li>• Newcomer onboarding (no new subscriptions)</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <h3 className="text-[#1bbdc5] font-semibold text-sm mb-3">LANGUAGES</h3>
                <ul className="text-gray-300 text-xs space-y-2">
                  <li>• Started with Japanese TTS for SEMA showcar</li>
                  <li>• Built for real-time voice in noisy environments</li>
                  <li>• Consistent voice identity across languages</li>
                  <li>• Works on existing Chromebooks + devices</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-[#1bbdc5]/10 border border-[#1bbdc5]/30 rounded-lg p-4">
                  <h3 className="text-[#1bbdc5] font-semibold text-sm mb-2">WHY CHARTERS CARE</h3>
                  <p className="text-gray-300 text-xs">Serve ELL students without sending data to the cloud</p>
                </div>
                <div className="bg-[#1bbdc5]/10 border border-[#1bbdc5]/30 rounded-lg p-4">
                  <h3 className="text-[#1bbdc5] font-semibold text-sm mb-2">WHY THIS IS DIFFERENT</h3>
                  <p className="text-gray-300 text-xs">Teachers keep one lesson flow; students hear it in their language. Parents get updates in the language they read.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 8: The Product */}
        {currentSlide === 8 && (
          <div className="absolute inset-0 p-8 md:p-12">
            <p className="text-[#1bbdc5] text-sm tracking-wider mb-2">THE PRODUCT</p>
            <h2 className="text-4xl font-bold text-white mb-6">The Tutor-in-a-Tower</h2>
            <div className="grid grid-cols-2 gap-8 h-[calc(100%-120px)]">
              <div className="flex items-center justify-center">
                <img src="/pitch-deck/tower-product.jpg" alt="Soul Interface Tower" className="max-h-full max-w-full object-contain rounded-lg" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-400 mb-4">On-prem AI compute + classroom router in one portable package</p>
                <ul className="space-y-3">
                  {[
                    "Runs advanced tutoring + reasoning locally",
                    "NVIDIA RTX 6000-class GPU with 48GB VRAM",
                    "Offline by default. No internet required.",
                    "Super-low latency. Instant responses.",
                    "Works with any device. Chromebooks, tablets, laptops.",
                    "Portable. Fits in a carry-on case.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white text-sm">
                      <span className="text-[#1bbdc5]">•</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-xs mt-6">Pre-loaded with curated curriculum packs + offline knowledge base (you choose what's inside).</p>
              </div>
            </div>
          </div>
        )}

        {/* Slide 9: ROI / The Math */}
        {currentSlide === 9 && (
          <div className="absolute inset-0 p-8 md:p-12">
            <p className="text-[#1bbdc5] text-sm tracking-wider mb-2">ROI / THE MATH</p>
            <h2 className="text-3xl font-bold text-white mb-1">For Most Florida Families,</h2>
            <h2 className="text-4xl font-bold text-[#1bbdc5] mb-8">It's Essentially Free.</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <h3 className="text-white font-semibold mb-2">Florida School Choice Stipend</h3>
                <p className="text-[#1bbdc5] text-3xl font-bold">Up to $8,000</p>
                <p className="text-gray-400 text-sm">per child, per year</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <h3 className="text-white font-semibold mb-2">Soul Interface Pioneer Edition</h3>
                <p className="text-[#1bbdc5] text-3xl font-bold">$19,995</p>
                <p className="text-gray-400 text-sm">one-time purchase, own forever</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <h3 className="text-white font-semibold mb-4">Family Size ROI</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">2 Kids: <span className="text-[#1bbdc5]">$4K+ left over in Year 1</span></p>
                  <p className="text-gray-300">3 Kids: <span className="text-[#1bbdc5]">$12K+ surplus</span></p>
                  <p className="text-gray-300">4+ Kids: <span className="text-[#1bbdc5]">Large families benefit most</span></p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-[#1bbdc5]/10 border border-[#1bbdc5]/30 rounded-lg p-4 text-center">
              <p className="text-white font-semibold">RENT-TO-OWN: ~$835/mo × 24 months</p>
              <p className="text-gray-400 text-sm">Structured as tutoring subscription. Own forever. Replaces recurring tutoring + curriculum subscriptions.</p>
            </div>
          </div>
        )}

        {/* Slide 10: Go-to-Market */}
        {currentSlide === 10 && (
          <div className="absolute inset-0 p-8 md:p-12">
            <p className="text-[#1bbdc5] text-sm tracking-wider mb-2">GO-TO-MARKET</p>
            <h2 className="text-3xl font-bold text-white mb-8">FETC → Summer Implementation → Fall Paid Pilots</h2>
            <div className="grid grid-cols-4 gap-4 h-[calc(100%-140px)]">
              {[
                { month: "JAN", title: "FETC Orlando", desc: "Dual-pronged: homeschool early adopters + charter decision-makers. Book demos and pilot scopes." },
                { month: "FEB–MAY", title: "Close Pilots", desc: "Demos → LOIs → paid pilot agreements. Define success metrics and training plan." },
                { month: "SUMMER", title: "Implement", desc: "Install towers, configure content, onboard staff. Charters can move quickly over summer." },
                { month: "FALL", title: "Run Classrooms", desc: "Run classrooms safely with outcomes. Convert to multi-unit deployments and renewals." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 flex flex-col">
                  <p className="text-[#1bbdc5] font-bold text-lg mb-2">{item.month}</p>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs flex-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Slide 11: Oakland Showroom */}
        {currentSlide === 11 && (
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col items-center justify-center"
            style={{ background: "radial-gradient(ellipse at center, rgba(27,189,197,0.15) 0%, transparent 70%)" }}>
            <p className="text-[#1bbdc5] text-sm tracking-wider mb-4">OAKLAND SHOWROOM</p>
            <h2 className="text-5xl font-bold text-white mb-6 text-center">"See it. Try it. Own it."</h2>
            <p className="text-gray-400 text-center max-w-2xl mb-8">
              Convenient off-freeway demo space for local, affluent homeschool families. Unit assembly, service and repair also on-site.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {[
                "Bring-your-Chromebook Co-op events",
                "Hands-on trials + Q&A nights",
                "Pickup, setup, and parent referrals",
                "Support from our Field Ops specialist",
              ].map((item, i) => (
                <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
                  <p className="text-gray-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Slide 12: Traction */}
        {currentSlide === 12 && (
          <div className="absolute inset-0 p-8 md:p-12">
            <p className="text-[#1bbdc5] text-sm tracking-wider mb-2">TRACTION</p>
            <h2 className="text-4xl font-bold text-white mb-8">Proof, Pipeline, Next</h2>
            <div className="grid grid-cols-2 gap-6 h-[calc(100%-120px)]">
              <div className="space-y-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                  <p className="text-[#1bbdc5] text-xs tracking-wider mb-1">VALIDATED AT SEMA 2025</p>
                  <h3 className="text-white font-semibold mb-2">240Z "Ace" Voice Demo</h3>
                  <p className="text-gray-400 text-sm">Functional AI in a $110K show car. 6 languages, weather, nav, Spotify, vehicle specs. All offline, real-time.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                  <p className="text-[#1bbdc5] text-xs tracking-wider mb-1">JANUARY 2026</p>
                  <h3 className="text-white font-semibold mb-2">FETC Orlando</h3>
                  <p className="text-gray-400 text-sm">Dual-pronged lead gen: homeschool early adopters + charter decision-makers. Goal: 50+ qualified leads and summer install bookings.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                  <p className="text-[#1bbdc5] text-xs tracking-wider mb-1">IN PIPELINE: 2026 SCHOOL YEAR</p>
                  <h3 className="text-white font-semibold mb-2">Charter Pilot Scoping</h3>
                  <p className="text-gray-400 text-sm">Active conversations with charter leaders in Oakland and Reno. Defining paid fall pilots and implementation needs.</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                  <p className="text-[#1bbdc5] text-xs tracking-wider mb-1">SPRING–SUMMER 2026</p>
                  <h3 className="text-white font-semibold mb-2">Implementation Window</h3>
                  <p className="text-gray-400 text-sm">Charters can move fast over summer: installs, onboarding, and content setup ahead of fall paid pilots.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 13: The Team */}
        {currentSlide === 13 && (
          <div className="absolute inset-0 p-8 md:p-12">
            <p className="text-[#1bbdc5] text-sm tracking-wider mb-2">THE TEAM</p>
            <h2 className="text-4xl font-bold text-white mb-8">Vision Meets Craft</h2>
            <div className="grid grid-cols-2 gap-8 h-[calc(100%-140px)]">
              {[
                {
                  name: "Ben Adler",
                  role: "Founder & CEO",
                  img: "/pitch-deck/ben-adler.jpg",
                  section: "THE WHY",
                  bio: "MBA. Master's in Education. 5 years as Science Dept Head. Watched kids outsmart every digital safeguard. Knew exactly what tool they needed but couldn't build it. Born tinkerer. AI finally let him create the tutor he wished he'd had in his classroom.",
                  builds: "Voice AI pipelines, GPU optimization, custom personas."
                },
                {
                  name: "Ansel Iisaka",
                  role: "Co-Founder & CDO",
                  img: "/pitch-deck/ansel-iisaka.jpg",
                  section: "THE HOW",
                  bio: "ArtCenter College of Design, BS Industrial Design. Senior Industrial Designer at MTM Watch. Product Designer at Academy Design. Shipped to Disney and Fairmont. 5+ years taking concepts from sketch to factory-ready CAD.",
                  builds: "Enclosure design, DFM, manufacturing partnerships."
                },
              ].map((person, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={person.img} alt={person.name} className="w-24 h-24 rounded-lg object-cover" />
                    <div>
                      <h3 className="text-white font-bold text-xl">{person.name}</h3>
                      <p className="text-[#1bbdc5]">{person.role}</p>
                    </div>
                  </div>
                  <p className="text-[#1bbdc5] text-xs tracking-wider mb-2">{person.section}</p>
                  <p className="text-gray-400 text-sm mb-3">{person.bio}</p>
                  <p className="text-gray-500 text-xs"><span className="text-[#1bbdc5]">Builds:</span> {person.builds}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">Next hire: Field Ops / Support (build + install + service).</p>
          </div>
        )}

        {/* Slide 14: Trust + Defensibility */}
        {currentSlide === 14 && (
          <div className="absolute inset-0 p-8 md:p-12">
            <p className="text-[#1bbdc5] text-sm tracking-wider mb-2">TRUST + DEFENSIBILITY</p>
            <h2 className="text-3xl font-bold text-white mb-6">Built to be safe, ownable, and procurement-ready</h2>
            <div className="grid grid-cols-2 gap-6 h-[calc(100%-140px)]">
              <div className="space-y-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                  <h3 className="text-[#1bbdc5] font-semibold mb-3">CORE IP (PROVISIONALS FILED)</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-300"><span className="text-white font-semibold">Voice Dubbing with Speaker Preservation</span> — Same voice, any language.</li>
                    <li className="text-gray-300"><span className="text-white font-semibold">Decentralized Student Records</span> — Grades, IEPs, and likeness rights that kids own.</li>
                    <li className="text-gray-300"><span className="text-white font-semibold">Classroom Roles & Permissions (DID)</span> — Simple access control without password chaos.</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                  <h3 className="text-[#1bbdc5] font-semibold mb-3">TRADE SECRETS</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Train Custom Voices Locally</li>
                    <li>• Edge Deployment Know-How</li>
                    <li>• Adaptive Learning Assessment</li>
                  </ul>
                </div>
                <div className="bg-[#1bbdc5]/10 border border-[#1bbdc5]/30 rounded-lg p-5">
                  <h3 className="text-[#1bbdc5] font-semibold mb-3">PROCUREMENT TRUST (IN PROGRESS)</h3>
                  <p className="text-gray-300 text-sm">Aligning with: 1EdTech TrustEd Apps • SDPC NDPA/State DPAs • COPPA Safe Harbor • Common Sense Privacy.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 15: The Ask */}
        {currentSlide === 15 && (
          <div className="absolute inset-0 p-8 md:p-12">
            <p className="text-[#1bbdc5] text-sm tracking-wider mb-2">THE ASK</p>
            <h2 className="text-4xl font-bold text-white mb-2">Seed Round: <span className="text-[#1bbdc5]">$900,000</span></h2>
            <div className="grid grid-cols-2 gap-8 mt-6 h-[calc(100%-140px)]">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h3 className="text-white font-semibold text-xl mb-4">USE OF FUNDS</h3>
                <div className="space-y-3">
                  {[
                    { pct: "35%", label: "R&D", desc: "Voice AI, reasoning, curriculum tools" },
                    { pct: "30%", label: "Team", desc: "Field Ops/Support hire + ops" },
                    { pct: "20%", label: "GTM", desc: "FETC, paid pilots, partnerships" },
                    { pct: "15%", label: "Showroom", desc: "Oakland demo space + events" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-[#1bbdc5] font-bold text-lg w-12">{item.pct}</span>
                      <div>
                        <p className="text-white font-semibold text-sm">{item.label}</p>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h3 className="text-white font-semibold text-xl mb-4">18-MONTH MILESTONES</h3>
                <div className="space-y-4">
                  {[
                    { title: "Paid pilots launched", desc: "January 2026 pilots with charters + sign up first homeschool cohorts" },
                    { title: "$2M+ in revenue", desc: "Hardware + services; 30%+ gross margin target" },
                    { title: "Series A bar", desc: "Repeatable installs, retention/outcomes, scalable support, and multi-state charter rollout." },
                  ].map((item, i) => (
                    <div key={i} className="border-l-2 border-[#1bbdc5] pl-3">
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 16: Thank You */}
        {currentSlide === 16 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12"
            style={{ background: "radial-gradient(ellipse at center, rgba(27,189,197,0.1) 0%, transparent 70%)" }}>
            <img src="/pitch-deck/logo.jpg" alt="Soul Interface" className="h-24 mb-8 object-contain" />
            <h2 className="text-5xl font-bold text-white mb-8">Thank You</h2>
            <p className="text-gray-500 text-sm tracking-widest mb-8">CONFIDENTIAL</p>
            
            {!isGeneratingPDF && (
              <button
                onClick={downloadPDF}
                data-no-print
                className="flex items-center gap-2 bg-[#1bbdc5] hover:bg-[#1bbdc5]/80 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Download size={20} />
                Download PDF
              </button>
            )}
          </div>
        )}

        {/* Navigation Controls */}
        {!isGeneratingPDF && (
          <>
            {currentSlide > 1 && (
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            {currentSlide < TOTAL_SLIDES && (
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            )}
            
            {/* Slide indicator dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
              {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i + 1)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === i + 1 ? "bg-[#1bbdc5]" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
            
            {/* Slide number */}
            <div className="absolute bottom-4 right-4 text-gray-500 text-sm">
              {currentSlide} / {TOTAL_SLIDES}
            </div>
          </>
        )}
      </div>

      <div className="mt-8 w-full max-w-[1280px]">
        <PageFooter />
      </div>
    </div>
  );
};

export default Investors;
