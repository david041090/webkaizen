import React, { useState, useEffect, useMemo } from 'react';
import PageBanner from '../components/PageBanner';
import { motion, AnimatePresence } from 'framer-motion';
import gasNaturalImage from '../assets/image/slider/gas_natural.jpg';

// Importar imágenes de clientes
import cliente01 from '../assets/image/clientes/01.jpg';
import cliente02 from '../assets/image/clientes/02.jpg';
import cliente03 from '../assets/image/clientes/03.jpg';
import cliente04 from '../assets/image/clientes/04.jpg';
import cliente05 from '../assets/image/clientes/05.jpg';
import cliente06 from '../assets/image/clientes/06.jpg';
import cliente07 from '../assets/image/clientes/07.jpg';
import cliente08 from '../assets/image/clientes/08.jpg';
import cliente09 from '../assets/image/clientes/09.jpg';
import cliente10 from '../assets/image/clientes/10.jpg';

// Importar logos de clientes
import asinergminLogo from '../assets/image/bussines/asinergmin.png';
import veritasLogo from '../assets/image/bussines/veritas.png';
import logoLight from '../assets/image/bussines/logo.png';
import logoDark from '../assets/image/bussines/logodark.png';

// Constantes
const SLIDE_INTERVAL = 5000;
const SWIPE_CONFIDENCE_THRESHOLD = 10000;

// Componentes de UI
const LogoCard = ({ logo, index }) => (
  <motion.div
    key={index}
    className="p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300
      flex items-center justify-center group"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img
      src={logo.src}
      alt={logo.alt}
      className="max-h-10 md:max-h-12 w-auto object-contain sm:filter sm:grayscale sm:group-hover:grayscale-0 
        transition-all duration-300"
    />
  </motion.div>
);

const SliderControl = ({ direction, onClick }) => (
  <button
    className={`absolute ${direction === 'left' ? 'left-2 md:left-4' : 'right-2 md:right-4'} 
      top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm 
      transition-all duration-300`}
    onClick={onClick}
  >
    <i className={`fas fa-chevron-${direction} text-white text-lg md:text-xl`}></i>
  </button>
);

