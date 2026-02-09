
import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <Router>
      <div className="relative min-h-screen selection:bg-brand-blue selection:text-white">
        {/* Animated Mesh Background blobs */}
        <div className="mesh-gradient pointer-events-none">
          <div className="mesh-blob bg-brand-blue w-[500px] h-[500px] -top-20 -left-20 animate-pulse-slow"></div>
          <div className="mesh-blob bg-brand-orange w-[600px] h-[600px] top-1/2 -right-20 animate-float opacity-20"></div>
          <div className="mesh-blob bg-brand-white w-[400px] h-[400px] bottom-10 left-1/4 animate-pulse opacity-10 dark:opacity-5"></div>
        </div>

        {/* Premium Apple-Style Navigation Integrated in App.tsx */}
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-5xl ${isScrolled ? 'top-4' : 'top-8'}`}>
          <div className="glass-card px-4 py-3 md:px-8 md:py-4 rounded-2xl flex items-center justify-between backdrop-blur-3xl">
            <div className="flex items-center">
              <a href="#home" className="block">
                {/* Changed src to a string literal to fix module resolution issues in browser native ESM */}
                <img src="logo.png" alt="SEFAT GRAPHIC Logo" className="h-14 w-auto drop-shadow-lg" />
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
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300"
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
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Tools />
          <Contact />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
