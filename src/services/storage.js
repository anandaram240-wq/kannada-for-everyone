// LocalStorage service for persistent learner progress

const STORAGE_KEYS = {
  LEARNED_WORDS: 'kfe_learned_words',
  BOOKMARKED_WORDS: 'kfe_bookmarked_words',
  COMPLETED_CONVERSATIONS: 'kfe_completed_convs',
  COMPLETED_SITUATIONS: 'kfe_completed_situations',
  QUIZ_HISTORY: 'kfe_quiz_history',
  DAILY_STREAK: 'kfe_daily_streak',
  DAILY_GOAL: 'kfe_daily_goal',
};

function safeGet(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch (e) {
    console.warn(`Error reading ${key} from localStorage:`, e);
    return fallback;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`Error writing ${key} to localStorage:`, e);
  }
}

export function getLearnedWords() {
  return safeGet(STORAGE_KEYS.LEARNED_WORDS, []);
}

export function toggleLearnedWord(wordId) {
  const current = getLearnedWords();
  const index = current.indexOf(wordId);
  let updated;
  if (index >= 0) {
    updated = current.filter((id) => id !== wordId);
  } else {
    updated = [...current, wordId];
  }
  safeSet(STORAGE_KEYS.LEARNED_WORDS, updated);
  recordActivity();
  return updated;
}

export function getBookmarkedWords() {
  return safeGet(STORAGE_KEYS.BOOKMARKED_WORDS, []);
}

export function toggleBookmarkedWord(wordId) {
  const current = getBookmarkedWords();
  const index = current.indexOf(wordId);
  let updated;
  if (index >= 0) {
    updated = current.filter((id) => id !== wordId);
  } else {
    updated = [...current, wordId];
  }
  safeSet(STORAGE_KEYS.BOOKMARKED_WORDS, updated);
  return updated;
}

export function getCompletedConversations() {
  return safeGet(STORAGE_KEYS.COMPLETED_CONVERSATIONS, []);
}

export function markConversationCompleted(convId) {
  const current = getCompletedConversations();
  if (!current.includes(convId)) {
    const updated = [...current, convId];
    safeSet(STORAGE_KEYS.COMPLETED_CONVERSATIONS, updated);
    recordActivity();
    return updated;
  }
  return current;
}

export function getCompletedSituations() {
  return safeGet(STORAGE_KEYS.COMPLETED_SITUATIONS, []);
}

export function markSituationCompleted(sitId) {
  const current = getCompletedSituations();
  if (!current.includes(sitId)) {
    const updated = [...current, sitId];
    safeSet(STORAGE_KEYS.COMPLETED_SITUATIONS, updated);
    recordActivity();
    return updated;
  }
  return current;
}

export function getQuizHistory() {
  return safeGet(STORAGE_KEYS.QUIZ_HISTORY, []);
}

export function saveQuizResult(result) {
  const history = getQuizHistory();
  const entry = {
    id: Date.now(),
    date: new Date().toISOString(),
    score: result.score,
    total: result.total,
    percentage: Math.round((result.score / result.total) * 100),
    category: result.category || 'All',
  };
  const updated = [entry, ...history].slice(0, 50); // keep last 50
  safeSet(STORAGE_KEYS.QUIZ_HISTORY, updated);
  recordActivity();
  return updated;
}

export function getDailyStreak() {
  const defaultStreak = { count: 1, lastDate: new Date().toDateString() };
  const stored = safeGet(STORAGE_KEYS.DAILY_STREAK, defaultStreak);
  const today = new Date().toDateString();

  if (stored.lastDate === today) {
    return stored.count;
  }

  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (stored.lastDate === yesterday) {
    return stored.count;
  }

  // Streak broken if last practice was before yesterday
  return 1;
}

export function recordActivity() {
  const today = new Date().toDateString();
  const stored = safeGet(STORAGE_KEYS.DAILY_STREAK, { count: 0, lastDate: '' });

  if (stored.lastDate === today) {
    return; // Already recorded today
  }

  const yesterday = new Date(Date.now() - 86400000).toDateString();
  let newCount = 1;
  if (stored.lastDate === yesterday) {
    newCount = (stored.count || 0) + 1;
  }

  safeSet(STORAGE_KEYS.DAILY_STREAK, { count: newCount, lastDate: today });
}

export function resetAllProgress() {
  try {
    Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
  } catch (e) {
    console.warn('Error clearing localStorage', e);
  }
}
