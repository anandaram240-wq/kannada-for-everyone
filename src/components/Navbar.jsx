import React, { useState } from 'react';
import { 
  BookOpen, 
  MessageSquare, 
  Compass, 
  HelpCircle, 
  Award, 
  Flame, 
  Menu, 
  X,
  Volume2,
  Home
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, streak = 1, learnedCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'vocab', label: 'Vocabulary', icon: BookOpen },
    { id: 'conversations', label: 'Conversations', icon: MessageSquare },
    { id: 'situations', label: 'Situations', icon: Compass },
    { id: 'practice', label: 'Practice Quiz', icon: HelpCircle },
    { id: 'progress', label: 'Dashboard', icon: Award },
    { id: 'sounds', label: 'Pronunciation', icon: Volume2 },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand Identity */}
          <button 
            type="button" 
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-red-600 via-amber-500 to-amber-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform font-kannada shrink-0">
              ಕ
            </div>
            <div className="shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 whitespace-nowrap">
                  Kannada for Everyone
                </span>
                <span className="hidden xl:inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full bg-red-100 text-red-800 border border-red-200 whitespace-nowrap">
                  Hackathon 2026
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block whitespace-nowrap">
                Learn Kannada. Speak with Confidence.
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-sm font-bold shadow-amber-500/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 ${isActive ? 'text-slate-950' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Streak & User Stats Pill */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => handleTabClick('progress')}
              title={`${streak} Day Learning Streak! Click to view dashboard.`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-bold shadow-2xs transition-colors"
            >
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-bounce" />
              <span>{streak} Day Streak</span>
            </button>

            {/* Mobile menu hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 px-4 pt-3 pb-6 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Navigation Menu
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-slate-950' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
