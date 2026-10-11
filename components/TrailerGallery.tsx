'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG } from '@/lib/business';

export function TrailerGallery() {
  const shouldReduceMotion = useReducedMotion();
  const trailers = BUSINESS_CONFIG.gallery;

  // הכפלת 3 התמונות לשני סטים זהים לחלוטין ליצירת לולאה אינסופית רציפה ללא קפיצות
  const singleSet = [...trailers, ...trailers];
  const allItems = [...singleSet, ...singleSet];

  return (
    <section id="gallery" className="py-8 sm:py-12 bg-black text-white relative border-b border-zinc-900 overflow-hidden scroll-mt-44 sm:scroll-mt-52">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-5 text-center">
        {/* כותרת גלריה נקייה ללא באנר תיאור מיותר */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            גלריית נגררים
          </h2>
          <p className="mt-1.5 text-white font-bold text-xs sm:text-sm max-w-md mx-auto">
            תמונות המחשה של צי הנגררים להשכרה
          </p>
        </motion.div>
      </div>

      {/* סרט נע אופקי רציף בלולאה אינסופית אמיתית - dir="ltr" מבטיח תנועה חלקה ואחידה ללא קפיצות */}
      <div className="relative w-full overflow-hidden py-2" dir="ltr">
        {/* גרדיאנט שחור עדין בקצוות למיזוג חלק */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-5">
          {allItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-72 sm:w-88 flex-shrink-0 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-xl"
              dir="rtl"
            >
              {/* תמונת הנגרר */}
              <div className="relative aspect-[16/10] w-full bg-zinc-900 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 288px, 352px"
                  className="object-contain p-2.5"
                />
                <div className="absolute top-2.5 right-2.5 bg-black/85 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                  תמונת המחשה
                </div>
              </div>

              {/* כותרת התמונה */}
              <div className="p-3 bg-zinc-950 border-t border-zinc-900 text-right">
                <h3 className="font-bold text-white text-sm">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
