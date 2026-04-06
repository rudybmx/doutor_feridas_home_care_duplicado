import React from 'react';
import { Reveal } from './Reveal';

const Footer: React.FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-10 md:pt-20 pb-6 md:pb-10">
      <Reveal direction="up" threshold={0.1}>
        <footer className="bg-secondary/10 dark:bg-[#1e293b] rounded-[2rem] shadow-2xl shadow-blue-900/5 dark:shadow-none p-6 md:p-10 lg:p-12 relative overflow-hidden transition-all duration-300 font-display">
          {/* Decorative Background Blob */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          
          {/* Brand Header */}
          <div className="flex flex-col items-center justify-center mb-6 relative z-10">
            <img 
              src="https://docs.qozt.com.br/landing_pages/doutorFeridas/logoDoutorFeridas.png" 
              alt="Doutor Feridas" 
              className="h-16 md:h-24 w-auto object-contain mb-2"
            />
          </div>

          <hr className="border-t border-slate-100 dark:border-slate-700 mb-8" />

          {/* Main Content - Centered and Balanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl mx-auto relative z-10">
            
            {/* Column 1: Address */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <h4 className="text-secondary dark:text-white font-bold mb-4 flex items-center gap-2 text-xl">
                Unidade SBC
                <span className="material-symbols-rounded text-accent text-2xl">location_on</span>
              </h4>
              <ul className="space-y-2 text-base text-slate-600 dark:text-slate-400">
                <li className="flex flex-col items-center md:items-end gap-1">
                  <span className="leading-relaxed">
                    Rua Atlantica, 148 - Jardim do Mar<br />
                    São Bernardo do Campo - SP, 09750-480
                  </span>
                </li>
                <li className="flex flex-col items-center md:items-end gap-2 mt-2">
                  <a 
                    href="https://wa.me/5511974736662?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-secondary dark:text-blue-300 hover:text-primary transition-colors text-lg"
                  >
                    (11) 97473-6662
                    <span className="material-symbols-rounded text-accent text-lg">chat</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Hours */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-secondary dark:text-white font-bold mb-4 flex items-center gap-2 text-xl">
                <span className="material-symbols-rounded text-accent text-2xl">schedule</span>
                Horários de Atendimento
              </h4>
              <ul className="space-y-3 text-base text-slate-600 dark:text-slate-400 w-full max-w-xs">
                <li className="flex flex-col pb-2 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="font-bold text-secondary dark:text-slate-200 text-lg">Segunda a Sexta</span>
                  <span>08:00 às 18:00</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-secondary dark:text-slate-200 text-lg">Sábado</span>
                  <span>08:00 às 12:00</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500 relative z-10">
            <p>
              © 2026 Doutor Feridas | Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span>Desenvolvido por</span>
                <a href="https://op7franchising.com.br" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img 
                    src="https://docs.qozt.com.br/logo/op7/logo_escrita_preta.svg" 
                    alt="OP7 Franchising" 
                    className="h-8 w-auto" 
                  />
                </a>
              </div>
              <a href="#" className="hover:text-secondary dark:hover:text-slate-300 transition-colors">Privacidade</a>
            </div>
          </div>
        </footer>
      </Reveal>
    </div>
  );
};

export default Footer;