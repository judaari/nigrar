'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Award, 
  Zap, 
  Lock, 
  CheckCircle2, 
  Play, 
  MapPin, 
  Trophy, 
  Sparkles,
  Flame
} from 'lucide-react';

export interface Island {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  state: 'locked' | 'active' | 'completed';
  requiredXp: number;
  reward: {
    title: string;
    xpBonus: number;
    badge: string;
  };
  challenge: {
    title: string;
    duration: string;
    intensity: string;
    calories: string;
  };
  x: number;
  y: number;
}

const INITIAL_ISLANDS: Island[] = [
  {
    id: 'island-1',
    name: 'אי ההתנעה (Ashdod Port)',
    subtitle: 'בסיס אימונים ראשוני',
    description: 'השלם את אימון הבסיס הראשון כדי להפעיל את מנוע ההתקדמות ולפתוח את הדרך.',
    state: 'completed',
    requiredXp: 0,
    reward: {
      title: 'תג מתחיל נחוש',
      xpBonus: 100,
      badge: '🧭'
    },
    challenge: {
      title: 'חימום יסודות וסיבולת לב-אה',
      duration: '15 דקות',
      intensity: 'בינוני',
      calories: '180 קלוריות'
    },
    x: 15,
    y: 70
  },
  {
    id: 'island-2',
    name: 'אי הכוח (Highway Ridge)',
    subtitle: 'פיתוח כוח מתפרץ',
    description: 'מסלול מאתגר המשלב עליות כוח ופיתוח סיבולת שריר מתקדמת.',
    state: 'active',
    requiredXp: 100,
    reward: {
      title: 'כתר כוח ענברי',
      xpBonus: 250,
      badge: '⚡'
    },
    challenge: {
      title: 'אימון התנגדות וספרינטים',
      duration: '25 דקות',
      intensity: 'גבוה',
      calories: '320 קלוריות'
    },
    x: 38,
    y: 45
  },
  {
    id: 'island-3',
    name: 'פסגת האתגר (Summit Peak)',
    subtitle: 'מבחן הסיבולת העליון',
    description: 'טפס אל הפסגה עם תוכנית אימון אינטנסיבית המבוססת על בינה מלאכותית.',
    state: 'locked',
    requiredXp: 350,
    reward: {
      title: 'מדליית פסגה זהובה',
      xpBonus: 500,
      badge: '🏔️'
    },
    challenge: {
      title: 'אתגר פסגה אינטנסיבי מלא',
      duration: '40 דקות',
      intensity: 'גבוה מאוד',
      calories: '540 קלוריות'
    },
    x: 62,
    y: 60
  },
  {
    id: 'island-4',
    name: 'ארכיפלג האליפות (Champion Arch.)',
    subtitle: 'השלב האגדי',
    description: 'הארכיפלג הסופי שבו רק אלופי האימונים האמיתיים זוכה להשלים את המסע.',
    state: 'locked',
    requiredXp: 850,
    reward: {
      title: 'תואר מאמן על אגדי',
      xpBonus: 1000,
      badge: '👑'
    },
    challenge: {
      title: 'מרתון אליפות ושיא אישי',
      duration: '50 דקות',
      intensity: 'אקסטרים',
      calories: '750 קלוריות'
    },
    x: 85,
    y: 30
  }
];

