import React, { useState } from 'react';

const WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbzQdsAhkVZ-XjOWHsO0NWRFD0BBa--A2lNyOwXKVNl0bMfjDpWthla6s_jiwHs2LTmolg/exec';

export default function News() {
  const [email, setEmail]         = useState('');
  const [message, setMessage]     = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('Submitting…');

    try {
      const params   = new URLSearchParams({ email });
      const response = await fetch(WEB_APP_URL, {
        method:   'POST',
        mode:     'cors',
        redirect: 'follow',
        body:     params
      });
      const data = await response.json();
      if (data.status === 'success') {
        setMessage('🎉 Thanks for subscribing!');
        setEmail('');
      } else {
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
    <div className="min-h-screen …">
      {/* … your layout … */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          disabled={isSubmitting}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}