import React from 'react';
import { BookOpen, Sparkles, Sliders, History } from 'lucide-react';

export const Story: React.FC = () => {
  const chapters = [
    {
      number: '01',
      date: 'Autumn 1983',
      icon: History,
      title: 'Steve Jobs Had Notes.',
      description:
        'Chris Espinosa developed the Calculator Desk Accessory for the original Macintosh. Steve Jobs kept rejecting every prototype Espinosa showed him — the lines were too thick, the buttons too square, the margins awkward.',
    },
    {
      number: '02',
      date: 'Early 1984',
      icon: Sliders,
      title: 'The Calculator Construction Set.',
      description:
        'Instead of arguing, Espinosa coded a meta-tool allowing Jobs to tune every single visual parameter in real time — button sizes, borders, spacing. Jobs spent an hour tweaking it, and ended up choosing values nearly identical to Espinosa’s original proposal.',
    },
    {
      number: '03',
      date: '24 January 1984',
      icon: Sparkles,
      title: 'System 1.0 Release. Icon by Kare.',
      description:
        'Susan Kare designed the iconic pixel-art desk accessory icon. Andy Hertzfeld implemented the UI in System 1.0. It became an enduring symbol of personal computing — now reimagined as a modern native Mac app.',
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="story">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-stone-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Apple Folklore</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            The story behind the pixels.
          </h2>
          <p className="text-base sm:text-lg text-stone-400 leading-relaxed font-normal">
            How a stubborn Steve Jobs, a clever Chris Espinosa, and an afternoon of code created the most enduring calculator in computer history.
          </p>
        </div>

        {/* 3 Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chapters.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl border border-white/[0.08] bg-stone-900/40 p-8 hover:bg-stone-900/80 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-black text-amber-400/80">
                      {ch.number}
                    </span>
                    <span className="text-xs font-mono font-medium uppercase tracking-wider text-stone-500">
                      {ch.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-amber-200 transition-colors">
                    {ch.title}
                  </h3>

                  <p className="text-sm text-stone-400 leading-relaxed font-normal">
                    {ch.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-stone-500">
                  <Icon className="w-4 h-4 text-amber-400/70" />
                  <span>Documented on Folklore.org</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
