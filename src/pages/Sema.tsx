import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heartLogo from "@/assets/heart-logo.png";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbx_YHdex8SAepSgvrBr6undMUd-RBIlHAxoLQhBvMFeaRocwEtJMoWPXRZ2lQCY8Al0rQ/exec";

const Sema = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    document.title = "SEMA - Soul Interface";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "SEMA - Connecting builders, investors, and end customers through Soul Interface technology"
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMsg("Submitting…");

    try {
      await fetch(
        `${WEB_APP_URL}?email=${encodeURIComponent(email)}`,
        { mode: "no-cors" }
      );
      setMsg("🎉 Thanks for subscribing!");
      setEmail("");
    } catch (err) {
      console.error(err);
      setMsg("⚠️ Network error. Please try later.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center flex items-center justify-center gap-4">
          <img src={heartLogo} alt="Heart" className="w-12 h-12 md:w-16 md:h-16" />
          <span>Soul Interface</span>
        </h1>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* One System to Do it All */}
          <section>
            <h2 className="text-3xl font-bold mb-4">One System to Do it All</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Soul Interface's patent-pending architecture is designed especially for applications where for reasons of taste, simplicity, or safety, screens are not desired. It replaces every infotainment system in a modern car's interior with one interface that never takes your eyes off the road.
            </p>
          </section>

          {/* True Luxury */}
          <section>
            <h2 className="text-3xl font-bold mb-4">True Luxury</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Give your customers' vehicles the ability to do things that no car on the road today, and not even any smartphone can do. Accurately look up almost any location or fact without needing the internet. A clientele that expects bespoke touches at every turn should not have to settle for choosing among a handful of personas for their ride. We let them forge a digital soul, imbuing their car with whatever age, gender, accent, temperament, species assistance their heart desires, and we make it easy to forge a new one.
            </p>
          </section>

          {/* What you Say in the car Stays in the Car */}
          <section>
            <h2 className="text-3xl font-bold mb-4">What you Say in the car Stays in the Car</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Soul Interface is private by design, processing all of your utterances on device. Nothing you say can be recorded, intercepted, saved or sold to marketers.
            </p>
          </section>

          {/* Upfront pricing */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Upfront pricing, easy upgrades, no subscriptions</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Your customers can rest assured that once they have a vehicle fully integrated with Soul Interface, they own it outright. There are no subscriptions, ever. For periodic software upgrades, we mail them a simple plug in, wait, and unplug USB for their convenience.
            </p>
          </section>

          {/* Zero to One */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Zero to One</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Soul Interface has invented the personal, private, cloud-free AI market and demonstrated its proof of concept at SEMA 2025, with the only conversational car among the thousands of vehicles present. Now we are seeking funding in a strictly capped seed round in order to develop a fully functioning prototype that will prove itself on the road from Oakland to SEMA 2026.
            </p>
          </section>

          {/* This Moment in AI */}
          <section>
            <h2 className="text-3xl font-bold mb-4">This Moment in AI</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Advancement in language models in recent years have taken the world by storm. Increases in the power of models small enough to run locally in the last year has been even more rapid, regularly unlocking new capabilities. 2025 marks the first conversational AI interface at SEMA, it will not be the last.
            </p>
          </section>
        </div>

        {/* Interest Form Links */}
        <section className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-20 mb-20">
          <Link to="/builders">
            <Button size="lg" className="w-48">
              For Builders
            </Button>
          </Link>
          <Link to="/investors">
            <Button size="lg" className="w-48">
              For Investors
            </Button>
          </Link>
        </section>

        {/* Newsletter Signup */}
        <section className="max-w-2xl mx-auto mt-20">
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl text-muted-foreground">
              Sign up for the Soul Dispatch and be first to know about updates!
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                disabled={busy}
                className="px-4 py-3 rounded bg-background border border-input text-foreground"
              />
              <button
                disabled={busy}
                className="px-4 py-3 bg-black hover:bg-black/90 text-white rounded disabled:opacity-50 transition-all duration-300"
              >
                {busy ? "Subscribing…" : "Subscribe"}
              </button>
            </form>

            {msg && (
              <p
                className={`mt-4 text-center text-sm ${
                  msg.startsWith("🎉") ? "text-green-400" : "text-red-400"
                }`}
              >
                {msg}
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sema;
