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
          max-width: 1280px;
          aspect-ratio: 16/9;
          background-color: #05070A;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 50px rgba(0,0,0,0.8);
          border: 1px solid #1e293b;
        }
        
        .swoosh-bg {
          position: absolute;
          width: 150%;
          height: 100%;
          top: -20%;
          left: -20%;
          background: radial-gradient(circle at 50% 50%, rgba(44, 224, 208, 0.03) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }
        
        .swoosh-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #2CE0D0, transparent);
          opacity: 0.2;
          transform: rotate(-15deg);
        }
        
        .watermark {
          position: absolute;
          bottom: -20px;
          right: 20px;
          font-family: 'Noto Serif TC', serif;
          font-size: 200px;
          color: #2CE0D0;
          opacity: 0.03;
          z-index: 0;
          pointer-events: none;
          user-select: none;
        }
        
        .text-silver-gradient {
          background: linear-gradient(to bottom, #ffffff 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .soul-list li {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
          font-size: 22px;
          color: #E2E8F0;
          font-weight: 300;
          letter-spacing: 0.02em;
        }
        
        .soul-list li i {
          color: #2CE0D0;
          width: 40px;
          text-align: center;
          margin-right: 16px;
          font-size: 20px;
          filter: drop-shadow(0 0 5px rgba(44,224,208,0.6));
        }
        
        .soul-box-render {
          width: 400px;
          height: 280px;
          background: linear-gradient(145deg, #0f131a, #05070A);
          border-radius: 12px;
          border: 1px solid #1e293b;
          box-shadow: 0 20px 50px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1);
          position: relative;
          transform: perspective(1000px) rotateY(-15deg) rotateX(10deg);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .soul-box-sigil {
          font-family: 'Noto Serif TC', serif;
          font-size: 80px;
          color: #2CE0D0;
          text-shadow: 0 0 20px #2CE0D0, 0 0 40px #2CE0D0;
        }
        
        .soul-box-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border-top: 2px solid #334155;
          border-left: 2px solid #334155;
          top: 10px;
          left: 10px;
        }
        
        .timeline-node {
          width: 12px;
          height: 12px;
          background-color: #05070A;
          border: 2px solid #2CE0D0;
          border-radius: 50%;
          box-shadow: 0 0 10px #2CE0D0;
          position: relative;
          z-index: 10;
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
          <div className="w-full h-full relative">
            <div className="swoosh-bg"></div>
            <div className="swoosh-line" style={{ top: '30%', left: '-10%' }}></div>
            <div className="watermark">心</div>

            <div className="grid grid-cols-2 h-full relative z-10 px-20 py-16">
              <div className="flex flex-col justify-center pr-10">
                <h2 className="font-sans font-bold text-4xl text-white tracking-widest uppercase mb-2">Soul Box</h2>
                <h3 className="font-sans font-light text-2xl text-[#2CE0D0] mb-12 tracking-wider">Carry-On Offline Machine Interpreter</h3>

                <ul className="soul-list">
                  <li><i className="fa-solid fa-server"></i> Carry‑on RTX 6000 mini‑datacenter</li>
                  <li><i className="fa-solid fa-bolt"></i> Cloud‑free, 120V plug‑anywhere power</li>
                  <li><i className="fa-solid fa-microphone-lines"></i> Voice‑first, screen‑optional, app‑connected</li>
                  <li><i className="fa-solid fa-language"></i> Offline machine interpreter for people & machines</li>
                  <li><i className="fa-solid fa-brain"></i> Preloaded knowledge + patent‑pending "souls"</li>
                </ul>
              </div>

              <div className="flex flex-col justify-center items-center relative">
                <div className="absolute w-[400px] h-[400px] bg-[#2CE0D0] opacity-5 blur-[100px] rounded-full"></div>
                
                <div className="soul-box-render">
                  <div className="soul-box-corner"></div>
                  <div className="soul-box-sigil">心</div>
                  <div className="absolute bottom-4 w-full px-8 flex gap-2">
                    <div className="h-1 bg-gray-800 flex-1 rounded"></div>
                    <div className="h-1 bg-gray-800 flex-1 rounded"></div>
                    <div className="h-1 bg-gray-800 flex-1 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-12 text-[#94A3B8] text-xs tracking-widest uppercase opacity-70">
                <i className="fa-solid fa-shield-halved mr-2 text-[#2CE0D0]"></i>Cloud-free. Local-only. No data leaves the box.
              </div>
            </div>
          </div>
        )}

        {/* Slide 3: Three Pillars */}
        {currentSlide === 2 && (
          <div className="w-full h-full relative">
            <div className="swoosh-bg" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(44, 224, 208, 0.05) 0%, transparent 70%)' }}></div>
            <div className="watermark" style={{ left: '-20px', right: 'auto' }}>心</div>

            <div className="h-full flex flex-col px-16 py-12 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-silver-gradient">
                  Save Lives <span className="text-[#2CE0D0] mx-4">→</span> Change Lives <span className="text-[#2CE0D0] mx-4">→</span> Better Lives
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-8 h-full items-start">
                {/* Pillar 1 */}
                <div className="border border-white/5 bg-white/5 rounded-xl p-8 h-[420px] relative overflow-hidden group hover:border-[#2CE0D0]/30 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2CE0D0] to-transparent opacity-50"></div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full border border-[#2CE0D0]/50 flex items-center justify-center text-[#2CE0D0]">
                      <i className="fa-solid fa-truck-medical"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white tracking-wide">Save Lives</h3>
                  </div>
                  <ul className="space-y-6 text-[#94A3B8] font-light text-lg">
                    <li className="flex items-start gap-3"><span className="text-[#2CE0D0] mt-1.5 text-xs">●</span> APCs & humanitarian vehicles</li>
                    <li className="flex items-start gap-3"><span className="text-[#2CE0D0] mt-1.5 text-xs">●</span> Offline field language interpreter</li>
                    <li className="flex items-start gap-3"><span className="text-[#2CE0D0] mt-1.5 text-xs">●</span> Plain‑language vehicle health alerts</li>
                  </ul>
                </div>

                {/* Pillar 2 */}
                <div className="border border-white/5 bg-white/5 rounded-xl p-8 h-[420px] relative overflow-hidden group hover:border-[#2CE0D0]/30 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2CE0D0] to-transparent opacity-50"></div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full border border-[#2CE0D0]/50 flex items-center justify-center text-[#2CE0D0]">
                      <i className="fa-solid fa-eye"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white tracking-wide">Change Lives</h3>
                  </div>
                  <ul className="space-y-6 text-[#94A3B8] font-light text-lg">
                    <li className="flex items-start gap-3"><span className="text-[#2CE0D0] mt-1.5 text-xs">●</span> Accessibility & visually impaired</li>
                    <li className="flex items-start gap-3"><span className="text-[#2CE0D0] mt-1.5 text-xs">●</span> Ed‑tech pilots – charter / homeschool</li>
                    <li className="flex items-start gap-3"><span className="text-[#2CE0D0] mt-1.5 text-xs">●</span> Interpreter + teacher's aide in a box</li>
                  </ul>
                </div>

                {/* Pillar 3 */}
                <div className="border border-white/5 bg-white/5 rounded-xl p-8 h-[420px] relative overflow-hidden group hover:border-[#2CE0D0]/30 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2CE0D0] to-transparent opacity-50"></div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full border border-[#2CE0D0]/50 flex items-center justify-center text-[#2CE0D0]">
                      <i className="fa-regular fa-compass"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white tracking-wide">Better Lives</h3>
                  </div>
                  <ul className="space-y-6 text-[#94A3B8] font-light text-lg">
                    <li className="flex items-start gap-3"><span className="text-[#2CE0D0] mt-1.5 text-xs">●</span> Motorhomes & yachts off‑grid</li>
                    <li className="flex items-start gap-3"><span className="text-[#2CE0D0] mt-1.5 text-xs">●</span> Classic talking car experiences</li>
                    <li className="flex items-start gap-3"><span className="text-[#2CE0D0] mt-1.5 text-xs">●</span> "After‑internet" prepper knowledge</li>
                  </ul>
                </div>
              </div>

              <div className="absolute bottom-12 left-0 w-full text-center">
                <p className="uppercase tracking-[0.2em] text-[#2CE0D0] text-sm font-semibold opacity-80">Start where Soul can save lives first.</p>
              </div>
            </div>
          </div>
        )}

        {/* Slide 4: Economics */}
        {currentSlide === 3 && (
          <div className="w-full h-full relative">
            <div className="swoosh-bg"></div>
            <div className="watermark">心</div>

            <div className="h-full flex flex-col px-20 py-16 relative z-10">
              <div className="mb-16">
                <h2 className="text-4xl font-bold uppercase tracking-widest text-silver-gradient mb-2">$20k Box, Strong Margins, OEM Upside</h2>
                <div className="w-24 h-1 bg-[#2CE0D0]"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-16 px-4">
                  <div className="w-1/3 text-left">
                    <div className="flex items-center gap-3 mb-6 text-[#2CE0D0] text-2xl">
                      <i className="fa-solid fa-cube"></i>
                      <h3 className="font-bold uppercase tracking-wider text-white">Our Unit</h3>
                    </div>
                    <div className="space-y-4 text-xl">
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                        <span className="text-gray-400">Price</span>
                        <span className="text-white font-mono">≈ $20k</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                        <span className="text-gray-400">Cost</span>
                        <span className="text-white font-mono">≈ $10k marginal</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                        <span className="text-gray-400">Target</span>
                        <span className="text-[#2CE0D0] font-mono font-bold">$5k+ profit</span>
                      </div>
                      <div className="text-sm text-gray-500 pt-2 italic">Education Edition: discounted</div>
                    </div>
                  </div>

                  <div className="w-1/3 text-left">
                    <div className="flex items-center gap-3 mb-6 text-[#2CE0D0] text-2xl">
                      <i className="fa-solid fa-industry"></i>
                      <h3 className="font-bold uppercase tracking-wider text-white">Partner Econ</h3>
                    </div>
                    <ul className="soul-list text-lg space-y-4">
                      <li className="!text-lg !mb-2"><i className="fa-solid fa-check !text-sm !w-6"></i> APC / vehicle / yacht builders</li>
                      <li className="!text-lg !mb-2"><i className="fa-solid fa-check !text-sm !w-6"></i> Soul as AI copilot + diagnostics</li>
                      <li className="!text-lg !mb-2"><i className="fa-solid fa-check !text-sm !w-6"></i> <span className="text-[#2CE0D0]">"Soul‑equipped" trim: ~$30k extra</span></li>
                      <li className="!text-lg !mb-2"><i className="fa-solid fa-check !text-sm !w-6"></i> We earn per‑unit + integration fees</li>
                    </ul>
                  </div>
                </div>

                <div className="w-full max-w-4xl mx-auto mb-8">
                  <div className="flex h-16 w-full relative rounded-md overflow-hidden border border-[#2CE0D0]">
                    <div className="w-2/3 bg-gray-900 flex items-center justify-center border-r border-gray-700 relative">
                      <span className="text-gray-400 font-mono text-lg font-bold z-10">Cost ~10k</span>
                    </div>
                    <div className="w-1/3 bg-gradient-to-r from-gray-200 to-white flex items-center justify-center relative">
                      <span className="text-black font-mono text-lg font-bold">Soul Profit 5k+</span>
                      <div className="absolute top-0 right-0 bottom-0 w-2 bg-[#2CE0D0] animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-[#2CE0D0] mt-2 px-1 uppercase tracking-wider font-semibold">
                    <span>Hardware</span>
                    <span>Margin</span>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-[#94A3B8] text-sm italic border-t border-gray-800 inline-block pt-4 px-8">Partners keep the big ticket—Soul powers the experience.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 5: Funding & Timeline */}
        {currentSlide === 4 && (
          <div className="w-full h-full relative">
            <div className="swoosh-bg" style={{ transform: 'scaleX(-1)' }}></div>
            <div className="watermark">心</div>

            <div className="h-full flex flex-col relative z-10">
              <div className="px-16 pt-12 pb-8 border-b border-gray-900/50">
                <h2 className="text-4xl font-bold uppercase tracking-widest text-silver-gradient">$900k SAFE <span className="text-[#2CE0D0] mx-4">→</span> From Demo to Deployments</h2>
              </div>

              <div className="flex-1 grid grid-cols-2">
                <div className="p-16 border-r border-gray-900/50 flex flex-col justify-center">
                  <h3 className="text-[#2CE0D0] font-bold uppercase tracking-wider mb-8 text-xl flex items-center gap-3">
                    <i className="fa-solid fa-chart-pie"></i> Use of Funds
                  </h3>
                  <ul className="soul-list">
                    <li className="!mb-8"><i className="fa-solid fa-user-plus"></i> Hire 2 core engineers</li>
                    <li className="!mb-8"><i className="fa-solid fa-screwdriver-wrench"></i> Build production‑ready chassis</li>
                    <li className="!mb-8"><i className="fa-solid fa-building-flask"></i> Lab build‑out + key trade shows</li>
                  </ul>
                </div>

                <div className="p-16 relative">
                  <div className="absolute left-16 top-16 bottom-16 w-0.5 bg-[#2CE0D0]/30"></div>
                  
                  <div className="space-y-10 pl-10 relative">
                    <div className="relative">
                      <div className="absolute -left-[45px] top-1.5 timeline-node bg-[#2CE0D0]"></div>
                      <h4 className="text-white font-bold text-lg">Early Dec '25 <span className="text-xs ml-2 py-0.5 px-2 rounded border border-[#2CE0D0]/50 text-[#2CE0D0] uppercase">Save Lives</span></h4>
                      <p className="text-gray-400 text-sm mt-1">Sign first APC customer & Field offline demo</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[45px] top-1.5 timeline-node"></div>
                      <h4 className="text-white font-bold text-lg">Jan '26 <span className="text-xs ml-2 py-0.5 px-2 rounded border border-gray-600 text-gray-400 uppercase">Change Lives</span></h4>
                      <p className="text-gray-400 text-sm mt-1">Launch ed‑tech pilots at 2 sites</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[45px] top-1.5 timeline-node"></div>
                      <h4 className="text-white font-bold text-lg">Spring '26 <span className="text-xs ml-2 py-0.5 px-2 rounded border border-[#2CE0D0]/50 text-[#2CE0D0] uppercase">Paid Orders</span></h4>
                      <p className="text-gray-400 text-sm mt-1">Convert pilots → paying Ed Edition. Legal deployments.</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[45px] top-1.5 timeline-node"></div>
                      <h4 className="text-white font-bold text-lg">SEMA '26 <span className="text-xs ml-2 py-0.5 px-2 rounded border border-gray-600 text-gray-400 uppercase">Better Lives</span></h4>
                      <p className="text-gray-400 text-sm mt-1">Premiere 12V classic talking car.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-16 border-t border-[#2CE0D0]/50 bg-[#2CE0D0]/5 flex items-center justify-center">
                <p className="text-[#2CE0D0] uppercase tracking-widest font-semibold text-sm">
                  Next: meet the carry‑on box. <span className="text-white mx-4 opacity-50">|</span> Live demo: offline machine interpreter, no internet.
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
