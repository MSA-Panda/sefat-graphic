
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12">
      <div 
        className="relative w-full max-w-6xl mx-auto flex flex-col items-center text-center transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        {/* Floating background elements */}
        <div className="absolute -top-10 -right-20 w-64 h-64 bg-brand-blue/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-brand-orange/10 blur-3xl rounded-full opacity-30 animate-float"></div>

        <div className="glass-card p-8 md:p-16 lg:p-24 rounded-[3rem] backdrop-blur-3xl border-white/40 dark:border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-white/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-white dark:bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold mb-12 animate-bounce shadow-sm">
            <Sparkles size={16} />
            Elevating Brand Visuals
          </div>

          {/* Logo Replacement for H1 - High-End Presentation */}
          <div className="mb-10 flex justify-center">
            <img 
              src="logo.png" 
              alt="SEFAT GRAPHICS" 
              className="w-full max-w-[550px] md:max-w-[700px] h-auto drop-shadow-[0_20px_60px_rgba(0,127,255,0.4)] animate-float"
              style={{ animationDuration: '4.5s' }}
            />
          </div>

          <h2 className="text-xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 font-sans tracking-tight">
            Anime T-Shirt Designer & Creative Visual Artist
          </h2>

          <p className="max-w-xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-12 font-light leading-relaxed">
            Transforming creative concepts into iconic streetwear and brand identities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.behance.net/mohammesefata"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-brand-blue text-white rounded-2xl font-bold text-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-blue/20 border-b-4 border-brand-orange"
            >
              View My Works
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-10 py-5 bg-brand-white dark:bg-white/5 text-slate-900 dark:text-white glass-card rounded-2xl font-bold text-lg hover:bg-white transition-all flex items-center gap-2 border-b-4 border-brand-blue/30"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Decorative sliding text footer */}
        <div className="mt-16 relative w-full h-24 overflow-hidden">
          <div className="flex items-center justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all cursor-default select-none whitespace-nowrap animate-pulse">
            <span className="text-4xl font-extrabold tracking-[0.5em] text-brand-blue">STREETWEAR</span>
            <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
            <span className="text-4xl font-extrabold tracking-[0.5em] text-brand-blue">IDENTITY</span>
            <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
            <span className="text-4xl font-extrabold tracking-[0.5em] text-brand-blue">CREATIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
