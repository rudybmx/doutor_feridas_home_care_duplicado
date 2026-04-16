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
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  O Doutor Feridas Home Care é para você
                </h2>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          <Reveal delay={0} className="h-full">
            <div className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1 p-8">
              <div className="flex flex-col flex-grow">
                <div className="mb-4">
                   <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">Ferida que não cicatriza</h3>
                </div>
                <p className="text-blue-100/80 group-hover:text-slate-600 leading-relaxed flex-grow transition-colors">
                  Ferida aberta há mais de 2 semanas sem melhora, mesmo com curativo convencional.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <div className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1 p-8">
              <div className="flex flex-col flex-grow">
                <div className="mb-4">
                   <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">Pé diabético</h3>
                </div>
                <p className="text-blue-100/80 group-hover:text-slate-600 leading-relaxed flex-grow transition-colors">
                  Diabetes e uma ferida nos pés ou pernas que não demonstra sinais de cicatrização.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="h-full">
            <div className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1 p-8">
              <div className="flex flex-col flex-grow">
                <div className="mb-4">
                   <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">Mobilidade reduzida</h3>
                </div>
                <p className="text-blue-100/80 group-hover:text-slate-600 leading-relaxed flex-grow transition-colors">
                  Dificuldade de locomoção que torna deslocamentos ao hospital um desafio.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} className="h-full">
            <div className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1 p-8">
              <div className="flex flex-col flex-grow">
                <div className="mb-4">
                   <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">Cuidador familiar</h3>
                </div>
                <p className="text-blue-100/80 group-hover:text-slate-600 leading-relaxed flex-grow transition-colors">
                  Cuida de idoso ou familiar acamado com ferida em casa e precisa de suporte especializado.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400} className="h-full">
            <div className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1 p-8">
              <div className="flex flex-col justify-center h-full">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">Evitar hospitalizações</h3>
                </div>
                <p className="text-blue-100/80 group-hover:text-slate-600 leading-relaxed flex-grow transition-colors">
                  Quer evitar idas frequentes ao hospital ou clínica para curativos periódicos.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={500} className="h-full">
            <div className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1 p-8">
              <div className="flex flex-col justify-center h-full">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">Sem resultado anterior</h3>
                </div>
                <p className="text-blue-100/80 group-hover:text-slate-600 leading-relaxed flex-grow transition-colors">
                  Já fez tratamento em outros lugares e não obteve resultado satisfatório.
                </p>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Call to Action */}
        <Reveal delay={600}>
          <div className="mt-12 lg:mt-24 text-center">
            <div className="inline-flex flex-col items-center max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl font-semibold text-white mb-8 leading-relaxed">
                Se você se identificou, seu próximo passo é simples: entre em contato e a nossa equipe cuida do resto. <br/><strong className="font-bold">A primeira avaliação é gratuita.</strong>
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