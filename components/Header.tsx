import React from 'react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass px-4 md:px-8 py-2 md:py-3 rounded-full shadow-lg shadow-blue-100/50 dark:shadow-none">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="https://docs.qozt.com.br/landing_pages/doutorFeridas/logoDoutorFeridas.png" 
            alt="Doutor Feridas" 
            className="h-8 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <a href="#" className="hover:text-primary transition-colors">Início</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#tratamentos" className="hover:text-primary transition-colors">Tratamentos</a>
          <a href="#pacientes" className="hover:text-primary transition-colors">Pacientes</a>
          <a href="#faq" className="hover:text-primary transition-colors">Dúvidas</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <span className="material-symbols-rounded block text-xl md:text-2xl">light_mode</span>
            ) : (
              <span className="material-symbols-rounded block text-xl md:text-2xl">dark_mode</span>
            )}
          </button>
          
          <a 
            href="https://wa.me/5511974736662?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
            target="_blank"
            rel="noopener noreferrer"
            className="
            relative overflow-hidden
            bg-gradient-to-r from-secondary to-primary
            text-white
            px-5 py-2.5 md:px-6 rounded-full
            font-bold
            flex items-center gap-2
            transition-all duration-300
            hover:scale-105 active:scale-95
            shadow-[0_4px_15px_-3px_rgba(30,136,201,0.4)]
            hover:shadow-[0_10px_25px_-5px_rgba(30,136,201,0.5)]
            group
            border-t border-white/20
            text-xs md:text-sm
          ">
            <span className="relative z-10 hidden md:inline">Agendar Consulta</span>
            <span className="relative z-10 md:hidden">Agendar</span>
            <span className="material-symbols-rounded relative z-10 text-sm group-hover:translate-x-1 transition-transform">arrow_outward</span>
            
            {/* Shine effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;