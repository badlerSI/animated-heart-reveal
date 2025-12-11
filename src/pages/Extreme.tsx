import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Radio, 
  Thermometer, 
  Compass, 
  Heart, 
  Wrench,
  Battery,
  Zap,
  Wifi,
  Server,
  Lock,
  RefreshCw,
  CloudOff,
  Tent,
  Ship,
  Mountain,
  Home,
  Truck,
  AlertTriangle,
  ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageFooter from "@/components/PageFooter";
import bunkerBase from "@/assets/bunker-base.png";
import truckHeart from "@/assets/truck-heart.png";
import bunkerHeart from "@/assets/bunker-heart.png";

const Extreme = () => {
  useEffect(() => {
    document.title = "Just in Case — Soul Interface";
  }, []);

  // Seafoam green theme extracted from bunker image
  const seafoam = "#4CAF7C";
  const seafoamMuted = "#6B9E82";
  const seafoamPastel = "#7DD9A8";

  const whyPrepare = [
    { icon: Zap, title: "Grid Failure", description: "Power outages lasting days or weeks. No internet, no cell towers." },
    { icon: AlertTriangle, title: "Natural Disasters", description: "Hurricanes, earthquakes, wildfires. When infrastructure fails." },
    { icon: CloudOff, title: "Network Collapse", description: "Cyberattacks, solar flares, or simply being off the grid." },
  ];

  const twinNodeFeatures = [
    { icon: Truck, title: "Mobile Node", description: "Rugged unit in your vehicle. Weather, navigation, communication when you're on the move." },
    { icon: Home, title: "Base Station", description: "Hardened bunker unit. Complete knowledge vault, equipment databases, medical references." },
    { icon: RefreshCw, title: "Sync When Connected", description: "Nodes share data when in range. Your knowledge stays current across both units." },
  ];

  const useCases = [
    {
      id: "weather",
      icon: Thermometer,
      title: "Weather Station",
      description: "Your own AI meteorologist that never needs the internet.",
      details: "Connect sensors for temperature, humidity, barometric pressure, wind speed. Soul Interface analyzes patterns and provides forecasts based on local data, historical models, and your specific geography. Know what's coming before it arrives."
    },
    {
      id: "equipment",
      icon: Wrench,
      title: "Equipment Database",
      description: "Every manual, every schematic, every repair guide. Offline.",
      details: "Preload maintenance manuals for your vehicles, generators, water systems, solar arrays. Ask natural language questions: 'How do I replace the fuel filter on a 2018 F-150?' Get step-by-step guidance with diagrams."
    },
    {
      id: "medical",
      icon: Heart,
      title: "Medical Reference",
      description: "First aid, triage, and medical knowledge when help is hours away.",
      details: "Comprehensive medical references for when 911 isn't an option. Symptom analysis, treatment protocols, drug interactions, wound care. Not a replacement for professionals, but critical knowledge when you're on your own."
    },
    {
      id: "navigation",
      icon: Compass,
      title: "Offline Navigation",
      description: "Topographic maps, coordinates, and route planning with no signal.",
      details: "Full USGS topographic maps, trail databases, and coordinate systems. Plan routes, mark waypoints, calculate distances. Works with offline GPS receivers for complete situational awareness."
    },
    {
      id: "communication",
      icon: Radio,
      title: "Radio & Comms",
      description: "HAM radio references, protocols, and frequency databases.",
      details: "Complete amateur radio references, frequency allocations, emergency protocols. Morse code trainer, antenna calculations, propagation predictions. When the cell towers go dark, radio keeps you connected."
    },
    {
      id: "morale",
      icon: Tent,
      title: "Morale & Education",
      description: "Keep minds sharp and spirits high during extended isolation.",
      details: "Thousands of books, educational content, games, and entertainment. Language learning, skill development, children's education. Long-term preparedness isn't just physical, it's mental."
    },
  ];

  const ruggedization = [
    { icon: Shield, title: "EMP-Resistant Design", description: "Faraday-ready enclosure options for ultimate protection." },
    { icon: Wifi, title: "Mesh Networking", description: "Create local networks with no external infrastructure." },
    { icon: Lock, title: "Encrypted Storage", description: "Your data stays yours, even if the unit is compromised." },
    { icon: Mountain, title: "Extreme Conditions", description: "Operates from -20°F to 120°F. Desert to arctic." },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="min-h-[60vh] pt-16 flex flex-col items-center justify-center px-6 text-center relative bg-[#0a0a0f]">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            When the grid goes dark,
            <br />
            your AI stays on.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="text-xl sm:text-2xl mt-8"
            style={{ color: seafoamMuted, fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Sovereign AI for when it matters most.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" style={{ color: seafoam }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Prepare Section */}
      <section className="px-6 py-20 bg-[#0d0d14]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Hope for the best. Prepare for the rest.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: seafoamMuted }}
          >
            Most AI dies with the cloud. Soul Interface doesn't.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-3">
            {whyPrepare.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl text-center border bg-[#12121a]"
                style={{ borderColor: `${seafoam}30` }}
              >
                <item.icon className="w-10 h-10 mx-auto mb-4" style={{ color: seafoam }} />
                <h3 className="font-bold text-lg mb-2 text-[#f0f8ff]">{item.title}</h3>
                <p style={{ color: seafoamMuted }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Twin-Node Architecture - Visual Centerpiece */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Twin-Node Architecture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: seafoamMuted }}
          >
            One in your vehicle. One in your bunker. Synchronized. Sovereign.
          </motion.p>

          {/* Bunker Cutaway Image with Alternating Heart Pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="relative inline-block">
              {/* Base architectural image with faint pastel green glow */}
              <img 
                src={bunkerBase}
                alt="Twin-node architecture: garage with vehicle node and underground bunker with base station"
                className="max-w-full h-auto rounded-xl"
                style={{
                  filter: `drop-shadow(0 0 40px rgba(125, 217, 168, 0.25))`
                }}
              />
              {/* Truck heart overlay - pulses bright white */}
              <img 
                src={truckHeart}
                alt=""
                className="absolute top-0 left-0 max-w-full h-auto rounded-xl pointer-events-none"
                style={{
                  WebkitAnimation: 'heartPulseA 3s ease-in-out infinite',
                  animation: 'heartPulseA 3s ease-in-out infinite',
                  WebkitTransform: 'translateZ(0)',
                  transform: 'translateZ(0)',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  willChange: 'opacity, filter'
                }}
              />
              {/* Bunker heart overlay - pulses opposite phase */}
              <img 
                src={bunkerHeart}
                alt=""
                className="absolute top-0 left-0 max-w-full h-auto rounded-xl pointer-events-none"
                style={{
                  WebkitAnimation: 'heartPulseB 3s ease-in-out infinite',
                  animation: 'heartPulseB 3s ease-in-out infinite',
                  WebkitTransform: 'translateZ(0)',
                  transform: 'translateZ(0)',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  willChange: 'opacity, filter'
                }}
              />
            </div>
          </motion.div>

          {/* Twin Node Features Grid */}
          <div className="grid gap-6 sm:grid-cols-3">
            {twinNodeFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl text-center border bg-[#12121a]"
                style={{ borderColor: `${seafoam}30` }}
              >
                <feature.icon className="w-10 h-10 mx-auto mb-4" style={{ color: seafoam }} />
                <h3 className="font-bold text-lg mb-2 text-[#f0f8ff]">{feature.title}</h3>
                <p style={{ color: seafoamMuted }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS for alternating heart pulse animations - iOS Safari compatible */}
      <style>{`
        @-webkit-keyframes heartPulseA {
          0%, 100% { 
            opacity: 1; 
            -webkit-filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) drop-shadow(0 0 30px rgba(125, 217, 168, 0.5));
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) drop-shadow(0 0 30px rgba(125, 217, 168, 0.5));
          }
          50% { 
            opacity: 0.45; 
            -webkit-filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
            filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
          }
        }
        @keyframes heartPulseA {
          0%, 100% { 
            opacity: 1; 
            -webkit-filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) drop-shadow(0 0 30px rgba(125, 217, 168, 0.5));
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) drop-shadow(0 0 30px rgba(125, 217, 168, 0.5));
          }
          50% { 
            opacity: 0.45; 
            -webkit-filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
            filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
          }
        }
        @-webkit-keyframes heartPulseB {
          0%, 100% { 
            opacity: 0.45; 
            -webkit-filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
            filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
          }
          50% { 
            opacity: 1; 
            -webkit-filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) drop-shadow(0 0 30px rgba(125, 217, 168, 0.5));
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) drop-shadow(0 0 30px rgba(125, 217, 168, 0.5));
          }
        }
        @keyframes heartPulseB {
          0%, 100% { 
            opacity: 0.45; 
            -webkit-filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
            filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
          }
          50% { 
            opacity: 1; 
            -webkit-filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) drop-shadow(0 0 30px rgba(125, 217, 168, 0.5));
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) drop-shadow(0 0 30px rgba(125, 217, 168, 0.5));
          }
        }
      `}</style>

      {/* Use Cases Accordion */}
      <section className="px-6 py-20 bg-[#0d0d14]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            What Can It Do?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg mb-12"
            style={{ color: seafoamMuted }}
          >
            A complete AI companion for off-grid living.
          </motion.p>

          <Accordion type="single" collapsible className="space-y-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={useCase.id} 
                  className="rounded-xl border bg-[#12121a] px-6"
                  style={{ borderColor: `${seafoam}30` }}
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <useCase.icon className="w-6 h-6 flex-shrink-0" style={{ color: seafoam }} />
                      <div>
                        <span className="font-bold text-lg text-[#f0f8ff]">{useCase.title}</span>
                        <p className="text-sm mt-1" style={{ color: seafoamMuted }}>{useCase.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="pl-10">
                      <p className="text-[#e0f4ff]">{useCase.details}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Ruggedization Features */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Built to Survive
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg mb-12"
            style={{ color: seafoamMuted }}
          >
            Designed for the environments where you'll actually need it.
          </motion.p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ruggedization.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-xl flex items-start gap-4 bg-[#12121a]"
              >
                <feature.icon className="w-8 h-8 flex-shrink-0" style={{ color: seafoam }} />
                <div>
                  <h3 className="font-bold text-[#f0f8ff]">{feature.title}</h3>
                  <p className="text-sm" style={{ color: seafoamMuted }}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership Section */}
      <section className="px-6 py-20 bg-[#0d0d14]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Buy once. Own forever.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4 text-lg text-[#e0f4ff]"
          >
            <p>No subscriptions. No cloud. No compromise.</p>
            <p style={{ color: seafoam }}>
              When everything else stops working, your AI keeps running.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Eagle Scout Callout */}
      <section className="px-6 py-12" style={{ background: seafoam }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl font-medium text-[#0a0a0f]">
            Designed by an Eagle Scout who learned: the best time to prepare is before you need to.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-6 text-[#f0f8ff]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Ready for anything?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg mb-8"
            style={{ color: seafoamMuted }}
          >
            Contact us to discuss your preparedness needs and custom configurations.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="mailto:contact@soulinterface.ai?subject=Extreme%20Preparedness%20Inquiry"
            className="inline-block px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
            style={{ 
              backgroundColor: seafoam, 
              color: '#0a0a0f',
            }}
          >
            Get in Touch
          </motion.a>
        </div>
      </section>

      <PageFooter 
        accentColor="#4CAF7C"
        mutedColor="#6B9E82"
        dimColor="#5A8A6A"
      />
    </div>
  );
};

export default Extreme;
