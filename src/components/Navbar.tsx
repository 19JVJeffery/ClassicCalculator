import React, { useState, useEffect } from 'react';
import { Download, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0d12]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-stone-900 border border-white/10 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-200">
            <img
              src="./assets/svgs/calculator_active.svg"
              alt="Classic Calculator Icon"
              className="w-5 h-7 [image-rendering:pixelated]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-amber-300 transition-colors">
              Classic Calculator
            </span>
            <span className="text-[10px] font-medium text-stone-400 tracking-wide uppercase">
              for macOS
            </span>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
          <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
          <a href="#sound" className="hover:text-white transition-colors">Sound</a>
          <a href="#story" className="hover:text-white transition-colors">Story</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/19JVJeffery/ClassicCalculator/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white text-stone-950 hover:bg-stone-100 hover:shadow-lg hover:shadow-white/10 active:scale-95 transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5 duration-200" />
            <span>Download</span>
            <span className="hidden sm:inline text-stone-500 font-normal">· Free</span>
          </a>
        </div>
      </div>
    </header>
  );
};
