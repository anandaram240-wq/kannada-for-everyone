import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Play, 
  RotateCcw, 
  Settings, 
  Info,
  Mic
} from 'lucide-react';
import AudioButton from '../components/AudioButton';
import { checkKannadaVoiceSupport, speakText, stopSpeaking } from '../services/speech';

export default function PronunciationGuidePage() {
  const [speechDiagnostics, setSpeechDiagnostics] = useState({
    supported: false,
    hasKannadaVoice: false,
    voiceName: null,
  });

  const [customText, setCustomText] = useState('ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ?');
  const [speakingRate, setSpeakingRate] = useState(0.85);
  const [isSpeakingCustom, setIsSpeakingCustom] = useState(false);

  useEffect(() => {
    // Run diagnostics
    const result = checkKannadaVoiceSupport();
    setSpeechDiagnostics(result);

    // Some browsers populate voices asynchronously
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        setSpeechDiagnostics(checkKannadaVoiceSupport());
      };
    }
  }, []);

  const handleSpeakCustom = async () => {
    if (isSpeakingCustom) {
      stopSpeaking();
      setIsSpeakingCustom(false);
      return;
    }
    setIsSpeakingCustom(true);
    try {
      await speakText(customText, { rate: speakingRate });
    } catch (e) {
      console.warn(e);
    } finally {
      setIsSpeakingCustom(false);
    }
  };

  const vowels = [
    { kn: 'ಅ', tr: 'a', sound: 'Short "u" as in cut', ex: 'ಅಮ್ಮ (Amma)' },
    { kn: 'ಆ', tr: 'aa', sound: 'Long "aa" as in father', ex: 'ಆಟ (Aata)' },
    { kn: 'ಇ', tr: 'i', sound: 'Short "i" as in sit', ex: 'ಇಲ್ಲಿ (Illi)' },
    { kn: 'ಈ', tr: 'ee', sound: 'Long "ee" as in meet', ex: 'ಈಗ (Eega)' },
    { kn: 'ಉ', tr: 'u', sound: 'Short "u" as in put', ex: 'ಊಟ (Oota)' },
    { kn: 'ಊ', tr: 'oo', sound: 'Long "oo" as in moon', ex: 'ಊರು (Ooru)' },
    { kn: 'ಎ', tr: 'e', sound: 'Short "e" as in bed', ex: 'ಎಲ್ಲಿ (Yelli)' },
    { kn: 'ಏ', tr: 'ae', sound: 'Long "ae" as in play', ex: 'ಏನು (Enu)' },
    { kn: 'ಐ', tr: 'ai', sound: '"ai" as in aisle', ex: 'ಐದು (Aidu)' },
    { kn: 'ಒ', tr: 'o', sound: 'Short "o" as in cold', ex: 'ಒಂದು (Ondu)' },
    { kn: 'ಓ', tr: 'oh', sound: 'Long "oh" as in boat', ex: 'ಓಡು (Odu)' },
    { kn: 'ಔ', tr: 'au', sound: '"ow" as in cow', ex: 'ಔಷಧಿ (Oushadhi)' },
    { kn: 'ಅಂ', tr: 'am', sound: 'Nasal "am" / "an"', ex: 'ಅಂಗಡಿ (Angadi)' },
  ];

  const commonWordsWithSounds = [
    { kn: 'ದಯವಿಟ್ಟು', tr: 'Dayavittu', en: 'Please' },
    { kn: 'ಧನ್ಯವಾದಗಳು', tr: 'Dhanyavadagalu', en: 'Thank you' },
    { kn: 'ಗೊತ್ತಿಲ್ಲ', tr: 'Gottilla', en: 'I do not know' },
    { kn: 'ಬನ್ನಿ', tr: 'Banni', en: 'Please come (Respectful)' },
    { kn: 'ಸ್ವಲ್ಪ', tr: 'Swalpa', en: 'A little bit' },
    { kn: 'ಚೆನ್ನಾಗಿದೆ', tr: 'Chennaagide', en: 'It is good / nice' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER */}
      <div className="border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Module 6: Phonetics & Speech Synthesis
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Kannada Pronunciation & Sounds Guide
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Learn how to pronounce Kannada sounds accurately. The platform integrates the browser's Web Speech API with automatic transliteration assistance.
        </p>
      </div>

      {/* SPEECH ENGINE DIAGNOSTIC BANNER */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-slate-500" />
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Browser Speech Synthesis Status
            </h3>
          </div>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 ${
            speechDiagnostics.supported ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
          }`}>
            {speechDiagnostics.supported ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <AlertCircle className="w-3.5 h-3.5 text-red-600" />}
            {speechDiagnostics.supported ? 'Web Speech API Available' : 'Speech API Not Supported'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-1">
            <p className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Active Kannada Voice</p>
            <p className="text-sm font-extrabold text-slate-900">
              {speechDiagnostics.hasKannadaVoice ? speechDiagnostics.voiceName : 'Fallback Voice Mode Active'}
            </p>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              {speechDiagnostics.hasKannadaVoice
                ? 'Your operating system provides native Kannada text-to-speech rendering.'
                : 'Your operating system does not have an installed kn-IN voice. The player uses phonetic speech synthesis alongside verified Roman transliterations.'}
            </p>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-200/60 space-y-1 text-amber-950">
            <p className="font-bold text-amber-800 uppercase tracking-wider text-[10px] flex items-center gap-1">
              <Info className="w-3.5 h-3.5" />
              Educational Transparency
            </p>
            <p className="text-xs leading-relaxed">
              We never fake audio or claim automated speech recognition scores without actual evaluation. Non-Kannada learners can safely use the phonetic romanizations ("Namaskara", "Dayavittu") to speak with absolute clarity.
            </p>
          </div>
        </div>
      </div>

      {/* INTERACTIVE SOUND TEST BENCH */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div>
          <h3 className="text-lg font-extrabold text-slate-900">
            Interactive Speech Practice Bench
          </h3>
          <p className="text-xs text-slate-500">
            Type or select a sentence, choose your listening speed, and click play to hear the phrase.
          </p>
        </div>

        <div className="space-y-3">
          <textarea
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            rows={3}
            placeholder="Type Kannada or Transliteration here..."
            className="w-full p-4 rounded-2xl border border-slate-200 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 font-kannada"
          />

          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
              <span>Playback Speed:</span>
              {[0.7, 0.85, 1.0].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => setSpeakingRate(rate)}
                  className={`px-3 py-1 rounded-lg border text-xs font-bold transition-colors ${
                    speakingRate === rate
                      ? 'bg-amber-500 text-slate-950 border-amber-500'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {rate === 0.7 ? '0.7x (Slow)' : rate === 0.85 ? '0.85x (Learner)' : '1.0x (Normal)'}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleSpeakCustom}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 active:scale-95 transition-all shadow-sm ${
                isSpeakingCustom
                  ? 'bg-red-600 text-white animate-pulse'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>{isSpeakingCustom ? 'Stop Audio' : 'Listen Now'}</span>
            </button>
          </div>
        </div>

        {/* Quick presets */}
        <div className="pt-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Try Quick Presets:
          </p>
          <div className="flex flex-wrap gap-2">
            {commonWordsWithSounds.map((w, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCustomText(w.kn)}
                className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-xs text-slate-800 transition-colors flex items-center gap-1.5"
              >
                <span className="font-bold font-kannada">{w.kn}</span>
                <span className="text-slate-400">({w.tr})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* KANNADA VOWELS (ಸ್ವರಗಳು) */}
      <div className="space-y-4">
        <div>
          <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
            Phonetic Alphabet
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
            Kannada Vowels (ಸ್ವರಗಳು - Svaragalu)
          </h3>
          <p className="text-xs text-slate-500">
            Unlike English where letters have inconsistent sounds, Kannada is phonetic: what you see is exactly what you pronounce.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {vowels.map((v, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-slate-900 font-kannada">
                  {v.kn}
                </span>
                <AudioButton text={v.kn} translit={v.tr} size="sm" />
              </div>

              <div>
                <p className="text-xs font-extrabold text-amber-700">/{v.tr}/</p>
                <p className="text-xs text-slate-500 font-medium">{v.sound}</p>
                <p className="text-[11px] text-slate-400 mt-1 font-kannada">{v.ex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RESPECT NUANCES & SPOKEN ACCENTS */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-4">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
          The Secret to Sounding Natural
        </span>
        <h3 className="text-xl sm:text-2xl font-bold">
          Mastering the Polite Suffixes: '-ri', '-re', and '-kodi'
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
          In Karnataka, respect in speech is everything. When speaking to elders, auto drivers, conductors, shopkeepers, or peers, adding polite markers instantly transforms your speech:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700 space-y-1">
            <p className="text-amber-400 font-bold text-sm">ಕೊಡಿ (Kodi) vs ಕೊಡು (Kodu)</p>
            <p className="text-slate-300">Always use <span className="text-white font-bold">Kodi</span> ("please give") instead of Kodu. Example: "Neeru kodi" (Please give water).</p>
          </div>
          <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700 space-y-1">
            <p className="text-amber-400 font-bold text-sm">ಬನ್ನಿ (Banni) vs ಬಾ (Baa)</p>
            <p className="text-slate-300">Always say <span className="text-white font-bold">Banni</span> ("please come"). Never say "Baa" to strangers or service professionals.</p>
          </div>
          <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700 space-y-1">
            <p className="text-amber-400 font-bold text-sm">ಅಣ್ಣಾ (Anna) & ಅಕ್ಕ (Akka)</p>
            <p className="text-slate-300">Addressing vendors or drivers as "Anna" (brother) or "Akka" (sister) creates instant mutual respect and friendliness.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
