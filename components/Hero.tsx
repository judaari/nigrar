'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG } from '@/lib/business';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-6 pb-8 md:pt-10 md:pb-12 bg-black text-white border-b border-zinc-900">
      {/* אלמנטים גרפיים מעודנים ברקע שחור */}
      <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* כותרת עליונה */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6"
        >


          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            {BUSINESS_CONFIG.tagline}
          </motion.p>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-2 text-base sm:text-lg font-bold text-white max-w-xl mx-auto"
          >
            {BUSINESS_CONFIG.shortDescription}
          </motion.p>
        </motion.div>

        {/* שני כפתורי פעולה יחידים: שיחה מהירה ו-WhatsApp עם מזהה גלילה ייעודי לסרגל הניווט */}
        <motion.div
          id="contact-buttons"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5 scroll-mt-44 sm:scroll-mt-52"
        >
          {/* כפתור 1: שיחה מהירה - חיוג ישיר ללא הצגת מספר הטלפון על המסך */}
          <motion.a
            href={BUSINESS_CONFIG.contact.telHref}
            whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="flex items-center justify-center gap-3 bg-[#FEE101] hover:bg-[#e6cc00] text-[#000000] font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl transition-colors text-center"
            aria-label="התקשרו עכשיו לחיוג ישיר"
          >
            <div className="w-8 h-8 rounded-xl bg-black/10 flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#000000] fill-[#000000]" />
            </div>
                        <span className="text-[#000000]">התקשרו עכשיו</span>
          </motion.a>

          {/* כפתור 2: WhatsApp - פתיחת שיחה ללא הצגת מספר על המסך */}
          <motion.a
            href={BUSINESS_CONFIG.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl transition-colors text-center"
            aria-label="דברו איתנו ב-WhatsApp"
          >
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white fill-white" />
            </div>
            <span>דברו איתנו ב-WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
