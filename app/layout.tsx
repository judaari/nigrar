import type {Metadata} from 'next';
import { Heebo } from 'next/font/google';
import './globals.css'; // Global styles
import { AccessibilityWidget } from '@/components/AccessibilityWidget';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-heebo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'נגררי אשדוד | השכרת נגררים באשדוד והסביבה',
  description: 'השכרת נגררים באשדוד והסביבה במחירים משתלמים: 120 ₪ ל-3 שעות, 200 ₪ ליום. אדמו"ר מבעלזא 7, אשדוד.',
  openGraph: {
    title: 'נגררי אשדוד | השכרת נגררים באשדוד והסביבה',
    description: 'פתרון פשוט ונוח להשכרת נגררים באשדוד והסביבה. 120 ₪ ל-3 שעות, 200 ₪ ליום.',
    type: 'website',
    locale: 'he_IL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'נגררי אשדוד | השכרת נגררים באשדוד והסביבה',
    description: 'השכרת נגררים באשדוד והסביבה במחירים משתלמים.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="he" dir="rtl" className={`scroll-smooth bg-black ${heebo.variable}`}>
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-white font-sans antialiased selection:bg-amber-400 selection:text-black font-semibold" suppressHydrationWarning>
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}
