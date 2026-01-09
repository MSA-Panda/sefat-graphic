
import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className="relative min-h-screen selection:bg-brand-blue selection:text-white">
        {/* Animated Mesh Background blobs */}
        <div className="mesh-gradient pointer-events-none">
          <div className="mesh-blob bg-brand-blue w-[500px] h-[500px] -top-20 -left-20 animate-pulse-slow"></div>
          <div className="mesh-blob bg-brand-orange w-[600px] h-[600px] top-1/2 -right-20 animate-float opacity-20"></div>
          <div className="mesh-blob bg-brand-white w-[400px] h-[400px] bottom-10 left-1/4 animate-pulse opacity-10 dark:opacity-5"></div>
        </div>

        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
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
