import React, { useState } from 'react';
import { 
  MessageSquare, 
  Sparkles, 
  Play, 
  Pause, 
  CheckCircle2, 
  HelpCircle, 
  BookOpen, 
  Volume2, 
  ArrowRight, 
  ArrowLeft,
  User,
  Users
} from 'lucide-react';
import AudioButton from '../components/AudioButton';
import { CONVERSATIONS } from '../data/conversations';
import { speakText, stopSpeaking } from '../services/speech';

export default function ConversationsPage({
  completedConvs = [],
  onCompleteConversation,
}) {
  const [selectedConvId, setSelectedConvId] = useState(CONVERSATIONS[0].id);
  const [playingAll, setPlayingAll] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState(null);
  const [userRole, setUserRole] = useState('listener'); // 'listener' | 'role_a' | 'role_b'
  
  // Comprehension quiz state
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const conversation = CONVERSATIONS.find((c) => c.id === selectedConvId) || CONVERSATIONS[0];
  const isCompleted = completedConvs.includes(conversation.id);

  const handleSelectConversation = (id) => {
    stopSpeaking();
    setPlayingAll(false);
    setActiveLineIndex(null);
    setSelectedConvId(id);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
  };

  const handlePlayFullConversation = async () => {
    if (playingAll) {
      stopSpeaking();
      setPlayingAll(false);
      setActiveLineIndex(null);
      return;
    }

    setPlayingAll(true);
    for (let i = 0; i < conversation.lines.length; i++) {
      setActiveLineIndex(i);
      const line = conversation.lines[i];
      try {
        await speakText(line.kannada || line.translit);
        // Short pause between speakers
        await new Promise((res) => setTimeout(res, 600));
      } catch (e) {
        console.warn('Speech playback issue:', e);
      }
    }
    setPlayingAll(false);
    setActiveLineIndex(null);
  };

  const handleCheckQuiz = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === conversation.quiz.correctIndex) {
      onCompleteConversation(conversation.id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER & MODULE INTRO */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Module 2: Real-World Dialogues
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everyday Kannada Conversations
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Step into practical dialogue between locals. Listen line-by-line, study key phrases, practice speaking with interactive role-play, and verify your comprehension.
          </p>
        </div>

        {/* Completion Progress Pill */}
        <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-2xs self-start md:self-auto">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span className="text-xs font-bold text-slate-700">
            {completedConvs.length} / {CONVERSATIONS.length} Lessons Completed
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: CONVERSATION LIST (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
            Choose a Conversation ({CONVERSATIONS.length})
          </h3>

          <div className="space-y-2 max-h-[700px] overflow-y-auto pr-1">
            {CONVERSATIONS.map((c, idx) => {
              const isSelected = c.id === selectedConvId;
              const hasCompleted = completedConvs.includes(c.id);

              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => handleSelectConversation(c.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-150 flex items-start gap-3 border ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-500 shadow-md shadow-amber-500/20'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    isSelected ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {idx + 1}
                  </span>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <p className={`text-sm truncate ${isSelected ? 'font-extrabold text-slate-950' : 'font-bold text-slate-900'}`}>
                        {c.title}
                      </p>
                      {hasCompleted && (
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${isSelected ? 'text-slate-950' : 'text-emerald-600'}`} />
                      )}
                    </div>
                    <p className={`text-xs truncate mt-0.5 ${isSelected ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
                      {c.category} • {c.lines.length} lines
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: ACTIVE CONVERSATION PLAYER & CONTENT (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Conversation Header & Audio Control Bar */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  {conversation.category}
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {conversation.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {conversation.description}
                </p>
              </div>

              {/* Autoplay Whole Dialogue Button */}
              <button
                type="button"
                onClick={handlePlayFullConversation}
                className={`self-start sm:self-center px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all active:scale-95 shadow-sm ${
                  playingAll
                    ? 'bg-red-600 text-white animate-pulse'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                }`}
              >
                {playingAll ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Stop Playback</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Listen All</span>
                  </>
                )}
              </button>
            </div>

            {/* Role-Play Mode Selector */}
            <div className="flex items-center justify-between flex-wrap gap-2 pt-1 text-xs">
              <span className="font-bold text-slate-500">Practice Mode:</span>
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setUserRole('listener')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                    userRole === 'listener' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  🎧 Listen Mode
                </button>
                <button
                  type="button"
                  onClick={() => setUserRole('role_a')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                    userRole === 'role_a' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  🗣️ Play Person A
                </button>
                <button
                  type="button"
                  onClick={() => setUserRole('role_b')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                    userRole === 'role_b' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  🗣️ Play Person B
                </button>
              </div>
            </div>

            {/* DIALOGUE BUBBLES */}
            <div className="space-y-4 pt-4">
              {conversation.lines.map((line, idx) => {
                const char = line.speaker === 'A' ? conversation.characters.a : conversation.characters.b;
                const isUserTurn = 
                  (userRole === 'role_a' && line.speaker === 'A') ||
                  (userRole === 'role_b' && line.speaker === 'B');
                const isCurrentlyPlaying = activeLineIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`rounded-2xl p-4 sm:p-5 border transition-all duration-200 ${
                      isCurrentlyPlaying
                        ? 'border-amber-500 bg-amber-50/60 shadow-md ring-2 ring-amber-400'
                        : isUserTurn
                        ? 'border-indigo-300 bg-indigo-50/40'
                        : 'border-slate-200 bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{char.avatar}</span>
                        <span className="text-xs font-bold text-slate-800">
                          {char.name}
                        </span>
                        {isUserTurn && (
                          <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-extrabold text-[10px] uppercase tracking-wider">
                            Your Turn to Speak!
                          </span>
                        )}
                      </div>

                      <AudioButton text={line.kannada} translit={line.translit} size="sm" />
                    </div>

                    {/* Kannada script, transliteration & English */}
                    <div className="space-y-1 pl-8">
                      <p className="text-xl sm:text-2xl font-extrabold text-slate-900 font-kannada">
                        {line.kannada}
                      </p>
                      <p className="text-sm sm:text-base font-bold text-amber-800">
                        {line.translit}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium">
                        "{line.english}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* KEY VOCABULARY ACCORDION / BOX */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                Useful Vocabulary from this Dialogue
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {conversation.vocabulary.map((v, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <p className="font-bold text-slate-900 font-kannada">{v.word}</p>
                    <p className="text-slate-500">{v.meaning}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* COMPREHENSION CHECK ACTIVITY */}
            <div className="mt-6 pt-6 border-t border-slate-100 bg-amber-50/50 rounded-2xl p-5 border border-amber-200/60">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
                  Comprehension Check
                </h4>
              </div>

              <p className="text-sm font-bold text-slate-900 mb-3">
                {conversation.quiz.question}
              </p>

              <div className="space-y-2">
                {conversation.quiz.options.map((option, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isCorrect = optIdx === conversation.quiz.correctIndex;

                  let optionStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';
                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optionStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'bg-red-100 border-red-400 text-red-950 font-medium';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-amber-100 border-amber-400 text-amber-950 font-bold';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={isAnswerSubmitted}
                      onClick={() => setSelectedOption(optIdx)}
                      className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${optionStyle}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Submit / Feedback */}
              <div className="mt-4 flex items-center justify-between">
                {!isAnswerSubmitted ? (
                  <button
                    type="button"
                    disabled={selectedOption === null}
                    onClick={handleCheckQuiz}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 text-xs font-bold shadow-xs transition-colors"
                  >
                    Check Answer
                  </button>
                ) : (
                  <div className="space-y-2 w-full">
                    <p className={`text-xs font-bold ${selectedOption === conversation.quiz.correctIndex ? 'text-emerald-700' : 'text-red-700'}`}>
                      {selectedOption === conversation.quiz.correctIndex ? '🎉 Correct!' : '❌ Not quite right.'} {conversation.quiz.explanation}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-slate-500">
                        {isCompleted ? '✓ Lesson marked completed' : ''}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setIsAnswerSubmitted(false);
                          setSelectedOption(null);
                        }}
                        className="text-xs font-bold text-amber-700 hover:underline"
                      >
                        Try Again
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
