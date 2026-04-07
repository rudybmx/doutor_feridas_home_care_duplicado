import React, { useEffect, useRef, useState } from 'react';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  threshold?: number;
  delay?: number; // Delay in ms
  duration?: number; // Duration in ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'; // Animation direction
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  threshold = 0.1, 
  delay = 0, 
  duration = 1000,
  direction = 'up',
  className = "",
  style,
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  // Define initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-10';
      case 'down': return '-translate-y-10';
      case 'left': return 'translate-x-10';
      case 'right': return '-translate-x-10';
      case 'none': return '';
      default: return 'translate-y-10';
    }
  };

  const baseClasses = `transition-all ease-out transform ${className}`;
  const transitionClasses = isVisible 
    ? 'opacity-100 translate-y-0 translate-x-0' 
    : `opacity-0 ${getInitialTransform()}`;

  const combinedStyle = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    ...style
  };

  return (
    <div 
      ref={ref} 
      className={`${baseClasses} ${transitionClasses}`} 
      style={combinedStyle}
      {...props}
    >
      {children}
    </div>
  );
};
