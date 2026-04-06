import React from 'react';
import { Reveal } from './Reveal';

const Patients: React.FC = () => {
  return (
    <section id="pacientes" className="py-12 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-secondary transition-colors duration-300">
      {/* Background Blobs - Adjusted for Dark Background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12 lg:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <Reveal>
                <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 text-white border border-white/20 text-sm font-bold tracking-wide uppercase shadow-sm">
                  Pacientes
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  PARA QUEM É O <br className="hidden sm:block"/> TRATAMENTO?
                </h2>
              </Reveal>
            </div>
            <div className="max-w-lg md:text-right md:pb-2">
              <Reveal delay={200}>
                <p className="text-lg text-blue-100 leading-relaxed font-medium">
                  Nossa abordagem especializada é projetada para resolver casos complexos onde tratamentos convencionais falharam.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Idosos */}
          <Reveal delay={0} className="h-full">
            <div className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 p-8">
              <div className="flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-white/10 text-white border border-white/10">Sênior</span>
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-blue-500/20 text-blue-200 border border-blue-500/20">Cuidado Especial</span>
                </div>
                <div className="mb-4">
                   <span className="material-symbols-rounded text-4xl text-primary mb-4 block">elderly</span>
                   <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">Pacientes Idosos</h3>
                </div>
                <p className="text-blue-100/80 leading-relaxed flex-grow">
                  Pele fragilizada que requer atenção redobrada e técnicas não-invasivas para acelerar a cicatrização sem causar dor adicional.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Diabéticos */}
          <Reveal delay={100} className="h-full">
            <div className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 p-8">
              <div className="flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-white/10 text-white border border-white/10">Diabetes</span>
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-emerald-500/20 text-emerald-200 border border-emerald-500/20">Pé Diabético</span>
                </div>
                <div className="mb-4">
                   <span className="material-symbols-rounded text-4xl text-emerald-400 mb-4 block">glucose</span>
                   <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Pacientes Diabéticos</h3>
                </div>
                <p className="text-blue-100/80 leading-relaxed flex-grow">
                  Tratamento focado na prevenção de amputações e controle rigoroso de infecções em úlceras de difícil cicatrização.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Problemas Circulatórios */}
          <Reveal delay={200} className="h-full">
            <div className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 p-8">
              <div className="flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-white/10 text-white border border-white/10">Circulação</span>
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-red-500/20 text-red-200 border border-red-500/20">Vascular</span>
                </div>
                <div className="mb-4">
                   <span className="material-symbols-rounded text-4xl text-red-400 mb-4 block">bloodtype</span>
                   <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">Problemas Circulatórios</h3>
                </div>
                <p className="text-blue-100/80 leading-relaxed flex-grow">
                  Soluções para úlceras venosas e arteriais, focando na melhoria do fluxo sanguíneo local e regeneração tecidual.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Feridas Crônicas */}
          <Reveal delay={300} className="h-full">
            <div className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 p-8">
              <div className="flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-white/10 text-white border border-white/10">Crônico</span>
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-purple-500/20 text-purple-200 border border-purple-500/20">Longa Duração</span>
                </div>
                <div className="mb-4">
                   <span className="material-symbols-rounded text-4xl text-purple-400 mb-4 block">history</span>
                   <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">Feridas Crônicas</h3>
                </div>
                <p className="text-blue-100/80 leading-relaxed flex-grow">
                  Para lesões que persistem há meses ou anos, utilizamos terapias regenerativas avançadas para reativar a cicatrização.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 5: Falha em Tratamentos Anteriores (Double Width) */}
          <Reveal delay={400} className="md:col-span-2 lg:col-span-2 h-full">
            <div className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 p-8">
              <div className="flex flex-col justify-center h-full">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-white/10 text-white border border-white/10">Recuperação</span>
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-orange-500/20 text-orange-200 border border-orange-500/20">Segunda Opinião</span>
                </div>
                <div className="mb-4">
                    <span className="material-symbols-rounded text-4xl text-orange-400 mb-4 block">medical_services</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">Falha em Tratamentos Anteriores</h3>
                </div>
                <p className="text-blue-100/80 leading-relaxed max-w-2xl">
                  Especializados em casos onde pomadas comuns e curativos simples não funcionaram. Oferecemos uma nova perspectiva clínica e tecnológica para o seu caso, focando no que realmente impede o fechamento da lesão.
                </p>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Call to Action */}
        <Reveal delay={600}>
          <div className="mt-12 lg:mt-24 text-center">
            <div className="inline-flex flex-col items-center max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl font-semibold text-white mb-8">
                Se você está aqui, provavelmente já passou do ponto de esperar.
              </p>
              <a 
                className="
                  relative overflow-hidden
                  bg-gradient-to-r from-[#25D366] to-[#128C7E]
                  text-white
                  px-10 py-4 rounded-full
                  font-bold text-lg
                  whitespace-nowrap
                  shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)]
                  hover:shadow-[0_20px_35px_-5px_rgba(37,211,102,0.5)]
                  hover:-translate-y-1
                  transition-all duration-300
                  group
                  w-full sm:w-auto
                  flex items-center justify-center gap-3
                  border border-white/20
                " 
                href="https://wa.me/5511974736662?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="mr-3">Falar no WhatsApp</span>
                  <svg className="w-6 h-6 fill-current group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                </span>
                {/* Shine effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Patients;