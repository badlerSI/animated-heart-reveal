import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageFooter from "@/components/PageFooter";

const Support = () => {
  useEffect(() => {
    document.title = "Support | Soul Interface";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Get help with SOUL Interface educational apps. Contact support and find answers to common questions.");
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-cyan-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "#1bbdc5" }}>
          SOUL Support
        </h1>

        <p className="text-gray-300 leading-relaxed mb-12">
          For help with any SOUL app (Learner, Teacher, Creator, Yearbook, Administrator, or Etcher), contact us at{" "}
          <a
            href="mailto:contact@soulinterface.ai"
            className="transition-colors"
            style={{ color: "#1bbdc5" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1bbdc5")}
          >
            contact@soulinterface.ai
          </a>.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: "#1bbdc5" }}>
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4 mb-12">
          <AccordionItem
            value="wifi"
            className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:border-[#1bbdc5]/30"
          >
            <AccordionTrigger className="text-white hover:text-[#1bbdc5] text-left py-5">
              I can't log in to a SOUL app
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 pb-5">
              SOUL apps require a connection to your school's local SOUL server. If you can't log in, make sure you're connected to your school's WiFi network. If the problem persists, ask your school's SOUL administrator to verify the server is running.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="contact"
            className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:border-[#1bbdc5]/30"
          >
            <AccordionTrigger className="text-white hover:text-[#1bbdc5] text-left py-5">
              How do I report a bug or request a feature?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 pb-5">
              Email us at{" "}
              <a
                href="mailto:contact@soulinterface.ai"
                className="transition-colors"
                style={{ color: "#1bbdc5" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1bbdc5")}
              >
                contact@soulinterface.ai
              </a>{" "}
              with a description of the issue and we'll get back to you as soon as possible.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="text-gray-400 leading-relaxed">
          SOUL is a K–12 education platform. For privacy information, see our{" "}
          <Link
            to="/privacy"
            className="transition-colors"
            style={{ color: "#1bbdc5" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1bbdc5")}
          >
            Privacy Policy
          </Link>.
        </p>
      </div>

      <PageFooter glowing accentColor="#1bbdc5" mutedColor="#5BA8C4" dimColor="#4A8DA8" />
    </div>
  );
};

export default Support;