const SliderIndicator = ({ index, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 
      ${isActive ? 'bg-white w-3 md:w-4' : 'bg-white/50'}`}
  />
);

const StatCard = ({ stat, index }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="bg-primary-700/50 rounded-lg p-3 md:p-4 backdrop-blur-sm flex items-center gap-3 md:gap-4">
      <div className="flex-shrink-0">
        <i className={`${stat.icon} text-2xl md:text-3xl text-complemento-400`}></i>
      </div>
      <div className="text-left">
        <div className="heading-3 text-white">{stat.value}</div>
        <p className="text-body-sm text-primary-100">{stat.label}</p>
      </div>
    </div>
  </motion.div>
);

// Datos estáticos
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const logos = [
  { src: asinergminLogo, alt: "Asinergmin" },
  { src: veritasLogo, alt: "Veritas" },
  { src: logoLight, alt: "Cliente 3" },
  { src: logoDark, alt: "Cliente 4" },
];

const stats = [
  { value: "1800+", label: "Instalaciones", icon: "fas fa-tools" },
  { value: "20+", label: "Años", icon: "fas fa-clock" },
  { value: "100%", label: "Satisfacción", icon: "fas fa-smile" },
  { value: "24/7", label: "Soporte", icon: "fas fa-headset" }
];

const proyectos = [
  {
    imagen: cliente01,
    titulo: "Instalación Residencial",
    descripcion: "Proyecto de conversión a gas natural en zona residencial"
  },
  {
    imagen: cliente02,
    titulo: "Proyecto Industrial",
    descripcion: "Implementación de sistema de gas natural en planta industrial"
  },
  {
    imagen: cliente03,
    titulo: "Complejo Multifamiliar",
    descripcion: "Sistema centralizado para edificio de apartamentos"
  },
  {
    imagen: cliente04,
    titulo: "Instalación Comercial",
    descripcion: "Sistema de gas natural para establecimiento comercial"
  },
  {
    imagen: cliente05,
    titulo: "Proyecto Empresarial",
    descripcion: "Implementación de gas natural en sede corporativa"
  },
  {
    imagen: cliente06,
    titulo: "Edificio Residencial",
    descripcion: "Sistema centralizado para edificio de apartamentos"
  },
  {
    imagen: cliente07,
    titulo: "Instalación Hotelera",
    descripcion: "Sistema de gas natural para hotel"
  },
  {
    imagen: cliente08,
    titulo: "Complejo Comercial",
    descripcion: "Implementación en centro comercial"
  },
  {
    imagen: cliente09,
    titulo: "Proyecto Residencial",
    descripcion: "Instalación en conjunto residencial"
  },
  {
    imagen: cliente10,
    titulo: "Edificio Corporativo",
    descripcion: "Sistema de gas natural para oficinas"
  }
];

const testimonios = [
  {
    nombre: "Juan Pérez",
    cargo: "Gerente General",
    empresa: "Empresa Industrial S.A.",
    testimonio: "La calidad del servicio y la profesionalidad del equipo de Kaizen superaron nuestras expectativas. Definitivamente los recomendamos."
  },
  {
    nombre: "María García",
    cargo: "Administradora",
    empresa: "Residencial Los Pinos",
    testimonio: "Excelente atención y seguimiento post-instalación. El equipo técnico es muy competente y cuidadoso con su trabajo."
  },
  {
    nombre: "Carlos Rodríguez",
    cargo: "Propietario",
    empresa: "Restaurante El Fogón",
    testimonio: "La instalación de gas natural cambió la eficiencia de nuestro negocio. El servicio de Kaizen fue impecable de principio a fin."
  }
];

// Componente principal
const Clientes = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Funciones memoizadas
  const paginate = useMemo(() => (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + proyectos.length) % proyectos.length);
  }, []);

  const swipePower = useMemo(() => (offset, velocity) => {
    return Math.abs(offset) * velocity;
  }, []);

  // Efectos
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % proyectos.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <PageBanner
        title="Nuestros Clientes"
        subtitle="La confianza de quienes han elegido nuestros servicios"
        backgroundImage={gasNaturalImage}
      />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Sección de Logos */}
          <section className="mb-8 md:mb-12">
            <h2 className="heading-1 text-primary-800 text-center mb-6 md:mb-8">
              Empresas que confían en nosotros
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 items-center max-w-4xl mx-auto">
              {logos.map((logo, index) => (
                <LogoCard key={index} logo={logo} index={index} />
              ))}
            </div>
          </section>

          {/* Sección del Slider */}
          <section className="mb-8 md:mb-12 bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-primary-800 py-6 md:py-8 px-4 text-center">
              <h2 className="heading-1 text-white mb-3 md:mb-4">
                Trabajos Entregados
              </h2>
              <p className="text-body-lg text-primary-100">
                Algunos de nuestros proyectos más destacados
              </p>
            </div>

            <div className="relative w-full aspect-video md:aspect-auto md:h-[500px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
                      paginate(1);
                    } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
                      paginate(-1);
                    }
                  }}
                  className="absolute inset-0"
                >
                  <div className="h-full relative">
                    <img
                      src={proyectos[currentSlide].imagen}
                      alt={proyectos[currentSlide].titulo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <SliderControl direction="left" onClick={() => paginate(-1)} />
              <SliderControl direction="right" onClick={() => paginate(1)} />

              <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {proyectos.map((_, index) => (
                  <SliderIndicator
                    key={index}
                    index={index}
                    isActive={index === currentSlide}
                    onClick={() => {
                      setDirection(index > currentSlide ? 1 : -1);
                      setCurrentSlide(index);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Sección de Estadísticas */}
            <div className="bg-primary-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 p-4 md:p-6">
                {stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Sección de Testimonios */}
          <section className="mb-8 md:mb-12">
            <h2 className="heading-2 text-primary-800 text-center mb-6 md:mb-8">
              Lo que dicen nuestros clientes
            </h2>
            <div className="relative max-w-5xl mx-auto">
              <div className="flex overflow-hidden">
                {testimonios.map((testimonio, index) => (
                  <motion.div
                    key={index}
                    className={`w-full flex-shrink-0 transition-all duration-500
                      ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      transform: `translateX(-${currentTestimonial * 100}%)`
                    }}
                  >
                    <div className="bg-white rounded-2xl shadow-custom p-4 md:p-6 mx-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-full transform translate-x-12 -translate-y-12"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-complemento-50 rounded-full transform -translate-x-8 translate-y-8"></div>
                      
                      <div className="relative">
                        <div className="absolute -top-3 -left-3 w-10 h-10 bg-complemento-500 rounded-full flex items-center justify-center shadow-lg">
                          <i className="fas fa-quote-right text-lg text-white"></i>
                        </div>
                        
                        <div className="pt-6">
                          <p className="text-body text-primary-600 mb-4 italic leading-relaxed">
                            "{testimonio.testimonio}"
                          </p>
                          
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-complemento-100 flex items-center justify-center flex-shrink-0">
                              <span className="text-xl font-bold text-primary-600">
                                {testimonio.nombre.charAt(0)}
                              </span>
                            </div>
                            <div className="min-w-0">
                              <h3 className="heading-4 text-primary-800 truncate">{testimonio.nombre}</h3>
                              <div className="flex items-center gap-1.5 text-sm">
                                <span className="text-complemento-500 font-medium truncate">{testimonio.cargo}</span>
                                <span className="text-primary-400">•</span>
                                <span className="text-primary-500 truncate">{testimonio.empresa}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-center gap-2 mt-4 md:mt-6">
                {testimonios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 
                      ${index === currentTestimonial 
                        ? 'bg-complemento-500 w-4' 
                        : 'bg-primary-200 hover:bg-primary-300'}`}
                    aria-label={`Ver testimonio ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-4 md:p-6 text-center">
            <h2 className="heading-2 text-white mb-2 md:mb-3">
              ¿Listo para unirte a nuestros clientes satisfechos?
            </h2>
            <p className="text-body text-primary-100 mb-3 md:mb-4 max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a implementar soluciones de gas natural eficientes y seguras.
            </p>
            <a 
              href="/contacto"
              className="inline-block bg-complemento-500 hover:bg-complemento-600 text-white px-4 md:px-6 py-2 rounded-lg 
              transition-all duration-300 transform hover:scale-105
              hover:shadow-lg hover:shadow-complemento-500/25 text-center"
            >
              Solicitar Información
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Clientes; 