import React from 'react';
import { Heart, Sparkles, BookOpen, Compass, HelpCircle } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Project & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white font-extrabold text-lg font-kannada">
                ಕ
              </div>
              <span className="text-white font-bold text-lg">
                Kannada for Everyone
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              An interactive, zero-barrier language platform dedicated to helping non-Kannada speakers learn practical everyday Kannada through conversations, real-world situations, vocabulary, and guided practice.
            </p>
            <div className="pt-2 text-xs text-amber-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>ಕನ್ನಡ ಕಲಿಯಿರಿ • ಹೆಮ್ಮೆಯಿಂದ ಮಾತನಾಡಿ (Learn Kannada • Speak with Pride)</span>
            </div>
          </div>

          {/* Column 2: Quick Learning Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Learning Modules
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => { setActiveTab('vocab'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Essential Vocabulary (65+ words)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('conversations'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Real-World Dialogues (10 lessons)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('situations'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Situational Scenarios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('practice'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Interactive Quizzes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('sounds'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Pronunciation & Phonetics
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hackathon Info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Hackathon Details
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="font-semibold text-slate-200">
                Kannada Digital Innovation Hackathon 2026
              </p>
              <p>Organized by HackerRank Campus Crew</p>
              <p>The National Institute of Engineering (NIE), Mysuru</p>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded bg-slate-800 text-amber-300 font-mono text-[11px] border border-slate-700">
                  Track: Kannada for Everyone
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Kannada for Everyone. Open-source educational project for Karnataka.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with care for all newcomers to Karnataka</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline mx-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
