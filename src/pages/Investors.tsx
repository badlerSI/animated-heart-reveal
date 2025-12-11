import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageFooter from "@/components/PageFooter";

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

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
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

  useEffect(() => {
    const calculateScale = () => {
      if (window.innerWidth <= 768) {
        const designWidth = 1280;
        const designHeight = 720;
        const availableWidth = window.innerWidth - 32;
        const availableHeight = window.innerHeight - 80;
        const scaleX = availableWidth / designWidth;
        const scaleY = availableHeight / designHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(Math.max(newScale, 0.3));
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
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <style>{`
        body, html {
          background-color: #000;
        }

        .slide-container-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          background-color: #000;
          position: relative;
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

        @media (max-width: 768px) and (orientation: landscape) {
          .mobile-slide-dots {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 20;
          }
          
          .desktop-nav {
            display: none;
          }

          .mobile-nav-btn {
            width: 48px;
            height: 48px;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(4px);
            border: 1px solid #2CE0D0;
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(44, 224, 208, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            padding: 0;
          }

          .mobile-nav-btn:hover:not(:disabled) {
            box-shadow: 0 0 30px rgba(44, 224, 208, 0.9);
            background: rgba(0, 0, 0, 0.7);
          }

          .mobile-nav-btn:disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }
        }

        @media (min-width: 769px) {
          .mobile-slide-dots {
            display: none;
          }

          .mobile-nav-btn {
            display: none;
          }
        }

        .desktop-nav button {
          transition: all 0.3s ease;
        }

        .desktop-nav button:hover {
          color: #2CE0D0;
          box-shadow: 0 0 20px rgba(44, 224, 208, 0.5);
          border-color: #2CE0D0;
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

      <div className="flex-1 flex flex-col items-center justify-center p-2 md:p-4 lg:p-10">
        {/* Navigation */}
        <div className="w-full max-w-[1280px] flex justify-end items-center mb-2 md:mb-4 px-2">
          <div className="text-white text-xs md:text-sm">
            Slide {currentSlide + 1} / {totalSlides}
          </div>
        </div>

        {/* Slide Container */}
        <div className="slide-container-wrapper bg-black">
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
                        <span>Robotaxi: safer, ad‑free rides</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="absolute bottom-6 right-8 text-white/50 text-xs tracking-wider uppercase">
                  <i className="fa-solid fa-globe mr-2 text-cyan-white cyan-glow"></i>Powering the future of sovereign AI
                </div>
              </div>
            </div>
          )}

          {/* Slide 4: SEMA 2025 */}
          {currentSlide === 3 && (
            <div className="slide-inner bg-black">
              <div className="absolute inset-0 radial-glow"></div>
              <div className="absolute bottom-[-50px] left-[-50px] text-[280px] opacity-[0.02] text-cyan-white" style={{ fontFamily: "'Noto Serif TC', serif" }}>心</div>

              <div className="h-full flex flex-col px-6 py-6 md:px-12 md:py-8 relative z-10">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold uppercase tracking-wider metal-text">
                    SEMA 2025
                  </h2>
                  <p className="text-cyan-white cyan-glow mt-2 text-lg">Las Vegas, November 4-7</p>
                </div>

                <div className="grid grid-cols-2 gap-8 flex-1 items-center">
                  <div className="space-y-6">
                    <div className="border border-cyan-white/20 bg-white/5 rounded-lg p-6">
                      <h3 className="text-xl font-semibold metal-text mb-4">Ace: The Talking 240Z</h3>
                      <ul className="space-y-3 text-white/80">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-white mt-1 text-xs">●</span>
                          <span>First internet-free conversational car</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-white mt-1 text-xs">●</span>
                          <span>Partnered with AiSha LLC</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-white mt-1 text-xs">●</span>
                          <span>Hundreds of conversations in 6+ languages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-white mt-1 text-xs">●</span>
                          <span>Complete privacy: "What you say in the car, stays in the car"</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-cyan-white/20 bg-white/5 rounded-lg p-6">
                      <h3 className="text-xl font-semibold metal-text mb-4">Reception</h3>
                      <ul className="space-y-3 text-white/80">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-white mt-1 text-xs">●</span>
                          <span>Enthusiasts from 3 continents</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-white mt-1 text-xs">●</span>
                          <span>Strong interest from motorhome to motorcycle markets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-white mt-1 text-xs">●</span>
                          <span>OEM and resto-mod partnership inquiries</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-cyan-white opacity-10 blur-3xl rounded-full neon-flicker"></div>
                      <img 
                        src="/lovable-uploads/ace-sema-2025.jpg" 
                        alt="Ace the 240Z at SEMA 2025"
                        className="w-full max-w-md rounded-lg border border-cyan-white/30 shadow-2xl relative z-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-8 text-white/50 text-xs tracking-wider uppercase">
                  <i className="fa-solid fa-car mr-2 text-cyan-white cyan-glow"></i>Proven technology, real-world validation
                </div>
              </div>
            </div>
          )}

          {/* Slide 5: Contact */}
          {currentSlide === 4 && (
            <div className="slide-inner bg-black">
              <div className="absolute inset-0 radial-glow"></div>
              <div className="absolute top-[-50px] right-[-50px] text-[280px] opacity-[0.02] text-cyan-white" style={{ fontFamily: "'Noto Serif TC', serif" }}>心</div>

              <div className="h-full flex flex-col items-center justify-center px-6 py-6 md:px-12 md:py-8 relative z-10">
                <div className="text-6xl text-cyan-white cyan-glow-strong mb-8" style={{ fontFamily: "'Noto Serif TC', serif" }}>心</div>
                
                <h2 className="text-4xl font-bold metal-text mb-4">Soul Interface</h2>
                <p className="text-xl text-cyan-white cyan-glow mb-12">Sovereign AI for Everyone</p>

                <div className="space-y-4 text-center">
                  <p className="text-white/80 text-lg">
                    <i className="fa-solid fa-envelope mr-3 text-cyan-white cyan-glow"></i>
                    <a href="mailto:tech@soulinterface.ai" className="hover:text-cyan-white transition-colors">
                      tech@soulinterface.ai
                    </a>
                  </p>
                  <p className="text-white/80 text-lg">
                    <i className="fa-solid fa-globe mr-3 text-cyan-white cyan-glow"></i>
                    <a href="https://soulinterface.ai" className="hover:text-cyan-white transition-colors">
                      soulinterface.ai
                    </a>
                  </p>
                </div>

                <div className="mt-12 text-white/50 text-sm">
                  <i className="fa-solid fa-shield-halved mr-2 text-cyan-white cyan-glow"></i>
                  Cloud-free. Local-only. Private by design.
                </div>
              </div>
            </div>
          )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav w-full max-w-[1280px] flex justify-between items-center mt-4 px-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === idx 
                    ? 'bg-cyan-white shadow-[0_0_10px_rgba(0,255,255,0.8)]' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-slide-dots flex gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === idx 
                  ? 'bg-cyan-white shadow-[0_0_10px_rgba(0,255,255,0.8)]' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Mobile Nav Buttons */}
        <div className="md:hidden fixed bottom-4 left-4 right-4 flex justify-between z-50">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="mobile-nav-btn"
          >
            <ChevronLeft className="w-6 h-6 text-cyan-white" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="mobile-nav-btn"
          >
            <ChevronRight className="w-6 h-6 text-cyan-white" />
          </button>
        </div>
      </div>
      
      <PageFooter />
    </div>
  );
};

export default Investors;
