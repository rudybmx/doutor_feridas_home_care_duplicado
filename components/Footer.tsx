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
              src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/doutorFeridas/logo_doutor_feridas_home_care.png" 
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
                Home Care
                <span className="material-symbols-rounded text-accent text-2xl">location_on</span>
              </h4>
              <ul className="space-y-2 text-base text-slate-600 dark:text-slate-400">
                <li className="flex flex-col items-center md:items-end gap-1">
                  <span className="leading-relaxed">
                    Rua Vereador Jaír Salvarani, 240 - Vila Oliveira<br />
                    Mogi das Cruzes - SP, CEP 08790-020
                  </span>
                </li>
                <li className="flex flex-col items-center md:items-end gap-2 mt-2">
                  <a 
                    href="https://wa.me/5511970925217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-secondary dark:text-blue-300 hover:text-primary transition-colors text-lg"
                  >
                    (11) 97092-5217
                    <span className="material-symbols-rounded text-accent text-lg">chat</span>
                  </a>
                  <a 
                    id="email"
                    href="mailto:Homecare.mcz@doutorferidas.com.br"
                    className="email flex items-center gap-2 font-semibold text-secondary dark:text-blue-300 hover:text-primary transition-colors text-base"
                  >
                    Homecare.mcz@doutorferidas.com.br
                    <span className="material-symbols-rounded text-accent text-lg">mail</span>
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
            <div className="flex items-center gap-2">
                <span>Desenvolvido por</span>
                <a href="https://op7franchising.com.br" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img 
                    src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/logo/op7/logo.svg" 
                    alt="OP7 Franchising" 
                    className="h-12 w-auto" 
                  />
                </a>
              </div>
            </div>
        </footer>
      </Reveal>
    </div>
  );
};

export default Footer;