import React from 'react';

interface MandalaBackgroundProps {
  className?: string;
  opacity?: number;
  scale?: number;
  position?: 'center' | 'left' | 'right' | 'top-right' | 'bottom-left';
}

export const MandalaBackground: React.FC<MandalaBackgroundProps> = ({
  className = '',
  opacity = 0.07,
  scale = 1,
  position = 'center'
}) => {
  const positionClasses = {
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'left': 'top-1/2 -left-48 -translate-y-1/2',
    'right': 'top-1/2 -right-48 -translate-y-1/2',
    'top-right': '-top-32 -right-32',
    'bottom-left': '-bottom-32 -left-32'
  };

  return (
    <div 
      className={`absolute pointer-events-none select-none z-0 ${positionClasses[position]} ${className}`}
      style={{ opacity, transform: `scale(${scale})` }}
    >
      <svg 
        width="600" 
        height="600" 
        viewBox="0 0 600 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="animate-[spin_240s_linear_infinite]"
      >
        {/* Concentric rings */}
        <circle cx="300" cy="300" r="280" stroke="#C58580" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="300" cy="300" r="250" stroke="#C58580" strokeWidth="2" />
        <circle cx="300" cy="300" r="210" stroke="#C58580" strokeWidth="1" />
        <circle cx="300" cy="300" r="160" stroke="#C58580" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="300" cy="300" r="110" stroke="#C58580" strokeWidth="2" />
        <circle cx="300" cy="300" r="50" stroke="#C58580" strokeWidth="1.5" />
        <circle cx="300" cy="300" r="15" fill="#C58580" />

        {/* 12 Outer Petals */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <g key={`outer-${i}`} transform={`rotate(${angle} 300 300)`}>
              <path 
                d="M300 50 C320 120 340 180 300 230 C260 180 280 120 300 50 Z" 
                stroke="#C58580" 
                strokeWidth="1.5" 
                fill="#C58580"
                fillOpacity="0.03"
              />
              <circle cx="300" cy="110" r="4" fill="#C58580" />
              <path d="M300 50 L300 160" stroke="#C58580" strokeWidth="1" strokeDasharray="3 3" />
            </g>
          );
        })}

        {/* 12 Inner Radiant Petals offset */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12 + 15;
          return (
            <g key={`inner-${i}`} transform={`rotate(${angle} 300 300)`}>
              <path 
                d="M300 140 C315 180 325 220 300 250 C275 220 285 180 300 140 Z" 
                stroke="#C58580" 
                strokeWidth="1.2" 
                fill="#C58580"
                fillOpacity="0.05"
              />
              <circle cx="300" cy="180" r="3" fill="#C58580" />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
