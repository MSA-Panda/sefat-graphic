import React from "react";
import logo from "../assets/images/logo.png";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/40 dark:bg-black/40 border-b border-white/20 dark:border-black/20 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Brand Logo"
            className="h-12 w-auto drop-shadow-lg"
          />
          <span className="text-xl font-bold dark:text-white">
            SEFAT GRAPHIC
          </span>
        </div>

        {/* Dark Mode Button */}
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-xl bg-brand-blue text-white shadow-md hover:opacity-90 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
