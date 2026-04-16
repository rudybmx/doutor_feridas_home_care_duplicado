import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="overflow-hidden py-12 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
      <div className="flex whitespace-nowrap gap-12 animate-marquee">
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">+20 ANOS DE EXPERIÊNCIA</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">+8M CASOS TRATADOS NO BRASIL</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">100% ATENDIMENTO DOMICILIAR</span>
        
        {/* Duplicados para o efeito contínuo */}
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">+20 ANOS DE EXPERIÊNCIA</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">+8M CASOS TRATADOS NO BRASIL</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">100% ATENDIMENTO DOMICILIAR</span>
        
        {/* Triplicados para garantir preenchimento em telas maiores */}
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">+20 ANOS DE EXPERIÊNCIA</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">+8M CASOS TRATADOS NO BRASIL</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">100% ATENDIMENTO DOMICILIAR</span>
      </div>
    </div>
  );
};

export default Marquee;