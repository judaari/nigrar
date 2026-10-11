/**
 * נגררי אשדוד - מקור נתונים מרכזי יחיד של העסק
 */

export const BUSINESS_CONFIG = {
  name: "נגררי אשדוד",
  tagline: "השכרת נגררים באשדוד והסביבה",
  shortDescription: "פתרון פשוט ונוח להשכרת נגררים.",

  // קישורי התקשרות ישירים (ללא הצגת מספר כטקסט)
  contact: {
    telHref: "tel:+972542251438",
    whatsappLink: "https://wa.me/972542251438?text=" + encodeURIComponent("שלום, הגעתי דרך האתר של נגררי אשדוד. אשמח לקבל פרטים על השכרת נגרר."),
  },

  // מיקום וכתובת
  location: {
    address: 'אדמו"ר מבעלזא 7, אשדוד',
    serviceArea: "אשדוד והסביבה",
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('אדמו"ר מבעלזא 7 אשדוד')}`,
    wazeUrl: `https://waze.com/ul?q=${encodeURIComponent('אדמו"ר מבעלזא 7 אשדוד')}&navigate=yes`,
    embedMapUrl: `https://maps.google.com/maps?q=${encodeURIComponent('אדמו"ר מבעלזא 7, אשדוד')}&t=&z=16&ie=UTF8&iwloc=&output=embed`,
  },

  // מחירון
  pricing: [
    {
      id: "3-hours",
      title: "השכרה ל-3 שעות",
      price: 120,
      unit: "₪",
      periodText: "עד 3 שעות",
    },
    {
      id: "full-day",
      title: "השכרה ליום",
      price: 200,
      unit: "₪",
      periodText: "יום שלם",
      badgeText: "הכי משתלם",
    },
  ],

  // 3 תמונות נגררים לגלריה
  gallery: [
    {
      id: "trailer-1",
      title: "נגרר פתוח עם דפנות רשת",
      src: "/images/trailer-hero.jpg",
    },
    {
      id: "trailer-2",
      title: "נגרר עם רמפה אחורית",
      src: "/images/trailer-ramp.jpg",
    },
    {
      id: "trailer-3",
      title: "נגרר עם כיסוי ברזנט",
      src: "/images/trailer-cover.jpg",
    },
  ],

  // שאלות נפוצות
  faq: [
    {
      id: "docs",
      question: "אילו מסמכים נדרשים בעת השכרת הנגרר?",
      answer: "רישיון נהיגה ישראלי בתוקף, תעודת זהות וביטוח רכב תקף הכולל גרירה.",
    },
    {
      id: "vehicle",
      question: "מהן הדרישות מרכב הגורר?",
      answer: "וו גרירה מאושר ברישיון הרכב, שקע חשמל תקין לתאורת הנגרר ולוחית רישוי תואמת.",
    },
    {
      id: "license",
      question: "האם נדרש רישיון נהיגה מיוחד?",
      answer: "לנגרר במשקל כולל עד 750 ק\"ג מספיק רישיון נהיגה רגיל (דרגה B).",
    },
    {
      id: "pickup",
      question: "כיצד מתבצעים האיסוף וההחזרה?",
      answer: "בתיאום טלפוני מראש בכתובת בית העסק באשדוד.",
    },
  ],
};
