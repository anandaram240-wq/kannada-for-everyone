// Web Speech API service for Kannada and Transliteration speech synthesis

let voices = [];
let hasLoadedVoices = false;

export function initVoices(callback) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (callback) callback({ supported: false, kannadaVoice: null, voices: [] });
    return;
  }

  const update = () => {
    voices = window.speechSynthesis.getVoices();
    hasLoadedVoices = true;
    const kannadaVoice = voices.find(
      (v) => v.lang === 'kn-IN' || v.lang.startsWith('kn') || v.name.toLowerCase().includes('kannada')
    ) || null;
    if (callback) {
      callback({
        supported: true,
        kannadaVoice,
        voices,
      });
    }
  };

  update();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = update;
  }
}

export function checkKannadaVoiceSupport() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return { supported: false, hasKannadaVoice: false, voiceName: null };
  }
  const all = window.speechSynthesis.getVoices();
  const kn = all.find(
    (v) => v.lang === 'kn-IN' || v.lang.startsWith('kn') || v.name.toLowerCase().includes('kannada')
  );
  return {
    supported: true,
    hasKannadaVoice: !!kn,
    voiceName: kn ? kn.name : null,
  };
}

export function speakText(text, options = {}) {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return reject(new Error('Speech synthesis is not supported on this device/browser.'));
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    if (!text || text.trim() === '') {
      return resolve();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const allVoices = window.speechSynthesis.getVoices();
    const kannadaVoice = allVoices.find(
      (v) => v.lang === 'kn-IN' || v.lang.startsWith('kn') || v.name.toLowerCase().includes('kannada')
    );

    // If Kannada voice exists, use it with 'kn-IN'
    if (kannadaVoice) {
      utterance.voice = kannadaVoice;
      utterance.lang = 'kn-IN';
    } else {
      // If no native Kannada voice is installed on OS, try Indian English (en-IN)
      // which can pronounce phonetic romanized Kannada accurately
      const indianVoice = allVoices.find(
        (v) => v.lang === 'en-IN' || v.lang.startsWith('en-IN') || v.name.toLowerCase().includes('india')
      );
      if (indianVoice) {
        utterance.voice = indianVoice;
        utterance.lang = 'en-IN';
      }
    }

    utterance.rate = options.rate || 0.85; // slightly slower for language learners
    utterance.pitch = options.pitch || 1.0;

    utterance.onend = () => resolve();
    utterance.onerror = (e) => {
      // Don't fail harshly if interrupted
      if (e.error === 'interrupted' || e.error === 'canceled') {
        resolve();
      } else {
        reject(e);
      }
    };

    window.speechSynthesis.speak(utterance);
  });
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
