'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const KEY_SUBSCRIBED = 'tpp_popup_subscribed';

type State = 'idle' | 'loading' | 'success' | 'error';

export default function FooterNewsletterForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(KEY_SUBSCRIBED)) {
      setAlreadySubscribed(true);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || state === 'loading') return;
    setState('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem(KEY_SUBSCRIBED, '1');
        setState('success');
      } else {
        setErrorMsg(data.error ?? 'Something went wrong. Try again.');
        setState('error');
      }
    } catch {
      setErrorMsg('Connection error. Try again.');
      setState('error');
    }
  }

  if (alreadySubscribed || state === 'success') {
    return (
      <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', marginTop: '1rem' }}>
        You&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1.25rem' }}>
      <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.625rem' }}>
        New specials &amp; updates
      </p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={state === 'loading'}
          style={{
            flex: 1,
            minWidth: 0,
            padding: '0.5rem 0.75rem',
            borderRadius: '0.375rem',
            border: '1px solid rgba(255,255,255,0.2)',
            backgroundColor: 'rgba(255,255,255,0.08)',
            color: '#ffffff',
            fontSize: '0.8125rem',
            fontFamily: 'var(--font-body)',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          aria-label="Subscribe"
          style={{
            padding: '0.5rem 0.75rem',
            borderRadius: '0.375rem',
            border: 'none',
            backgroundColor: 'var(--color-brand-blue)',
            color: '#ffffff',
            cursor: state === 'loading' ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            opacity: state === 'loading' ? 0.7 : 1,
          }}
        >
          <ArrowRight size={15} />
        </button>
      </div>
      {state === 'error' && (
        <p style={{ marginTop: '0.375rem', fontSize: '0.75rem', color: '#FCA5A5' }}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}
