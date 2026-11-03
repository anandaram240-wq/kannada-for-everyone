import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  HelpCircle, 
  Volume2, 
  ArrowRight,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';
import AudioButton from '../components/AudioButton';
import { SITUATIONS } from '../data/situations';

export default function SituationsPage({
  completedSituations = [],
  onCompleteSituation,
}) {
  const [selectedSitId, setSelectedSitId] = useState(SITUATIONS[0].id);
  const [challengeChoice, setChallengeChoice] = useState(null);
  const [hasAnsweredChallenge, setHasAnsweredChallenge] = useState(false);

  const situation = SITUATIONS.find((s) => s.id === selectedSitId) || SITUATIONS[0];
  const isCompleted = completedSituations.includes(situation.id);

  const handleSelectSituation = (id) => {
    setSelectedSitId(id);
    setChallengeChoice(null);
    setHasAnsweredChallenge(false);
  };

  const handleAnswerChallenge = (optIndex) => {
    setChallengeChoice(optIndex);
    setHasAnsweredChallenge(true);
    if (situation.challenge.options[optIndex].correct) {
      onCompleteSituation(situation.id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER & MODULE INTRO */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Module 3: Situational Survival Kit
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real-World Kannada Situations
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Survive and thrive in Bengaluru and Karnataka. Pick an everyday scenario, learn cultural etiquette, master targeted phrases, and test your decision making.
          </p>
        </div>

        {/* Completion Pill */}
        <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-2xs self-start md:self-auto">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span className="text-xs font-bold text-slate-700">
            {completedSituations.length} / {SITUATIONS.length} Scenarios Mastered
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: SITUATION LIST (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
            Choose a Situation ({SITUATIONS.length})
          </h3>

          <div className="space-y-2 max-h-[720px] overflow-y-auto pr-1">
            {SITUATIONS.map((s) => {
              const isSelected = s.id === selectedSitId;
              const hasCompleted = completedSituations.includes(s.id);

              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleSelectSituation(s.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-150 flex items-start gap-3 border ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-500 shadow-md shadow-amber-500/20'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <span className="text-2xl shrink-0 mt-0.5">{s.icon}</span>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <p className={`text-sm truncate ${isSelected ? 'font-extrabold text-slate-950' : 'font-bold text-slate-900'}`}>
                        {s.title}
                      </p>
                      {hasCompleted && (
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${isSelected ? 'text-slate-950' : 'text-emerald-600'}`} />
                      )}
                    </div>
                    <p className={`text-xs truncate mt-0.5 ${isSelected ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
                      {s.badge} • Interactive Challenge
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: SITUATION DETAILS & SIMULATION (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            {/* Situation Title & Context */}
            <div className="border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{situation.icon}</span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {situation.badge}
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                    {situation.title}
                  </h2>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-2">
                {situation.context}
              </p>
            </div>

            {/* Cultural Tip & Etiquette */}
            <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200/60 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-950 leading-relaxed">
                <span className="font-extrabold">Cultural Etiquette Tip: </span>
                {situation.culturalTip}
              </div>
            </div>

            {/* What you want to achieve */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Your Communication Goal
              </p>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-sm font-semibold text-slate-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{situation.intent}</span>
              </div>
            </div>

            {/* RECOMMENDED PHRASES */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Recommended Phrases to Speak
              </h3>

              <div className="space-y-3">
                {situation.phrases.map((phrase, pIdx) => (
                  <div key={pIdx} className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/80 flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                          {phrase.usage}
                        </span>
                      </div>
                      <p className="text-xl font-extrabold text-slate-900 font-kannada">
                        {phrase.kannada}
                      </p>
                      <p className="text-sm font-bold text-amber-800">
                        {phrase.translit}
                      </p>
                      <p className="text-xs font-medium text-slate-600">
                        "{phrase.english}"
                      </p>
                    </div>

                    <AudioButton text={phrase.kannada} translit={phrase.translit} size="sm" />
                  </div>
                ))}
              </div>
            </div>

            {/* EXPECTED RESPONSE FROM OTHER PERSON */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                Likely Response From the Other Person
              </span>
              <p className="text-xl font-bold font-kannada text-slate-100">
                {situation.expectedResponse.kannada}
              </p>
              <p className="text-sm font-medium text-amber-300">
                {situation.expectedResponse.translit}
              </p>
              <p className="text-xs text-slate-400">
                "{situation.expectedResponse.english}"
              </p>
            </div>

            {/* INTERACTIVE SCENARIO DECISION CHALLENGE */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-5 border border-emerald-200 space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-700" />
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-950">
                  Interactive Decision Challenge
                </h4>
              </div>

              <p className="text-sm font-bold text-slate-900 leading-snug">
                {situation.challenge.prompt}
              </p>

              <div className="space-y-2.5">
                {situation.challenge.options.map((opt, optIndex) => {
                  const isSelected = challengeChoice === optIndex;
                  let btnClass = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';

                  if (hasAnsweredChallenge) {
                    if (opt.correct) {
                      btnClass = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                    } else if (isSelected && !opt.correct) {
                      btnClass = 'bg-red-100 border-red-400 text-red-950';
                    }
                  }

                  return (
                    <button
                      key={optIndex}
                      type="button"
                      disabled={hasAnsweredChallenge}
                      onClick={() => handleAnswerChallenge(optIndex)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all duration-150 ${btnClass}`}
                    >
                      {opt.text}
                    </button>
                  );
                })}
              </div>

              {/* Challenge Feedback */}
              {hasAnsweredChallenge && (
                <div className="mt-3 p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 animate-in fade-in">
                  <p className={`text-xs font-bold ${situation.challenge.options[challengeChoice].correct ? 'text-emerald-700' : 'text-red-700'}`}>
                    {situation.challenge.options[challengeChoice].correct ? '🎉 Brilliant decision!' : '❌ Not the best option.'}{' '}
                    {situation.challenge.options[challengeChoice].explanation}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-500 font-medium">
                      {isCompleted ? '✓ Scenario marked as completed' : ''}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setHasAnsweredChallenge(false);
                        setChallengeChoice(null);
                      }}
                      className="text-xs font-bold text-amber-700 hover:underline"
                    >
                      Retry Challenge
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
