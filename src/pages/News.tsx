// src/pages/news.tsx

import React, { useState } from 'react';

const WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbxWU6xDQho__D9lAATnyn9cl1ZvDc6-3gwWfy8USuFfR_dnswMHsDik32JC5zOsFwAHrg/exec';

const News: React.FC = () => {
  const [email, setEmail]           = useState<string>('');
  const [message, setMessage]       = useState<string>('');
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('Submitting…');

    try {
      // Build params as application/x-www-form-urlencoded (simple POST)  [oai_citation:6‡stackoverflow.com](https://stackoverflow.com/questions/53433938/how-do-i-allow-a-cors-requests-in-my-google-script?utm_source=chatgpt.com)
      const params = new URLSearchParams({ email });

      const response = await fetch(WEB_APP_URL, {
        method:   'POST',        // Simple POST avoids CORS preflight  [oai_citation:7‡medium.com](https://medium.com/%40cybersphere/fetch-api-the-ultimate-guide-to-cors-and-no-cors-cbcef88d371e?utm_source=chatgpt.com)
        mode:     'cors',        // CORS mode is fine for simple requests  [oai_citation:8‡developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch?utm_source=chatgpt.com)
        redirect: 'follow',      // Follow Google’s 302 redirect internally  [oai_citation:9‡groups.google.com](https://groups.google.com/g/google-apps-script-community/c/WALz_3rw7u4?utm_source=chatgpt.com)
        body:     params         // fetch auto-sets Content-Type correctly  [oai_citation:10‡stackoverflow.com](https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors?utm_source=chatgpt.com)
      });

      // Always expect JSON from your doPost  [oai_citation:11‡googlecloudcommunity.com](https://www.googlecloudcommunity.com/gc/AppSheet-Q-A/Google-Apps-Script-Form-to-Sheets-Cors-issue/m-p/885941?utm_source=chatgpt.com)
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
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d12] flex flex-col items-center justify-start px-4 py-16">
      {/* Preserve your hero image with neon glow */}
      <div className="w-full max-w-4xl mb-16">
        <img
          src="/lovable-uploads/b2023677-4e76-487d-846a-52cf5c1e8d17.png"
          alt="Soul Dispatch newsletter illustration"
          className="w-full h-auto object-contain neon-glow"
        />
      </div>

      {/* Preserve your intro copy */}
      <div className="max-w-4xl text-center mb-8">
        <p className="text-lg md:text-xl leading-relaxed text-cyan-white/90 font-outfit">
          Sign up for our newsletter, the Soul Dispatch, and be the first to know
          about product updates, car show appearances, events at our workshop,
          and swag giveaways!
        </p>
      </div>

      {/* Preserve your form styling */}
      <div className="max-w-md w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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