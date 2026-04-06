import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-sm hover:shadow-lg shadow-blue-100/50 dark:shadow-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-10 overflow-hidden">
              <span className="material-symbols-rounded text-primary text-4xl">skin_care</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-secondary dark:text-white">Skin Care<br />Avançado</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500 font-medium group-hover:text-primary transition-colors">Ver detalhes</span>
              <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:rotate-45 transition-transform">
                <span className="material-symbols-rounded">arrow_upward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-sm hover:shadow-lg shadow-blue-100/50 dark:shadow-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-10 overflow-hidden">
              <span className="material-symbols-rounded text-primary text-4xl">healing</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-secondary dark:text-white">Processo de<br />Cicatrização</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500 font-medium group-hover:text-primary transition-colors">Ver detalhes</span>
              <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:rotate-45 transition-transform">
                <span className="material-symbols-rounded">arrow_upward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 - Highlighted - Uses Secondary (Dark Blue) */}
        <div className="bg-secondary dark:bg-blue-900 p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-xl shadow-secondary/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10 overflow-hidden">
              <span className="material-symbols-rounded text-white text-4xl">stethoscope</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Consulta<br />Especializada</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/80 font-medium">Agendar agora</span>
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-lg group-hover:rotate-45 transition-transform">
                <span className="material-symbols-rounded">arrow_upward</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;