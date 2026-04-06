import React, { useState } from 'react';
import { Reveal } from './Reveal';

const faqData = [
  {
    question: "Ferida que não fecha é perigoso?",
    answer: "Pode ser. Uma ferida persistente pode indicar causas como diabetes, má circulação ou infecção, e precisa de avaliação."
  },
  {
    question: "Se eu não sinto muita dor, ainda assim devo tratar?",
    answer: "Sim. Em diabéticos, por exemplo, a dor pode ser menor e ainda assim haver risco de complicações."
  },
  {
    question: "Posso tratar só com curativo comum em casa?",
    answer: "Em casos leves, pode ajudar. Mas feridas persistentes e em perfis de risco precisam de cuidado especializado."
  },
  {
    question: "Em quanto tempo melhora?",
    answer: "Depende da causa, do tipo de ferida e do estágio. O objetivo é acelerar e conduzir a cicatrização com segurança."
  },
  {
    question: "Quem mais precisa ter atenção?",
    answer: "Idosos, diabéticos e pessoas com problemas circulatórios devem procurar avaliação ao primeiro sinal."
  },
  {
    question: "Como agendo?",
    answer: "Pelo WhatsApp da unidade. É rápido e direto."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <Reveal>
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold tracking-wide uppercase shadow-sm">
              Tira-Dúvidas
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary dark:text-white mb-4">
              Perguntas Frequentes
            </h2>
          </Reveal>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <Reveal key={index} delay={index * 100} direction="left">
              <div 
                className={`bg-white dark:bg-slate-800 rounded-2xl border transition-all duration-300 overflow-hidden ${
                  activeIndex === index 
                    ? 'border-primary shadow-lg shadow-primary/10' 
                    : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`text-base md:text-lg font-bold transition-colors ${
                    activeIndex === index ? 'text-primary' : 'text-secondary dark:text-slate-200'
                  }`}>
                    {item.question}
                  </span>
                  <span className={`material-symbols-rounded transform transition-transform duration-300 text-2xl ${
                    activeIndex === index ? 'rotate-180 text-primary' : 'text-slate-400'
                  }`}>
                    keyboard_arrow_down
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Button */}
        <Reveal delay={600} direction="up">
          <div className="mt-12 text-center">
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
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="mr-2 text-xl group-hover:animate-bounce">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                    </svg>
                </span>
                Agendar pelo WhatsApp
              </span>
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default FAQ;