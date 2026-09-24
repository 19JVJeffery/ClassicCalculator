import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Keyboard } from 'lucide-react';
import { playRelayClick } from '../utils/audio';

export const AudioPlayground: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);
  const [lastKeyPressed, setLastKeyPressed] = useState<string | null>(null);

  // Equalizer heights
  const baseHeights = [
    24, 38, 56, 72, 85, 96, 100, 88, 70, 54, 42, 65, 82, 94, 86, 68, 50, 36,
    58, 76, 88, 72, 54, 38, 28, 48, 64, 32
  ];

  const triggerSound = (keyName?: string) => {
    if (isMuted) return;
    playRelayClick();
    setPulseCount((prev) => prev + 1);
    if (keyName) {
      setLastKeyPressed(keyName);
      setTimeout(() => setLastKeyPressed(null), 400);
    }
  };

  // Global keyboard listener to play sound on keypress (inspired by Klack!)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input field
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      triggerSound(e.key.length === 1 ? e.key.toUpperCase() : e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMuted]);

  return (
    <section className="py-24 md:py-32 bg-[#090a0f] border-y border-white/[0.06] relative overflow-hidden" id="sound">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Tactile Sound Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Satisfying sound with every key.
          </h2>
          <p className="text-base sm:text-lg text-stone-400 font-normal leading-relaxed">
            Synthesized with sub-millisecond latency using the Web Audio API — a 40ms shaped noise envelope recreating the physical mechanical snap of 1980s computer keys.
          </p>
        </div>

        {/* Sound Interactive Studio Card */}
        <div className="relative rounded-3xl border border-white/[0.08] bg-stone-900/60 p-8 sm:p-12 shadow-2xl backdrop-blur-xl max-w-3xl mx-auto text-center">
          {/* Mute Toggle */}
          <div className="flex justify-end mb-6">
            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isMuted ? 'Muted' : 'Sound Enabled'}</span>
            </button>
          </div>

          {/* Equalizer Waveform Visualizer */}
          <div
            onClick={() => triggerSound('Click')}
            className="flex items-center justify-center gap-1.5 sm:gap-2 h-28 my-6 cursor-pointer select-none group"
            title="Click waveform to test sound"
          >
            {baseHeights.map((h, i) => {
              // Calculate dynamic reaction when pulsed
              const scaleBoost = pulseCount % 2 === 1 ? 1.35 : 1;
              const height = Math.min(100, Math.max(16, h * (0.8 + ((i + pulseCount) % 5) * 0.1) * scaleBoost));
              return (
                <div
                  key={i}
                  style={{ height: `${height}%` }}
                  className="w-1.5 sm:w-2 bg-gradient-to-t from-amber-500/30 to-amber-300 rounded-full transition-all duration-150 group-hover:from-amber-400 group-hover:to-amber-200"
                />
              );
            })}
          </div>

          {/* Action Trigger Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => triggerSound('Click')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-white text-stone-950 hover:bg-stone-100 hover:shadow-lg hover:shadow-white/10 active:scale-95 transition-all duration-200"
            >
              <Volume2 className="w-4 h-4 text-amber-500" />
              <span>Audition Mechanical Click</span>
            </button>
          </div>

          {/* Keyboard Trigger Hint */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-stone-400 font-medium">
            <Keyboard className="w-4 h-4 text-amber-400" />
            <span>Press any key on your keyboard right now to test</span>
            {lastKeyPressed && (
              <span className="ml-1.5 px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono text-[11px] animate-pulse">
                [{lastKeyPressed}]
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
