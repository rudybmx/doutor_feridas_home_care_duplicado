import React from 'react';
import { Reveal } from './Reveal';

const Specialist: React.FC = () => {
  return (
    <section id="especialista" className="py-20 md:py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative">
        
        <Reveal>
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.04)] border border-slate-100 dark:border-slate-800 relative">
            
            {/* Quote Marks (as seen in screenshot) - more subtle */}
            <div className="absolute top-10 left-10 text-slate-100 dark:text-slate-800 text-7xl font-serif select-none pointer-events-none opacity-50">"</div>
            <div className="absolute bottom-4 right-10 text-slate-100 dark:text-slate-800 text-7xl font-serif select-none pointer-events-none opacity-50">"</div>

            {/* Content Container - slightly constrained for readability (approx 80 chars per line) */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <p className="pw-bio text-base md:text-lg text-slate-600 dark:text-slate-400 leading-[1.8] md:leading-[2] text-justify font-normal tracking-tight">
                <span className="block mb-6 text-indent-12">
                  Enfermeira com doutorado em Psicogerontologia e Ciências do Envelhecimento, <strong className="text-secondary dark:text-white font-bold not-italic">Dra. Janinéri Cordeiro</strong> acumula mais de 8 anos como docente universitária e formação prática em UTI, Dermatologia e Medicina Ortomolecular. 
                </span>
                
                <span className="block mb-6 text-indent-12">
                  Fundadora do Wunden Institut, desenvolveu uma abordagem única que une ciência do envelhecimento, comportamento humano e cuidado integral, aplicada tanto em consultório quanto em programas de treinamento no Brasil e na Europa. 
                </span>

                <span className="block text-indent-12">
                  Autora e coautora de obras de referência como <span className="text-primary dark:text-blue-400 font-semibold italic">"O Poder do Ser Humano"</span> e <span className="text-primary dark:text-blue-400 font-semibold italic">"Metamorfose: novo tempo de envelhecimento"</span>, é também Master Coach e Analista de Perfil Comportamental certificada. Sua trajetória internacional, com atuação no Hospital Helios Herzzentrum em Leipzig, confere à sua prática uma visão clínica sofisticada, raramente encontrada no contexto brasileiro.
                </span>
              </p>
            </div>
          </div>
        </Reveal>
        
        {/* Custom CSS for indentation */}
        <style dangerouslySetInnerHTML={{ __html: `
          .text-indent-12 {
            text-indent: 3rem;
          }
          @media (max-width: 768px) {
            .text-indent-12 {
              text-indent: 1.5rem;
            }
          }
        `}} />
      </div>
    </section>
  );
};

export default Specialist;
