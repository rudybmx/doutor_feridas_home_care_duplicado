import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="overflow-hidden py-12 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
      <div className="flex whitespace-nowrap gap-12 animate-marquee">
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">Dermatologia</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">Feridas Complexas</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">Tecnologia</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">Cuidado</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">Saúde</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">Dermatologia</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">Feridas Complexas</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">Tecnologia</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">Cuidado</span>
        <span className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase italic">Saúde</span>
      </div>
    </div>
  );
};

export default Marquee;