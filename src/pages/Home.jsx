import React, { useEffect, useRef, useState, useMemo } from "react";
import Slider from "../components/Slider/Slider";
import LogoSlider from "../components/LogoSlider/LogoSlider";

const ServiceCard = ({ title, description, icon, href }) => (
  <div
    className="bg-gradient-to-br from-white via-secondary-50 to-secondary-100/20 
    border-[1.5px] border-secondary-200 rounded-xl overflow-hidden group transition-all duration-500 relative
    hover:border-secondary-500 hover:shadow-xl hover:shadow-secondary-500/10"
  >
    <div
      className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-700 
      opacity-0 group-hover:opacity-100 transition-all duration-500"
    ></div>
    <div
      className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-400 
      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
    ></div>
    <div className="p-4 sm:p-6 md:p-8 text-center relative z-10">
      <div className="mb-2 sm:mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-500 relative">
        <div
          className="absolute inset-0 bg-gradient-to-br from-secondary-200 via-secondary-100 to-transparent 
          rounded-full filter blur-xl opacity-50 group-hover:opacity-0 transition-opacity duration-500"
        ></div>
        {icon}
      </div>
      <h3
        className="text-lg sm:text-xl md:text-2xl font-bold text-primary-700 mb-2 sm:mb-3 md:mb-4 
        group-hover:text-white transition-colors duration-500"
      >
        {title}
      </h3>
      <p
        className="text-sm sm:text-base text-primary-600/80 mb-4 sm:mb-6 md:mb-8 
        group-hover:text-primary-100 transition-colors duration-500 px-2 sm:px-4"
      >
        {description}
      </p>
      <a
        href={href}
        className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg bg-gradient-to-r 
          from-secondary-500 via-secondary-400 to-secondary-500 text-white 
          group-hover:bg-white group-hover:text-primary-700 font-medium
          transition-all duration-500 text-sm md:text-base transform hover:scale-105 
          shadow-lg hover:shadow-white/25"
      >
        <span>Más información</span>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </a>
    </div>
  </div>
);

const CountUpAnimation = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setCount(0);
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let startTimestamp;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    if (isVisible) {
      startTimestamp = null;
      animationFrameId = window.requestAnimationFrame(step);
    }

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, isVisible]);

  return (
    <div
      ref={countRef}
      className="text-4xl md:text-5xl font-bold text-complemento-300 mb-2 
      transition-all duration-300 transform hover:scale-110
      bg-gradient-to-r from-complemento-400 via-complemento-300 to-complemento-400 bg-clip-text text-transparent
      relative group"
    >
      <div className="absolute inset-0 bg-white/10 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-20"></div>
      {prefix}
      {count}
      {suffix}
    </div>
  );
};

