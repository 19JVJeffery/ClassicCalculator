import React, { useState, useEffect } from 'react';
import { Download, Volume2, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { playRelayClick } from '../utils/audio';

type Theme = 'active' | 'inactive' | 'monochrome';

export const Hero: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('active');
  const [clockTime, setClockTime] = useState('9:41 AM');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let h = now.getHours();
      const m = now.getMinutes();
      const am = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;
      setClockTime(`${h}:${m.toString().padStart(2, '0')} ${am}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

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
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden" id="showcase">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header Text Section */}
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

        {/* Retro Mac Surround with 1984 Wallpaper */}
        <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
          {/* Theme Selector Pill above monitor */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex p-1 rounded-full bg-stone-900/90 border border-white/10 backdrop-blur-md shadow-xl">
              <button
                type="button"
                onClick={() => handleThemeChange('active')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  currentTheme === 'active'
                    ? 'bg-amber-400 text-stone-950 shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Classic Platinum
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

          {/* Authentic 1984 Macintosh Chassis */}
          <div className="relative rounded-t-[32px] sm:rounded-t-[40px] rounded-b-[20px] bg-gradient-to-b from-[#e3ded2] via-[#d7d1c4] to-[#c6bfb1] p-4 sm:p-7 pb-6 sm:pb-8 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8),_0_0_0_1px_rgba(255,255,255,0.4)_inset,_0_0_0_1px_rgba(0,0,0,0.25)] border-t border-white/60">
            {/* Recessed CRT Screen Bezel Housing */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#1c1b19] p-2.5 sm:p-4 shadow-[inset_0_4px_16px_rgba(0,0,0,0.9),_0_1px_0_rgba(255,255,255,0.3)]">
              {/* Screen Frame */}
              <div
                className="relative rounded-lg sm:rounded-xl overflow-hidden border border-black/90 shadow-[inset_0_0_24px_rgba(0,0,0,0.4)]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Crect width='1' height='1' fill='%23777777'/%3E%3Crect x='1' y='1' width='1' height='1' fill='%23777777'/%3E%3Crect x='1' width='1' height='1' fill='%23ffffff'/%3E%3Crect y='1' width='1' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
                  backgroundSize: '4px 4px',
                }}
              >
                {/* 1984 System 1 Menubar */}
                <div className="h-6 sm:h-7 bg-white border-b border-black flex items-center px-3 sm:px-4 justify-between font-bold text-[11px] sm:text-[12px] text-black select-none z-20 relative shadow-xs">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Classic Apple Logo */}
                    <div className="w-3.5 h-4 flex items-center justify-center">
                      <svg viewBox="0 0 170 170" className="w-3.5 h-3.5 fill-black">
                        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14.01-6.1-9.45-10.87-20.08-14.33-31.91-3.46-11.83-5.19-23.01-5.19-33.53 0-14.34 3.7-26.05 11.1-35.13 7.4-9.08 16.58-13.73 27.53-13.95 4.89 0 10.4 1.25 16.53 3.75 6.13 2.5 10.14 3.81 12.03 3.93 1.52-.22 5.66-1.63 12.43-4.25 6.77-2.61 12.49-3.75 17.16-3.41 12.93.87 23.36 5.66 31.3 14.36-11.41 6.85-17.01 16.42-16.79 28.71.22 9.68 3.97 17.78 11.26 24.3 7.29 6.52 15.93 10.22 25.92 11.1-2.17 6.42-4.78 12.72-7.83 18.92zm-35.53-102.5c0-6.74 2.45-13.05 7.35-18.92 4.9-5.87 10.87-9.57 17.92-11.1 0 1.09.05 2.07.16 2.94.33 6.63-2.12 12.83-7.35 18.6-5.22 5.76-11.36 9.19-18.42 10.29l.34-1.81z" />
                      </svg>
                    </div>
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Special</span>
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] font-semibold text-black/90">
                    {clockTime}
                  </div>
                </div>

                {/* Desktop Canvas with Authentic Icons & Floating Calculator */}
                <div className="relative py-12 sm:py-16 px-4 min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
                  {/* Top Right Desktop Icon: Macintosh HD */}
                  <div className="absolute top-4 right-4 hidden sm:flex flex-col items-center gap-1 select-none pointer-events-none">
                    <svg className="w-8 h-8 [image-rendering:pixelated]" viewBox="0 0 32 32" fill="none">
                      <rect x="5" y="4" width="22" height="24" rx="2" fill="#eeeeee" stroke="#111111" strokeWidth="2" />
                      <rect x="9" y="4" width="14" height="10" fill="#222222" />
                      <rect x="9" y="18" width="14" height="8" fill="#ffffff" stroke="#111111" strokeWidth="1" />
                    </svg>
                    <span className="text-[10px] font-bold text-black bg-white px-1.5 py-0.5 rounded-xs tracking-tight shadow-xs">
                      Macintosh HD
                    </span>
                  </div>

                  {/* Bottom Right Desktop Icon: Trash */}
                  <div className="absolute bottom-4 right-4 hidden sm:flex flex-col items-center gap-1 select-none pointer-events-none">
                    <svg className="w-8 h-8 [image-rendering:pixelated]" viewBox="0 0 32 32" fill="none">
                      <path d="M7 8h18v2H7zM10 6h12v2H10z" fill="#222222" />
                      <path d="M9 10h14l-2 17H11L9 10z" fill="#eeeeee" stroke="#222222" strokeWidth="2" />
                      <line x1="13" y1="13" x2="12.5" y2="23" stroke="#222222" strokeWidth="1.5" />
                      <line x1="16" y1="13" x2="16" y2="23" stroke="#222222" strokeWidth="1.5" />
                      <line x1="19" y1="13" x2="19.5" y2="23" stroke="#222222" strokeWidth="1.5" />
                    </svg>
                    <span className="text-[10px] font-bold text-black bg-white px-1.5 py-0.5 rounded-xs tracking-tight shadow-xs">
                      Trash
                    </span>
                  </div>

                  {/* The Floating Classic Calculator Window */}
                  <div className="relative z-10 transition-transform duration-300 hover:scale-[1.02]">
                    {/* Simulated native macOS window drop shadow */}
                    <div className="absolute -inset-4 bg-black/50 rounded-[28px] blur-xl -z-10" />
                    <div className="absolute -inset-1.5 bg-black/40 rounded-[20px] blur-md -z-10" />

                    <img
                      src={themeImages[currentTheme]}
                      alt={`Classic Calculator in ${currentTheme} mode`}
                      className="w-[200px] sm:w-[250px] md:w-[270px] h-auto [image-rendering:pixelated] select-none rounded-[6px] shadow-2xl block"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Macintosh Lower Chassis Details */}
            <div className="pt-4 sm:pt-6 flex items-center justify-between px-2 sm:px-4">
              {/* Left: Authentic Rainbow Apple Logo & Macintosh Debossed Badge */}
              <div className="flex items-center gap-2.5 sm:gap-3 select-none">
                <svg viewBox="0 0 170 170" className="w-4 h-4 sm:w-5 sm:h-5">
                  <defs>
                    <linearGradient id="appleRainbow" x1="0" y1="0" x2="0" y2="100%">
                      <stop offset="0%" stopColor="#61bb46" />
                      <stop offset="18%" stopColor="#61bb46" />
                      <stop offset="18%" stopColor="#fdb827" />
                      <stop offset="36%" stopColor="#fdb827" />
                      <stop offset="36%" stopColor="#f5821f" />
                      <stop offset="54%" stopColor="#f5821f" />
                      <stop offset="54%" stopColor="#e03a3e" />
                      <stop offset="72%" stopColor="#e03a3e" />
                      <stop offset="72%" stopColor="#963d97" />
                      <stop offset="88%" stopColor="#963d97" />
                      <stop offset="88%" stopColor="#009ddc" />
                      <stop offset="100%" stopColor="#009ddc" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#appleRainbow)"
                    d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14.01-6.1-9.45-10.87-20.08-14.33-31.91-3.46-11.83-5.19-23.01-5.19-33.53 0-14.34 3.7-26.05 11.1-35.13 7.4-9.08 16.58-13.73 27.53-13.95 4.89 0 10.4 1.25 16.53 3.75 6.13 2.5 10.14 3.81 12.03 3.93 1.52-.22 5.66-1.63 12.43-4.25 6.77-2.61 12.49-3.75 17.16-3.41 12.93.87 23.36 5.66 31.3 14.36-11.41 6.85-17.01 16.42-16.79 28.71.22 9.68 3.97 17.78 11.26 24.3 7.29 6.52 15.93 10.22 25.92 11.1-2.17 6.42-4.78 12.72-7.83 18.92zm-35.53-102.5c0-6.74 2.45-13.05 7.35-18.92 4.9-5.87 10.87-9.57 17.92-11.1 0 1.09.05 2.07.16 2.94.33 6.63-2.12 12.83-7.35 18.6-5.22 5.76-11.36 9.19-18.42 10.29l.34-1.81z"
                  />
                </svg>
                <span className="font-serif italic font-bold text-xs sm:text-sm text-[#736e65] tracking-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
                  Macintosh
                </span>
              </div>

              {/* Right: Iconic 3.5" Floppy Disk Drive Slot with Eject Pin */}
              <div className="flex items-center gap-2">
                <div className="h-1.5 sm:h-2 w-28 sm:w-44 bg-[#1b1a18] rounded-xs shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),_0_1px_0_rgba(255,255,255,0.4)]" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1b1a18] shadow-[inset_0_1px_2px_rgba(0,0,0,0.9),_0_1px_0_rgba(255,255,255,0.4)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
