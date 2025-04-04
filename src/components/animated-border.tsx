'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function AnimatedBorder({
  children,
  className,
  containerClassName,
}: AnimatedBorderProps) {
  return (
    <div className={cn("relative", containerClassName)}>
      {/* O conteúdo principal */}
      <div className={cn(
        "relative z-10 bg-card border-transparent rounded-lg overflow-hidden transition-all duration-300",
        className
      )}>
        {children}
      </div>
      
      {/* A borda animada - primeira camada mais larga e suave */}
      <div 
        className="absolute -inset-0.5 rounded-lg blur-sm z-0 pointer-events-none animate-border-flow"
        style={{
          background: 'linear-gradient(90deg, rgba(37,99,235,0) 0%, rgba(56,189,248,0.5) 50%, rgba(37,99,235,0) 100%)',
          backgroundSize: '200% 100%',
        }}
      />
      
      {/* A borda animada - segunda camada mais fina e intensa */}
      <div 
        className="absolute -inset-[1px] rounded-lg z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(29,78,216,0) 0%, rgba(6,182,212,0.5) 50%, rgba(29,78,216,0) 100%)',
          backgroundSize: '200% 100%',
          animation: 'border-flow 3s linear infinite reverse'
        }}
      />
    </div>
  );
} 