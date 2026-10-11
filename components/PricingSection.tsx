'use client';

import React from 'react';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG } from '@/lib/business';

export function PricingSection() {
  const shouldReduceMotion = useReducedMotion();
  const threeHours = BUSINESS_CONFIG.pricing.find((p) => p.id === '3-hours') || BUSINESS_CONFIG.pricing[0];
  const fullDay = BUSINESS_CONFIG.pricing.find((p) => p.id === 'full-day') || BUSINESS_CONFIG.pricing[1];

  return (
    <section id="pricing" className="py-8 sm:py-12 bg-black text-white relative border-b border-zinc-900 scroll-mt-44 sm:scroll-mt-52">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* כותרת הסקשן ברקע שחור ונקי */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            מחירון השכרת נגרר
          </h2>

        </motion.div>

        {/* 2 כרטיסי המחירון */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* כרטיס 1: השכרה ל-3 שעות (120 ₪) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
            whileHover={shouldReduceMotion ? {} : { y: -3 }}
            className="relative rounded-3xl bg-zinc-950 border border-zinc-800 p-5 sm:p-7 flex flex-col justify-between hover:border-amber-400/40 transition-colors shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-zinc-900 text-white border border-zinc-800">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {threeHours.periodText}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-1.5">
                {threeHours.title}
              </h3>

              <div className="my-4 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tight">
                  {threeHours.price}
                </span>
                <span className="text-3xl font-extrabold text-white">
                  {threeHours.unit}
                </span>
              </div>

              <ul className="space-y-2.5 text-sm sm:text-base text-white font-bold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>מענה מהיר ותיאום מיידי</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>מתאים להובלה קצרה, קניות וסידורים</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>איסוף והחזרה נוחים באשדוד</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* כרטיס 2: השכרה ליום (200 ₪) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={shouldReduceMotion ? {} : { y: -3 }}
            className="relative rounded-3xl bg-zinc-950 border-2 border-amber-400/50 p-5 sm:p-7 flex flex-col justify-between shadow-xl shadow-amber-400/5"
          >
            {/* תגית הכי משתלם */}
            <div className="absolute -top-3 right-6 bg-zinc-900 text-amber-400 text-xs font-black px-3 py-0.5 rounded-full border border-amber-400/40">
              הבחירה המומלצת ביותר
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-zinc-900 text-white border border-amber-400/30">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {fullDay.periodText}
                </span>
                <span className="text-xs font-black text-amber-400">
                  {fullDay.badgeText}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-1.5">
                {fullDay.title}
              </h3>

              <div className="my-4 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tight">
                  {fullDay.price}
                </span>
                <span className="text-3xl font-extrabold text-white">
                  {fullDay.unit}
                </span>
              </div>

              <ul className="space-y-2.5 text-sm sm:text-base text-white font-bold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>גמישות מירבית לעבודה בראש שקט</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>מתאים להובלת דירות, שיפוצים ומשאות</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>התמורה המלאה ביותר למחיר - 200 ₪ ליום</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
