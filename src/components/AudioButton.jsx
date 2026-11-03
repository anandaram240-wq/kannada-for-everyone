import React, { useState } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { speakText, stopSpeaking } from '../services/speech';

export default function AudioButton({ text, translit, size = 'md', className = '' }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handlePlay = async (e) => {
    e.stopPropagation();

    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
      return;
    }

    try {
      setIsPlaying(true);
      setHasError(false);
      // Prefer Kannada text; if speech engine lacks Kannada, it speaks phonetic transliteration
      await speakText(text || translit);
    } catch (err) {
      console.warn('Audio playback error:', err);
      setHasError(true);
    } finally {
      setIsPlaying(false);
    }
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs',
    md: 'p-2 text-sm',
    lg: 'p-3 text-base',
  }[size] || 'p-2 text-sm';

  return (
    <button
      type="button"
      onClick={handlePlay}
      title={isPlaying ? 'Click to stop audio' : 'Listen to Kannada pronunciation'}
      aria-label="Listen to pronunciation"
      className={`inline-flex items-center justify-center rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
        isPlaying
          ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30 ring-2 ring-amber-400'
          : 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300/60'
      } ${sizeClasses} ${className}`}
    >
      {isPlaying ? (
        <span className="flex items-center gap-1">
          <Volume2 className="w-4 h-4 animate-pulse" />
          <span className="sr-only">Playing</span>
        </span>
      ) : hasError ? (
        <VolumeX className="w-4 h-4 text-red-500" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </button>
  );
}
