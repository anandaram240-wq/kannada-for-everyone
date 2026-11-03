import React, { useState } from 'react';
import { 
  Award, 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  BookOpen, 
  MessageSquare, 
  RotateCcw, 
  Bookmark, 
  ArrowRight,
  TrendingUp,
  Volume2,
  Trash2
} from 'lucide-react';
import { VOCABULARY_ITEMS } from '../data/vocabulary';
import { CONVERSATIONS } from '../data/conversations';
import { SITUATIONS } from '../data/situations';
import { BADGES } from '../data/badges';
import AudioButton from '../components/AudioButton';

export default function ProgressPage({
  learnedWords = [],
  bookmarkedWords = [],
  completedConvs = [],
  completedSituations = [],
  quizHistory = [],
  streak = 1,
  onResetProgress,
  setActiveTab,
}) {
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Calculate current state for badges
  const currentState = {
    learnedWords,
    bookmarkedWords,
    completedConversations: completedConvs,
    completedSituations,
    quizHistory,
    streak,
  };

  const unlockedBadges = BADGES.filter((b) => b.condition(currentState));
  const lockedBadges = BADGES.filter((b) => !b.condition(currentState));

  // Calculate aggregate metrics
  const totalWords = VOCABULARY_ITEMS.length;
  const vocabPercent = Math.round((learnedWords.length / totalWords) * 100);
  const convPercent = Math.round((completedConvs.length / CONVERSATIONS.length) * 100);
  const situationPercent = Math.round((completedSituations.length / SITUATIONS.length) * 100);

  // Overall combined syllabus completion
  const overallCompletion = Math.round(
    ((learnedWords.length / totalWords) * 0.4 +
     (completedConvs.length / CONVERSATIONS.length) * 0.3 +
     (completedSituations.length / SITUATIONS.length) * 0.3) * 100
  );

  // Find recommended next lesson
  const nextConv = CONVERSATIONS.find((c) => !completedConvs.includes(c.id)) || CONVERSATIONS[0];
  const nextSit = SITUATIONS.find((s) => !completedSituations.includes(s.id)) || SITUATIONS[0];

  // Bookmarked vocabulary items
  const bookmarkedItems = VOCABULARY_ITEMS.filter((item) => bookmarkedWords.includes(item.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER & RESET PROGRESS */}
      <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Module 5: Learner Dashboard
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Learning Journey
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Track words mastered, dialogues practiced, quiz performance, and unlocked achievement badges.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowResetConfirm(true)}
          className="self-start sm:self-auto px-3.5 py-2 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 border border-red-200 flex items-center gap-1.5 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          <span>Reset Progress</span>
        </button>
      </div>

      {/* CONFIRM RESET MODAL */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Reset All Learning Progress?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              This will reset your learned words count, quiz history, completed conversation badges, and bookmarks. This action cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  onResetProgress();
                  setShowResetConfirm(false);
                }}
                className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold"
              >
                Yes, Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOP STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Overall Syllabus Progress */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
            <span>Overall Progress</span>
            <TrendingUp className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-4xl font-extrabold text-slate-900">{overallCompletion}%</p>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mt-2">
            <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${overallCompletion}%` }}></div>
          </div>
          <p className="text-[11px] text-slate-500 pt-1 font-medium">Weighted syllabus completion</p>
        </div>

        {/* Card 2: Streak */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
            <span>Daily Streak</span>
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          </div>
          <p className="text-4xl font-extrabold text-slate-900">{streak} Days</p>
          <p className="text-xs text-orange-600 font-bold pt-1">Keep it burning! 🔥</p>
          <p className="text-[11px] text-slate-500 font-medium">Consecutive practice activity</p>
        </div>

        {/* Card 3: Words Learned */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
            <span>Vocabulary</span>
            <BookOpen className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-4xl font-extrabold text-slate-900">{learnedWords.length} <span className="text-lg text-slate-400">/ {totalWords}</span></p>
          <p className="text-xs text-blue-600 font-bold pt-1">{vocabPercent}% mastered</p>
          <p className="text-[11px] text-slate-500 font-medium">{bookmarkedWords.length} saved bookmarks</p>
        </div>

        {/* Card 4: Dialogues & Scenarios */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
            <span>Conversations</span>
            <MessageSquare className="w-4 h-4 text-emerald-500" />
          </div>
          <p className="text-4xl font-extrabold text-slate-900">{completedConvs.length + completedSituations.length}</p>
          <p className="text-xs text-emerald-600 font-bold pt-1">
            {completedConvs.length} Dialogues • {completedSituations.length} Scenarios
          </p>
          <p className="text-[11px] text-slate-500 font-medium">Real-world practical lessons</p>
        </div>

      </div>

      {/* RECOMMENDED NEXT STEP */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-100/40 to-white rounded-3xl p-6 sm:p-8 border border-amber-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            Recommended Next Step
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-2">
            Practice: "{nextConv.title}"
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            {nextConv.description}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setActiveTab('conversations')}
          className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-sm shadow-amber-500/20 active:scale-95 transition-all"
        >
          <span>Continue Lesson</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* ACHIEVEMENTS & BADGES */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-slate-900">
            Achievements & Badges ({unlockedBadges.length} / {BADGES.length} Unlocked)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BADGES.map((b) => {
            const isUnlocked = b.condition(currentState);
            return (
              <div
                key={b.id}
                className={`rounded-2xl p-4 border transition-all duration-200 flex items-start gap-3.5 ${
                  isUnlocked
                    ? 'bg-white border-amber-300 shadow-sm'
                    : 'bg-slate-50/70 border-slate-200 opacity-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${
                  isUnlocked ? 'bg-amber-100' : 'bg-slate-200 grayscale'
                }`}>
                  {b.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider font-kannada">
                    {b.title}
                  </p>
                  <p className="text-sm font-extrabold text-slate-900 truncate">
                    {b.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BOOKMARKED WORDS QUICK REFERENCE */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
          <span>Your Bookmarked Words ({bookmarkedItems.length})</span>
        </h3>

        {bookmarkedItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 text-center py-10 space-y-2">
            <p className="text-2xl">🔖</p>
            <p className="text-sm font-bold text-slate-700">No bookmarked words yet</p>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Tap the bookmark icon on any vocabulary card to save important words here for fast revision!
            </p>
            <button
              type="button"
              onClick={() => setActiveTab('vocab')}
              className="mt-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold"
            >
              Browse Vocabulary
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookmarkedItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-bold font-kannada text-slate-900">{item.kannada}</h4>
                  <p className="text-xs font-bold text-amber-700">{item.transliteration}</p>
                  <p className="text-xs text-slate-600 mt-0.5">{item.english}</p>
                </div>
                <AudioButton text={item.kannada} translit={item.transliteration} size="sm" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RECENT QUIZ HISTORY */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-slate-900">
          Recent Quiz Attempts ({quizHistory.length})
        </h3>

        {quizHistory.length === 0 ? (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center text-xs text-slate-500">
            No quiz attempts recorded yet. Head over to the <button onClick={() => setActiveTab('practice')} className="text-amber-700 font-bold underline">Practice Quiz</button> module to test your knowledge!
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100">
            {quizHistory.slice(0, 5).map((q) => (
              <div key={q.id} className="p-4 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-900">Track: {q.category}</p>
                  <p className="text-slate-400 mt-0.5">{new Date(q.date).toLocaleDateString()} at {new Date(q.date).toLocaleTimeString()}</p>
                </div>
                <div className="text-right">
                  <p className={`font-extrabold text-sm ${q.percentage >= 70 ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {q.percentage}%
                  </p>
                  <p className="text-slate-500 font-medium">{q.score} / {q.total} correct</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
