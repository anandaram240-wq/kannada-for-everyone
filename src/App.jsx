import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VocabularyPage from './pages/VocabularyPage';
import ConversationsPage from './pages/ConversationsPage';
import SituationsPage from './pages/SituationsPage';
import PracticePage from './pages/PracticePage';
import ProgressPage from './pages/ProgressPage';
import PronunciationGuidePage from './pages/PronunciationGuidePage';

import {
  getLearnedWords,
  toggleLearnedWord,
  getBookmarkedWords,
  toggleBookmarkedWord,
  getCompletedConversations,
  markConversationCompleted,
  getCompletedSituations,
  markSituationCompleted,
  getQuizHistory,
  saveQuizResult,
  getDailyStreak,
  resetAllProgress,
} from './services/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [learnedWords, setLearnedWords] = useState([]);
  const [bookmarkedWords, setBookmarkedWords] = useState([]);
  const [completedConvs, setCompletedConvs] = useState([]);
  const [completedSituations, setCompletedSituations] = useState([]);
  const [quizHistory, setQuizHistory] = useState([]);
  const [streak, setStreak] = useState(1);
  const [toastMessage, setToastMessage] = useState(null);

  // Load persisted progress on mount
  useEffect(() => {
    setLearnedWords(getLearnedWords());
    setBookmarkedWords(getBookmarkedWords());
    setCompletedConvs(getCompletedConversations());
    setCompletedSituations(getCompletedSituations());
    setQuizHistory(getQuizHistory());
    setStreak(getDailyStreak());
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleToggleLearned = (wordId) => {
    const updated = toggleLearnedWord(wordId);
    setLearnedWords(updated);
    if (updated.includes(wordId)) {
      showToast('Word marked as learned! Keep it up! 🌟');
    }
  };

  const handleToggleBookmark = (wordId) => {
    const updated = toggleBookmarkedWord(wordId);
    setBookmarkedWords(updated);
  };

  const handleCompleteConversation = (convId) => {
    const updated = markConversationCompleted(convId);
    setCompletedConvs(updated);
    showToast('Conversation completed! Badge updated! 🏆');
  };

  const handleCompleteSituation = (sitId) => {
    const updated = markSituationCompleted(sitId);
    setCompletedSituations(updated);
    showToast('Scenario mastered! Excellent choice! 🎯');
  };

  const handleSaveQuizScore = (scoreData) => {
    const updated = saveQuizResult(scoreData);
    setQuizHistory(updated);
  };

  const handleResetProgress = () => {
    resetAllProgress();
    setLearnedWords([]);
    setBookmarkedWords([]);
    setCompletedConvs([]);
    setCompletedSituations([]);
    setQuizHistory([]);
    setStreak(1);
    showToast('All learning progress has been reset.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* Top Banner & Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        streak={streak}
        learnedCount={learnedWords.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            learnedWords={learnedWords}
            streak={streak}
            completedConvs={completedConvs}
          />
        )}

        {activeTab === 'vocab' && (
          <VocabularyPage
            learnedWords={learnedWords}
            onToggleLearned={handleToggleLearned}
            bookmarkedWords={bookmarkedWords}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeTab === 'conversations' && (
          <ConversationsPage
            completedConvs={completedConvs}
            onCompleteConversation={handleCompleteConversation}
          />
        )}

        {activeTab === 'situations' && (
          <SituationsPage
            completedSituations={completedSituations}
            onCompleteSituation={handleCompleteSituation}
          />
        )}

        {activeTab === 'practice' && (
          <PracticePage
            onSaveQuizScore={handleSaveQuizScore}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressPage
            learnedWords={learnedWords}
            bookmarkedWords={bookmarkedWords}
            completedConvs={completedConvs}
            completedSituations={completedSituations}
            quizHistory={quizHistory}
            streak={streak}
            onResetProgress={handleResetProgress}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'sounds' && (
          <PronunciationGuidePage />
        )}
      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl border border-slate-800 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-in slide-in-from-bottom-3 duration-200">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
