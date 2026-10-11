import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Accessibility, CheckCircle2, AlertCircle, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/business';

export const metadata: Metadata = {
  title: 'הצהרת נגישות | נגררי אשדוד',
  description: 'הצהרת נגישות של אתר נגררי אשדוד - פירוט התאמות הנגישות ודרכי פנייה.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* סרגל עליון מינימלי עם חזרה לדף הבית */}
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
            <Accessibility className="w-4 h-4" />
            <span>מידע על נגישות האתר</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            הצהרת נגישות
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-white font-bold">
            תאריך עדכון אחרון: אוקטובר 2026
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-white font-bold leading-relaxed">
          {/* מבוא */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl font-black text-white mb-3">
              מבוא ומחויבות לנגישות
            </h2>
            <p>
              עסק <strong>{BUSINESS_CONFIG.name}</strong> רואה חשיבות במתן שירות שוויוני, מכבד ונגיש לכלל המבקרים באתר. 
              אנו פועלים ככל הניתן על מנת לאפשר שימוש נוח, פשוט וברור באתר לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות.
            </p>
          </section>

          {/* התאמות הנגישות הקיימות באתר בפועל */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl font-black text-white mb-4">
              התאמות הנגישות המיושמות באתר בפועל
            </h2>
            <p className="mb-4 text-white font-bold text-sm">
              באתר מוטמע תפריט נגישות ייעודי (באמצעות כפתור &quot;נגישות&quot; המוצג על המסך) המאפשר למשתמש לבצע את ההתאמות הבאות:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>שליטה בגודל הגופן:</strong> אפשרות להגדלת הטקסט, הקטנתו או איפוסו לגודל ברירת המחדל.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>ניגודיות משופרת:</strong> מצב ניגודיות גבוהה להקלה על קריאת הטקסטים והאלמנטים.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>הדגשת קישורים:</strong> סימון קו תחתון וצבע בולט לכל הקישורים בעמוד לזיהוי מהיר.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>הדגשת מיקוד מקלדת:</strong> מסגרת פוקוס ברורה ובולטת בעת ניווט באמצעות מקלדת (Tab).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>הפחתת אנימציות:</strong> השבתת תנועות ומעברים חזותיים עבור משתמשים הרגישים לתנועה.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>תמיכה בכיווניות עברית (RTL):</strong> האתר מותאם לקריאה מימין לשמאל ומאורגן במבנה היררכי ברור.
                </span>
              </li>
            </ul>
          </section>

          {/* מגבלות נגישות ידועות */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-black text-white mb-2">
                  מגבלות נגישות ופניות
                </h2>
                <p className="text-white font-bold">
                  למרות מאמצינו להנגיש את כלל חלקי האתר, ייתכן שיתגלו דפים או רכיבים מסוימים שטרם הונגשו באופן מלא 
                  (כגון רכיבי מפה חיצוניים מוטמעים). אנו ממשיכים לפעול לשיפור מתמיד של נגישות האתר.
                </p>
              </div>
            </div>
          </section>

          {/* יצירת קשר ודיווח על בעיות נגישות */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl font-black text-white mb-3">
              דיווח על בעיית נגישות או בקשת סיוע
            </h2>
            <p className="mb-6 text-white font-bold">
              אם נתקלתם בקושי בגלישה באתר או שיש לכם הצעה לשיפור הנגישות, נשמח לקבל את פנייתכם 
              ולסייע בהקדם באמצעות ערוצי ההתקשרות הישירים של העסק:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BUSINESS_CONFIG.contact.telHref}
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-850 text-white font-black py-3 px-5 rounded-xl border border-amber-400/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>חיוג טלפוני ישיר לעסק</span>
              </a>
              <a
                href={BUSINESS_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-850 text-white font-black py-3 px-5 rounded-xl border border-emerald-500/50 transition-colors"
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
