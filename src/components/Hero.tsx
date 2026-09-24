import React, { useState } from 'react';
import { Download, Volume2, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { playRelayClick } from '../utils/audio';

type Theme = 'active' | 'inactive' | 'monochrome';

export const Hero: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('active');

  const themeImages: Record<Theme, string> = {
    active: './assets/svgs/calculator_active.svg',
    inactive: './assets/svgs/calculator_inactive.svg',
    monochrome: './assets/svgs/calculator_monochrome.svg',
  };

  const handleThemeChange = (theme: Theme) => {
    playRelayClick();
    setCurrentTheme(theme);
  };

  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden" id="showcase">
      {/* Background radial atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Copy */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-xs font-medium mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built natively for macOS 13+ &amp; Apple Silicon</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.98] mb-6">
            1984 Nostalgia.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
              Mac Precision.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-stone-400 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            The legendary Macintosh Calculator Desk Accessory, faithfully recreated as a blazing-fast, native macOS utility. Developed by Chris Espinosa, designed under Steve Jobs, and icon by Susan Kare.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="https://github.com/19JVJeffery/ClassicCalculator/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold bg-white text-stone-950 hover:bg-stone-100 hover:shadow-xl hover:shadow-white/10 active:scale-95 transition-all duration-200"
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5 duration-200" />
              <span>Download for macOS</span>
            </a>

            <a
              href="#sound"
              onClick={() => playRelayClick()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-medium border border-white/10 bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span>Audition Sound</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-stone-400 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Free forever</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Native SwiftUI</span>
            </div>
            <span>•</span>
            <span>Universal Binary (M1–M4 &amp; Intel)</span>
            <span>•</span>
            <span>Zero Telemetry</span>
          </div>
        </div>

        {/* Modern App Showcase Canvas (Replacing the CRT bezel) */}
        <div className="mt-16 md:mt-24 relative max-w-4xl mx-auto">
          {/* Workspace container */}
          <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-stone-900/90 via-[#12131a]/80 to-[#0d0e14] p-8 sm:p-14 shadow-2xl shadow-black/80 backdrop-blur-sm overflow-hidden">
            {/* Ambient desk glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            {/* Scheme Selector Pill */}
            <div className="relative z-10 flex justify-center mb-10">
              <div className="inline-flex p-1 rounded-full bg-stone-950/80 border border-white/10 backdrop-blur-md shadow-lg">
                <button
                  type="button"
                  onClick={() => handleThemeChange('active')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    currentTheme === 'active'
                      ? 'bg-amber-400 text-stone-950 shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Classic Active
                </button>
                <button
                  type="button"
                  onClick={() => handleThemeChange('inactive')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    currentTheme === 'inactive'
                      ? 'bg-amber-400 text-stone-950 shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Inactive Window
                </button>
                <button
                  type="button"
                  onClick={() => handleThemeChange('monochrome')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    currentTheme === 'monochrome'
                      ? 'bg-amber-400 text-stone-950 shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Monochrome
                </button>
              </div>
            </div>

            {/* Floating Calculator Window with Authentic macOS Window Shadow */}
            <div className="relative z-10 flex justify-center items-center py-4">
              <div className="relative transition-all duration-300 transform hover:-translate-y-1">
                {/* Simulated native macOS window shadow */}
                <div className="absolute -inset-4 bg-black/60 rounded-[32px] blur-2xl -z-10" />
                <div className="absolute -inset-1 bg-black/40 rounded-[28px] blur-md -z-10" />

                {/* Calculator Image */}
                <img
                  src={themeImages[currentTheme]}
                  alt={`Classic Calculator - ${currentTheme} state`}
                  className="w-[230px] sm:w-[280px] h-auto [image-rendering:pixelated] select-none rounded-[6px] shadow-2xl"
                  draggable={false}
                />
              </div>
            </div>

            {/* Side Callout Pills */}
            <div className="hidden md:flex justify-between items-center text-xs text-stone-400 pt-8 border-t border-white/5 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Sub-millisecond keystroke response · 60 FPS SwiftUI</span>
              </div>
              <div className="flex items-center gap-2">
                <span>100% Vector Pixel Art · Never blurs on Retina 5K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
