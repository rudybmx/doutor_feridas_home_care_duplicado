import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="diferenciais" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12 lg:mb-16">
        <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider mb-6 uppercase">
          POR QUE SOMOS DIFERENTES
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-secondary dark:text-white">
          Por que a Doutor Feridas Mogi das Cruzes é referência em cicatrização
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-sm hover:shadow-lg shadow-blue-100/50 dark:shadow-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
              <span className="material-symbols-rounded text-primary text-4xl">star</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white">Especialista com formação internacional</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
              Doutora em Psicogerontologia com atuação no Hospital Helios em Leipzig, Alemanha.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-sm hover:shadow-lg shadow-blue-100/50 dark:shadow-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
              <span className="material-symbols-rounded text-primary text-4xl">flare</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white">Laserterapia em domicílio e na clínica</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
              Acesso à laserterapia para feridas crônicas onde você preferir ser atendido.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-sm hover:shadow-lg shadow-blue-100/50 dark:shadow-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
              <span className="material-symbols-rounded text-primary text-4xl">medical_services</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white">Especialista estomaterapeuta e gerontologista</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
              Cuidado especializado em feridas com visão integral do paciente, especialmente idosos.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-sm hover:shadow-lg shadow-blue-100/50 dark:shadow-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
              <span className="material-symbols-rounded text-primary text-4xl">luggage</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white">Mala completa inclusa</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
              Todos os curativos avançados e insumos especializados chegam com o profissional.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-sm hover:shadow-lg shadow-blue-100/50 dark:shadow-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
              <span className="material-symbols-rounded text-primary text-4xl">monitor_heart</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white">Acompanhamento até a alta</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
              Não é visita avulsa. É acompanhamento do diagnóstico até a cicatrização.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-sm hover:shadow-lg shadow-blue-100/50 dark:shadow-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
              <span className="material-symbols-rounded text-primary text-4xl">favorite</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white">Clínica física e atendimento domiciliar</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
              Você escolhe onde ser atendido, nossa clínica em Mogi das Cruzes ou no conforto da sua casa.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;