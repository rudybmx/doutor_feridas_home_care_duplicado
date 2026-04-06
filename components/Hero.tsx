import React from 'react';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  return (
    <>
      {/* Background Blobs - Updated colors */}
      <div className="absolute top-0 right-0 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 -ml-20 w-72 h-72 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 md:pt-0">
        {/* Left Content */}
        <div className="lg:col-span-5 relative z-10 order-1 lg:order-1">
          <Reveal delay={100}>
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 mb-6 shadow-sm">
              <span className="material-symbols-rounded text-accent text-lg">medical_services</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Clínica Especializada</span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight md:leading-[1.1] mb-4 md:mb-6 text-secondary dark:text-white">
              <span className="block text-secondary dark:text-white uppercase tracking-tighter font-inter font-black">
                Doutor Feridas
              </span>
              <span className="block text-primary mt-2 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-normal">
                Tratamento especializado para feridas que não cicatrizam
              </span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 md:mb-8 max-w-md leading-relaxed">
              Clínica de feridas em São Bernardo do Campo, com atendimento da Dra. Isabella, especialista em cuidado contínuo até a cicatrização.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="https://wa.me/5511974736662?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
                target="_blank"
                rel="noopener noreferrer"
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
              ">
                <span className="relative z-10">Agendar Avaliação</span>
                <span className="material-symbols-rounded relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                {/* Shine effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
              
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                <div className="flex -space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
                    alt="Paciente 1"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 shadow-md object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
                    alt="Paciente 2"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 shadow-md object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                    alt="Paciente 3"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 shadow-md object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center leading-tight">
                   <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-secondary dark:text-white">Milhares de</span>
                   </div>
                   <span className="text-xs font-medium text-slate-500 dark:text-slate-400">pacientes recuperados</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Content - Images and Cards */}
        <div className="lg:col-span-7 relative flex flex-col lg:block items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0">
          <Reveal direction="left" delay={500} className="relative w-full max-w-[400px] lg:max-w-none lg:w-[500px] h-[400px] lg:h-[600px] flex items-center justify-center mx-auto">
            {/* Background Shape - Adjusted to blue */}
            <div className="absolute inset-0 bg-secondary/5 dark:bg-blue-900/20 rounded-t-[150px] lg:rounded-t-[200px] rounded-b-[40px] lg:rounded-b-[50px] overflow-hidden blur-3xl"></div>
            
            {/* Doctor Image */}
            <div className="relative z-10 w-full h-full rounded-t-[150px] lg:rounded-t-[250px] rounded-b-[50px] lg:rounded-b-[100px] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-none">
              <img
                src="https://docs.qozt.com.br/landing_pages/doutorFeridas/Imagem01.jpg"
                alt="Dra. Isabella - Especialista em Feridas"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating Cards - Desktop (Absolute) / Mobile (Hidden from here, moved below) */}
            
            {/* Desktop Only: Experience (Card 2 - Bottom Left) */}
            <div className="hidden lg:flex absolute bottom-20 left-0 glass p-4 rounded-2xl shadow-xl shadow-blue-100/50 dark:shadow-none animate-float z-20 items-center gap-4">
              <div className="bg-primary/20 p-2 rounded-lg text-primary">
                <span className="material-symbols-rounded text-accent">verified_user</span>
              </div>
              <div>
                <div className="text-lg font-bold leading-tight text-secondary dark:text-white">Referência</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Em Cicatrização</div>
              </div>
            </div>

            {/* Desktop Only: Stats (Card 1 - Top Right) - Adjusted Position */}
            <div className="hidden lg:block absolute top-20 -right-24 glass p-4 rounded-2xl shadow-xl shadow-blue-100/50 dark:shadow-none animate-float z-20 text-center" style={{ animationDelay: '0.5s' }}>
              <div className="text-2xl font-black text-secondary dark:text-blue-400">+5.000</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">Curativos Realizados</div>
              <span className="material-symbols-rounded text-accent text-3xl">clinical_notes</span>
            </div>

            {/* Background Decorative Graphic (Desktop) */}
            <div className="hidden lg:block absolute -right-20 bottom-1/4 w-64 h-64 z-10 pointer-events-none opacity-90">
               {/* Content kept same as original */}
               <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
                <svg className="w-full h-full fill-none stroke-primary/30" style={{ strokeWidth: 0.5 }} viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80"></circle>
                  <circle cx="100" cy="100" r="60"></circle>
                  <circle cx="100" cy="100" r="40"></circle>
                  <path d="M100 20 L100 180 M20 100 L180 100"></path>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-rounded text-primary/60 text-8xl" style={{ fontVariationSettings: "'wght' 100" }}>healing</span>
                </div>
                <div className="absolute top-1/2 right-4 glass px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-rounded text-[12px] text-accent">check_circle</span>
                    <span className="text-secondary dark:text-slate-300">Reabilitação Tecidual</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Mobile: Static Cards Below Image */}
          <div className="lg:hidden w-full max-w-[400px] mt-6 grid grid-cols-2 gap-4">
             {/* Card 1: Experience */}
             <div className="glass p-4 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-lg text-primary min-w-[40px] flex justify-center">
                  <span className="material-symbols-rounded text-accent">verified_user</span>
                </div>
                <div>
                  <div className="text-lg font-bold leading-tight text-secondary dark:text-white">Referência</div>
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Em Cicatrização</div>
                </div>
             </div>
             {/* Card 2: Stats */}
             <div className="glass p-4 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 text-center">
                <div className="text-xl font-black text-secondary dark:text-blue-400">+5.000</div>
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Curativos</div>
             </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;