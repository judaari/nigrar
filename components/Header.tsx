'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export function Header() {
  const [logoAvailable, setLogoAvailable] = useState(true);

  return (
    <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-zinc-900 text-white shadow-xl">
      <div className="max-w-4xl mx-auto px-4 py-2.5 flex flex-col items-center">
        {/* שורה ראשונה: אזור שמור לקובץ הלוגו המקורי בלבד - ללא אימוג'י וללא טקסט חלופי */}
        <div className="flex items-center justify-center py-1">
          <div className="relative w-72 sm:w-[32rem] h-28 sm:h-36 flex items-center justify-center">
            {logoAvailable ? (
              <Image
                src="/images/logo.svg"
                alt="לוגו"
                width={576}
                height={192}
                priority
                className="max-h-full max-w-full object-contain"
                onError={() => setLogoAvailable(false)}
              />
            ) : (
              /* מציין מקום זמני אלגנטי ונקי לקובץ הלוגו המקורי (ללא אימוג'י וללא טקסט חלופי) */
              <div
                className="w-full h-full rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/70"
                aria-label="אזור שמור לקובץ הלוגו המקורי"
              />
            )}
          </div>
        </div>

        {/* שורה שנייה: סרגל ניווט נפרד עם כל 5 הפריטים בשורה אחת בלבד - יצירת קשר ראשון מימין */}
        <div className="w-full mt-1 pt-1.5 border-t border-zinc-900/80">
          <nav
            aria-label="ניווט ראשי"
            className="w-full overflow-x-auto no-scrollbar py-1"
          >
            <div className="flex items-center justify-center gap-5 sm:gap-8 min-w-max mx-auto px-2">
              <a
                href="#hero"
                className="text-white hover:text-amber-400 font-extrabold text-sm sm:text-base tracking-wide transition-colors whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-amber-400 rounded px-1.5 py-0.5"
              >
                יצירת קשר
              </a>
              <a
                href="#pricing"
                className="text-white hover:text-amber-400 font-extrabold text-sm sm:text-base tracking-wide transition-colors whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-amber-400 rounded px-1.5 py-0.5"
              >
                מחירון
              </a>

              <a
                href="#faq"
                className="text-white hover:text-amber-400 font-extrabold text-sm sm:text-base tracking-wide transition-colors whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-amber-400 rounded px-1.5 py-0.5"
              >
                שאלות נפוצות
              </a>
              <a
                href="#location"
                className="text-white hover:text-amber-400 font-extrabold text-sm sm:text-base tracking-wide transition-colors whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-amber-400 rounded px-1.5 py-0.5"
              >
                מיקום וניווט
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
