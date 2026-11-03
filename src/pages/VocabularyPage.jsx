import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle2, 
  RotateCw, 
  Volume2, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles,
  Filter,
  Layers,
  LayoutGrid
} from 'lucide-react';
import AudioButton from '../components/AudioButton';
import { VOCABULARY_CATEGORIES, VOCABULARY_ITEMS } from '../data/vocabulary';

export default function VocabularyPage({
  learnedWords = [],
  onToggleLearned,
  bookmarkedWords = [],
  onToggleBookmark,
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'learned' | 'bookmarked'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'flashcard'

  // Flashcard specific state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filtered vocabulary list
  const filteredWords = useMemo(() => {
    return VOCABULARY_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Status filter
      if (statusFilter === 'learned' && !learnedWords.includes(item.id)) {
        return false;
      }
      if (statusFilter === 'bookmarked' && !bookmarkedWords.includes(item.id)) {
        return false;
      }
      // Search query (matches kannada, transliteration, english, or notes)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchKn = item.kannada.toLowerCase().includes(query);
        const matchTr = item.transliteration.toLowerCase().includes(query);
        const matchEn = item.english.toLowerCase().includes(query);
        const matchCategory = item.category.toLowerCase().includes(query);
        if (!matchKn && !matchTr && !matchEn && !matchCategory) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, statusFilter, searchQuery, learnedWords, bookmarkedWords]);

  // Handle flashcard navigation
  const currentCard = filteredWords[currentCardIndex] || filteredWords[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % filteredWords.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER & MODULE INTRO */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Module 1: Practical Vocabulary
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kannada Vocabulary Builder
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Master {VOCABULARY_ITEMS.length} high-frequency words and daily expressions. Listen to natural pronunciations, test yourself with interactive flashcards, and mark items as learned.
          </p>
        </div>

        {/* Learning Stats Pill */}
        <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs self-start md:self-auto">
          <div className="text-right">
            <p className="text-xs text-slate-500 font-semibold">Mastery Progress</p>
            <p className="text-base font-extrabold text-slate-900">
              {learnedWords.length} <span className="text-xs font-normal text-slate-500">of {VOCABULARY_ITEMS.length} learned</span>
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
            {Math.round((learnedWords.length / VOCABULARY_ITEMS.length) * 100)}%
          </div>
        </div>
      </div>

      {/* CONTROLS: SEARCH, FILTER, AND VIEW TOGGLE */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search in Kannada, English, or Transliteration..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentCardIndex(0);
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 shadow-2xs"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentCardIndex(0);
              }}
              className="px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-2xs focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Words ({VOCABULARY_ITEMS.length})</option>
              <option value="learned">Learned Only ({learnedWords.length})</option>
              <option value="bookmarked">Bookmarked Only ({bookmarkedWords.length})</option>
            </select>

            {/* View Mode Toggle */}
            <div className="bg-slate-100 p-1 rounded-xl flex items-center">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Browse all cards in grid"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('flashcard')}
                className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'flashcard'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Practice with interactive flip flashcard"
              >
                <Layers className="w-4 h-4" />
                <span className="hidden sm:inline">Flashcard</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {VOCABULARY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentCardIndex(0);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* CONDITIONAL RENDERING: FLASHCARD VIEW OR GRID VIEW */}
      {filteredWords.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
          <p className="text-3xl">🔍</p>
          <h3 className="text-lg font-bold text-slate-800">No vocabulary words match your filter</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search keyword, category, or clear the "Learned/Bookmarked" filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setStatusFilter('all');
            }}
            className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'flashcard' ? (
        /* INTERACTIVE 3D FLIP FLASHCARD VIEW */
        <div className="max-w-xl mx-auto space-y-6">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Card {currentCardIndex + 1} of {filteredWords.length}</span>
            <span className="bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full font-bold">
              {currentCard.category}
            </span>
          </div>

          {/* Flashcard container */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer bg-white rounded-3xl border-2 border-amber-300 p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[340px] flex flex-col justify-between relative group"
          >
            {/* Top action row */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <RotateCw className="w-3.5 h-3.5 text-amber-600" />
                Tap card to {isFlipped ? 'show Kannada' : 'reveal meaning'}
              </span>

              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={() => onToggleBookmark(currentCard.id)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-amber-500"
                  title="Bookmark word"
                >
                  {bookmarkedWords.includes(currentCard.id) ? (
                    <BookmarkCheck className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ) : (
                    <Bookmark className="w-5 h-5" />
                  )}
                </button>
                <AudioButton text={currentCard.kannada} translit={currentCard.transliteration} size="md" />
              </div>
            </div>

            {/* Flashcard Body */}
            <div className="my-auto text-center py-6">
              {!isFlipped ? (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 font-kannada">
                    {currentCard.kannada}
                  </h2>
                  <p className="text-2xl font-bold text-amber-700">
                    {currentCard.transliteration}
                  </p>
                  <p className="text-xs text-slate-400">Click anywhere to flip</p>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">English Meaning</span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {currentCard.english}
                  </h3>
                  
                  {/* Example preview */}
                  <div className="bg-amber-50 rounded-2xl p-4 text-left border border-amber-200/60 mt-4 space-y-1">
                    <p className="text-xs font-bold text-amber-900 uppercase">Example</p>
                    <p className="text-sm font-semibold text-slate-900 font-kannada">{currentCard.exampleKn}</p>
                    <p className="text-xs text-slate-600 italic">{currentCard.exampleTranslit}</p>
                    <p className="text-xs text-slate-500">{currentCard.exampleEn}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => onToggleLearned(currentCard.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  learnedWords.includes(currentCard.id)
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 ${learnedWords.includes(currentCard.id) ? 'text-emerald-600 fill-emerald-600' : 'text-slate-400'}`} />
                <span>{learnedWords.includes(currentCard.id) ? 'Learned' : 'Mark as Learned'}</span>
              </button>

              <span className="text-xs text-slate-400 italic">
                {currentCard.notes}
              </span>
            </div>
          </div>

          {/* Previous / Next navigation */}
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handlePrevCard}
              className="flex-1 py-3 px-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <button
              type="button"
              onClick={handleNextCard}
              className="flex-1 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-sm shadow-amber-500/20 active:scale-95 transition-all"
            >
              <span>Next Card</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* GRID VIEW (ALL CARDS) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWords.map((item) => {
            const isLearned = learnedWords.includes(item.id);
            const isBookmarked = bookmarkedWords.includes(item.id);

            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl p-6 border transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-md ${
                  isLearned ? 'border-emerald-200 bg-emerald-50/10' : 'border-slate-200 hover:border-amber-300'
                }`}
              >
                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => onToggleBookmark(item.id)}
                        className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-amber-500"
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark word'}
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                      <AudioButton text={item.kannada} translit={item.transliteration} size="sm" />
                    </div>
                  </div>

                  {/* Main word display */}
                  <div className="mb-3">
                    <h3 className="text-3xl font-extrabold text-slate-900 font-kannada">
                      {item.kannada}
                    </h3>
                    <p className="text-base font-bold text-amber-700">
                      {item.transliteration}
                    </p>
                    <p className="text-sm font-semibold text-slate-800 mt-1">
                      {item.english}
                    </p>
                  </div>

                  {/* Example box */}
                  <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 text-xs space-y-1 mb-4">
                    <p className="font-semibold text-slate-900 font-kannada">{item.exampleKn}</p>
                    <p className="text-slate-500 italic">{item.exampleTranslit}</p>
                    <p className="text-slate-600 font-medium">{item.exampleEn}</p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 truncate max-w-[170px]" title={item.notes}>
                    {item.notes}
                  </span>

                  <button
                    type="button"
                    onClick={() => onToggleLearned(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isLearned
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isLearned ? 'text-emerald-600 fill-emerald-600' : 'text-slate-400'}`} />
                    <span>{isLearned ? 'Learned' : 'Mark Learned'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
