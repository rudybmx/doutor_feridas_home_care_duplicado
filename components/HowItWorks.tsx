import React from 'react';
import { Reveal } from './Reveal';

const HowItWorks: React.FC = () => {
  return (
    <section className="min-h-screen py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50/30 dark:from-background-dark dark:to-background-dark flex flex-col justify-center items-center overflow-hidden">
      
      {/* Header */}
      <header className="text-center mb-12 lg:mb-28 max-w-4xl mx-auto relative z-10">
        <Reveal>
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider mb-6 shadow-sm uppercase">
            Passo a Passo
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary dark:text-white tracking-tight mb-4">
            Como Funciona o Atendimento
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Um protocolo simples, claro e seguro para a sua recuperação.
          </p>
        </Reveal>
      </header>

      {/* MOBILE TIMELINE (Vertical, Simple) - Shown only on screens smaller than LG */}
      <div className="w-full max-w-lg mx-auto lg:hidden relative pl-4 pb-12">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>
        
        <div className="space-y-12">
           {/* Step 1 */}
           <Reveal delay={100} className="relative pl-10">
              <div className="absolute left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-background-dark border-4 border-primary z-10 shadow-[0_0_10px_rgba(30,136,201,0.5)]"></div>
              <div className="mb-3 flex items-center gap-3">
                 <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary">
                    <span className="material-symbols-rounded text-2xl text-accent">stethoscope</span>
                 </div>
                 <h3 className="text-xl font-bold text-secondary dark:text-white">Avaliação clínica</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Análise detalhada da ferida, histórico médico e fatores que influenciam a cicatrização.
              </p>
           </Reveal>

           {/* Step 2 */}
           <Reveal delay={200} className="relative pl-10">
              <div className="absolute left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-background-dark border-4 border-secondary z-10 shadow-[0_0_10px_rgba(6,44,82,0.5)]"></div>
              <div className="mb-3 flex items-center gap-3">
                 <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary">
                    <span className="material-symbols-rounded text-2xl text-accent">assignment</span>
                 </div>
                 <h3 className="text-xl font-bold text-secondary dark:text-white">Plano individualizado</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Desenvolvimento de um protocolo de cuidados personalizado e exclusivo para suas necessidades.
              </p>
           </Reveal>

           {/* Step 3 */}
           <Reveal delay={300} className="relative pl-10">
              <div className="absolute left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-background-dark border-4 border-primary z-10 shadow-[0_0_10px_rgba(30,136,201,0.5)]"></div>
              <div className="mb-3 flex items-center gap-3">
                 <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary">
                    <span className="material-symbols-rounded text-2xl text-accent">trending_up</span>
                 </div>
                 <h3 className="text-xl font-bold text-secondary dark:text-white">Acompanhamento</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Monitoramento contínuo do progresso, com ajustes no tratamento conforme a evolução.
              </p>
           </Reveal>

           {/* Step 4 */}
           <Reveal delay={400} className="relative pl-10">
              <div className="absolute left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-background-dark border-4 border-secondary z-10 shadow-[0_0_10px_rgba(6,44,82,0.5)]"></div>
              <div className="mb-3 flex items-center gap-3">
                 <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary">
                    <span className="material-symbols-rounded text-2xl text-accent">healing</span>
                 </div>
                 <h3 className="text-xl font-bold text-secondary dark:text-white">Cicatrização + Prevenção</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Foco na cicatrização completa e implementação de estratégias para evitar novas lesões.
              </p>
           </Reveal>
        </div>
      </div>

      {/* DESKTOP TIMELINE (Elastic Wave) - Hidden on Mobile */}
      {/* Container fluido que mantém a proporção 2.5:1 para garantir que a curva SVG não distorça */}
      <div className="hidden lg:block relative w-full max-w-6xl mx-auto aspect-[2.5/1] my-8">
        
        {/* SVG Background Layer */}
        <svg 
          className="absolute inset-0 w-full h-full z-0 pointer-events-none" 
          viewBox="0 0 1200 500" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#1E88C9" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#062C52" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1E88C9" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Base Path */}
          <path 
            d="M 150,100 C 300,100 300,350 450,350 C 600,350 600,100 750,100 C 900,100 900,350 1050,350" 
            fill="none" 
            stroke="url(#lineGradient)" 
            strokeLinecap="round" 
            strokeWidth="8"
            className="drop-shadow-sm"
          />
          
          {/* LED Pulse Path */}
          <path 
            d="M 150,100 C 300,100 300,350 450,350 C 600,350 600,100 750,100 C 900,100 900,350 1050,350" 
            fill="none" 
            stroke="white" 
            strokeLinecap="round" 
            strokeWidth="3"
            strokeOpacity="0.8"
            className="animate-led-flow drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
          />
        </svg>

        {/* 
            NODES POSITIONING STRATEGY:
            Using percentages based on the SVG coordinates (1200x500).
            Node 1 (Peak):   x=150 (12.5%), y=100 (20%)
            Node 2 (Trough): x=450 (37.5%), y=350 (70%)
            Node 3 (Peak):   x=750 (62.5%), y=100 (20%)
            Node 4 (Trough): x=1050 (87.5%), y=350 (70%)
        */}

        {/* NODE 1 - TOP (Peak) */}
        <div className="absolute top-[20%] left-[12.5%] -translate-x-1/2 -translate-y-1/2 z-10">
          <Reveal delay={100} className="flex flex-col items-center group cursor-default">
            {/* Text ABOVE the node */}
            <div className="absolute bottom-full mb-8 w-64 text-center">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-2 leading-tight">Avaliação clínica completa</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Análise detalhada da ferida, histórico médico e fatores que influenciam a cicatrização.
              </p>
            </div>
            
            {/* Minimalist Node */}
            <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none flex items-center justify-center transition-transform duration-500 group-hover:scale-110 relative">
              <span className="material-symbols-rounded text-3xl text-primary dark:text-blue-400">stethoscope</span>
              {/* Subtle Number Badge */}
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-primary border border-white dark:border-slate-600">01</div>
            </div>
          </Reveal>
        </div>

        {/* NODE 2 - BOTTOM (Trough) */}
        <div className="absolute top-[70%] left-[37.5%] -translate-x-1/2 -translate-y-1/2 z-10">
          <Reveal delay={300} className="flex flex-col items-center group cursor-default">
            {/* Minimalist Node */}
            <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none flex items-center justify-center transition-transform duration-500 group-hover:scale-110 relative">
              <span className="material-symbols-rounded text-3xl text-primary dark:text-blue-400">assignment</span>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-primary border border-white dark:border-slate-600">02</div>
            </div>

            {/* Text BELOW the node */}
            <div className="absolute top-full mt-8 w-64 text-center">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-2 leading-tight">Plano individualizado</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Desenvolvimento de um protocolo de cuidados personalizado e exclusivo para suas necessidades.
              </p>
            </div>
          </Reveal>
        </div>

        {/* NODE 3 - TOP (Peak) */}
        <div className="absolute top-[20%] left-[62.5%] -translate-x-1/2 -translate-y-1/2 z-10">
          <Reveal delay={500} className="flex flex-col items-center group cursor-default">
            {/* Text ABOVE the node */}
            <div className="absolute bottom-full mb-8 w-64 text-center">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-2 leading-tight">Acompanhamento</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Monitoramento contínuo do progresso, com ajustes no tratamento conforme a evolução.
              </p>
            </div>

            {/* Minimalist Node */}
            <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none flex items-center justify-center transition-transform duration-500 group-hover:scale-110 relative">
              <span className="material-symbols-rounded text-3xl text-primary dark:text-blue-400">trending_up</span>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-primary border border-white dark:border-slate-600">03</div>
            </div>
          </Reveal>
        </div>

        {/* NODE 4 - BOTTOM (Trough) */}
        <div className="absolute top-[70%] left-[87.5%] -translate-x-1/2 -translate-y-1/2 z-10">
          <Reveal delay={700} className="flex flex-col items-center group cursor-default">
            {/* Minimalist Node */}
            <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none flex items-center justify-center transition-transform duration-500 group-hover:scale-110 relative">
              <span className="material-symbols-rounded text-3xl text-primary dark:text-blue-400">healing</span>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-primary border border-white dark:border-slate-600">04</div>
            </div>

            {/* Text BELOW the node */}
            <div className="absolute top-full mt-8 w-64 text-center">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-2 leading-tight">Cicatrização + Prevenção</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Foco na cicatrização completa e implementação de estratégias para evitar novas lesões.
              </p>
            </div>
          </Reveal>
        </div>

      </div>

      {/* Footer / Call to Action */}
      <footer className="text-center mt-12 md:mt-16 relative z-10">
        <Reveal delay={800}>
          <p className="text-lg text-secondary dark:text-white font-medium mb-8">
            Quer saber como seria no seu caso? Fale com nossa equipe.
          </p>
          <a 
            href="https://wa.me/5511974736662?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative overflow-hidden
              bg-gradient-to-r from-secondary to-primary
              text-white
              px-10 py-4 rounded-full
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
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                {/* WhatsApp Icon */}
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
              Chamar no WhatsApp
            </span>
            {/* Shine effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>
        </Reveal>
      </footer>

    </section>
  );
};

export default HowItWorks;