import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Investors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center p-4 md:p-10">
      <style>{`
        .slide-container {
          width: 100%;
          max-width: 1440px;
          aspect-ratio: 16/9;
          background-color: #000;
          position: relative;
          overflow: auto;
          box-shadow: 0 0 50px rgba(0,0,0,0.8);
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .slide-inner {
          min-width: 100%;
          min-height: 100%;
          position: relative;
        }
      `}</style>

      {/* Navigation */}
      <div className="w-full max-w-[1280px] flex justify-end items-center mb-4">
        <div className="text-white text-sm">
          Slide {currentSlide + 1} / {totalSlides}
        </div>
      </div>

      {/* Slide Container */}
      <div className="slide-container">
        {/* Slide 1: Opening Image */}
        {currentSlide === 0 && (
          <div className="w-full h-full relative flex items-center justify-center bg-[#05070A]">
            <img 
              src="/pitch-deck/opening-slide.png" 
              alt="Soul Interface Opening Slide" 
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Slide 2: Soul Box */}
        {currentSlide === 1 && (
          <div className="slide-inner bg-black">
            <div className="absolute inset-0 bg-gradient-radial from-cyan-white/5 to-transparent opacity-30"></div>

            <div className="grid grid-cols-2 h-full relative z-10 px-12 py-8 gap-8">
              <div className="flex flex-col justify-center pr-6">
                <h2 className="font-sans font-bold text-3xl text-white tracking-wider uppercase mb-2">Soul Box</h2>
                <h3 className="font-sans font-normal text-xl text-cyan-white mb-8 tracking-wide">Carry-On Offline Machine Interpreter</h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-lg text-white/90">
                    <i className="fa-solid fa-server text-cyan-white mt-1 flex-shrink-0"></i>
                    <span>Carry‑on RTX 6000 mini‑datacenter</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-white/90">
                    <i className="fa-solid fa-bolt text-cyan-white mt-1 flex-shrink-0"></i>
                    <span>Cloud‑free, 120V plug‑anywhere power</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-white/90">
                    <i className="fa-solid fa-microphone-lines text-cyan-white mt-1 flex-shrink-0"></i>
                    <span>Voice‑first, screen‑optional, app‑connected</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-white/90">
                    <i className="fa-solid fa-language text-cyan-white mt-1 flex-shrink-0"></i>
                    <span>Offline machine interpreter for people & machines</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-white/90">
                    <i className="fa-solid fa-brain text-cyan-white mt-1 flex-shrink-0"></i>
                    <span>Preloaded knowledge + patent‑pending "souls"</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center items-center relative">
                <div className="absolute w-80 h-80 bg-cyan-white opacity-10 blur-3xl rounded-full"></div>
                
                <div className="w-80 h-56 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-white/10 shadow-2xl relative flex items-center justify-center">
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/20"></div>
                  <div className="text-6xl text-cyan-white">心</div>
                  <div className="absolute bottom-3 left-0 right-0 flex gap-2 px-6">
                    <div className="h-1 bg-gray-800 flex-1 rounded"></div>
                    <div className="h-1 bg-gray-800 flex-1 rounded"></div>
                    <div className="h-1 bg-gray-800 flex-1 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-8 text-white/50 text-xs tracking-wider uppercase">
                <i className="fa-solid fa-shield-halved mr-2 text-cyan-white"></i>Cloud-free. Local-only. No data leaves the box.
              </div>
            </div>
          </div>
        )}

        {/* Slide 3: Three Pillars */}
        {currentSlide === 2 && (
          <div className="slide-inner bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-white/5 to-transparent opacity-30"></div>

            <div className="h-full flex flex-col px-12 py-8 relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider text-white">
                  Save Lives <span className="text-cyan-white mx-3">→</span> Change Lives <span className="text-cyan-white mx-3">→</span> Better Lives
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-6 flex-1">
                {/* Pillar 1 */}
                <div className="border border-white/10 bg-white/5 rounded-lg p-6 flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-white to-transparent opacity-50"></div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full border border-cyan-white/50 flex items-center justify-center text-cyan-white">
                      <i className="fa-solid fa-truck-medical text-sm"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-white tracking-wide">Save Lives</h3>
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
                <div className="border border-white/10 bg-white/5 rounded-lg p-6 flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-white to-transparent opacity-50"></div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full border border-cyan-white/50 flex items-center justify-center text-cyan-white">
                      <i className="fa-solid fa-eye text-sm"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-white tracking-wide">Change Lives</h3>
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
                <div className="border border-white/10 bg-white/5 rounded-lg p-6 flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-white to-transparent opacity-50"></div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full border border-cyan-white/50 flex items-center justify-center text-cyan-white">
                      <i className="fa-regular fa-compass text-sm"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-white tracking-wide">Better Lives</h3>
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
                <p className="uppercase tracking-wider text-cyan-white text-sm font-semibold">Start where Soul can save lives first.</p>
              </div>
            </div>
          </div>
        )}

        {/* Slide 4: Economics */}
        {currentSlide === 3 && (
          <div className="slide-inner bg-black">
            <div className="absolute inset-0 bg-gradient-radial from-cyan-white/5 to-transparent opacity-30"></div>

            <div className="h-full flex flex-col px-12 py-8 relative z-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold uppercase tracking-wider text-white mb-2">$20k Box, Strong Margins, OEM Upside</h2>
                <div className="w-20 h-1 bg-cyan-white"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-10 px-4 gap-8">
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3 mb-5 text-cyan-white text-xl">
                      <i className="fa-solid fa-cube"></i>
                      <h3 className="font-bold uppercase tracking-wide text-white">Our Unit</h3>
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
                        <span className="text-cyan-white font-mono font-bold">$5k+ profit</span>
                      </div>
                      <div className="text-sm text-white/40 pt-2 italic">Education Edition: discounted</div>
                    </div>
                  </div>

                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3 mb-5 text-cyan-white text-xl">
                      <i className="fa-solid fa-industry"></i>
                      <h3 className="font-bold uppercase tracking-wide text-white">Partner Econ</h3>
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
                        <i className="fa-solid fa-check text-cyan-white text-sm mt-1 flex-shrink-0"></i>
                        <span className="text-cyan-white">"Soul‑equipped" trim: ~$30k extra</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/90">
                        <i className="fa-solid fa-check text-cyan-white text-sm mt-1 flex-shrink-0"></i>
                        <span>We earn per‑unit + integration fees</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full max-w-3xl mx-auto mb-6">
                  <div className="flex h-14 w-full relative rounded overflow-hidden border border-cyan-white/50">
                    <div className="w-2/3 bg-gray-900 flex items-center justify-center border-r border-white/20 relative">
                      <span className="text-white/60 font-mono text-base font-bold z-10">Cost ~10k</span>
                    </div>
                    <div className="w-1/3 bg-gradient-to-r from-gray-300 to-white flex items-center justify-center relative">
                      <span className="text-black font-mono text-base font-bold">Soul Profit 5k+</span>
                      <div className="absolute top-0 right-0 bottom-0 w-1 bg-cyan-white"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-cyan-white mt-2 px-1 uppercase tracking-wide font-semibold">
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
            <div className="absolute inset-0 bg-gradient-radial from-cyan-white/5 to-transparent opacity-30"></div>

            <div className="h-full flex flex-col relative z-10">
              <div className="px-12 pt-8 pb-6 border-b border-white/10">
                <h2 className="text-3xl font-bold uppercase tracking-wider text-white">$900k SAFE <span className="text-cyan-white mx-3">→</span> From Demo to Deployments</h2>
              </div>

              <div className="flex-1 grid grid-cols-2">
                <div className="p-10 border-r border-white/10 flex flex-col justify-center">
                  <h3 className="text-cyan-white font-bold uppercase tracking-wide mb-6 text-lg flex items-center gap-3">
                    <i className="fa-solid fa-chart-pie"></i> Use of Funds
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-3 text-lg text-white/90">
                      <i className="fa-solid fa-user-plus text-cyan-white flex-shrink-0 mt-1"></i>
                      <span>Hire 2 core engineers</span>
                    </li>
                    <li className="flex items-start gap-3 text-lg text-white/90">
                      <i className="fa-solid fa-screwdriver-wrench text-cyan-white flex-shrink-0 mt-1"></i>
                      <span>Build production‑ready chassis</span>
                    </li>
                    <li className="flex items-start gap-3 text-lg text-white/90">
                      <i className="fa-solid fa-building-flask text-cyan-white flex-shrink-0 mt-1"></i>
                      <span>Lab build‑out + key trade shows</span>
                    </li>
                  </ul>
                </div>

                <div className="p-10 relative">
                  <div className="absolute left-10 top-10 bottom-10 w-px bg-cyan-white/30"></div>
                  
                  <div className="space-y-7 pl-8 relative">
                    <div className="relative">
                      <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-black border-2 border-cyan-white rounded-full"></div>
                      <h4 className="text-white font-bold text-base">Early Dec '25 <span className="text-xs ml-2 py-0.5 px-2 rounded border border-cyan-white/50 text-cyan-white uppercase">Save Lives</span></h4>
                      <p className="text-white/60 text-sm mt-1">Sign first APC customer & Field offline demo</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-black border-2 border-cyan-white rounded-full"></div>
                      <h4 className="text-white font-bold text-base">Jan '26 <span className="text-xs ml-2 py-0.5 px-2 rounded border border-white/30 text-white/60 uppercase">Change Lives</span></h4>
                      <p className="text-white/60 text-sm mt-1">Launch ed‑tech pilots at 2 sites</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-black border-2 border-cyan-white rounded-full"></div>
                      <h4 className="text-white font-bold text-base">Spring '26 <span className="text-xs ml-2 py-0.5 px-2 rounded border border-cyan-white/50 text-cyan-white uppercase">Paid Orders</span></h4>
                      <p className="text-white/60 text-sm mt-1">Convert pilots → paying Ed Edition. Legal deployments.</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-black border-2 border-cyan-white rounded-full"></div>
                      <h4 className="text-white font-bold text-base">SEMA '26 <span className="text-xs ml-2 py-0.5 px-2 rounded border border-white/30 text-white/60 uppercase">Better Lives</span></h4>
                      <p className="text-white/60 text-sm mt-1">Premiere 12V classic talking car.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-12 border-t border-cyan-white/30 bg-cyan-white/5 flex items-center justify-center">
                <p className="text-cyan-white uppercase tracking-wide font-semibold text-sm">
                  Next: meet the carry‑on box. <span className="text-white/50 mx-3">|</span> Live demo: offline machine interpreter, no internet.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="w-full max-w-[1280px] flex justify-between items-center mt-4">
        <Button
          onClick={prevSlide}
          variant="ghost"
          className="text-white hover:text-[#2CE0D0]"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="mr-2" /> Previous
        </Button>
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? 'bg-[#2CE0D0] w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
        <Button
          onClick={nextSlide}
          variant="ghost"
          className="text-white hover:text-[#2CE0D0]"
          disabled={currentSlide === totalSlides - 1}
        >
          Next <ChevronRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Investors;
