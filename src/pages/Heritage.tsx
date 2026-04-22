import { useEffect } from "react";
import PageFooter from "@/components/PageFooter";

const Heritage = () => {
  useEffect(() => {
    document.title = "Heritage — Soul Interface";
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex-1 relative flex flex-col items-center justify-center px-6 text-center py-20">
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url('/lovable-uploads/b2023677-4e76-487d-846a-52cf5c1e8d17.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.22,
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <h1
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ color: "#1bbdc5" }}
          >
            Where Soul Interface Started
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Soul Interface began as an automotive experiment. In 2025, in partnership with AiSha LLC, we built our first prototype: a sovereign, voice-first AI for a classic Datsun 240Z named Ace, debuted at SEMA 2025. Our promise of privacy, "what you say in the car, stays in the car," along with full navigation and infotainment control, even with no screen and zero bars of service, resonated with builders and enthusiasts from three continents.
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            What we proved at SEMA: reasoning, multilingual, voice-driven AI can run entirely offline on edge hardware, with real-time latency. That technical foundation is what powers everything we ship today: classroom towers, sovereign workplace appliances, and off-grid base stations.
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            Cars are fun. Children are urgent. We pivoted our focus to education and the workplace, but our automotive heritage is the proving ground that made the rest possible. We still meet with motorhome, motorcycle, and conveyance builders. Sovereign AI belongs anywhere connectivity is unreliable, expensive, or unwanted.
          </p>

          <p
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{
              color: "#1bbdc5",
              textShadow:
                "0 0 10px #1bbdc5, 0 0 20px #1bbdc5, 0 0 30px #1bbdc5",
            }}
          >
            Come meet Ace at CES 2026.
          </p>
        </div>
      </div>

      <div className="relative z-10">
        <PageFooter />
      </div>
    </div>
  );
};

export default Heritage;
