import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090d] border-t border-white/[0.06] pt-16 pb-0 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-stone-900 border border-white/10 flex items-center justify-center overflow-hidden shadow-inner">
                <img
                  src="./assets/svgs/calculator_active.svg"
                  alt="Classic Calculator"
                  className="w-5 h-7 [image-rendering:pixelated]"
                />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Classic Calculator
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 font-normal leading-relaxed max-w-sm">
              A pixel-perfect native macOS tribute to the 1984 Macintosh Calculator Desk Accessory. Dedicated to the craft and spirit of early Apple software design.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-xs font-semibold text-stone-300 uppercase tracking-wider mb-4">
              Application
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a
                  href="https://github.com/19JVJeffery/ClassicCalculator/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Latest Release
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/19JVJeffery/ClassicCalculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/19JVJeffery/ClassicCalculator/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-xs font-semibold text-stone-300 uppercase tracking-wider mb-4">
              Historical Folklore
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a
                  href="https://www.folklore.org/StoryView.py?story=Calculator_Construction_Set.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  The Construction Set
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Susan_Kare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Susan Kare (Icon)
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Chris_Espinosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Chris Espinosa (Code)
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Andy_Hertzfeld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Andy Hertzfeld (UI)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© 2026 Classic Calculator. Not affiliated with Apple Inc. Macintosh is a trademark of Apple Inc.</p>
          <p>Native macOS Utility · Zero Tracking</p>
        </div>
      </div>

      {/* Adaptive Oversized Ambient Wordmark (Alcove style with gradient fade) */}
      <div className="w-full overflow-hidden flex justify-center pointer-events-none select-none -mb-8 sm:-mb-14 md:-mb-20 lg:-mb-24 mt-8 sm:mt-14">
        <span className="text-[15.5vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent bg-clip-text text-transparent select-none text-center">
          CALCULATOR
        </span>
      </div>
    </footer>
  );
};
