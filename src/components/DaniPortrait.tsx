import React, { useState } from 'react';
import originalPortrait from '../assets/images/dani_original.jpg';

interface DaniPortraitProps {
  className?: string;
  alt?: string;
}

export const DaniPortrait: React.FC<DaniPortraitProps> = ({
  className = 'w-full h-full object-cover object-top',
  alt = 'Dani - Intuitive Healer & Founder of Disantha Holistic Wellness'
}) => {
  const [imgSrc, setImgSrc] = useState<string>(originalPortrait);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc('/dani_portrait.jpg');
      }}
      referrerPolicy="no-referrer"
      className={className}
    />
  );
};
