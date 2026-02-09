
import React from 'react';

interface FooterProps {
  logoUrl: string;
}

const Footer: React.FC<FooterProps> = ({ logoUrl }) => {
  return (
    <footer className="py-20 border-t border-slate-100 dark:border-white/5 mt-24 bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-6">
            <a href="#home" className="group">
              <img 
                src={logoUrl} 
                alt="SEFAT GRAPHICS" 
                className="h-16 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/200x80/007FFF/ffffff?text=LOGO';
                }}
              />
            </a>
            <p className="text-slate-500 text-sm font-light leading-relaxed max-w-xs">
              Premium visual artistry specializing in anime culture and modern streetwear aesthetics.
            </p>
          </div>

          <div className="flex flex-col gap-4">
             <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Sitemap</h4>
             <div className="flex flex-col gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
               <a href="#about" className="hover:text-brand-blue transition-colors">The Designer</a>
               <a href="#works" className="hover:text-brand-blue transition-colors">Case Studies</a>
               <a href="#contact" className="hover:text-brand-blue transition-colors">Collaboration</a>
             </div>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-end">
             <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Legal</h4>
             <div className="flex flex-col gap-2 items-center md:items-end text-sm font-medium text-slate-600 dark:text-slate-400">
               <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-brand-blue transition-colors">Terms of Use</a>
               <p className="mt-4 text-xs text-slate-400 italic">
                Built with precision by SEFAT GRAPHIC.
               </p>
             </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-light">
            © {new Date().getFullYear()} SEFAT GRAPHICS. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-medium text-slate-400">Accepting new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