const Home = () => {
  const videoSectionRef = useRef(null);
  const videoPlayerRef = useRef(null);

  useEffect(() => {
    let observer;
    
    try {
      // Configurar el observer para la reproducción automática
      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          const videoElement = videoPlayerRef.current;
          
          if (!videoElement) return;
          
          if (entry.isIntersecting) {
            // Cuando el video entra en vista, reproducir y desmutear
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  // Reproducción exitosa
                  videoElement.muted = false;
                  videoElement.volume = 0.8; // Volumen más moderado
                })
                .catch((error) => {
                  console.log('Error al reproducir video:', error);
                  // Mantener silenciado si hay error
                  videoElement.muted = true;
                });
            }
          } else {
            // Cuando el video sale de vista, pausar y mutear
            videoElement.pause();
            videoElement.muted = true;
          }
        },
        {
          threshold: 0.5,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      const videoSection = videoSectionRef.current;
      if (videoSection) {
        observer.observe(videoSection);
      }

      return () => {
        if (observer && videoSection) {
          observer.unobserve(videoSection);
        }
      };
    } catch (error) {
      console.error('Error configurando IntersectionObserver:', error);
    }
  }, []);

  const services = [
    {
      title: "Residencial",
      description:
        "Instalación de gas para tu hogar con total seguridad y garantía.",
      icon: (
        <i className="fas fa-home w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto text-secondary-500 group-hover:text-white transition-colors duration-500 relative z-10 flex items-center justify-center text-3xl md:text-4xl"></i>
      ),
      href: "/instalacion",
    },
    {
      title: "Comercial",
      description:
        "Soluciones de gas natural para negocios y establecimientos comerciales.",
      icon: (
        <i className="fas fa-store w-12 h-12 md:w-16 md:h-16 mx-auto text-secondary-500 group-hover:text-white transition-colors duration-500 relative z-10 flex items-center justify-center text-3xl md:text-4xl"></i>
      ),
      href: "/instalacion",
    },
    {
      title: "Multifamiliar",
      description: "Sistemas centralizados para edificios y condominios.",
      icon: (
        <i className="fas fa-building w-12 h-12 md:w-16 md:h-16 mx-auto text-secondary-500 group-hover:text-white transition-colors duration-500 relative z-10 flex items-center justify-center text-3xl md:text-4xl"></i>
      ),
      href: "/instalacion",
    },
    {
      title: "Industrial",
      description: "Instalaciones de alta capacidad para el sector industrial.",
      icon: (
        <i className="fas fa-industry w-12 h-12 md:w-16 md:h-16 mx-auto text-secondary-500 group-hover:text-white transition-colors duration-500 relative z-10 flex items-center justify-center text-3xl md:text-4xl"></i>
      ),
      href: "/instalacion",
    },
  ];

  const stats = [
    { value: 2000, prefix: "+", label: "Instalaciones" },
    //{ value: 24, suffix: "/7", label: "Soporte Técnico" },
    { value: 20, prefix: "+", suffix: " años", label: "Años de Experiencia" },
  ];

  return (
    <>
      <section className="h-[100vh] md:h-screen w-full relative">
        <Slider />
      </section>

      <section className="w-full pt-0">
        {/* Sección de Presentación */}
        <div className="w-full bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 py-8 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left" data-aos="fade-right">
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 
                  bg-gradient-to-r from-white via-complemento-200 to-white bg-clip-text text-transparent
                  animate-gradient leading-tight"
                >
                  Transformamos la Energía en Bienestar
                </h2>

                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  En{" "}
                  <span className="text-secondary-500 font-semibold">
                    Kaizen
                  </span>
                  , brindamos soluciones integrales de gas natural con garantía
                  total en calidad y seguridad. Instaladores certificados con 20
                  años de experiencia y especialistas en transformar el consumo
                  energético.
                </p>

                <div className="mt-12">
                  <a
                    href="/nosotros"
                    className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r 
                      from-secondary-500 via-secondary-400 to-secondary-500 text-white font-medium text-lg 
                      group relative overflow-hidden shadow-xl hover:shadow-secondary-500/50 transition-all duration-500"
                  >
                    <span className="relative z-10">
                      Conoce Más de Nosotros
                    </span>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/0 to-white/25 
                      transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                    ></div>
                    <svg
                      className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div
                ref={videoSectionRef}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                data-aos="fade-left"
              >
                <video
                  ref={videoPlayerRef}
                  className="w-full h-full object-cover"
                  src="/assets/video/video-kaizen.mp4"
                  title="Video institucional Kaizen - Instalaciones de Gas Natural"
                  controls={true}
                  muted={true}
                  playsInline={true}
                  preload="metadata"
                  onError={(e) => console.error('Error cargando video:', e)}
                  onLoadStart={() => console.log('Iniciando carga del video')}
                  onCanPlay={() => console.log('Video listo para reproducir')}
                >
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/5 rounded-full filter blur-3xl"></div>
        </div>

        {/* Sección de Servicios */}
        <div className="w-full bg-gradient-to-br from-white via-white to-gray-50/30 py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-700 mb-4 sm:mb-6">
                Instalaciones
              </h2>
              <p className="text-base sm:text-lg text-primary-600/90 max-w-3xl mx-auto px-2 sm:px-0">
                Ofrecemos instalaciones de gas natural adaptadas a tus
                necesidades específicas, garantizando eficiencia y seguridad.
                Nuestro equipo de expertos se encarga de cada etapa del proceso,
                desde la evaluación inicial hasta la ejecución, utilizando
                materiales de alta calidad y cumpliendo con las normativas
                vigentes. Somos una organización certificada por{" "}
                <span className="text-secondary-500 font-semibold">
                  Osinergmin
                </span>{" "}
                y{" "}
                <span className="text-secondary-500 font-semibold">
                  Bureau Veritas
                </span>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>

        {/* Sección de Estadísticas */}
        <div className="py-16 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 text-white relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-full bg-[url('data:image/svg+xml,...')] opacity-5"></div>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/5"
                style={{
                  width: Math.random() * 100 + 50 + "px",
                  height: Math.random() * 100 + 50 + "px",
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                  transform: `scale(${Math.random() * 0.5 + 0.5})`,
                  animation: `float ${
                    Math.random() * 10 + 5
                  }s infinite ease-in-out ${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-primary-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8
                  transform hover:scale-105 transition-all duration-500
                  border border-white/10 hover:border-complemento-400/30
                  shadow-lg hover:shadow-complemento-400/20"
                >
                  <CountUpAnimation
                    end={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                  <div
                    className="text-xl md:text-2xl font-light text-primary-100 mt-2
                    bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent"
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección CTA */}
        <div className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-custom text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                ¿Listo para instalar gas natural?
              </h2>
              <p className="text-primary-600 text-lg mb-8 max-w-2xl mx-auto">
                Contáctanos hoy mismo y obtén una cotización gratuita para tu
                instalación
              </p>
              <a
                href="/contacto"
                className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg 
                transition-all duration-300 transform hover:scale-105 text-lg font-medium text-center"
              >
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>

        {/* Sección de Logos */}
        <div className="border-t border-gray-100">
          <div className="container mx-auto">
            <div className="text-center py-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                Clientes que confian en nosotros
              </h2>
              <p className="text-primary-600 text-lg mb-8 max-w-2xl mx-auto">
                Empresas que confían en nuestra calidad y profesionalismo
              </p>
            </div>
          </div>
          <LogoSlider />
        </div>
      </section>
    </>
  );
};

export default Home;
