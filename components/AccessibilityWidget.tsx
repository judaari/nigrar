'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Accessibility, 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Sun, 
  Link as LinkIcon, 
  Focus, 
  ZapOff, 
  FileText,
  Check
} from 'lucide-react';

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState<'normal' | 'large' | 'xlarge' | 'small'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [highlightFocus, setHighlightFocus] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // החלת הגדרות על ה-HTML
  useEffect(() => {
    const root = document.documentElement;

    // גודל טקסט
    root.classList.remove('text-scale-sm', 'text-scale-lg', 'text-scale-xl');
    if (textSize === 'small') root.classList.add('text-scale-sm');
    if (textSize === 'large') root.classList.add('text-scale-lg');
    if (textSize === 'xlarge') root.classList.add('text-scale-xl');

    // ניגודיות
    if (highContrast) root.classList.add('high-contrast');
    else root.classList.remove('high-contrast');

    // הדגשת קישורים
    if (highlightLinks) root.classList.add('highlight-links');
    else root.classList.remove('highlight-links');

    // הדגשת פוקוס מקלדת
    if (highlightFocus) root.classList.add('highlight-focus');
    else root.classList.remove('highlight-focus');

    // הפחתת תנועה
    if (reduceMotion) root.classList.add('reduce-motion');
    else root.classList.remove('reduce-motion');
  }, [textSize, highContrast, highlightLinks, highlightFocus, reduceMotion]);

  // סגירה באמצעות Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleIncreaseText = () => {
    if (textSize === 'normal') setTextSize('large');
    else if (textSize === 'large') setTextSize('xlarge');
  };

  const handleDecreaseText = () => {
    if (textSize === 'xlarge') setTextSize('large');
    else if (textSize === 'large') setTextSize('normal');
    else if (textSize === 'normal') setTextSize('small');
  };

  const handleResetText = () => {
    setTextSize('normal');
  };

  const handleResetAll = () => {
    setTextSize('normal');
    setHighContrast(false);
    setHighlightLinks(false);
    setHighlightFocus(false);
    setReduceMotion(false);
  };

  return (
    <>
      {/* כפתור נגישות צף - קבוע בצד ימין/שמאל, ברור ואינו חוסם תוכן */}
      <div className="fixed bottom-5 left-5 z-50 print:hidden">
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-amber-400 font-bold px-3.5 py-2.5 rounded-full border border-amber-400/50 shadow-2xl transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label="פתח תפריט נגישות"
        >
          <Accessibility className="w-5 h-5 text-amber-400" />
          <span className="text-xs sm:text-sm text-zinc-100">נגישות</span>
        </button>
      </div>

      {/* פאנל נגישות */}
      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="פאנל אפשרויות נגישות"
          className="fixed bottom-20 left-5 z-50 w-80 sm:w-88 max-h-[80vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-5 shadow-2xl text-white font-sans print:hidden animate-fadeIn"
        >
          {/* כותרת וסגירה */}
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-amber-400/40 flex items-center justify-center">
                <Accessibility className="w-4 h-4 text-amber-400" />
              </div>
              <h2 className="text-base font-black text-white">תפריט נגישות</h2>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="סגור תפריט נגישות"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* אפשרויות נגישות */}
          <div className="mt-4 space-y-2.5 text-xs sm:text-sm">
            {/* גודל טקסט */}
            <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-850">
              <span className="font-bold text-zinc-300 block mb-2">גודל טקסט:</span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={handleIncreaseText}
                  className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 transition-colors focus:ring-2 focus:ring-amber-400"
                  aria-label="הגדל גודל טקסט"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                  <span>הגדלה</span>
                </button>
                <button
                  type="button"
                  onClick={handleDecreaseText}
                  className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 transition-colors focus:ring-2 focus:ring-amber-400"
                  aria-label="הקטן גודל טקסט"
                >
                  <ZoomOut className="w-3.5 h-3.5 text-amber-400" />
                  <span>הקטנה</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetText}
                  className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 transition-colors focus:ring-2 focus:ring-amber-400"
                  aria-label="אפס גודל טקסט"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                  <span>איפוס</span>
                </button>
              </div>
            </div>

            {/* ניגודיות משופרת */}
            <button
              type="button"
              onClick={() => setHighContrast((prev) => !prev)}
              className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-colors ${
                highContrast
                  ? 'bg-zinc-900 border-amber-400 text-amber-300'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">ניגודיות משופרת</span>
              </div>
              {highContrast && <Check className="w-4 h-4 text-amber-400" />}
            </button>

            {/* הדגשת קישורים */}
            <button
              type="button"
              onClick={() => setHighlightLinks((prev) => !prev)}
              className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-colors ${
                highlightLinks
                  ? 'bg-zinc-900 border-amber-400 text-amber-300'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">הדגשת קישורים</span>
              </div>
              {highlightLinks && <Check className="w-4 h-4 text-amber-400" />}
            </button>

            {/* הדגשת מיקוד מקלדת */}
            <button
              type="button"
              onClick={() => setHighlightFocus((prev) => !prev)}
              className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-colors ${
                highlightFocus
                  ? 'bg-zinc-900 border-amber-400 text-amber-300'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Focus className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">הדגשת מיקוד מקלדת</span>
              </div>
              {highlightFocus && <Check className="w-4 h-4 text-amber-400" />}
            </button>

            {/* הפחתת אנימציות */}
            <button
              type="button"
              onClick={() => setReduceMotion((prev) => !prev)}
              className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-colors ${
                reduceMotion
                  ? 'bg-zinc-900 border-amber-400 text-amber-300'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <ZapOff className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">הפחתת אנימציות</span>
              </div>
              {reduceMotion && <Check className="w-4 h-4 text-amber-400" />}
            </button>

            {/* איפוס כל ההגדרות */}
            <button
              type="button"
              onClick={handleResetAll}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-2xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors text-xs font-bold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>איפוס כל הגדרות הנגישות</span>
            </button>

            {/* קישור להצהרת נגישות */}
            <div className="pt-2 border-t border-zinc-800 text-center">
              <Link
                href="/accessibility"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 underline font-semibold transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>קראו את הצהרת הנגישות המלאה</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
