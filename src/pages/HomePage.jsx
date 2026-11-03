import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  MessageSquare, 
  Compass, 
  HelpCircle, 
  CheckCircle2, 
  Volume2, 
  Users, 
  ShieldCheck, 
  Flame,
  Award
} from 'lucide-react';
import AudioButton from '../components/AudioButton';
import { VOCABULARY_ITEMS } from '../data/vocabulary';

export default function HomePage({ setActiveTab, learnedWords = [], streak = 1, completedConvs = [] }) {
  // Select an inspiring word of the day
  const wordOfTheDay = VOCABULARY_ITEMS[0]; // Namaskara

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-16 bg-gradient-to-b from-amber-500/10 via-amber-100/30 to-transparent border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span>Kannada Digital Innovation Hackathon 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Learn Kannada. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-red-600 via-amber-600 to-amber-700 bg-clip-text text-transparent">
                Speak with Confidence.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Practical Kannada for everyday life, one conversation at a time. Designed specifically for non-Kannada speakers relocating, studying, or working in Karnataka.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => setActiveTab('vocab')}
                className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-all active:scale-95"
              >
                <span>Start Learning Vocabulary</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('conversations')}
                className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-sm flex items-center gap-2 transition-all active:scale-95"
              >
                <MessageSquare className="w-5 h-5 text-amber-600" />
                <span>Explore Conversations</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('practice')}
                className="px-6 py-3.5 rounded-2xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-base border border-red-200 transition-all active:scale-95 flex items-center gap-2"
              >
                <HelpCircle className="w-5 h-5 text-red-600" />
                <span>Quick Quiz</span>
              </button>
            </div>

            {/* Target Audience Tags */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-500">
              <span className="text-slate-400">Tailored for:</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">Students from other states</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">Tech & IT Employees</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">Relocating Families</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">Tourists & Commuters</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK WORD OF THE DAY & LEARNER PROGRESS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Word of the Day */}
          <div className="lg:col-span-2 bg-gradient-to-br from-white to-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Word of the Day
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Category: {wordOfTheDay.category}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
                <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-kannada">
                  {wordOfTheDay.kannada}
                </h3>
                <span className="text-xl sm:text-2xl font-bold text-amber-700">
                  ({wordOfTheDay.transliteration})
                </span>
                <div className="sm:ml-auto">
                  <AudioButton text={wordOfTheDay.kannada} translit={wordOfTheDay.transliteration} size="md" />
                </div>
              </div>

              <p className="text-lg font-semibold text-slate-700 mb-4">
                Meaning: <span className="text-slate-900 font-bold">{wordOfTheDay.english}</span>
              </p>

              <div className="bg-white/80 rounded-2xl p-4 border border-amber-200/50 space-y-1.5">
                <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">Example Usage</p>
                <p className="text-base font-semibold text-slate-900 font-kannada">{wordOfTheDay.exampleKn}</p>
                <p className="text-sm text-slate-600 italic">{wordOfTheDay.exampleTranslit}</p>
                <p className="text-xs text-slate-500 font-medium">{wordOfTheDay.exampleEn}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-200/50 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {wordOfTheDay.notes}
              </span>
              <button
                type="button"
                onClick={() => setActiveTab('vocab')}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
              >
                <span>View all 65+ words</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Quick Progress Summary */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Your Activity
                </span>
                <div className="flex items-center gap-1 text-xs font-bold text-orange-600">
                  <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
                  <span>{streak} Day Streak</span>
                </div>
              </div>

              <h4 className="text-xl font-extrabold text-slate-900 mb-4">
                Learning Overview
              </h4>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                    <span>Words Learned</span>
                    <span className="font-bold text-slate-900">{learnedWords.length} / {VOCABULARY_ITEMS.length}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-amber-500 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (learnedWords.length / VOCABULARY_ITEMS.length) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                    <span>Conversations Completed</span>
                    <span className="font-bold text-slate-900">{completedConvs.length} / 10</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (completedConvs.length / 10) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3.5 rounded-2xl bg-amber-50 border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
                💡 <span className="font-bold">Beginner Tip:</span> Learning just 5 polite words today will help you order food and travel comfortably!
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveTab('progress')}
              className="mt-6 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold text-center transition-colors"
            >
              Open Full Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* THE 4 PILLARS OF PRACTICAL KANNADA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
            Curriculum Structure
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
            The 4 Pillars of Everyday Kannada
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Every feature directly targets the official hackathon problem statement to make you conversational without confusing grammar overload.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div 
            onClick={() => setActiveTab('vocab')}
            className="group cursor-pointer bg-white rounded-3xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Module 1</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2 group-hover:text-amber-600 transition-colors">
              Kannada Vocabulary
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              65+ high-frequency words across 12 practical categories like Greetings, Food, Transport, and Numbers.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
              <span>Explore words</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 2 */}
          <div 
            onClick={() => setActiveTab('conversations')}
            className="group cursor-pointer bg-white rounded-3xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Module 2</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2 group-hover:text-blue-600 transition-colors">
              Everyday Conversations
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              10 real-world dialogues with Person A & B, line-by-line audio, vocabulary breakdown, and comprehension checks.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700">
              <span>Read dialogues</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 3 */}
          <div 
            onClick={() => setActiveTab('situations')}
            className="group cursor-pointer bg-white rounded-3xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Module 3</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2 group-hover:text-emerald-600 transition-colors">
              Real Situations
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Master the auto stand, Darshini hotel, BMTC bus, vegetable market, and hospital with instant decision challenges.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
              <span>Practice scenarios</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 4 */}
          <div 
            onClick={() => setActiveTab('practice')}
            className="group cursor-pointer bg-white rounded-3xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <HelpCircle className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">Module 4</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2 group-hover:text-purple-600 transition-colors">
              Guided Practice
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Interactive quiz engine with instant explanations, progress tracking, badges, and zero login barriers.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700">
              <span>Start practice quiz</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* WHY LEARN KANNADA IN KARNATAKA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Cultural Connection
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
              Speaking even 5 words of Kannada opens hearts across Karnataka.
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Whether you are hailing an auto in Indiranagar, sipping filter coffee in Malleshwaram, or talking to colleagues in Whitefield, speaking courteous Kannada brings smiles, respect, and instant belonging.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Zero registration required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Works offline via localStorage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Web Speech API pronunciation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
