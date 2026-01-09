
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 mt-12 bg-white/5 backdrop-blur-3xl">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
             <img src="logo.png" alt="Logo" className="h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
             <div className="text-2xl font-extrabold tracking-tighter">
               SEFAT <span className="font-light text-slate-500">GRAPHICS</span>
             </div>
          </div>
          <p className="text-slate-500 text-sm font-light">
            © {new Date().getFullYear()} Sefat Graphics. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Licensing</a>
        </div>

        <div className="text-xs text-slate-400 italic">
          High-end visuals. Built for the future.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
