'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedWrapper({ children, className }: AnimatedWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className={cn(className, 'transition-opacity duration-500 animate-fade', isVisible ? 'opacity-100' : 'opacity-0')}>
      {children}
    </div>
  );
}
