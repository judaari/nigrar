'use client';

import React, { useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG } from '@/lib/business';

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-8 sm:py-12 bg-black text-white relative border-b border-zinc-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* כותרת מינימלית ומדויקת */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5 sm:mb-6"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            שאלות נפוצות
          </h2>
          <p className="mt-1 text-white font-bold text-xs sm:text-sm max-w-md mx-auto">
            מידע קצר על דרישות רכב, מסמכים ותנאי השכרה
          </p>
        </motion.div>

        {/* רשימת אקורדיון קומפקטית */}
        <div className="space-y-2">
          {BUSINESS_CONFIG.faq.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-2xl bg-zinc-950 border border-zinc-800 transition-colors overflow-hidden hover:border-zinc-700"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-4 py-3 sm:px-5 sm:py-3.5 text-right flex items-center justify-between gap-3 text-sm sm:text-base font-extrabold text-white hover:text-amber-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{item.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-white transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-3.5 pt-1 sm:px-5 text-xs sm:text-sm text-white font-semibold leading-relaxed border-t border-zinc-900 bg-black/50 pr-10">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
