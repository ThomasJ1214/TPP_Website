'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, CheckCircle, Loader2 } from 'lucide-react';

const KEY_DISMISSED = 'tpp_popup_dismissed_at';
const KEY_SUBSCRIBED = 'tpp_popup_subscribed';
const SHOW_DELAY    = 4000;
const ONE_DAY       = 24 * 60 * 60 * 1000;

export default function NewsletterPopup() {
  const [visible,  setVisible]  = useState(false);
  const [email,    setEmail]    = useState('');
  const [status,   setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY_SUBSCRIBED)) return;
      const dismissedAt = localStorage.getItem(KEY_DISMISSED);
      if (dismissedAt && Date.now() - parseInt(dismissedAt, 10) < ONE_DAY) return;
    } catch {
      return; // private-browsing / storage blocked — skip silently
    }

    const t = setTimeout(() => setVisible(true), SHOW_DELAY);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    try { localStorage.setItem(KEY_DISMISSED, Date.now().toString()); } catch { /* ignore */ }
    setVisible(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === 'loading') return;
    setStatus('loading');
    setErrorMsg('');

    try {
      const res  = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.');

      setStatus('success');
      try { localStorage.setItem(KEY_SUBSCRIBED, '1'); } catch { /* ignore */ }
      setTimeout(() => setVisible(false), 2800);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          role="complementary"
          aria-label="Newsletter signup"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0,  scale: 1    }}
          exit={{    opacity: 0, y: 24, scale: 0.95  }}
          transition={{ type: 'spring', stiffness: 340, damping: 30 }}
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right:  '1.5rem',
            zIndex: 200,
            width: 'min(348px, calc(100vw - 2rem))',
            backgroundColor: '#ffffff',
            borderRadius: '1.25rem',
            border: '1px solid var(--color-brand-border)',
            boxShadow: '0 4px 6px rgba(26,18,9,0.04), 0 12px 40px rgba(26,18,9,0.13)',
            overflow: 'hidden',
          }}
        >
          {/* Gradient top stripe */}
          <div
            aria-hidden
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, var(--color-brand-blue-dark), var(--color-brand-blue))',
            }}
          />

          <div style={{ padding: '1.375rem 1.375rem 1.125rem', position: 'relative' }}>

            {/* Dismiss × */}
            <button
              onClick={dismiss}
              aria-label="Dismiss newsletter popup"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-brand-warm)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-brand-muted)',
                flexShrink: 0,
                transition: 'background-color 150ms ease, color 150ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--color-brand-border)';
                e.currentTarget.style.color = 'var(--color-brand-text)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'var(--color-brand-warm)';
                e.currentTarget.style.color = 'var(--color-brand-muted)';
              }}
            >
              <X size={13} strokeWidth={2.5} />
            </button>

            {/* ── Success state ─────────────────────────────────── */}
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '0.5rem 0 0.375rem' }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 22, delay: 0.1 }}
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: '#ECFDF5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}
                >
                  <CheckCircle size={26} style={{ color: '#10B981' }} />
                </motion.div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  color: 'var(--color-brand-text)',
                  margin: '0 0 0.375rem',
                }}>
                  You&apos;re on the list!
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-brand-muted)', margin: 0, lineHeight: 1.5 }}>
                  Specials, new pies, and kitchen updates on the way.
                </p>
              </motion.div>

            ) : (
              /* ── Default state ─────────────────────────────────── */
              <>
                {/* Header row */}
                <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', paddingRight: '1.75rem', marginBottom: '1.125rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--color-brand-blue-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Mail size={17} style={{ color: 'var(--color-brand-blue)' }} />
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--color-brand-text)',
                      margin: '0 0 0.25rem',
                      lineHeight: 1.25,
                    }}>
                      Fresh from the kitchen
                    </p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-brand-muted)', margin: 0, lineHeight: 1.5 }}>
                      New pies, seasonal specials, and the occasional exciting news. One email at a time.
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ position: 'relative', marginBottom: '0.5rem' }}>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      disabled={status === 'loading'}
                      aria-label="Email address for newsletter"
                      style={{
                        width: '100%',
                        padding: '0.6875rem 1rem',
                        fontSize: '0.9375rem',
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-brand-text)',
                        backgroundColor: 'var(--color-brand-cream)',
                        border: '1.5px solid var(--color-brand-border)',
                        borderRadius: '0.625rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'border-color 150ms ease',
                        display: 'block',
                      }}
                      onFocus={e  => (e.target.style.borderColor = 'var(--color-brand-blue)')}
                      onBlur={e   => (e.target.style.borderColor = 'var(--color-brand-border)')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading' || !email}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      padding: '0.6875rem 1rem',
                      opacity: !email ? 0.65 : 1,
                      transition: 'opacity 150ms ease, background-color 150ms ease, transform 100ms ease, box-shadow 150ms ease',
                    }}
                  >
                    {status === 'loading'
                      ? <><Loader2 size={14} className="animate-spin" /> Signing up…</>
                      : <><Send size={14} /> Get the good stuff</>
                    }
                  </button>

                  {status === 'error' && (
                    <p style={{ fontSize: '0.8rem', color: '#EF4444', marginTop: '0.5rem', marginBottom: 0 }}>
                      {errorMsg}
                    </p>
                  )}
                </form>

                {/* Footer */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '0.75rem',
                }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-brand-muted)' }}>
                    No spam, ever.
                  </span>
                  <button
                    onClick={dismiss}
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-brand-muted)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      textDecoration: 'underline',
                      textDecorationColor: 'var(--color-brand-border)',
                      textUnderlineOffset: '2px',
                      transition: 'color 150ms ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-brand-text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-brand-muted)')}
                  >
                    Maybe later
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
