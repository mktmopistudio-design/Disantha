import React, { useState } from 'react';
import calliandraImg from '../assets/images/calliandra_dysantha_1787263006797.jpg';

interface CalliandraFlowerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'responsive';
  variant?: 'circle' | 'rounded' | 'natural';
  alt?: string;
  showCaption?: boolean;
}

export const CalliandraFlower: React.FC<CalliandraFlowerProps> = ({
  className = '',
  size = 'md',
  variant = 'natural',
  alt = 'Calliandra dysantha - Flor do Jalapão, Cerrado Brasileiro',
  showCaption = false
}) => {
  const [imgError, setImgError] = useState(false);

  // Responsive sizing tailored to the natural 4:3 macro ratio of the flower
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-40 h-32',
    lg: 'w-64 h-48',
    hero: 'w-full max-w-md aspect-[4/3]',
    responsive: 'w-full aspect-[4/3]'
  }[size];

  const shapeClass = {
    circle: 'rounded-full aspect-square',
    rounded: 'rounded-3xl',
    natural: 'rounded-2xl'
  }[variant];

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Background Soft Glow & Halo */}
      <div className="absolute inset-0 bg-radial from-[#F5D5D0]/80 via-[#F7EDE8]/30 to-transparent rounded-full blur-2xl scale-110 pointer-events-none" />

      {/* Decorative Outer Border & Card */}
      <div
        className={`relative ${sizeClasses} p-1.5 sm:p-2 bg-[#FAF5F0] border border-[#E8B4B0]/60 shadow-lg ${shapeClass} overflow-hidden group transition-all duration-500 hover:shadow-xl`}
      >
        {!imgError ? (
          <img
            src={calliandraImg}
            alt={alt}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover object-center ${shapeClass} group-hover:scale-105 transition-transform duration-700 ease-out`}
          />
        ) : (
          /* Fallback Elegant SVG Botanical Graphic if Image Fails */
          <div className={`w-full h-full flex flex-col items-center justify-center bg-[#F7EDE8] p-4 text-center ${shapeClass}`}>
            <svg
              viewBox="0 0 120 120"
              className="w-16 h-16 text-[#C58580] animate-pulse"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="60" cy="60" r="14" fill="#C58580" fillOpacity="0.2" />
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x2 = 60 + Math.cos(angle) * 36;
                const y2 = 60 + Math.sin(angle) * 36;
                return (
                  <g key={i}>
                    <line x1="60" y1="60" x2={x2} y2={y2} stroke="#B86B65" strokeWidth="1.5" />
                    <circle cx={x2} cy={y2} r="2.5" fill="#8E4A49" />
                  </g>
                );
              })}
            </svg>
            <span className="text-[10px] font-serif italic text-[#8E4A49] mt-2">
              Calliandra dysantha
            </span>
          </div>
        )}

        {/* Subtle Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#B86B65]/10 via-transparent to-transparent pointer-events-none rounded-inherit" />
      </div>

      {showCaption && (
        <div className="mt-3 text-center space-y-0.5">
          <p className="font-serif italic text-sm text-[#8E4A49]">Calliandra dysantha</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#7A6258]">
            Flor do Jalapão • Cerrado Brasileiro
          </p>
        </div>
      )}
    </div>
  );
};
