import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AudioPlayground } from './components/AudioPlayground';
import { Story } from './components/Story';
import { Features } from './components/Features';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0d12] text-stone-100 selection:bg-amber-400 selection:text-stone-950 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <AudioPlayground />
        <Story />
        <Features />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
