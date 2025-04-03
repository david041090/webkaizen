import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import MenuInferior from '../MenuInferior/MenuInferior';
import { motion, AnimatePresence } from 'motion/react';

// Importar las imágenes
import gasImg from '../../assets/image/slider/gas.png';
import cocinaImg from '../../assets/image/slider/cocina.jpg';
import amacasaImg from '../../assets/image/slider/amacasa.jpg';
import gasNaturalImg from '../../assets/image/slider/gas_natural.jpg';
import kayzen from '../../assets/image/slider/img/01.png';
import mantenimiento from '../../assets/image/slider/img/02.png';
import certificado from '../../assets/image/slider/img/03.png';
import bono from '../../assets/image/slider/img/05.png';
import trabajo from '../../assets/image/slider/img/04.png';

const SLIDE_INTERVAL = 5000; // 5 segundos entre slides
const BACKGROUND_INTERVAL = 8000; // 8 segundos entre cambios de fondo

const backgroundImages = [
  gasImg,
  cocinaImg,
  amacasaImg
];

const backgroundVariants = {
  enter: {
    opacity: 0,
    scale: 1.1
  },
  center: {
    opacity: 0.08,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9
  }
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0
  })
};

const titleVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const highlightVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};


const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const slides = [
  {
    title: 'Instalación de',
    highlight: 'Gas Natural',
    subtitle: 'Soluciones profesionales para hogares y empresas. Transformamos espacios con instalaciones seguras y certificadas, garantizando confort y eficiencia.',
    stats: [
      { value: '15+', label: 'Años de Experiencia' },
      { value: '1800+', label: 'Instalaciones Exitosas' }
    ],
    image: kayzen,
    cta: 'Solicitar Instalación',
    ctaLink: '/instalacion'
  },
  {
    title: 'Servicio de',
    highlight: 'Mantenimiento',
    subtitle: 'Garantiza la seguridad y eficiencia de tus instalaciones con nuestro servicio de mantenimiento regular.',
    stats: [
      { value: '24/7', label: 'Atención Disponible' },
      { value: '100%', label: 'Garantía de Servicio' }
    ],
    image: mantenimiento,
    cta: 'Agendar Revisión',
    ctaLink: '/contacto'
  },
  {
    title: 'Respaldo',
    highlight: 'Certificado',
    subtitle: 'Más de 1800 instalaciones exitosas respaldan nuestra experiencia y profesionalismo en el sector.',
    stats: [
      { value: '1800+', label: 'Instalaciones Exitosas' },
      { value: 'IG-3', label: 'Certificación' }
    ],
    image: certificado,
    cta: 'Ver Certificaciones',
    ctaLink: '/certificaciones'
  },
  {
    title: 'Únete a',
    highlight: 'Nuestro Equipo',
    subtitle: 'Genera ingresos con KAIZEN y sé parte de una empresa líder en el sector de gas natural.',
    stats: [
      { value: '100%', label: 'Capacitación' },
      { value: 'TOP', label: 'Comisiones' }
    ],
    image: trabajo,
    cta: 'Postular Ahora',
    ctaLink: '/trabaja'
  },
  {
    title: 'Programa',
    highlight: 'BonoGas',
    subtitle: 'Facilidades de financiamiento para tu instalación de gas natural con el respaldo del estado.',
    stats: [
      { value: '0%', label: 'Interés' },
      { value: 'FISE', label: 'Programa Oficial' }
    ],
    image: bono,
    cta: 'Verificar Beneficio',
    ctaLink: 'https://www.gob.pe/44184-programa-bonogas'
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Efecto para cambiar las diapositivas
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, SLIDE_INTERVAL);
      return () => clearInterval(timer);
    }
  }, [isHovered, nextSlide]);

  // Efecto para cambiar las imágenes de fondo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, BACKGROUND_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-[#001F3F] overflow-x-hidden h-[100vh] md:min-h-screen md:h-screen flex flex-col -mt-8">
      {/* Partículas y líneas de fondo */}
      <div className="absolute inset-0 z-[0] overflow-hidden">
        {/* Partículas flotantes - Reducidas en móvil */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${10 + Math.random() * 20}s infinite linear ${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Líneas de conexión - Reducidas en móvil */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transform -rotate-45"
            style={{
              width: '200px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `moveLine ${15 + Math.random() * 10}s infinite linear ${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Hexágonos de fondo - Ocultos en móvil */}
        <div className="hidden md:block">
          {[...Array(10)].map((_, i) => (
            <div
              key={`hex-${i}`}
              className="absolute w-24 h-24 border border-cyan-400/5"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`,
                animation: `rotateHex ${20 + Math.random() * 10}s infinite linear ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Círculos pulsantes - Ocultos en móvil */}
        <div className="hidden md:block">
          {[...Array(8)].map((_, i) => (
            <div
              key={`pulse-${i}`}
              className="absolute rounded-full border border-blue-400/10"
              style={{
                width: '100px',
                height: '100px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulsate ${4 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Imágenes de fondo con transición */}
      <div className="absolute inset-0 z-[1]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBackground}
            variants={backgroundVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.02]"
            style={{
              backgroundImage: `url(${backgroundImages[currentBackground]})`
            }}
          />
        </AnimatePresence>
      </div>

      {/* Contenedor principal - Ocupa el 60% superior en móvil */}
      <div 
        className="flex-1 relative w-full flex items-center px-4 md:px-8 pt-8 z-[2] h-[60vh] md:min-h-screen md:h-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Presentación de servicios"
      >
        <div className="container mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div 
              key={currentSlide}
              className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
            >
              {/* Contenido Izquierdo - Simplificado en móvil */}
              <motion.div 
                className="w-full md:w-1/2 text-center md:text-left relative z-10 mb-4 md:mb-0"
                variants={titleVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={titleVariants}
                  className="text-base md:text-lg lg:text-3xl xl:text-4xl text-complemento-300 font-bold mb-1 md:mb-4 uppercase tracking-wider"
                >
                  {slides[currentSlide].title}
                </motion.h2>

                <motion.h1 
                  variants={highlightVariants}
                  className="text-xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 md:mb-6 lg:mb-8 leading-tight md:leading-none"
                >
                  {slides[currentSlide].highlight}
                </motion.h1>

                {/* Subtítulo - Oculto en móvil */}
                <motion.p 
                  variants={subtitleVariants}
                  className="hidden md:block text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed border-l-4 border-[#00ff9d] pl-3 sm:pl-4 md:pl-5 lg:pl-6"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Botones CTA - Simplificados en móvil */}
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-center md:justify-start">
                  <motion.div
                    variants={buttonVariants}
                    custom={0}
                  >
                    <Link 
                      to={slides[currentSlide].ctaLink}
                      className="inline-flex items-center bg-complemento-500 hover:bg-complemento-600 text-black 
                        px-4 sm:px-6 md:px-8 lg:px-10 
                        py-2 md:py-4 lg:py-5 
                        rounded-lg transition-all duration-300 
                        text-sm md:text-lg lg:text-xl 
                        font-bold group transform hover:scale-105 
                        hover:shadow-[0_0_20px_rgba(0,255,157,0.3)]"
                    >
                      {slides[currentSlide].cta}
                      <i className="fas fa-arrow-right ml-2 md:ml-3 lg:ml-4 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Imagen - Reducida en móvil */}
              <motion.div 
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="w-full md:w-1/2 relative"
              >
                {/* Efecto de brillo centrado detrás de la imagen */}
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                  <div className="relative w-[80%] h-[80%]">
                    {/* Brillo principal */}
                    <div className="absolute inset-0 bg-gradient-to-r from-complemento-400/30 via-primary-400/30 to-secondary-400/30 blur-3xl animate-pulse" />
                    
                    {/* Brillo secundario */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent blur-2xl animate-pulse delay-1000" />
                    
                    {/* Brillo de borde */}
                    <div className="absolute inset-0 border-2 border-white/10 rounded-full blur-xl animate-pulse delay-500" />
                  </div>
                </div>

                {/* Elementos decorativos detrás de la imagen */}
                <div className="absolute inset-0 z-0">
                  {/* Círculos brillantes */}
                  <div className="absolute w-32 h-32 bg-complemento-400/20 rounded-full blur-2xl -top-8 -left-8 animate-pulse" />
                  <div className="absolute w-40 h-40 bg-primary-400/20 rounded-full blur-2xl -bottom-8 -right-8 animate-pulse delay-1000" />
                  <div className="absolute w-24 h-24 bg-secondary-400/20 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500" />
                  
                  {/* Partículas flotantes */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`particle-${i}`}
                      className="absolute w-2 h-2 bg-white/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `floatParticle ${3 + Math.random() * 2}s infinite ease-in-out ${Math.random() * 2}s`
                      }}
                    />
                  ))}
                  
                  {/* Líneas de conexión */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={`line-${i}`}
                      className="absolute h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      style={{
                        width: '100px',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        transform: `rotate(${Math.random() * 360}deg)`,
                        animation: `moveLine ${4 + Math.random() * 2}s infinite linear ${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>

                {/* Imagen principal */}
                <div className="relative z-10 overflow-hidden">
                  <motion.img 
                    src={slides[currentSlide].image} 
                    alt={slides[currentSlide].highlight}
                    className="w-full h-[25vh] md:h-[60vh] lg:h-[70vh] object-contain"
                    loading="lazy"
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles de navegación - Ocultos en móvil */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:block">
          <motion.button
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="bg-[#001F3F]/80 backdrop-blur-sm hover:bg-[#001F3F] text-white p-6 
              transition-all duration-300 focus:outline-none group
              border-y border-r border-white/10 rounded-r-full"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
          >
            <i className="fas fa-chevron-left text-2xl group-hover:text-[#00ff9d] transition-colors"></i>
          </motion.button>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
          <motion.button
            onClick={nextSlide}
            aria-label="Siguiente slide"
            className="bg-[#001F3F]/80 backdrop-blur-sm hover:bg-[#001F3F] text-white p-6
              transition-all duration-300 focus:outline-none group
              border-y border-l border-white/10 rounded-l-full"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
          >
            <i className="fas fa-chevron-right text-2xl group-hover:text-[#00ff9d] transition-colors"></i>
          </motion.button>
        </div>

        {/* Indicadores - Reposicionados en móvil */}
        <div 
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3"
          role="tablist"
          aria-label="Slides disponibles"
        >
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              role="tab"
              aria-selected={index === currentSlide}
              aria-label={`Ir al slide ${index + 1}`}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#00ff9d] scale-125 shadow-[0_0_10px_rgba(0,255,157,0.5)]' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Menú inferior - Ocupa el 40% inferior en móvil, NO fijo */}
      <div className="relative w-full z-20 h-[40vh] md:absolute md:bottom-0 md:left-0 md:right-0 md:h-auto md:z-30">
        <MenuInferior />
      </div>

      {/* Elementos decorativos - Solo visible en desktop */}
      <div className="absolute -top-48 left-0 right-0 pointer-events-none hidden md:block">
        {/* Ondas y elementos decorativos existentes */}
      </div>

      <style jsx>{`
        @keyframes wave-slow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25px); }
        }

        @keyframes wave-medium {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(25px); }
        }

        @keyframes wave-fast {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-15px); }
        }

        @keyframes sparkle {
          0%, 100% { transform: scale(1) translateY(0); opacity: 0.3; }
          50% { transform: scale(2) translateY(-20px); opacity: 0.7; }
        }

        @keyframes lineFloat {
          0%, 100% { transform: translateY(0) rotate(15deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(15deg); opacity: 0.4; }
        }

        @keyframes bubble {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 0.5; }
          100% { transform: translateY(-60px) scale(0.8); opacity: 0; }
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

        @keyframes pulsate {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
        }

        .animate-wave-slow {
          animation: wave-slow 7s infinite ease-in-out;
        }

        .animate-wave-medium {
          animation: wave-medium 5s infinite ease-in-out;
        }

        .animate-wave-fast {
          animation: wave-fast 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Slider; 