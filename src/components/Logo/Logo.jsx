import React from 'react';
import logoDark from '../../assets/image/logodark.png';

const Logo = () => {
  return (
    <div className="flex items-center">
      <img 
        src={logoDark} 
        alt="Grupo Kaizen Logo" 
        className="h-8 md:h-12 w-auto"
      />
    </div>
  );
};

export default Logo; 