'use client';

import React from 'react';
import Link from 'next/link';
import { BUSINESS_CONFIG } from '@/lib/business';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-6 border-t border-zinc-900 text-xs font-bold">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
        <div>
          <span className="font-extrabold text-white text-sm ml-2">{BUSINESS_CONFIG.name}</span>
          <span className="text-white font-bold">• {BUSINESS_CONFIG.tagline}</span>
        </div>

        {/* 3 קישורים נגישים בתחתית האתר */}
        <nav aria-label="קישורי מידע ותנאים" className="flex items-center gap-4 sm:gap-6 text-white font-extrabold">
          <Link
            href="/accessibility"
            className="text-white hover:text-amber-400 transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400 rounded px-1"
          >
            הצהרת נגישות
          </Link>
          <Link
            href="/terms"
            className="text-white hover:text-amber-400 transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400 rounded px-1"
          >
            תנאי שימוש
          </Link>
          <Link
            href="/privacy"
            className="text-white hover:text-amber-400 transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400 rounded px-1"
          >
            מדיניות פרטיות
          </Link>
        </nav>

        <p className="text-white font-bold">
          © {currentYear} {BUSINESS_CONFIG.name}. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
