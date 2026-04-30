import React from 'react';
import { Reveal } from './Reveal';

const Specialist: React.FC = () => {
  return (
    <section id="especialista" className="py-12 md:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <Reveal>
          <div className="bg-[#062C52] rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#00B4D8] mb-2">Esp. Patrícia Wunden</h2>
                <p className="text-white/80 text-sm md:text-base font-medium">
                  Enfermeira, Doutora em Psicogerontologia, CEO Wunden Institut
                </p>
              </div>

              {/* Grid for Formação, Experiência, Publicações */}
              <div className="space-y-10">
                {/* Formação */}
                <div>
                  <h3 className="text-[#3CBFB4] font-bold text-xs uppercase tracking-[0.2em] mb-6">Formação</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-white/90 border-b border-white/10 pb-3 last:border-0">
                      <span className="text-[#00B4D8] mt-1.5">•</span>
                      <span className="text-sm md:text-base">Enfermeira e graduanda de Medicina (4º sem.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90 border-b border-white/10 pb-3 last:border-0">
                      <span className="text-[#00B4D8] mt-1.5">•</span>
                      <span className="text-sm md:text-base">Doutora e Mestra em Psicogerontologia e Ciências do Envelhecimento</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90 border-b border-white/10 pb-3 last:border-0">
                      <span className="text-[#00B4D8] mt-1.5">•</span>
                      <span className="text-sm md:text-base">Pós em UTI, Estética, Dermatologia, Ortomolecular, Ozonioterapia</span>
                    </li>
                  </ul>
                </div>

                {/* Experiência */}
                <div>
                  <h3 className="text-[#3CBFB4] font-bold text-xs uppercase tracking-[0.2em] mb-6">Experiência</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-white/90 border-b border-white/10 pb-3 last:border-0">
                      <span className="text-[#00B4D8] mt-1.5">•</span>
                      <span className="text-sm md:text-base">CEO do Wunden Institut, Consultório de Enfermagem</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90 border-b border-white/10 pb-3 last:border-0">
                      <span className="text-[#00B4D8] mt-1.5">•</span>
                      <span className="text-sm md:text-base">Docente universitária por 8 anos, Trainer no Brasil e na Europa</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90 border-b border-white/10 pb-3 last:border-0">
                      <span className="text-[#00B4D8] mt-1.5">•</span>
                      <span className="text-sm md:text-base">Enfermeira no Hospital Helios Herzzentrum, Leipzig, Alemanha</span>
                    </li>
                  </ul>
                </div>

                {/* Publicações */}
                <div>
                  <h3 className="text-[#3CBFB4] font-bold text-xs uppercase tracking-[0.2em] mb-6">Publicações e Certificações</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-white/90 border-b border-white/10 pb-3 last:border-0">
                      <span className="text-[#00B4D8] mt-1.5">•</span>
                      <span className="text-sm md:text-base">Master Coach, Analista de Perfil Comportamental</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90 border-b border-white/10 pb-3 last:border-0">
                      <span className="text-[#00B4D8] mt-1.5">•</span>
                      <span className="text-sm md:text-base">Coautora: "O Poder do Ser Humano" e "Metamorfose: novo tempo de envelhecimento"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Specialist;
