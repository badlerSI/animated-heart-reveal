import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Investors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLandscape, setIsLandscape] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(1);
  const totalSlides = 5;

  useEffect(() => {
    document.title = "Investor Pitch Deck - Soul Interface";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Soul Interface investor pitch deck: cloud-free AI technology for vehicles"
      );
    }

    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check orientation
    const checkOrientation = () => {
      if (window.innerWidth <= 768) {
        setIsLandscape(window.innerWidth > window.innerHeight);
      } else {
        setIsLandscape(true);
      }
    };

    checkMobile();
    checkOrientation();

    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  // Calculate scale for mobile landscape
  useEffect(() => {
    const calculateScale = () => {
      if (window.innerWidth <= 768) {
        const designWidth = 1280;
        const designHeight = 720;
        const availableWidth = window.innerWidth - 32; // padding
        const availableHeight = window.innerHeight - 80; // nav space
        const scaleX = availableWidth / designWidth;
        const scaleY = availableHeight / designHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(Math.max(newScale, 0.3)); // minimum scale 0.3
      } else {
        setScale(1);
      }
    };
    
    calculateScale();
    window.addEventListener('resize', calculateScale);
    window.addEventListener('orientationchange', calculateScale);
    
    return () => {
      window.removeEventListener('resize', calculateScale);
      window.removeEventListener('orientationchange', calculateScale);
    };
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Show rotation prompt on mobile portrait
  if (isMobile && !isLandscape) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center p-6 z-50">
        <div className="text-center space-y-6">
          <div className="text-6xl text-cyan-white cyan-glow animate-pulse">
            <i className="fa-solid fa-mobile-screen-button"></i>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Please Rotate Your Device</h2>
            <p className="text-white/70">This pitch deck is best viewed in landscape orientation</p>
          </div>
          <div className="text-cyan-white cyan-glow text-4xl animate-bounce">
            <i className="fa-solid fa-rotate"></i>
          </div>
        </div>
        <style>{`
          .cyan-glow {
            filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.6));
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-2 md:p-4 lg:p-10">
      <style>{`
        .slide-container-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .slide-container {
          width: 1280px;
          height: 720px;
          background-color: #000;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 50px rgba(0,0,0,0.8);
          border: 1px solid rgba(0, 255, 255, 0.2);
          transform: scale(${scale});
          transform-origin: top center;
        }

        @media (min-width: 769px) {
          .slide-container {
            max-width: 100%;
            max-height: calc(100vh - 200px);
          }
        }
        
        .slide-inner {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .cyan-glow {
          filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.6));
        }

        .cyan-glow-strong {
          filter: drop-shadow(0 0 15px rgba(0, 255, 255, 0.8))
                  drop-shadow(0 0 30px rgba(0, 255, 255, 0.4));
        }

        .metal-text {
          background: linear-gradient(180deg, #ffffff 0%, #94a3b8 50%, #64748b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .neon-flicker {
          animation: neon-flicker 3s ease-in-out infinite;
        }

        @keyframes neon-flicker {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.6));
          }
          25% {
            filter: drop-shadow(0 0 12px rgba(0, 255, 255, 0.8));
          }
          50% {
            filter: drop-shadow(0 0 6px rgba(0, 255, 255, 0.4));
          }
          75% {
            filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.7));
          }
        }

        .radial-glow {
          background: radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
        }
      `}</style>

      {/* Navigation */}
      <div className="w-full max-w-[1280px] flex justify-end items-center mb-2 md:mb-4 px-2">
        <div className="text-white text-xs md:text-sm">
          Slide {currentSlide + 1} / {totalSlides}
        </div>
      </div>

      {/* Slide Container */}
      <div className="slide-container-wrapper">
        <div className="slide-container">
        {/* Slide 1: Opening Image */}
        {currentSlide === 0 && (
          <div className="w-full h-full relative flex items-center justify-center bg-black">
            <div className="absolute inset-0 radial-glow"></div>
            <img 
              src="/pitch-deck/opening-slide.png" 
              alt="Soul Interface Opening Slide" 
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        )}

        {/* Slide 2: Soul Box */}
        {currentSlide === 1 && (
          <div className="slide-inner bg-black">
            <div className="absolute inset-0 radial-glow"></div>
            <div className="absolute bottom-[-50px] right-[-50px] text-[280px] opacity-[0.02] text-cyan-white" style={{ fontFamily: "'Noto Serif TC', serif" }}>心</div>

            <div className="grid grid-cols-2 h-full relative z-10 px-6 py-6 md:px-12 md:py-8 gap-8">
              <div className="flex flex-col justify-center pr-6">
                <h2 className="font-sans font-bold text-3xl metal-text tracking-wider uppercase mb-2">Private AI</h2>
                <h3 className="font-sans font-normal text-xl text-cyan-white cyan-glow mb-8 tracking-wide">Carry-On-Sized Offline Machine Interpreter</h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-lg text-white/90">
                    <i className="fa-solid fa-server text-cyan-white cyan-glow mt-1 flex-shrink-0"></i>
                    <span>Carry‑on RTX 6000 mini‑datacenter</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-white/90">
                    <i className="fa-solid fa-bolt text-cyan-white cyan-glow mt-1 flex-shrink-0"></i>
                    <span>Cloud‑free, 120V plug‑anywhere power</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-white/90">
                    <i className="fa-solid fa-microphone-lines text-cyan-white cyan-glow mt-1 flex-shrink-0"></i>
                    <span>Voice‑first, screen‑optional, app‑connected</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-white/90">
                    <i className="fa-solid fa-language text-cyan-white cyan-glow mt-1 flex-shrink-0"></i>
                    <span>The most capable non-human interpreter there is</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-white/90">
                    <i className="fa-solid fa-brain text-cyan-white cyan-glow mt-1 flex-shrink-0"></i>
                    <span>Preloaded knowledge + patent‑pending "souls"</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center items-center relative">
                <div className="absolute w-80 h-80 bg-cyan-white opacity-10 blur-3xl rounded-full neon-flicker"></div>
                
                <div className="w-80 h-56 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-cyan-white/20 shadow-2xl relative flex items-center justify-center">
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-white/30"></div>
                  <div className="text-6xl text-cyan-white cyan-glow-strong" style={{ fontFamily: "'Noto Serif TC', serif" }}>心</div>
                  <div className="absolute bottom-3 left-0 right-0 flex gap-2 px-6">
                    <div className="h-1 bg-gray-800 flex-1 rounded"></div>
                    <div className="h-1 bg-gray-800 flex-1 rounded"></div>
                    <div className="h-1 bg-gray-800 flex-1 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-8 text-white/50 text-xs tracking-wider uppercase">
                <i className="fa-solid fa-shield-halved mr-2 text-cyan-white cyan-glow"></i>Cloud-free. Local-only. No data leaves the box.
              </div>
            </div>
          </div>
        )}

        {/* Slide 3: Three Pillars */}
        {currentSlide === 2 && (
          <div className="slide-inner bg-black">
            <div className="absolute inset-0 radial-glow"></div>
            <div className="absolute top-[-50px] left-[-50px] text-[280px] opacity-[0.02] text-cyan-white" style={{ fontFamily: "'Noto Serif TC', serif" }}>心</div>

            <div className="h-full flex flex-col px-6 py-6 md:px-12 md:py-8 relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider metal-text">
                  Save Lives <span className="text-cyan-white cyan-glow mx-3">→</span> Change Lives <span className="text-cyan-white cyan-glow mx-3">→</span> Better Lives
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-6 flex-1">
                {/* Pillar 1 */}
                <div className="border border-cyan-white/20 bg-white/5 rounded-lg p-6 flex flex-col hover:border-cyan-white/40 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-white to-transparent opacity-50"></div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full border border-cyan-white/50 flex items-center justify-center text-cyan-white cyan-glow">
                      <i className="fa-solid fa-truck-medical text-sm"></i>
                    </div>
                    <h3 className="text-lg font-semibold metal-text tracking-wide">Save Lives</h3>
                  </div>
                  <ul className="space-y-4 text-white/70 text-base flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-white mt-1.5 text-xs flex-shrink-0">●</span>
                      <span>APCs & humanitarian vehicles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-white mt-1.5 text-xs flex-shrink-0">●</span>
                      <span>Offline field language interpreter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-white mt-1.5 text-xs flex-shrink-0">●</span>
                      <span>Plain‑language vehicle health alerts</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2 */}
                <div className="border border-cyan-white/20 bg-white/5 rounded-lg p-6 flex flex-col hover:border-cyan-white/40 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-white to-transparent opacity-50"></div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full border border-cyan-white/50 flex items-center justify-center text-cyan-white cyan-glow">
                      <i className="fa-solid fa-eye text-sm"></i>
                    </div>
                    <h3 className="text-lg font-semibold metal-text tracking-wide">Change Lives</h3>
                  </div>
                  <ul className="space-y-4 text-white/70 text-base flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-white mt-1.5 text-xs flex-shrink-0">●</span>
                      <span>Accessibility & visually impaired</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-white mt-1.5 text-xs flex-shrink-0">●</span>
                      <span>Ed‑tech pilots – charter / homeschool</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-white mt-1.5 text-xs flex-shrink-0">●</span>
                      <span>Interpreter + teacher's aide in a box</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 3 */}
                <div className="border border-cyan-white/20 bg-white/5 rounded-lg p-6 flex flex-col hover:border-cyan-white/40 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-white to-transparent opacity-50"></div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full border border-cyan-white/50 flex items-center justify-center text-cyan-white cyan-glow">
                      <i className="fa-regular fa-compass text-sm"></i>
                    </div>
                    <h3 className="text-lg font-semibold metal-text tracking-wide">Better Lives</h3>
                  </div>
                  <ul className="space-y-4 text-white/70 text-base flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-white mt-1.5 text-xs flex-shrink-0">●</span>
                      <span>Motorhomes & yachts off‑grid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-white mt-1.5 text-xs flex-shrink-0">●</span>
                      <span>Classic talking car experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-white mt-1.5 text-xs flex-shrink-0">●</span>
                      <span>"After‑internet" prepper knowledge</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="uppercase tracking-wider text-cyan-white cyan-glow text-sm font-semibold">Start where Soul can save lives first.</p>
              </div>
            </div>
          </div>
        )}

        {/* Slide 4: Economics */}
        {currentSlide === 3 && (
          <div className="slide-inner bg-black">
            <div className="absolute inset-0 radial-glow"></div>
            <div className="absolute bottom-[-50px] right-[-50px] text-[280px] opacity-[0.02] text-cyan-white" style={{ fontFamily: "'Noto Serif TC', serif" }}>心</div>

            <div className="h-full flex flex-col px-6 py-6 md:px-12 md:py-8 relative z-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold uppercase tracking-wider metal-text mb-2">$20k Box, Strong Margins, OEM Upside</h2>
                <div className="w-20 h-1 bg-cyan-white cyan-glow"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-10 px-4 gap-8">
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3 mb-5 text-cyan-white cyan-glow text-xl">
                      <i className="fa-solid fa-cube"></i>
                      <h3 className="font-bold uppercase tracking-wide metal-text">Our Unit</h3>
                    </div>
                    <div className="space-y-3 text-lg">
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-white/60">Price</span>
                        <span className="text-white font-mono">≈ $20k</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-white/60">Cost</span>
                        <span className="text-white font-mono">≈ $10k marginal</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-white/60">Target</span>
                        <span className="text-cyan-white cyan-glow font-mono font-bold">{'>'}$5k net profit/unit</span>
                      </div>
                      <div className="text-sm text-white/40 pt-2 italic">Education Edition: discounted</div>
                    </div>
                  </div>

                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3 mb-5 text-cyan-white cyan-glow text-xl">
                      <i className="fa-solid fa-industry"></i>
                      <h3 className="font-bold uppercase tracking-wide metal-text">Partner Econ</h3>
                    </div>
                    <ul className="space-y-3 text-base">
                      <li className="flex items-start gap-3 text-white/90">
                        <i className="fa-solid fa-check text-cyan-white text-sm mt-1 flex-shrink-0"></i>
                        <span>APC / vehicle / yacht builders</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/90">
                        <i className="fa-solid fa-check text-cyan-white text-sm mt-1 flex-shrink-0"></i>
                        <span>Soul as AI copilot + diagnostics</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/90">
                        <i className="fa-solid fa-check text-cyan-white cyan-glow text-sm mt-1 flex-shrink-0"></i>
                        <span className="text-cyan-white cyan-glow">$50k value to end customer =<br />Big financial incentive to builder</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/90">
                        <i className="fa-solid fa-check text-cyan-white text-sm mt-1 flex-shrink-0"></i>
                        <span>We earn per‑unit + integration fees</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full max-w-3xl mx-auto mb-6">
                  <div className="flex h-14 w-full relative rounded overflow-hidden border border-cyan-white/50 cyan-glow">
                    <div className="w-2/3 bg-gray-900 flex items-center justify-center border-r border-white/20 relative">
                      <span className="text-white/60 font-mono text-base font-bold z-10">Cost ~10k</span>
                    </div>
                    <div className="w-1/3 bg-gradient-to-r from-gray-300 to-white flex items-center justify-center relative">
                      <span className="text-black font-mono text-base font-bold">Soul Profit 5k+</span>
                      <div className="absolute top-0 right-0 bottom-0 w-1 bg-cyan-white cyan-glow-strong"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-cyan-white cyan-glow mt-2 px-1 uppercase tracking-wide font-semibold">
                    <span>Hardware</span>
                    <span>Margin</span>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <p className="text-white/60 text-sm italic border-t border-white/10 inline-block pt-3 px-6">Partners keep the big ticket—Soul powers the experience.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 5: Funding & Timeline */}
        {currentSlide === 4 && (
          <div className="slide-inner bg-black">
            <div className="absolute inset-0 radial-glow"></div>
            <div className="absolute top-[-50px] right-[-50px] text-[280px] opacity-[0.02] text-cyan-white" style={{ fontFamily: "'Noto Serif TC', serif" }}>心</div>

            <div className="h-full flex flex-col relative z-10">
              <div className="px-12 pt-8 pb-6 border-b border-cyan-white/20">
                <h2 className="text-3xl font-bold uppercase tracking-wider metal-text">$900K SAFE</h2>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-cyan-white cyan-glow mt-1">From Demo to Deployments</h3>
              </div>

              <div className="flex-1 grid grid-cols-2">
                <div className="p-10 border-r border-cyan-white/10 flex flex-col justify-center">
                  <h3 className="text-cyan-white cyan-glow font-bold uppercase tracking-wide mb-6 text-lg flex items-center gap-3">
                    <i className="fa-solid fa-chart-pie"></i> Use of Funds
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-3 text-lg text-white/90">
                      <i className="fa-solid fa-user-plus text-cyan-white cyan-glow flex-shrink-0 mt-1"></i>
                      <span>Hire 2 core engineers</span>
                    </li>
                    <li className="flex items-start gap-3 text-lg text-white/90">
                      <i className="fa-solid fa-screwdriver-wrench text-cyan-white cyan-glow flex-shrink-0 mt-1"></i>
                      <span>Build production‑ready chassis</span>
                    </li>
                    <li className="flex items-start gap-3 text-lg text-white/90">
                      <i className="fa-solid fa-handshake text-cyan-white cyan-glow flex-shrink-0 mt-1"></i>
                      <span>Lab build‑out + key trade shows</span>
                    </li>
                  </ul>
                </div>

                <div className="p-10 relative">
                  <div className="absolute left-10 top-10 bottom-10 w-px bg-cyan-white/30 cyan-glow"></div>
                  
                  <div className="space-y-7 pl-8 relative">
                    <div className="relative">
                      <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-black border-2 border-cyan-white rounded-full cyan-glow-strong"></div>
                      <h4 className="metal-text font-bold text-base">Early Dec '25</h4>
                      <p className="text-white/60 text-sm mt-1">Sign first APC customer & Field offline demo</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-black border-2 border-cyan-white rounded-full cyan-glow"></div>
                      <h4 className="metal-text font-bold text-base">Jan '26</h4>
                      <p className="text-white/60 text-sm mt-1">Launch ed‑tech pilots at 2 sites</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-black border-2 border-cyan-white rounded-full cyan-glow"></div>
                      <h4 className="metal-text font-bold text-base">Spring '26</h4>
                      <p className="text-white/60 text-sm mt-1">Convert pilots → paying Ed Edition. Legal deployments.</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-black border-2 border-cyan-white rounded-full cyan-glow"></div>
                      <h4 className="metal-text font-bold text-base">SEMA '26</h4>
                      <p className="text-white/60 text-sm mt-1">Premiere 12V classic talking car.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-12 border-t border-cyan-white/30 bg-cyan-white/5 flex items-center justify-center">
                <p className="text-cyan-white cyan-glow uppercase tracking-wide font-semibold text-sm">
                  Next: meet the carry‑on-sized box. <span className="text-white/50 mx-3">|</span> Live demo: carry-on-sized offline machine interpreter, no internet.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>

      {/* Navigation Controls */}
      <div className="w-full max-w-[1280px] flex justify-between items-center mt-2 md:mt-4 px-2">
        <Button
          onClick={prevSlide}
          variant="ghost"
          className="text-white hover:text-[#2CE0D0] text-xs md:text-base px-2 md:px-4"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" /> 
          <span className="hidden sm:inline">Previous</span>
          <span className="sm:hidden">Prev</span>
        </Button>
        <div className="flex gap-1.5 md:gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                i === currentSlide ? 'bg-[#2CE0D0] w-5 md:w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
        <Button
          onClick={nextSlide}
          variant="ghost"
          className="text-white hover:text-[#2CE0D0] text-xs md:text-base px-2 md:px-4"
          disabled={currentSlide === totalSlides - 1}
        >
          <span className="hidden sm:inline">Next</span>
          <span className="sm:hidden">Next</span>
          <ChevronRight className="ml-1 md:ml-2 w-4 h-4 md:w-5 md:h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Investors;
