import React, { useState, useEffect } from 'react';

const FloatingIcons = () => {
  const [expanded, setExpanded] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Información de contacto (reemplazar con información real)
  const whatsappNumber = "51959363858"; // Reemplazar con el número real
  const whatsappMessage = "Hola Grupo Kaizen, estoy interesado en sus servicios de gas natural...";
  const facebookPageUrl = "https://www.facebook.com/profile.php?id=100078954631590"; // URL directa a la página de Facebook
  const phoneNumber = "51959363858"; // Número para llamadas

  // URLs para los enlaces
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneUrl = `tel:${phoneNumber}`;

  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Comprobar al inicio
    checkIfMobile();
    
    // Actualizar cuando cambie el tamaño de la ventana
    window.addEventListener('resize', checkIfMobile);
    
    // Limpieza
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Gestión del ciclo de visibilidad del globo de mensaje
  useEffect(() => {
    // No mostrar en dispositivos móviles
    if (isMobile || expanded) {
      setShowBubble(false);
      return;
    }

    // Mostrar al inicio (ya está visible por defecto)
    
    // Ocultar después de 8 segundos
    const hideTimeout = setTimeout(() => {
      setShowBubble(false);
    }, 8000);

    // Configurar intervalo para mostrar/ocultar periódicamente
    const interval = setInterval(() => {
      // Mostrar de nuevo
      setShowBubble(true);
      
      // Ocultar después de 8 segundos
      setTimeout(() => {
        if (!expanded) {
          setShowBubble(false);
        }
      }, 8000);
    }, 25000); // Ciclo completo cada 25 segundos

    // Limpiar timeouts e intervalos al desmontar
    return () => {
      clearTimeout(hideTimeout);
      clearInterval(interval);
    };
  }, [expanded, isMobile]);

  return (
    <div className={`fixed ${isMobile ? 'bottom-5' : 'bottom-6'} right-6 z-50 flex flex-col items-end`}>
      {/* Mensaje emergente que aparece periódicamente - solo en escritorio */}
      <div 
        className={`absolute right-16 bottom-3 bg-white rounded-lg shadow-lg p-3 mb-2 max-w-[220px] transform transition-all duration-500 origin-bottom-right ${
          showBubble && !isMobile ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <p className="text-primary-700 text-sm font-medium">¡Chatea con nosotros!</p>
        <p className="text-primary-600 text-xs mt-1">Estamos listos para ayudarte en lo que necesites. ¡Escríbenos ahora!</p>
        {/* Flecha del globo */}
        <div className="absolute -right-2 bottom-4 w-3 h-3 bg-white transform rotate-45"></div>
        {/* Indicador de actividad */}
        <div className="absolute -left-1 -top-1 w-3 h-3 bg-green-500 rounded-full">
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        </div>
        {/* Botón para cerrar */}
        <button 
          onClick={() => setShowBubble(false)}
          className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <i className="fas fa-times text-xs"></i>
        </button>
      </div>

      {/* Botón principal */}
      <button 
        onClick={() => setExpanded(!expanded)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 transform hover:scale-105 mb-3 ${
          expanded 
            ? 'bg-primary-600 rotate-45' 
            : 'bg-complemento-500 hover:bg-complemento-600'
        }`}
        aria-label="Contacto directo"
      >
        <i className={`fas ${expanded ? 'fa-times' : 'fa-comment-dots'} text-white text-2xl`}></i>
        {/* Indicador de notificación - mostrar siempre en móvil y condicionalmente en escritorio */}
        {(!showBubble && !expanded && !isMobile) || (isMobile && !expanded) ? (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full">
            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></span>
          </span>
        ) : null}
      </button>

      {/* Iconos desplegables */}
      <div className={`flex flex-col gap-3 transition-all duration-500 transform origin-bottom-right ${
        expanded 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        {/* WhatsApp */}
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 relative group"
          aria-label="Contactar por WhatsApp"
        >
          <i className="fab fa-whatsapp text-white text-2xl"></i>
          <span className="absolute right-full mr-3 bg-green-500 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            WhatsApp
          </span>
        </a>

        {/* Facebook - enlace directo a la página de Facebook */}
        <a 
          href={facebookPageUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 relative group"
          aria-label="Visitar página de Facebook"
        >
          <i className="fab fa-facebook-f text-white text-2xl"></i>
          <span className="absolute right-full mr-3 bg-blue-600 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Facebook
          </span>
        </a>

        {/* Botón de llamada - solo visible en móvil */}
        {isMobile && (
          <a 
            href={phoneUrl}
            className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-110 relative group"
            aria-label="Llamar ahora"
          >
            <i className="fas fa-phone-alt text-white text-xl"></i>
            <span className="absolute right-full mr-3 bg-red-500 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Llamar
            </span>
          </a>
        )}
      </div>

      {/* Texto emergente al expandir */}
      <div className={`absolute bottom-16 right-16 bg-white rounded-lg shadow-xl p-4 max-w-xs transition-all duration-500 ${
        expanded 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-0 pointer-events-none'
      }`}>
        <div className="text-primary-700 font-medium mb-2">¿Necesitas ayuda?</div>
        <p className="text-primary-600 text-sm">
          {isMobile 
            ? "Contacta con nuestro equipo a través de WhatsApp, Facebook o llámanos directamente."
            : "Contacta con nuestro equipo a través de WhatsApp o visita nuestra página de Facebook."
          }
        </p>
        <div className="absolute -bottom-2 right-10 w-4 h-4 bg-white transform rotate-45"></div>
      </div>
    </div>
  );
};

export default FloatingIcons;