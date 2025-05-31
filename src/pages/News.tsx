
import React, { useState } from 'react';

const News = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('Submitting…');

    try {
      const formData = new FormData();
      formData.append('email', email);

      const response = await fetch('https://script.google.com/macros/s/AKfycbxcE2X9hu0w_Yv8_EMgvpERJqdwE5c-MLl04AYXbaOshlpafeUVMI6mPJURiGtf61NTmQ/exec', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData as any)
      });

      const data = await response.json();
      
      if (data.status === 'success') {
        setMessage('🎉 Thanks for subscribing!');
        setEmail('');
      } else {
        setMessage('⚠️ Something went wrong. Try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('⚠️ Network error. Please try later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d12] flex flex-col items-center justify-start px-4 py-16">
      {/* News image with neon glow */}
      <div className="w-full max-w-4xl mb-16">
        <img
          src="/lovable-uploads/054f952a-9a89-4bc4-ac0e-a3c93459eb93.png"
          alt="Soul Dispatch newsletter illustration"
          className="w-full h-auto object-contain neon-glow"
        />
      </div>

      {/* Newsletter signup text */}
      <div className="max-w-4xl text-center mb-8">
        <p className="text-lg md:text-xl leading-relaxed text-cyan-white/90 font-outfit">
          Sign up for the Soul Dispatch and be the first to know about product updates, public demonstrations and events at our workshop! Just let us know your email here:
        </p>
      </div>

      {/* Email subscription form */}
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
            className="px-4 py-3 text-base bg-cyan-600 hover:bg-cyan-700 text-white border-none rounded cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        
        {message && (
          <p className={`mt-4 text-center text-sm ${
            message.includes('Thanks') ? 'text-green-400' : 'text-red-400'
          }`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default News;
