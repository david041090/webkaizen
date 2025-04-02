import React from 'react';
import PropTypes from 'prop-types';
import gasNaturalBg from '../assets/image/slider/gas_natural.jpg';

const PageBanner = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative bg-[#001F3F] overflow-hidden h-[25vh] md:h-[45vh] w-full">
      {/* Imagen de fondo con transparencia */}
      <div 
        className="absolute inset-0 z-[1] scale-110"
        style={{
          backgroundImage: `url(${gasNaturalBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.1)',
          animation: 'backgroundFloat 20s infinite alternate ease-in-out',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.3) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.3) 100%)'
        }}
      />

      {/* Overlay con gradiente */}
      <div 
        className="absolute inset-0 z-[2]" 
        style={{
          background: 'linear-gradient(180deg, rgba(0,31,63,0.95) 0%, rgba(0,31,63,0.85) 30%, rgba(0,31,63,0.75) 100%)',
          backdropFilter: 'blur(1px)'
        }}
      />

      {/* Líneas decorativas */}
      <div className="absolute inset-x-0 top-0 z-[2] overflow-hidden">
        <div className="absolute w-[90%] md:w-full left-[5%] md:left-0 right-[5%] md:right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent top-16 md:top-24" />
        <div className="absolute w-[90%] md:w-full left-[5%] md:left-0 right-[5%] md:right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent top-20 md:top-28" />
      </div>
      
      {/* Contenido del banner */}
      <div className="relative h-full flex items-center justify-center z-[3] pt-8 md:pt-16">
        <div className="text-center text-white max-w-4xl px-4">
          <div className="relative inline-block mb-4 md:mb-8">
            <h1 className="heading-1 font-black tracking-wide animate-fadeInDown 
              bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent
              drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              {title}
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 blur-sm" />
          </div>
          
          <div className="relative">
            <p className="text-body-lg md:text-2xl lg:text-3xl font-light animate-fadeInUp text-complemento-500 leading-relaxed tracking-wide">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes backgroundFloat {
          0% {
            transform: scale(1.1) translate(0, 0);
          }
          50% {
            transform: scale(1.15) translate(-1%, -1%);
          }
          100% {
            transform: scale(1.1) translate(1%, 1%);
          }
        }

        @keyframes floatParticle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(100px, 50px) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translate(0, 100px) scale(1);
            opacity: 0.3;
          }
          75% {
            transform: translate(-100px, 50px) scale(1.2);
            opacity: 0.6;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
        }

        @keyframes moveLine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(-45deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(-45deg);
            opacity: 0;
          }
        }

        @keyframes rotateHex {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: rotate(180deg) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 0.2;
          }
        }

        @keyframes backgroundScale {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out 0.3s;
          animation-fill-mode: both;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </div>
  );
};

PageBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default PageBanner; 