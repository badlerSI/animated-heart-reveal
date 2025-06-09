// src/pages/news.tsx   —   uses GET (no CORS pre-flight)

import React, { useState } from 'react';

const WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbx3miCagJU0bwVh1E3LmAYZt54tXNzyK-7asZqN9GqmI_BOoCZZHCWX5XCEDG6Zfb6F/exec';

export default function News() {
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSub]  = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSub(true);
    setMessage('Submitting…');

    try {
      const url = `${WEB_APP_URL}?email=${encodeURIComponent(email)}`;
      const res = await fetch(url, { redirect: 'follow' }); // simple GET
      const data = await res.json();

      if (data.status === 'success') {
        setMessage('🎉 Thanks for subscribing!');
        setEmail('');
      } else {
        setMessage('⚠️ Something went wrong. Try again.');
      }
    } catch (err) {
      console.error(err);
      setMessage('⚠️ Network error. Please try later.');
    } finally {
      setSub(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d12] flex flex-col items-center justify-start px-4 py-16">
      {/* image / heading / form unchanged */}
      {/* ... (same markup as before) ... */}
      <div className="max-w-md w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            disabled={submitting}
            className="px-4 py-3 text-base border border-cyan-white/30 rounded bg-[#0d0d12] text-cyan-white placeholder-cyan-white/50 focus:outline-none"
          />
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-3 text-base bg-cyan-600 hover:bg-cyan-700 text-white rounded disabled:opacity-50"
          >
            {submitting ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-center text-sm ${
              message.startsWith('🎉') ? 'text-green-400' : 'text-red-400'
            }`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}