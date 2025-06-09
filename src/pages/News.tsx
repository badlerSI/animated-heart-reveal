// src/pages/news.tsx

import React, { useState } from 'react';

const WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbzQdsAhkVZ-XjOWHsO0NWRFD0BBa--A2lNyOwXKVNl0bMfjDpWthla6s_jiwHs2LTmolg/exec';

const News: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('Submitting…');

    try {
      // Build a simple POST body so the browser won't preflight
      const params = new URLSearchParams({ email });

      const response = await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        body: params, // Content-Type will be application/x-www-form-urlencoded automatically
      });

      const data = await response.json();
      if (data.status === 'success') {
        setMessage('🎉 Thanks for subscribing!');
        setEmail('');
      } else {
        console.error('Subscription error:', data);
        setMessage('⚠️ Something went wrong. Try again.');
      }
    } catch (err) {
      console.error('Network error:', err);
      setMessage('⚠️ Network error. Please try later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d12] flex flex-col items-center justify-start px-4 py-16">
      {/* Hero image */}
      <div className="w-full max-w-4xl mb-16">
        <img
          src="/lovable-uploads/b2023677-4e76-487d-846a-52cf5c1e8d17.png"
          alt="Soul Dispatch newsletter illustration"
          className="w-full h-auto object-contain neon-glow"
        />
      </div>

      {/* Intro copy */}
      <div className="max-w-4xl text-center mb-8">
        <p className="text-lg md:text-xl leading-relaxed text-cyan-white/90 font-outfit">
          Sign up for our newsletter, the Soul Dispatch, and be the first to know
          about product updates, car show appearances, events at our workshop,
          and swag giveaways!
        </p>
      </div>

      {/* Subscription form */}
      <div className="max-w-md w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            disabled={isSubmitting}
            className="px-4 py-3 text-base border border-cyan-white/30 rounded bg-[#0d0d12] text-cyan-white placeholder-cyan-white/50 focus:outline-none focus:border-cyan-white/60 focus:ring-1 focus:ring-cyan-white/30"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-3 text-base bg-cyan-600 hover:bg-cyan-700 text-white rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.startsWith('🎉') ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default News;
