
import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Sun, Moon, Menu, X, Settings, Upload, RefreshCw } from 'lucide-react';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  // Default to root logo.png, but allow user override for previewing
  const [logoUrl, setLogoUrl] = useState<string>(localStorage.getItem('sefat_custom_logo') || "logo.png");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setLogoUrl(base64String);
        localStorage.setItem('sefat_custom_logo', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetLogo = () => {
    setLogoUrl("logo.png");
    localStorage.removeItem('sefat_custom_logo');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <Router>
      <div className="relative min-h-screen selection:bg-brand-blue selection:text-white transition-colors duration-500">
        {/* Animated Mesh Background blobs */}
        <div className="mesh-gradient pointer-events-none">
          <div className="mesh-blob bg-brand-blue w-[500px] h-[500px] -top-20 -left-20 animate-pulse-slow"></div>
          <div className="mesh-blob bg-brand-orange w-[600px] h-[600px] top-1/2 -right-20 animate-float opacity-20"></div>
          <div className="mesh-blob bg-brand-white w-[400px] h-[400px] bottom-10 left-1/4 animate-pulse opacity-10 dark:opacity-5"></div>
        </div>

        {/* Premium Apple-Style Navigation */}
        <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-5xl ${isScrolled ? 'top-4' : 'top-8'}`}>
          <div className="glass-card px-4 py-3 md:px-8 md:py-4 rounded-2xl flex items-center justify-between backdrop-blur-3xl border-white/20 dark:border-white/5">
            <div className="flex items-center">
              <a href="#home" className="block group">
                <img 
                  src={logoUrl} 
                  alt="SEFAT GRAPHIC Logo" 
                  className="h-10 md:h-14 w-auto drop-shadow-lg group-hover:scale-105 transition-transform duration-300" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/200x80/007FFF/ffffff?text=LOGO';
                  }}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 glass-card rounded-2xl p-6 backdrop-blur-3xl animate-in slide-in-from-top-4 duration-300">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-brand-blue"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
        
        <main className="relative z-10">
          <Hero logoUrl={logoUrl} />
          <About />
          <Skills />
          <Portfolio />
          <Tools />
          <Contact />
        </main>

        <Footer logoUrl={logoUrl} />

        {/* Brand Customizer Tool (Bottom Right) */}
        <div className="fixed bottom-6 right-6 z-[60]">
          <button 
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="p-4 bg-brand-blue text-white rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all group"
            title="Logo Previewer"
          >
            <Settings className={`transition-transform duration-700 ${isSettingsOpen ? 'rotate-180' : 'group-hover:rotate-90'}`} />
          </button>
          
          {isSettingsOpen && (
            <div className="absolute bottom-20 right-0 w-72 glass-card p-6 rounded-3xl backdrop-blur-3xl border-white/20 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Upload size={18} className="text-brand-blue" />
                Live Brand Preview
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-light">
                Upload your logo file to see how it looks across the entire site instantly.
              </p>
              
              <div className="space-y-4">
                <label className="block">
                  <span className="sr-only">Choose logo file</span>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-blue/10 file:text-brand-blue hover:file:bg-brand-blue/20 cursor-pointer"
                  />
                </label>
                
                <button 
                  onClick={resetLogo}
                  className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <RefreshCw size={14} />
                  Reset to root logo.png
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
