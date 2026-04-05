'use client';

import { useState, useEffect } from 'react';
import { getOpenStatus } from '@/lib/hours';
import type { OpenStatus } from '@/types';

interface Props {
  dark?: boolean; // dark background variant (for footer)
}

export default function OpenStatusBadge({ dark = false }: Props) {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    setStatus(getOpenStatus());
    const interval = setInterval(() => setStatus(getOpenStatus()), 30_000);
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  const { isOpen, label, nextChange } = status;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        borderRadius: '2rem',
        padding: '0.25rem 0.75rem',
        fontSize: '0.8125rem',
        fontWeight: 500,
        fontFamily: 'var(--font-body)',
        backgroundColor: isOpen
          ? dark ? 'rgba(16,185,129,0.15)' : '#D1FAE5'
          : dark ? 'rgba(255,255,255,0.1)' : 'var(--color-brand-warm)',
        color: isOpen
          ? dark ? '#6EE7B7' : '#065F46'
          : dark ? 'rgba(255,255,255,0.5)' : 'var(--color-brand-muted)',
        border: `1px solid ${isOpen
          ? dark ? 'rgba(16,185,129,0.3)' : '#A7F3D0'
          : dark ? 'rgba(255,255,255,0.15)' : 'var(--color-brand-border)'}`,
      }}
      aria-live="polite"
      aria-label={`${label} — ${nextChange}`}
    >
      {/* Status dot */}
      <span
        style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          backgroundColor: isOpen ? '#10B981' : dark ? 'rgba(255,255,255,0.35)' : '#D1D5DB',
          display: 'inline-block',
          flexShrink: 0,
          boxShadow: isOpen ? '0 0 0 2px rgba(16,185,129,0.25)' : 'none',
        }}
      />
      <span>{label}</span>
      <span
        style={{
          color: isOpen
            ? dark ? 'rgba(110,231,183,0.7)' : '#059669'
            : dark ? 'rgba(255,255,255,0.35)' : 'var(--color-brand-border)',
        }}
      >
        ·
      </span>
      <span
        style={{
          color: isOpen
            ? dark ? 'rgba(110,231,183,0.8)' : '#065F46'
            : dark ? 'rgba(255,255,255,0.4)' : 'var(--color-brand-muted)',
          fontWeight: 400,
        }}
      >
        {nextChange}
      </span>
    </div>
  );
}