export function IslandProgressionEngine() {
  const [xp, setXp] = useState<number>(180);
  const [islands, setIslands] = useState<Island[]>(INITIAL_ISLANDS);
  const [selectedIsland, setSelectedIsland] = useState<Island | null>(INITIAL_ISLANDS[1]);
  const [avatarIndex, setAvatarIndex] = useState<number>(1);
  const [notification, setNotification] = useState<string | null>(null);

  // Derived level
  const level = Math.floor(xp / 300) + 1;

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  const handleCompleteChallenge = (islandId: string) => {
    const targetIsland = islands.find(i => i.id === islandId);
    if (!targetIsland) return;

    if (targetIsland.state === 'completed') {
      triggerNotification('אי זה כבר הושלם בהצלחה!');
      return;
    }

    const earnedXp = targetIsland.reward.xpBonus;
    const newXp = xp + earnedXp;
    setXp(newXp);

    const calculatedNewLevel = Math.floor(newXp / 300) + 1;
    if (calculatedNewLevel > level) {
      triggerNotification(`עלית לשלב ${calculatedNewLevel}! כל הכבוד! 🎉`);
    }

    // Update islands: mark current as completed and unlock next
    const updated = islands.map((island, idx) => {
      const isCurrentTarget = island.id === islandId;
      const nextIslandIndex = islands.findIndex(i => i.id === islandId) + 1;
      const isNextIsland = idx === nextIslandIndex;

      if (isCurrentTarget) {
        return { ...island, state: 'completed' as const };
      }
      if (isNextIsland || newXp >= island.requiredXp) {
        return { ...island, state: 'active' as const };
      }
      return island;
    });

    setIslands(updated);

    const nextIdx = updated.findIndex(i => i.id === islandId);
    setAvatarIndex(nextIdx);

    triggerNotification(`השלמת את ${targetIsland.name}! זכית ב-+${earnedXp} XP ותג ${targetIsland.reward.badge}`);
    
    if (updated[nextIdx + 1]) {
      setSelectedIsland(updated[nextIdx + 1]);
    } else {
      setSelectedIsland(targetIsland);
    }
  };

  return (
    <section id="island-progression" className="py-12 sm:py-16 bg-black text-white relative border-b border-zinc-900 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header & Level Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/80 p-6 rounded-3xl shadow-2xl">
          <div className="text-center md:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-black uppercase tracking-wider mb-2 border border-amber-500/20">
              <Compass className="w-3.5 h-3.5 animate-spin" />
              <span>מנוע התקדמות איים (Island Progression Engine)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              מסע האימונים והארכיפלג האינטראקטיבי
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              השלם אתגרי אימון, צבור XP, פתח איים חדשים והתקדם לעבר הפסגה.
            </p>
          </div>

          {/* XP & Level Status Card */}
          <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 px-5 py-3.5 rounded-2xl shadow-inner">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black text-xl shadow-lg">
              {level}
            </div>
            <div>
              <div className="flex items-center justify-between gap-6 text-xs text-zinc-400 font-bold mb-1">
                <span>רמה {level}</span>
                <span className="text-amber-400 font-black flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 fill-amber-400" />
                  {xp} XP
                </span>
              </div>
              <div className="w-36 sm:w-48 h-2.5 bg-zinc-800 rounded-full overflow-hidden p-0.5">
                <motion.div 
                  className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full"
                  style={{ width: `${Math.min(100, (xp % 300) / 3 * 10)}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Notification */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="mb-6 bg-gradient-to-r from-amber-500/20 via-zinc-900 to-amber-500/20 border border-amber-500/40 p-4 rounded-2xl shadow-2xl flex items-center gap-3 text-white text-center sm:text-right justify-center"
            >
              <Sparkles className="w-5 h-5 text-amber-400 animate-bounce flex-shrink-0" />
              <span className="font-extrabold text-sm sm:text-base">{notification}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Map Architecture Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Map View (2 cols on lg) */}
          <div className="lg:col-span-2 bg-zinc-950/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 relative min-h-[380px] sm:min-h-[440px] shadow-2xl flex flex-col justify-between overflow-hidden">
            
            {/* Grid background effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* SVG Path Connecting Islands */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M 15 70 Q 26 50, 38 45 T 62 60 T 85 30"
                fill="none"
                stroke="rgba(245, 158, 11, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
            </svg>

            {/* Top map info */}
            <div className="flex items-center justify-between text-xs text-zinc-500 font-bold uppercase tracking-wider relative z-10">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                מפת ארכיפלג האימונים
              </span>
              <span>סטטוס: פעיל</span>
            </div>

            {/* Islands Nodes Render */}
            <div className="relative w-full h-64 sm:h-72 my-auto">
              {islands.map((island, idx) => {
                const isSelected = selectedIsland?.id === island.id;
                const isAvatarHere = avatarIndex === idx;
                const isUnlocked = xp >= island.requiredXp || island.state === 'completed' || island.state === 'active';

                return (
                  <div
                    key={island.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer group"
                    style={{ left: `${island.x}%`, top: `${island.y}%` }}
                    onClick={() => setSelectedIsland(island)}
                  >
                    {/* Avatar Marker Indicator */}
                    {isAvatarHere && (
                      <motion.div
                        layoutId="avatar-marker"
                        className="absolute -top-10 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-2.5 py-0.5 rounded-full text-xs font-black shadow-lg shadow-amber-500/30 flex items-center gap-1 whitespace-nowrap z-30"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <Flame className="w-3 h-3 fill-black" />
                        <span>האתלט כאן</span>
                      </motion.div>
                    )}

                    {/* Island Node Circle */}
                    <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl ${
                      island.state === 'completed'
                        ? 'bg-emerald-600/20 border-2 border-emerald-500 text-emerald-400 shadow-emerald-900/40'
                        : isUnlocked
                        ? 'bg-amber-500/20 border-2 border-amber-400 text-amber-400 shadow-amber-500/30 scale-105'
                        : 'bg-zinc-900 border border-zinc-700 text-zinc-600 opacity-60'
                    } ${isSelected ? 'ring-4 ring-amber-500/40' : ''}`}>
                      <span className="text-xl sm:text-2xl">{island.reward.badge}</span>
                      
                      {/* State Icon badge */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-xs">
                        {island.state === 'completed' && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                        {isUnlocked && island.state !== 'completed' && <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />}
                        {!isUnlocked && <Lock className="w-3 h-3 text-zinc-500" />}
                      </div>
                    </div>

                    {/* Island Name Label */}
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-center whitespace-nowrap pointer-events-none">
                      <span className={`text-xs font-extrabold px-2 py-0.5 rounded-md ${
                        isSelected ? 'bg-amber-500 text-black font-black' : 'bg-zinc-900/90 text-zinc-300 border border-zinc-800'
                      }`}>
                        {island.name.split(' ')[0]} {island.name.split(' ')[1] || ''}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map footer guide */}
            <div className="flex items-center justify-between text-xs text-zinc-400 font-bold pt-4 border-t border-zinc-900">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> הושלם
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <Zap className="w-4 h-4 fill-amber-400" /> פעיל כעת
              </span>
              <span className="flex items-center gap-1.5 text-zinc-500">
                <Lock className="w-4 h-4" /> נעול (דורש XP)
              </span>
            </div>
          </div>

          {/* Selected Island Detail & Challenge Panel */}
          <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-6 shadow-2xl flex flex-col justify-between">
            {selectedIsland ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                    selectedIsland.state === 'completed' 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : xp >= selectedIsland.requiredXp
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                  }`}>
                    {selectedIsland.state === 'completed' ? 'הושלם בהצלחה' : xp >= selectedIsland.requiredXp ? 'אי פעיל כעת' : `נעול (דרוש ${selectedIsland.requiredXp} XP)`}
                  </span>
                  <span className="text-2xl">{selectedIsland.reward.badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                  {selectedIsland.name}
                </h3>
                <p className="text-amber-400 text-xs font-extrabold mb-3">
                  {selectedIsland.subtitle}
                </p>
                <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
                  {selectedIsland.description}
                </p>

                {/* Challenge Card */}
                <div className="bg-zinc-900 border border-zinc-800/80 rounded-2xl p-4 mb-6">
                  <h4 className="text-xs font-extrabold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    אתגר האימון המשויך
                  </h4>
                  <div className="text-white font-bold text-sm mb-3">
                    {selectedIsland.challenge.title}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-zinc-950 p-2 rounded-xl border border-zinc-800">
                      <div className="text-zinc-500 font-bold text-[10px]">משך</div>
                      <div className="text-white font-extrabold mt-0.5">{selectedIsland.challenge.duration}</div>
                    </div>
                    <div className="bg-zinc-950 p-2 rounded-xl border border-zinc-800">
                      <div className="text-zinc-500 font-bold text-[10px]">עצימות</div>
                      <div className="text-amber-400 font-extrabold mt-0.5">{selectedIsland.challenge.intensity}</div>
                    </div>
                    <div className="bg-zinc-950 p-2 rounded-xl border border-zinc-800">
                      <div className="text-zinc-500 font-bold text-[10px]">קלוריות</div>
                      <div className="text-emerald-400 font-extrabold mt-0.5">{selectedIsland.challenge.calories}</div>
                    </div>
                  </div>
                </div>

                {/* Reward info */}
                <div className="flex items-center justify-between text-xs bg-amber-500/5 border border-amber-500/20 p-3.5 rounded-2xl mb-6">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-zinc-300 font-bold">פרס השלמה:</span>
                    <span className="text-amber-400 font-black">{selectedIsland.reward.title}</span>
                  </div>
                  <span className="text-amber-400 font-black bg-amber-500/10 px-2.5 py-1 rounded-lg">
                    +{selectedIsland.reward.xpBonus} XP
                  </span>
                </div>

                {/* Action Button */}
                {xp < selectedIsland.requiredXp && selectedIsland.state !== 'completed' ? (
                  <button
                    disabled
                    className="w-full py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-500 font-extrabold flex items-center justify-center gap-2 cursor-not-allowed text-sm"
                  >
                    <Lock className="w-4 h-4" />
                    <span>האי נעול (צבור עוד XP כדי לפתוח)</span>
                  </button>
                ) : selectedIsland.state === 'completed' ? (
                  <button
                    disabled
                    className="w-full py-4 rounded-2xl bg-emerald-600/10 border border-emerald-500/30 text-emerald-400 font-extrabold flex items-center justify-center gap-2 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>האתגר הושלם בהצלחה!</span>
                  </button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCompleteChallenge(selectedIsland.id)}
                    className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all text-sm sm:text-base"
                  >
                    <Play className="w-4 h-4 fill-black" />
                    <span>השלם אתגר אימון וזכה ב-XP</span>
                  </motion.button>
                )}
              </div>
            ) : (
              <div className="text-center py-16 text-zinc-500">
                בחר אי מהמפה כדי לצפות בפרטים ובאתגרים
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
