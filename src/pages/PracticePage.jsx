import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft, 
  Trophy, 
  Flame,
  Volume2,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import AudioButton from '../components/AudioButton';
import { QUIZ_CATEGORIES, QUIZ_QUESTIONS } from '../data/quizzes';

export default function PracticePage({ onSaveQuizScore }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [qId]: selectedOptionIndex }
  const [isSubmitted, setIsSubmitted] = useState(false); // finalized whole quiz
  const [showExplanation, setShowExplanation] = useState({}); // { [qId]: true }
  const [reviewOnlyMissed, setReviewOnlyMissed] = useState(false);

  // Filter questions by category
  const activeQuestions = useMemo(() => {
    let list = QUIZ_QUESTIONS;
    if (selectedCategory === 'Quick 5-Min Sprint') {
      list = QUIZ_QUESTIONS.filter((q) => q.category === 'Quick 5-Min Sprint' || q.category === 'Vocabulary Meaning').slice(0, 5);
    } else if (selectedCategory !== 'All') {
      list = QUIZ_QUESTIONS.filter((q) => q.category === selectedCategory);
    }
    return list;
  }, [selectedCategory]);

  const currentQ = activeQuestions[currentIndex];

  const handleStartQuiz = (cat) => {
    setSelectedCategory(cat);
    setIsQuizActive(true);
    setCurrentIndex(0);
    setUserAnswers({});
    setShowExplanation({});
    setIsSubmitted(false);
    setReviewOnlyMissed(false);
  };

  const handleSelectOption = (qId, optionIdx) => {
    // Record answer and immediately show explanation
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
    setShowExplanation((prev) => ({ ...prev, [qId]: true }));
  };

  const handleFinishQuiz = () => {
    setIsSubmitted(true);
    // Calculate score
    let correctCount = 0;
    activeQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const scoreData = {
      score: correctCount,
      total: activeQuestions.length,
      category: selectedCategory,
    };

    onSaveQuizScore(scoreData);

    // Fire celebratory confetti if scored >= 70%
    if ((correctCount / activeQuestions.length) >= 0.7) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // graceful
      }
    }
  };

  const calculateScore = () => {
    let count = 0;
    activeQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) count++;
    });
    return count;
  };

  const score = calculateScore();
  const percentage = Math.round((score / activeQuestions.length) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER & MODULE INTRO */}
      <div className="border-b border-slate-200 pb-6 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          Module 4: Guided Practice & Evaluation
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Interactive Kannada Practice Quiz
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Reinforce vocabulary, everyday phrases, and situational challenges with instant feedback and comprehensive explanations.
        </p>
      </div>

      {/* QUIZ SELECTOR SCREEN (WHEN QUIZ IS NOT RUNNING) */}
      {!isQuizActive ? (
        <div className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center">
            Select a Practice Track
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {QUIZ_CATEGORIES.map((cat) => {
              const count = cat === 'All' ? QUIZ_QUESTIONS.length : cat === 'Quick 5-Min Sprint' ? 5 : QUIZ_QUESTIONS.filter(q => q.category === cat).length;
              return (
                <div
                  key={cat}
                  onClick={() => handleStartQuiz(cat)}
                  className="cursor-pointer bg-white hover:bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-purple-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                        ❓
                      </span>
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {count} Questions
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {cat}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {cat === 'Quick 5-Min Sprint'
                        ? 'Fast 5-question workout to test today\'s memory.'
                        : cat === 'Situational Challenges'
                        ? 'Real-world commuter, market, and dining response tests.'
                        : cat === 'Vocabulary Meaning'
                        ? 'Master words, transliterations, and meanings.'
                        : 'Full comprehensive diagnostic exam across all lessons.'}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700">
                    <span>Start Practice</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : !isSubmitted ? (
        /* QUIZ IN PROGRESS */
        <div className="space-y-6">
          
          {/* Progress Header */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 flex items-center justify-between shadow-2xs">
            <button
              type="button"
              onClick={() => setIsQuizActive(false)}
              className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Quit Quiz</span>
            </button>

            <span className="text-xs font-extrabold text-slate-900">
              Question {currentIndex + 1} of {activeQuestions.length}
            </span>

            <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
              {currentQ.category}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Type: {currentQ.type.replace('-', ' ')}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {currentQ.question}
              </h2>

              {currentQ.kannadaText && currentQ.kannadaText !== currentQ.question && (
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-3xl font-extrabold text-slate-900 font-kannada">
                    {currentQ.kannadaText}
                  </span>
                  {currentQ.translitText && (
                    <span className="text-lg font-bold text-amber-700">
                      ({currentQ.translitText})
                    </span>
                  )}
                  <AudioButton text={currentQ.kannadaText} translit={currentQ.translitText} size="sm" />
                </div>
              )}
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = userAnswers[currentQ.id] === optIdx;
                const isAnswered = userAnswers[currentQ.id] !== undefined;
                const isCorrect = optIdx === currentQ.correctAnswer;

                let btnClass = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

                if (isAnswered) {
                  if (isCorrect) {
                    btnClass = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                  } else if (isSelected && !isCorrect) {
                    btnClass = 'bg-red-100 border-red-400 text-red-950 font-bold';
                  } else {
                    btnClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(currentQ.id, optIdx)}
                    className={`w-full text-left p-4 rounded-2xl border text-sm sm:text-base transition-all duration-150 flex items-center justify-between ${btnClass}`}
                  >
                    <span>{opt}</span>
                    {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>

            {/* Instant Explanation Box */}
            {showExplanation[currentQ.id] && (
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm space-y-1 animate-in fade-in">
                <p className="font-extrabold text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Answer Explanation
                </p>
                <p className="text-slate-700 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                type="button"
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 text-xs font-bold flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {currentIndex < activeQuestions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIndex((prev) => prev + 1)}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1 shadow-sm active:scale-95 transition-all"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinishQuiz}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 shadow-sm shadow-emerald-600/30 active:scale-95 transition-all"
                >
                  <span>Submit Quiz</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </div>
      ) : (
        /* QUIZ RESULTS SCREEN */
        <div className="space-y-8 animate-in fade-in duration-300">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
            <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-4xl shadow-inner bg-gradient-to-br from-amber-100 to-purple-100">
              {percentage >= 80 ? '🏆' : percentage >= 50 ? '👏' : '📚'}
            </div>

            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple-700">
                Evaluation Completed
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                {percentage >= 80 ? 'Outstanding Performance!' : percentage >= 50 ? 'Good Effort!' : 'Keep Practicing!'}
              </h2>
              <p className="text-sm text-slate-500">
                Track: {selectedCategory}
              </p>
            </div>

            {/* Score Ring / Box */}
            <div className="bg-slate-50 rounded-3xl p-6 max-w-sm mx-auto border border-slate-200 flex items-center justify-around">
              <div>
                <p className="text-3xl font-extrabold text-slate-900">{score} / {activeQuestions.length}</p>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">Correct Answers</p>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div>
                <p className={`text-3xl font-extrabold ${percentage >= 70 ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {percentage}%
                </p>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">Proficiency Score</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleStartQuiz(selectedCategory)}
                className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-purple-600/20 active:scale-95 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retry Quiz</span>
              </button>

              <button
                type="button"
                onClick={() => setIsQuizActive(false)}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs flex items-center gap-2 active:scale-95 transition-all"
              >
                <span>Choose Another Track</span>
              </button>
            </div>
          </div>

          {/* DETAILED QUESTION REVIEW ACCORDION */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Question-by-Question Review
            </h3>

            <div className="space-y-3">
              {activeQuestions.map((q, idx) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`bg-white rounded-2xl p-5 border shadow-2xs ${
                      isCorrect ? 'border-emerald-200' : 'border-red-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                        )}
                        <span className="text-xs font-bold text-slate-500">
                          Q{idx + 1}. {q.category}
                        </span>
                      </div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                        {isCorrect ? 'Correct (+1)' : 'Incorrect (0)'}
                      </span>
                    </div>

                    <p className="text-sm font-bold text-slate-900 mb-2">
                      {q.question}
                    </p>

                    <div className="text-xs space-y-1 mb-2">
                      <p className="text-slate-600">
                        <span className="font-semibold text-slate-400">Your choice: </span>
                        <span className={isCorrect ? 'text-emerald-700 font-bold' : 'text-red-700 font-bold'}>
                          {userAns !== undefined ? q.options[userAns] : 'Not answered'}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p className="text-slate-600">
                          <span className="font-semibold text-slate-400">Correct answer: </span>
                          <span className="text-emerald-700 font-bold">{q.options[q.correctAnswer]}</span>
                        </p>
                      )}
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 leading-relaxed border border-slate-100">
                      💡 {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
