import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Lock, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | נגררי אשדוד',
  description: 'מדיניות הפרטיות של אתר נגררי אשדוד - אופן הטיפול במידע ופניות.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* סרגל עליון עם חזרה לדף הבית */}
      <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white font-bold hover:text-amber-400 transition-colors focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
          >
            <ArrowRight className="w-4 h-4" />
            <span>חזרה לדף הבית</span>
          </Link>
          <span className="text-sm font-black text-white">{BUSINESS_CONFIG.name}</span>
        </div>
      </header>

      {/* תוכן העמוד */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-amber-400/30 text-amber-400 text-xs font-black px-3 py-1 rounded-full mb-3">
            <Lock className="w-4 h-4" />
            <span>הגנה על פרטיות</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            מדיניות פרטיות
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-white font-bold">
            תאריך עדכון אחרון: אוקטובר 2026
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-white font-bold leading-relaxed">
          {/* סעיף 1: מבוא וזהות מפעיל האתר */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-black text-white mb-3">
              1. כללי ומפעיל האתר
            </h2>
            <p>
              מדיניות פרטיות זו מפרטת כיצד <strong>{BUSINESS_CONFIG.name}</strong> מתייחס למידע הנמסר בעת השימוש באתר או בעת פנייה ישירה לעסק. 
              אנו מכבדים את פרטיות המשתמשים ומתחייבים לפעול בהתאם להוראות הדין החל בישראל.
            </p>
          </section>

          {/* סעיף 2: סוגי המידע הנאספים */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-black text-white mb-3">
              2. סוגי המידע ואופן איסופו
            </h2>
            <p className="mb-3">
              אתר זה הינו אתר תדמיתי ואינפורמטיבי. האתר אינו כולל טופסי רישום מקוונים, אינו מנהל מועדון לקוחות ואינו מבצע סליקת כרטיסי אשראי באתר עצמו.
            </p>
            <p>
              מידע אישי (כגון שם, מספר טלפון או פרטי פנייה) נמסר על ידי המשתמש מרצונו החופשי בעת יצירת קשר יזום מול העסק — 
              באמצעות חיוג טלפוני ישיר או שליחת הודעה ב-WhatsApp.
            </p>
          </section>

          {/* סעיף 3: מטרות השימוש במידע */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-black text-white mb-3">
              3. מטרות השימוש במידע
            </h2>
            <p>
              המידע הנמסר בעת פנייה ישירה משמש אך ורק למטרות הבאות:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white font-semibold">
              <li>מענה לפניות, בירורים ומתן מידע אודות השכרת נגררים.</li>
              <li>תיאום זמני איסוף והחזרה של הנגרר בבית העסק באשדוד.</li>
              <li>מתן שירות לקוחות וטיפול בהתקשרות השכירות.</li>
            </ul>
          </section>

          {/* סעיף 4: שירותים חיצוניים */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-black text-white mb-3">
              4. שירותים חיצוניים וקישורים
            </h2>
            <p>
              באתר משולבים קישורים לשירותים חיצוניים המופעלים על ידי צדדים שלישיים:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white font-semibold">
              <li><strong>WhatsApp:</strong> שיחות והודעות המתבצעות באפליקציית WhatsApp כפופות למדיניות הפרטיות של חברת Meta.</li>
              <li><strong>Waze ו-Google Maps:</strong> ניווט והצגת מיקום כפופים למדיניות הפרטיות של Google.</li>
            </ul>
          </section>

          {/* סעיף 5: שמירת המידע ושיתופו */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-black text-white mb-3">
              5. שיתוף ואבטחת מידע
            </h2>
            <p>
              אנו לא מעבירים, לא מוכרים ולא משתפים פרטים אישיים של פונים עם גורמים מסחריים כלשהם. 
              המידע שנמסר נשמר לצורך הטיפול בפנייה ובשירות בלבד, בהתאם לדרישות החוק.
            </p>
          </section>

          {/* סעיף 6: זכויות המשתמש ופניות בנושא פרטיות */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-black text-white mb-3">
              6. זכויות המשתמש ויצירת קשר
            </h2>
            <p className="mb-4">
              בהתאם לחוק הגנת הפרטיות, הינכם רשאים לעיין במידע שנשמר אודותיכם ולבקש את תיקונו או מחיקתו. 
              לכל שאלה או פנייה בנושא פרטיות, ניתן לפנות אלינו ישירות:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BUSINESS_CONFIG.contact.telHref}
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-850 text-white font-black py-2.5 px-4 rounded-xl border border-amber-400/50 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>חיוג ישיר לעסק</span>
              </a>
              <a
                href={BUSINESS_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-850 text-white font-black py-2.5 px-4 rounded-xl border border-emerald-500/50 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>פנייה ב-WhatsApp</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* פוטר */}
      <footer className="border-t border-zinc-900 py-6 text-center text-xs text-white font-bold">
        © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. כל הזכויות שמורות.
      </footer>
    </div>
  );
}
