
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto">
      <div className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
          <div className="flex gap-2 mb-8">
            <div className="w-12 h-1.5 bg-brand-blue rounded-full"></div>
            <div className="w-4 h-1.5 bg-brand-orange rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Crafting the future of <br />
            <span className="text-brand-blue">Anime Streetwear.</span>
          </h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed">
            <p>
              I am Sefat, the creative mind behind <strong>SEFAT GRAPHICS</strong>. I am a passionate anime t-shirt designer dedicated to bringing 2D dreams into high-quality physical fashion.
            </p>
            <p>
              With deep expertise in <strong>Adobe Photoshop</strong> and brand strategy, I help brands bridge the gap between niche anime culture and modern streetwear aesthetics.
            </p>
            <p>
              My design philosophy is simple: <strong>Bold, Clean, and Iconic.</strong> Every pixel is placed with intention to ensure your identity stands out in any crowd.
            </p>
          </div>
          
          <div className="mt-12 flex gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 dark:text-white">4+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 dark:text-white">120+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Designs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 dark:text-white">50+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Clients</div>
            </div>
          </div>
        </div>

        {/* Abstract Image Container */}
        <div className="flex-1 min-h-[400px] relative bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-orange/10"></div>
          
          <div className="relative z-10 w-full h-full glass-card rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=1000&auto=format&fit=crop" 
              alt="Anime Aesthetic" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-card backdrop-blur-md rounded-xl text-sm border-white/20">
              <span className="text-brand-orange font-bold mr-2">Tip:</span> "Visuals are the voice of your brand."
            </div>
          </div>

          <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
