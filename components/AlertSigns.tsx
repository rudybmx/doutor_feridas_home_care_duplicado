import React from 'react';
import { Reveal } from './Reveal';

const AlertSigns: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="mb-12 lg:mb-16 grid lg:grid-cols-2 gap-8 items-end">
        <div>
          <Reveal direction="right">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider mb-6 shadow-sm hover:scale-105 transition-transform cursor-default uppercase">
              Agendar Avaliação
            </span>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary dark:text-white leading-tight">
              SINAIS DE ALERTA QUE <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary dark:from-white dark:to-primary">NÃO DEVEM SER IGNORADOS</span>
            </h2>
          </Reveal>
        </div>
        <div className="lg:text-right">
          <Reveal direction="left" delay={200}>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md ml-auto leading-relaxed">
              Identificar precocemente os sinais de complicações é fundamental para um tratamento eficaz. Se você notar algum destes sintomas, procure ajuda especializada.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 lg:mb-20">
        
        {/* Card 1 */}
        <Reveal delay={0} className="h-full">
          <div className="group relative p-8 rounded-[2rem] bg-white/60 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 glass-card shadow-lg hover:shadow-xl dark:hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="text-slate-400 dark:text-slate-500 font-mono text-sm font-bold">01</span>
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-rounded">healing</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-blue-300 transition-colors">Ferida que não fecha</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Lesões que permanecem abertas por mais de 4 semanas sem sinais claros de cicatrização.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Card 2 */}
        <Reveal delay={100} className="h-full">
          <div className="group relative p-8 rounded-[2rem] bg-white/60 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 glass-card shadow-lg hover:shadow-xl dark:hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="text-slate-400 dark:text-slate-500 font-mono text-sm font-bold">02</span>
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-rounded">sentiment_very_dissatisfied</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-blue-300 transition-colors">Dor Persistente</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Aumento progressivo da dor na região da ferida ou ao redor, mesmo com medicação.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Card 3 */}
        <Reveal delay={200} className="h-full">
          <div className="group relative p-8 rounded-[2rem] bg-white/60 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 glass-card shadow-lg hover:shadow-xl dark:hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="text-slate-400 dark:text-slate-500 font-mono text-sm font-bold">03</span>
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-rounded">coronavirus</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-blue-300 transition-colors">Vermelhidão e Inchaço</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Sinais inflamatórios que se espalham pela pele ao redor da lesão, indicando possível infecção.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Card 4 */}
        <Reveal delay={300} className="h-full">
          <div className="group relative p-8 rounded-[2rem] bg-white/60 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 glass-card shadow-lg hover:shadow-xl dark:hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="text-slate-400 dark:text-slate-500 font-mono text-sm font-bold">04</span>
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-rounded">water_drop</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-blue-300 transition-colors">Secreção ou Odor</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Presença de pus, líquido amarelado ou mau cheiro forte proveniente da ferida.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Card 5 */}
        <Reveal delay={400} className="h-full">
          <div className="group relative p-8 rounded-[2rem] bg-white/60 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 glass-card shadow-lg hover:shadow-xl dark:hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="text-slate-400 dark:text-slate-500 font-mono text-sm font-bold">05</span>
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-rounded">bloodtype</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-blue-300 transition-colors">Diabetes / Má Circulação</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Pacientes diabéticos ou com varizes devem ter atenção redobrada a qualquer pequena lesão.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Card 6 */}
        <Reveal delay={500} className="h-full">
          <div className="group relative p-8 rounded-[2rem] bg-white/60 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 glass-card shadow-lg hover:shadow-xl dark:hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="text-slate-400 dark:text-slate-500 font-mono text-sm font-bold">06</span>
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-rounded">history</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-blue-300 transition-colors">Lesões Recorrentes</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Feridas que cicatrizam mas voltam a abrir no mesmo local repetidamente.
              </p>
            </div>
          </div>
        </Reveal>

      </div>

      <Reveal delay={600}>
        <div className="bg-secondary dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-2xl mx-auto">
              Se identificou? Vamos avaliar seu caso com cuidado.
            </h3>
            <p className="text-slate-300 mb-10 max-w-lg mx-auto">
              Não espere o quadro se agravar. O tratamento especializado acelera a recuperação e devolve sua qualidade de vida.
            </p>
            <a 
              className="
                relative overflow-hidden
                bg-gradient-to-r from-secondary to-primary
                text-white
                px-8 py-4 rounded-full
                font-bold text-lg
                whitespace-nowrap
                shadow-[0_10px_25px_-5px_rgba(30,136,201,0.4)]
                hover:shadow-[0_20px_35px_-5px_rgba(30,136,201,0.5)]
                hover:-translate-y-1
                transition-all duration-300
                group
                w-full sm:w-auto
                flex items-center justify-center gap-3
                border-t border-white/20
              "
              href="https://wa.me/5511974736662?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="material-symbols-rounded text-xl">calendar_today</span>
                Agendar Avaliação
              </span>
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default AlertSigns;