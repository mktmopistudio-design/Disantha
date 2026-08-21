import React from 'react';

interface DisanthaLogoProps {
  variant?: 'full' | 'horizontal' | 'mark' | 'gold' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withTagline?: boolean;
}

export const DisanthaLogo: React.FC<DisanthaLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
  withTagline = false
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const titleSizes = {
    sm: 'text-lg tracking-[0.25em]',
    md: 'text-2xl tracking-[0.3em]',
    lg: 'text-3xl tracking-[0.35em]',
    xl: 'text-4xl tracking-[0.4em]'
  };

  const isGold = variant === 'gold';
  const isDark = variant === 'dark';

  const strokeColor = isGold 
    ? '#C5A880' 
    : isDark 
      ? '#3E322F' 
      : '#C58580';

  const textColor = isGold 
    ? 'text-[#C5A880]' 
    : isDark 
      ? 'text-[#3E322F]' 
      : 'text-[#8E4A49]';

  const subtitleColor = isGold 
    ? 'text-[#A5855A]' 
    : isDark 
      ? 'text-[#6E5652]' 
      : 'text-[#B86B65]';

  // Exquisite Sacred Mandala Lotus SVG based on the uploaded logo
  const MandalaIcon = (
    <svg 
      viewBox="0 0 200 120" 
      className={`${iconSizes[size]} transition-transform duration-500 hover:scale-105`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bottom base radiant arc */}
      <path 
        d="M20 115 H180" 
        stroke={strokeColor} 
        strokeWidth="3.5" 
        strokeLinecap="round" 
      />
      {/* Semi circle sunburst */}
      <path 
        d="M70 115 A30 30 0 0 1 130 115" 
        stroke={strokeColor} 
        strokeWidth="2.5" 
      />
      <circle cx="100" cy="115" r="12" stroke={strokeColor} strokeWidth="2" />
      <path d="M100 115 L100 86 M90 115 L78 92 M110 115 L122 92 M80 115 L66 102 M120 115 L134 102" stroke={strokeColor} strokeWidth="1.5" />

      {/* Outer Lotus / Mandala Petals */}
      {/* Center prominent petal */}
      <path 
        d="M100 10 C108 35 130 55 100 85 C70 55 92 35 100 10 Z" 
        stroke={strokeColor} 
        strokeWidth="2.5" 
        fill={strokeColor}
        fillOpacity="0.08"
      />
      <circle cx="100" cy="35" r="3" fill={strokeColor} />
      <circle cx="100" cy="55" r="2.5" fill={strokeColor} />

      {/* Left major petal */}
      <path 
        d="M65 30 C75 52 95 68 80 92 C50 78 48 50 65 30 Z" 
        stroke={strokeColor} 
        strokeWidth="2.2" 
        fill={strokeColor}
        fillOpacity="0.05"
      />
      <circle cx="68" cy="48" r="2.5" fill={strokeColor} />

      {/* Right major petal */}
      <path 
        d="M135 30 C152 50 150 78 120 92 C105 68 125 52 135 30 Z" 
        stroke={strokeColor} 
        strokeWidth="2.2" 
        fill={strokeColor}
        fillOpacity="0.05"
      />
      <circle cx="132" cy="48" r="2.5" fill={strokeColor} />

      {/* Left outer petal */}
      <path 
        d="M32 60 C48 72 65 85 55 105 C30 96 22 75 32 60 Z" 
        stroke={strokeColor} 
        strokeWidth="2" 
      />
      
      {/* Right outer petal */}
      <path 
        d="M168 60 C178 75 170 96 145 105 C135 85 152 72 168 60 Z" 
        stroke={strokeColor} 
        strokeWidth="2" 
      />

      {/* Decorative filigree flourishes */}
      <path d="M100 20 Q95 40 100 65 Q105 40 100 20" stroke={strokeColor} strokeWidth="1.2" strokeDasharray="2 2" />
      <path d="M68 40 Q75 60 78 75" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 2" />
      <path d="M132 40 Q125 60 122 75" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{MandalaIcon}</div>;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="flex-shrink-0">{MandalaIcon}</div>
        <div className="flex flex-col text-left">
          <span className={`font-serif font-medium uppercase leading-none ${titleSizes[size]} ${textColor}`}>
            DISANTHA
          </span>
          <span className={`font-serif tracking-[0.25em] text-[10px] sm:text-xs uppercase mt-1 ${subtitleColor}`}>
            Holistic Wellness
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      {MandalaIcon}
      <div className="mt-1.5 flex flex-col items-center">
        <h1 className={`font-serif font-medium uppercase leading-tight ${titleSizes[size]} ${textColor}`}>
          DISANTHA
        </h1>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C58580]/50 to-transparent my-0.5" />
        <span className={`font-serif tracking-[0.3em] text-[10px] sm:text-xs uppercase font-normal ${subtitleColor}`}>
          Holistic Wellness
        </span>
        {withTagline && (
          <p className="font-serif italic text-xs tracking-wider text-[#8E4A49]/80 mt-1">
            Heal. Empower. Awaken.
          </p>
        )}
      </div>
    </div>
  );
};
