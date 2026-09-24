import React from 'react';
import { Download, ShieldCheck, Apple, ExternalLink } from 'lucide-react';

export const DownloadCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="download">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>100% Free · No Ads · No Telemetry</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
          Ready to experience<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
            Classic Calculator?
          </span>
        </h2>

        <p className="text-base sm:text-lg text-stone-400 font-normal leading-relaxed max-w-xl mx-auto mb-10">
          Download the latest release for macOS. Unzip and drag to your Applications folder. Built for macOS 13 Ventura, macOS 14 Sonoma, and macOS 15 Sequoia.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="https://github.com/19JVJeffery/ClassicCalculator/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold bg-white text-stone-950 hover:bg-stone-100 hover:shadow-2xl hover:shadow-white/20 active:scale-95 transition-all duration-200"
          >
            <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5 duration-200" />
            <span>Download for macOS</span>
          </a>

          <a
            href="https://github.com/19JVJeffery/ClassicCalculator/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-base font-semibold border border-white/10 bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4 text-stone-400" />
            <span>View Releases</span>
          </a>
        </div>

        <div className="text-xs text-stone-500 font-medium">
          Requires macOS 13.0 or later · Optimized for Apple Silicon &amp; Intel Macs
        </div>
      </div>
    </section>
  );
};
