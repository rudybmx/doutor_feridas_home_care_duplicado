import React, { useState } from 'react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Tratamentos', href: '#tratamentos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg shadow-blue-100/50 dark:shadow-none">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/doutorFeridas/logoDoutorFeridas.png" 
            alt="Doutor Feridas" 
            className="h-8 md:h-12 w-auto object-contain flex-shrink-0"
          />
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300"
            aria-label="Toggle Dark Mode"
          >
            <span className="material-symbols-rounded block text-xl md:text-2xl">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
          <a 
            href="https://wa.me/5511970925217?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
            target="_blank"
            rel="noopener noreferrer"
            className="
            relative overflow-hidden
            bg-gradient-to-r from-secondary to-primary
            text-white
            px-4 py-2 md:px-6 md:py-2.5 rounded-full
            font-bold
            flex items-center gap-2
            transition-all duration-300
            hover:scale-105 active:scale-95
            shadow-[0_4px_15px_-3px_rgba(30,136,201,0.4)]
            border-t border-white/20
            text-xs md:text-sm
            group
          ">
            <span className="relative z-10 hidden sm:inline">Agendar visita</span>
            <span className="relative z-10 sm:hidden">Agendar</span>
            <span className="material-symbols-rounded relative z-10 text-sm group-hover:translate-x-1 transition-transform">arrow_outward</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-rounded block text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 glass-card rounded-3xl p-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-primary py-2 border-b border-slate-100 dark:border-slate-800 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;