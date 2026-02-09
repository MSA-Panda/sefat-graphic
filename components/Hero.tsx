
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  logoUrl: string;
}

const Hero: React.FC<HeroProps> = ({ logoUrl }) => {
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden px-4 md:px-8">
      <div 
        className="relative w-full max-w-6xl mx-auto flex flex-col items-center text-center transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        {/* Floating background elements */}
        <div className="absolute -top-10 -right-20 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-brand-orange/10 blur-[120px] rounded-full opacity-30 animate-float"></div>

        <div className="glass-card p-10 md:p-20 lg:p-24 rounded-[3.5rem] backdrop-blur-[40px] border-white/40 dark:border-white/5 shadow-2xl relative overflow-hidden group w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
          
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/50 dark:bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold mb-12 animate-bounce shadow-sm backdrop-blur-md">
            <Sparkles size={16} />
            Elevating Brand Visuals
          </div>

          {/* Logo Presentation - Primary Focus */}
          <div className="mb-14 flex justify-center perspective-1000">
            <img 
              src={logoUrl} 
              alt="SEFAT GRAPHICS" 
              className="w-full max-w-[450px] md:max-w-[650px] h-auto drop-shadow-[0_25px_50px_rgba(0,127,255,0.45)] animate-float transition-all duration-700 hover:scale-105"
              style={{ animationDuration: '5s' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/800x250/007FFF/ffffff?text=YOUR+LOGO+HERE&font=playfair';
              }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-8 font-sans tracking-tight leading-tight">
              Anime T-Shirt Designer & <br className="hidden md:block" /> Creative Visual Artist
            </h2>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-14 font-light leading-relaxed">
              Transforming creative concepts into iconic streetwear and premium brand identities through high-end digital artistry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://www.behance.net/mohammesefata"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-5 bg-brand-blue text-white rounded-[1.5rem] font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,127,255,0.3)] border-b-4 border-brand-orange group"
              >
                View Portfolio
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-10 py-5 glass-card rounded-[1.5rem] font-bold text-lg text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/10 transition-all border border-white/30"
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>

        {/* Decorative sliding text */}
        <div className="mt-20 relative w-full h-24 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
          <div className="flex items-center justify-center gap-16 whitespace-nowrap">
            {[1, 2, 3].map((i) => (
              <React.Fragment key={i}>
                <span className="text-4xl font-black tracking-[0.4em] text-brand-blue uppercase">STREETWEAR</span>
                <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
                <span className="text-4xl font-black tracking-[0.4em] text-brand-blue uppercase">IDENTITY</span>
                <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
                <span className="text-4xl font-black tracking-[0.4em] text-brand-blue uppercase">VISUALS</span>
                <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
