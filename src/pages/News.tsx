import React, { useState } from "react";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbx_YHdex8SAepSgvrBr6undMUd-RBIlHAxoLQhBvMFeaRocwEtJMoWPXRZ2lQCY8Al0rQ/exec";

export default function News() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMsg("Submitting…");

    try {
      // Send GET request in no-cors mode (browser won't try to read JSON)
      await fetch(
        `${WEB_APP_URL}?email=${encodeURIComponent(email)}`,
        { mode: "no-cors" }         // ← key change
      );

      // If no exception, assume success
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
    <div className="min-h-screen bg-[#0d0d12] flex flex-col items-center px-4 py-16">
      <div className="w-full max-w-4xl mb-16">
        <img
          src="/lovable-uploads/b2023677-4e76-487d-846a-52cf5c1e8d17.png"
          alt="Soul Dispatch"
          className="w-full object-contain neon-glow"
        />
      </div>

      <div className="max-w-4xl text-center mb-8">
        <p className="text-lg md:text-xl text-cyan-white/90">
          Sign up for the Soul Dispatch and be first to know about updates!
        </p>
      </div>

      <div className="max-w-md w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            disabled={busy}
            className="px-4 py-3 rounded bg-[#0d0d12] border border-cyan-white/30 text-cyan-white"
          />
          <button
            disabled={busy}
            className="px-4 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded disabled:opacity-50"
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
    </div>
  );
}