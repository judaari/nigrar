import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business';

export const metadata: Metadata = {
  title: 'תנאי שימוש | נגררי אשדוד',
  description: 'תנאי השימוש באתר נגררי אשדוד - כללי השימוש, זכויות יוצרים ופרטי התקשרות.',
};

export default function TermsPage() {
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
            <Shield className="w-4 h-4" />
            <span>הסכם ותנאי שימוש</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            תנאי שימוש
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-white font-bold">
            תאריך עדכון אחרון: אוקטובר 2026
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-white font-bold leading-relaxed">
          {/* סעיף 1: כללי ומטרת האתר */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-black text-white mb-3">
              1. מטרת האתר וזהות מפעילו
            </h2>
            <p>
              אתר זה מופעל על ידי <strong>{BUSINESS_CONFIG.name}</strong>, המספק שירותי השכרת נגררים באזור {BUSINESS_CONFIG.location.serviceArea}. 
              מטרת האתר הינה לספק מידע למבקרים אודות שירותי השכרת הנגררים, מחירון השירות ואפשרויות יצירת קשר ותיאום מול בית העסק.
              הגלישה והשימוש באתר כפופים לתנאים המפורטים להלן.
            </p>
          </section>

          {/* סעיף 2: שימוש במידע ובאתר */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-black text-white mb-3">
              2. כללי שימוש באתר
            </h2>
            <p>
              השימוש באתר מותר למטרות אישיות ולצורך פנייה לעסק בלבד. אין לעשות באתר שימוש בלתי חוקי, 
              אין לשבש את פעילותו התקינה ואין להעתיק או לעשות שימוש מסחרי בתכני האתר ללא הסכמה מפורשת מראש.
            </p>
          </section>

          {/* סעיף 3: השכרת נגררים ותיאום שירות */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-black text-white mb-3">
              3. השכרת נגררים והתקשרות עם העסק
            </h2>
            <p className="mb-3">
              המידע המוצג באתר (לרבות מחירון השירות: 120 ₪ ל-3 שעות, 200 ₪ ליום שלם) נועד לצורכי מידע כללי. 
              השכרת הנגרר מתבצעת באיסוף עצמי בתיאום מראש ישירות מול בית העסק בכתובתנו: {BUSINESS_CONFIG.location.address}.
            </p>
            <p>
              השכרת הנגרר מותנית בהצגת רישיון נהיגה תקף, ביטוח רכב מתאים ורכב גורר המצויד בוו גרירה תקין ומאושר על פי דין.
            </p>
          </section>

          {/* סעיף 4: קניין רוחני */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-black text-white mb-3">
              4. קניין רוחני וזכויות יוצרים
            </h2>
            <p>
              כל זכויות הקניין הרוחני באתר, לרבות שם העסק, הלוגו, העיצוב הגרפי, הטקסטים ומבנה האתר, 
              הינם קניינו הבלעדי של <strong>{BUSINESS_CONFIG.name}</strong> (למעט תמונות המחשה ורכיבי צד שלישי המוגנים בזכויות יוצריהם). 
              אין להעתיק, לשכפל, להפיץ או להציג בפומבי תכנים אלה ללא אישור.
            </p>
          </section>

          {/* סעיף 5: קישורים חיצוניים ושירותי צד שלישי */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-black text-white mb-3">
              5. קישורים חיצוניים (Waze, Google Maps, WhatsApp)
            </h2>
            <p>
              האתר כולל קישורים ישירים לשירותי צד שלישי לצורך נוחות המשתמש: פתיחת שיחת WhatsApp, 
              וניווט לבית העסק באמצעות אפליקציית Waze ו-Google Maps. השימוש באפליקציות ובשירותים אלו כפוף 
              לתנאי השימוש ולמדיניות של אותם ספקים חיצוניים.
            </p>
          </section>

          {/* סעיף 6: זמינות האתר */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-black text-white mb-3">
              6. זמינות האתר ותקלות
            </h2>
            <p>
              אנו עושים מאמצים על מנת שהאתר יפעל בצורה רציפה ותקינה. עם זאת, ייתכנו הפסקות זמניות בפעילותו לצורכי תחזוקה 
              או תקלות שאינן בשליטתנו.
            </p>
          </section>

          {/* סעיף 7: פרטיות ויצירת קשר */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-black text-white mb-3">
              7. פרטיות ויצירת קשר
            </h2>
            <p className="mb-4">
              השימוש במידע שנמסר על ידכם מוסדר ב
              <Link href="/privacy" className="text-amber-400 hover:text-amber-300 underline mx-1 font-black">
                מדיניות הפרטיות
              </Link>
              של האתר. לשאלות, בירורים או תיאום השכרת נגרר, ניתן לפנות אלינו בערוצי ההתקשרות הישירים:
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
                <span>שיחה ב-WhatsApp</span>
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
