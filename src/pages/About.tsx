import { useEffect } from "react";
import { useImagePreloader } from "../hooks/useImagePreloader";
import PageFooter from "@/components/PageFooter";

const About = () => {
  const imageLoaded = useImagePreloader("/lovable-uploads/e6e23cf2-c76d-4008-b21a-185e409bcf82.png");

  useEffect(() => {
    document.title = "About Soul Interface";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "About Soul Interface. Personal, Private, Sovereign AI you own outright."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d12] flex flex-col">
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
          <div className="hidden md:flex md:items-center md:gap-8 min-h-[80vh]">
            <div className="md:w-3/5 space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-cyan-white mb-2">About Soul Interface</h1>
              <div className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-cyan-white/90 font-outfit">
                <p className="mb-6">
                  We trade our privacy for convenience at almost any opportunity, we tell chatbots our most personal information carelessly, and we trust big tech too much. Even a company that starts with the best of intentions can metamorphose into something grotesque if its business model depends on it. How long does anyone resist the temptation to advertise?
                </p>
                <p className="mb-6">
                  At Soul Interface, you are never the product. We believe in owning your own AI systems outright. With a reasoning layer you can examine for any answer, and hardware that fits in a classroom, a clinic, or a carryon, it is Personal, Private, Sovereign AI, preloaded with a suite of AI native software like has never been offered before.
                </p>
                <p className="mb-6">
                  No subscriptions, no ads, no way for your data to leave, and free updates as long as you own the system. We push cutting edge hardware and models, to get the utility of our Information age, without wading through the cesspool that the Ouroboros Internet has become. That's why we have all the text of Wikipedia, and a carefully curated library of multimedia entries and classic works, some fully illustrated. To that, you can add your own content and make it easily and intelligently searchable.
                </p>
                <p className="mb-6">
                  We dream of a future where every household and place of gathering has its own Sovereign AI. For now, we are going out into the world, and showing everyone the astounding utility of our personal, edge-reasoning machines.
                </p>
                <h2 className="text-2xl font-semibold text-[#1bbdc5] mt-8 mb-3">Shares for Shares</h2>
                <p>
                  We extend an open invitation to teachers, school leaders, and pilot partners: share Soul Interface with your community, and share in our equity. We believe the people who help us prove this technology in real classrooms deserve to participate in the upside. {/* TODO(ben): finalize Shares for Shares program details and link */}
                </p>
              </div>
            </div>

            <div className="md:w-2/5 flex justify-center items-center relative">
              {!imageLoaded && (
                <div className="w-full h-96 bg-[#0d0d12] animate-pulse rounded"></div>
              )}
              <img
                src="/lovable-uploads/e6e23cf2-c76d-4008-b21a-185e409bcf82.png"
                alt="About Soul Interface"
                className={`object-contain w-full h-full max-h-[90vh] opacity-80 transition-opacity duration-500 ${
                  imageLoaded ? "opacity-80" : "opacity-0 absolute top-0"
                }`}
                style={{
                  filter: "drop-shadow(0 0 4px rgba(51, 240, 240, 0.5))",
                  animation: "flickerGlow 3s ease-in-out infinite alternate",
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex flex-col items-center gap-8 min-h-screen justify-center px-6 py-16">
            <h1 className="text-2xl font-bold text-cyan-white">About Soul Interface</h1>
            <div className="text-base leading-relaxed text-cyan-white/95 font-outfit space-y-4">
              <p>We trade our privacy for convenience at almost any opportunity, we tell chatbots our most personal information carelessly, and we trust big tech too much.</p>
              <p>At Soul Interface, you are never the product. We believe in owning your own AI systems outright. With a reasoning layer you can examine for any answer, and hardware that fits in a classroom, a clinic, or a carryon, it is Personal, Private, Sovereign AI.</p>
              <p>No subscriptions, no ads, no way for your data to leave, and free updates as long as you own the system.</p>
              <p>We dream of a future where every household and place of gathering has its own Sovereign AI.</p>
              <h2 className="text-xl font-semibold text-[#1bbdc5] mt-4">Shares for Shares</h2>
              <p>We extend an open invitation to teachers, school leaders, and pilot partners: share Soul Interface with your community, and share in our equity.</p>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default About;
