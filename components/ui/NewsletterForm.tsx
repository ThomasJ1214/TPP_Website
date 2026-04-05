'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import type { NewsletterState } from '@/types';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<NewsletterState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state === 'loading') return;

    setState('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }

      setState('success');
      setEmail('');
    } catch (err) {
      setState('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (state === 'success') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.25rem',
          backgroundColor: 'rgba(16,185,129,0.12)',
          border: '1px solid rgba(16,185,129,0.3)',
          borderRadius: '0.75rem',
          color: '#D1FAE5',
        }}
      >
        <CheckCircle size={20} style={{ color: '#6EE7B7', flexShrink: 0 }} />
        <div>
          <p style={{ fontWeight: 600, margin: 0, fontSize: '0.9375rem' }}>You&apos;re on the list!</p>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(209,250,229,0.75)', marginTop: '0.125rem' }}>
            We&apos;ll let you know about specials and new pies.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
        className="sm:flex-row sm:gap-0 sm:rounded-xl sm:overflow-hidden sm:border sm:border-white/20 sm:focus-within:border-white/50 sm:transition-colors"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          disabled={state === 'loading'}
          aria-label="Email address for newsletter"
          style={{
            flex: 1,
            padding: '0.875rem 1.125rem',
            fontSize: '0.9375rem',
            fontFamily: 'var(--font-body)',
            backgroundColor: 'rgba(255,255,255,0.1)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '0.75rem',
            outline: 'none',
            transition: 'border-color 150ms ease',
          }}
          className="sm:!border-transparent sm:!rounded-none sm:!bg-white/10 placeholder:text-white/40"
          onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.5)'; }}
          onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.2)'; }}
        />
        <button
          type="submit"
          disabled={state === 'loading' || !email}
          className="btn-primary sm:!rounded-none sm:!rounded-r-xl"
          style={{
            flexShrink: 0,
            opacity: !email ? 0.7 : 1,
          }}
        >
          {state === 'loading' ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Send size={16} />
          )}
          {state === 'loading' ? 'Signing up…' : 'Stay in the Loop'}
        </button>
      </div>

      {state === 'error' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '0.625rem',
            fontSize: '0.875rem',
            color: '#FCA5A5',
          }}
        >
          <AlertCircle size={14} />
          {errorMessage}
        </div>
      )}
    </form>
  );
}
