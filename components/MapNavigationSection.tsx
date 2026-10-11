'use client';

import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG } from '@/lib/business';

export function MapNavigationSection() {
  const shouldReduceMotion = useReducedMotion();
  const { address, serviceArea, wazeUrl, googleMapsUrl, embedMapUrl } = BUSINESS_CONFIG.location;

  return (
    <section id="location" className="py-8 sm:py-12 bg-black text-white relative border-b border-zinc-900 scroll-mt-44 sm:scroll-mt-52">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* כותרת מקטע ניווט ומפה */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5 sm:mb-6"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            הגעה וניווט לעסק
          </h2>

          <p className="mt-1.5 text-white font-bold text-sm sm:text-base max-w-xl mx-auto flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span className="font-extrabold text-white">{address}</span>
            <span>•</span>
            <span className="font-bold text-white">{serviceArea}</span>
          </p>
        </motion.div>

        {/* כרטיס המפה והניווט */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl bg-zinc-950 border border-zinc-800 p-3.5 sm:p-5 shadow-2xl relative overflow-hidden"
        >
          {/* מפה מוטמעת */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
            <iframe
              title={`מפת מיקום העסק - ${BUSINESS_CONFIG.name}`}
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>

          {/* כפתור ניווט Waze אחד וכפתור Google Maps אחד */}
          <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {/* כפתור Waze */}
            <motion.a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-850 text-white font-extrabold py-3.5 px-5 rounded-2xl border border-sky-500/50 shadow-lg shadow-black transition-colors text-sm sm:text-base group"
              aria-label="פתח ניווט באפליקציית Waze"
            >
              <Navigation className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 group-hover:rotate-45 transition-transform" />
              <span>ניווט ב-Waze</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </motion.a>

            {/* כפתור Google Maps */}
            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-850 text-white font-extrabold py-3.5 px-5 rounded-2xl border border-amber-400/50 shadow-lg shadow-black transition-colors text-sm sm:text-base group"
              aria-label="פתח מיקום ב-Google Maps"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <span>פתיחה ב-Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
