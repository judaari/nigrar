'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PricingSection } from '@/components/PricingSection';
import { TrailerGallery } from '@/components/TrailerGallery';
import { FAQSection } from '@/components/FAQSection';
import { MapNavigationSection } from '@/components/MapNavigationSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col antialiased selection:bg-amber-400 selection:text-black">
      {/* סרגל עליון */}
      <Header />

      {/* אזור פתיחה / הירו: כפתור חיוג יחיד וכפתור WhatsApp יחיד */}
      <Hero />

      {/* מחירון ברקע שחור */}
      <PricingSection />

      {/* גלריית 3 נגררים בלולאה אינסופית רציפה וחלקה */}
      <TrailerGallery />

      {/* שאלות נפוצות */}
      <FAQSection />

      {/* מקטע מפה וניווט בתחתית האתר: מפה מוטמעת + כפתור Waze יחיד + כפתור Google Maps יחיד */}
      <MapNavigationSection />

      {/* פוטר נקי */}
      <Footer />
    </main>
  );
}
