import React, { useEffect, useRef, useState } from 'react';

const treatmentsData = [
  {
    title: "Feridas Crônicas",
    description: "Lesões que não cicatrizam.",
    icon: "healing",
    image: "https://docs.qozt.com.br/landing_pages/doutorFeridas/Imagem03_feridas_cronicas.webp"
  },
  {
    title: "Pé Diabético",
    description: "Curativos avançados para o pé diabético.",
    icon: "glucose",
    image: "https://docs.qozt.com.br/landing_pages/doutorFeridas/Imagem05_feridas_diabeticos.jpeg"
  },
  {
    title: "Feridas por Má Circulação",
    description: "Úlceras venosas e arteriais tratadas com as melhores tecnologias.",
    icon: "bloodtype",
    image: "https://docs.qozt.com.br/landing_pages/doutorFeridas/Imagem06_feridas_macirculacao.webp"
  },
  {
    title: "Feridas Pós-Cirúrgicas",
    description: "Acompanhamento seguro para uma recuperação cirúrgica em casa.",
    icon: "medical_services",
    image: "https://docs.qozt.com.br/landing_pages/doutorFeridas/Imagem07_feridas_p%C3%B3s_cirurgia.jpg"
  },
  {
    title: "Lesões por Pressão",
    description: "Em pessoas acamadas ou com mobilidade reduzida.",
    icon: "bed",
    image: "https://docs.qozt.com.br/landing_pages/doutorFeridas/Imagem08_feridas_pressao.jpg"
  },
  {
    title: "Feridas Infectadas",
    description: "Com sinais de alerta.",
    icon: "coronavirus",
    image: "https://docs.qozt.com.br/landing_pages/doutorFeridas/Imagem04_feridas_infectadas.jpeg"
  }
];

const Treatments: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Carousel Logic Refs
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Infinite Scroll & Drag Logic
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scroll = () => {
      if (!isDown && !isPaused && container) {
        container.scrollLeft += 1; // Speed of auto-scroll

        // Infinite Loop Logic
        // We render the list 3 times. When we reach 2/3rds, we jump back to 1/3rd (start of the middle set)
        // This assumes uniform width, but works well enough generally.
        const oneSetWidth = container.scrollWidth / 3;
        
        if (container.scrollLeft >= oneSetWidth * 2) {
            container.scrollLeft = oneSetWidth;
        } else if (container.scrollLeft <= 0) {
            container.scrollLeft = oneSetWidth;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    // Initialize scroll position to the middle set for seamless bidirectional scroll
    if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth / 3;
    }

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isDown, isPaused]);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setIsPaused(true);
    if (scrollContainerRef.current) {
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setIsPaused(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fastness
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch Handlers (for pausing auto-scroll on mobile interaction)
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  // Tripling the data for infinite scroll effect
  const displayData = [...treatmentsData, ...treatmentsData, ...treatmentsData];

  return (
    <section id="tratamentos" ref={sectionRef} className="relative py-12 md:py-24 px-0 max-w-full overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      
      {/* Header Content */}
      <div className={`max-w-7xl mx-auto mb-12 md:mb-16 px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="md:w-2/3">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 shadow-sm border border-primary/20">
              ESPECIALIDADES CLÍNICAS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary dark:text-white leading-tight uppercase">
              Feridas que tratamos <br className="hidden md:block"/> em casa
            </h2>
          </div>
          <div className="md:w-1/3">
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-medium">
              Oferecemos tecnologia avançada e cuidados humanizados no conforto do seu lar, garantindo protocolos hospitalares com a segurança de uma equipe especializada.
            </p>
          </div>
        </div>
      </div>

      {/* Draggable Carousel */}
      <div className={`relative w-full transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-slate-50 dark:from-background-dark to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-slate-50 dark:from-background-dark to-transparent z-20 pointer-events-none"></div>
        
        {/* Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-8 overflow-x-auto py-12 md:py-20 pl-4 hide-scrollbar cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {displayData.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[280px] md:w-[350px] transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-lg hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/20 overflow-hidden h-full relative group border border-slate-100 dark:border-slate-700 flex flex-col">
                
                {/* Image Area - FIXED HEIGHT for consistency */}
                <div className="h-64 md:h-72 w-full bg-blue-50 dark:bg-slate-900 relative overflow-hidden flex-shrink-0">
                  <img 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" 
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-80 z-10"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/30">
                    <span className="material-symbols-rounded text-3xl text-white">{item.icon}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 flex flex-col justify-between bg-white dark:bg-slate-800">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-secondary dark:text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <a 
                    href="https://wa.me/5511974736662?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 cursor-pointer"
                  >
                    <span className="text-xs font-bold text-primary tracking-wide uppercase">Saiba mais</span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-secondary dark:text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-rounded text-lg">arrow_forward</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className={`max-w-4xl mx-auto mt-4 md:mt-8 text-center px-4 relative z-10 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-lg md:text-xl font-semibold text-secondary dark:text-slate-200 mb-8">
          Não sabe identificar o tipo de ferida? <br/>
          <span className="text-primary dark:text-primary font-bold text-2xl mt-2 block">A avaliação resolve isso.</span>
        </h3>
        <a 
          className="
            relative overflow-hidden
            bg-gradient-to-r from-secondary to-primary
            text-white
            px-10 py-5 rounded-full
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
            mx-auto
          "
          href="https://wa.me/5511974736662?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative z-10 flex items-center gap-3">
            AGENDAR AVALIAÇÃO
            <span className="material-symbols-rounded text-xl group-hover:translate-x-1 transition-transform">calendar_month</span>
          </span>
          {/* Shine effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </a>
      </div>
    </section>
  );
};

export default Treatments;