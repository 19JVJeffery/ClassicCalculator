import React from 'react';
import { Layers, Monitor, Sliders, Type, Keyboard, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0a0b10] border-t border-white/[0.06] relative" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-stone-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>macOS Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Crafted for modern macOS.
          </h2>
          <p className="text-base sm:text-lg text-stone-400 font-normal leading-relaxed">
            Every feature designed to feel like an authentic Apple Desk Accessory, built with contemporary SwiftUI performance.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Vector Pixel Art */}
          <div className="rounded-3xl border border-white/[0.08] bg-stone-900/40 p-8 hover:border-white/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 mb-6">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Retina-Sharp Vector Art</h3>
            <p className="text-sm text-stone-400 leading-relaxed font-normal">
              Zero blur on 4K, 5K, or 6K Pro Display XDR screens. Rendered with <code className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-amber-200">crispEdges</code> SVG paths for mathematically razor-sharp pixels.
            </p>
          </div>

          {/* Card 2: 7px Bitmap LCD Display */}
          <div className="rounded-3xl border border-white/[0.08] bg-stone-900/40 p-8 hover:border-white/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 mb-6">
              <Type className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Authentic 7px LCD Display</h3>
            <p className="text-sm text-stone-400 leading-relaxed font-normal">
              Includes the custom <span className="text-white font-medium">MacCalculatorDisplay</span> bitmap font, faithfully rendering the exact digit geometry and right-aligned numerals from 1984.
            </p>
          </div>

          {/* Card 3: Color Schemes */}
          <div className="rounded-3xl border border-white/[0.08] bg-stone-900/40 p-8 hover:border-white/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 mb-6">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Three Authentic Schemes</h3>
            <p className="text-sm text-stone-400 leading-relaxed font-normal">
              Switch easily between the rich Classic Platinum theme, the subtle background Inactive state, and stark high-contrast Monochrome.
            </p>
          </div>

          {/* Card 4: Always on Top & Shadows */}
          <div className="rounded-3xl border border-white/[0.08] bg-stone-900/40 p-8 hover:border-white/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 mb-6">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Always on Top &amp; Native Shadow</h3>
            <p className="text-sm text-stone-400 leading-relaxed font-normal">
              Pin the calculator above your code editor, spreadsheet, or browser. Toggle the authentic macOS window shadow on or off in Settings.
            </p>
          </div>

          {/* Card 5: Full Keyboard Support */}
          <div className="rounded-3xl border border-white/[0.08] bg-stone-900/40 p-8 hover:border-white/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 mb-6">
              <Keyboard className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Full Physical Keyboard Support</h3>
            <p className="text-sm text-stone-400 leading-relaxed font-normal">
              Type calculations naturally with your number pad or top-row numbers. Supports <kbd className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-stone-300">Return</kbd>, <kbd className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-stone-300">Esc</kbd>, and <kbd className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-stone-300">⌫</kbd>.
            </p>
          </div>

          {/* Card 6: Zero Bloat Native Mac App */}
          <div className="rounded-3xl border border-white/[0.08] bg-stone-900/40 p-8 hover:border-white/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 mb-6">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Zero Bloat &amp; Lightweight</h3>
            <p className="text-sm text-stone-400 leading-relaxed font-normal">
              Under 15MB total bundle size. Instant launch, zero battery drain, zero background daemons, and fast native performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
