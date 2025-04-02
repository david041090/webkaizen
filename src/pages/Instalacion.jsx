import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import WhatsAppButton from "../components/WhatsAppButton";
import ActionButton from "../components/ActionButton";
import residencial from "../assets/image/residencial.jpg";
import comercial from "../assets/image/comercio.jpg";
import multifamiliar from "../assets/image/multifamiliar.jpg";
import industrial from "../assets/image/industrial.jpg";

// Constante para los tipos de instalación
const INSTALLATION_TYPES = {
  RESIDENCIAL: "residencial",
  COMERCIAL: "comercial",
  MULTIFAMILIAR: "multifamiliar",
  INDUSTRIAL: "industrial"
};

const Instalacion = () => {
  const [activeTab, setActiveTab] = useState(INSTALLATION_TYPES.RESIDENCIAL);
  const [isSticky, setIsSticky] = useState(false);
  const navigationRef = useRef(null);
  const navPositionRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (navigationRef.current && !navPositionRef.current) {
        navPositionRef.current = navigationRef.current.getBoundingClientRect().top + window.scrollY;
      }
      setIsSticky(window.scrollY > (navPositionRef.current - 80));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (typeId) => {
    setActiveTab(typeId);
    if (isSticky) {
      window.scrollTo({
        top: navPositionRef.current - 80,
        behavior: 'smooth'
      });
    }
  };

  const installationTypes = [
    {
      id: INSTALLATION_TYPES.RESIDENCIAL,
      title: "Residencial",
      icon: <i className="fa-solid fa-home text-current icon-small"></i>,
      description: "La instalación de gas doméstico consiste en el diseño, montaje y puesta en funcionamiento de un sistema que permite llevar gas natural o GLP desde una fuente de suministro hasta los puntos de consumo dentro de una vivienda (Cocinas, termas, etc).",
      additionalInfo: "Kaizen en convenio con el programa Bonogas del Ministerio de Energía y Minas, busca facilitar el acceso al gas natural a través del subsidio con los costos de instalación del servicio de gas natural como una opción más económica, segura y sostenible.",
      image: residencial,
      subtitle: "La solución segura y económica para tu hogar"
    },
    {
      id: INSTALLATION_TYPES.COMERCIAL,
      title: "Comercial",
      icon: <i className="fa-solid fa-store text-current icon-small"></i>,
      description: "La instalación de gas comercial consiste en implementar un sistema de distribución de gas natural o GLP diseñado para establecimientos comerciales, adaptándose a las necesidades específicas de cada negocio que requiere un suministro continuo, eficiente y seguro.",
      establishmentTypes: ["Restaurantes", "Panaderías", "Hoteles", "Lavanderías", "Otros"],
      benefits: ["Suministro Continuo", "Alta Eficiencia", "Máxima Seguridad"],
      image: comercial,
      subtitle: "Soluciones profesionales para su negocio"
    },
    {
      id: INSTALLATION_TYPES.MULTIFAMILIAR,
      title: "Multifamiliar",
      icon: <i className="fa-solid fa-building text-current icon-small"></i>,
      description: "La instalación multifamiliar de gas se diseña para abastecer a varias viviendas dentro de un edificio o condominio desde un sistema centralizado, asegurando que cada unidad tenga un suministro individualizado, seguro y eficiente de gas natural o GLP.",
      applications: ["Edificios", "Condominios", "Conjuntos", "Apartamentos", "Otros"],
      benefits: ["Ahorro en Costos", "Facturación Individual", "Máxima Seguridad"],
      image: multifamiliar,
      subtitle: "Soluciones centralizadas para edificios y condominios"
    },
    {
      id: INSTALLATION_TYPES.INDUSTRIAL,
      title: "Industrial",
      icon: <i className="fa-solid fa-industry text-current icon-small"></i>,
      description: "La instalación industrial de gas natural es un proceso complejo que requiere un diseño especializado y la intervención de técnicos calificados para garantizar un suministro seguro, eficiente y adecuado a las necesidades específicas de una empresa o industria.",
      establishmentTypes: ["Fábricas", "Plantas", "Siderúrgicas", "Metalúrgicas", "Otros"],
      benefits: ["Alta Eficiencia", "Menor Impacto Ambiental", "Máxima Seguridad"],
      image: industrial,
      subtitle: "Soluciones especializadas para su industria"
    }
  ];

  const renderNavigationMenu = () => (
    <div 
      ref={navigationRef}
      className={`${isSticky ? "fixed top-0 left-0 right-0 z-50 bg-primary-50 py-4 px-4 shadow-md transition-all duration-300" : ""}`}
    >
      <div className={`flex flex-wrap justify-center gap-2 sm:gap-4 ${isSticky ? "container mx-auto max-w-7xl mb-0" : "mb-8"}`}>
        {installationTypes.map((type) => (
          <button
            key={type.id}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 ${
              activeTab === type.id
                ? "bg-primary-600 text-white"
                : "bg-white text-primary-600 hover:bg-primary-100"
            }`}
            onClick={() => handleTabClick(type.id)}
          >
            {type.icon}
            <span className="text-body font-medium">{type.title}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <PageBanner
        title="Instalación"
        subtitle="Proceso profesional y seguro de instalación de gas natural"
        backgroundImage={residencial}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Descripción Principal */}
          <div className="bg-white rounded-xl shadow-custom container-spacing item-spacing">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-primary-50 p-4 rounded-full flex-shrink-0 hidden md:flex">
                <i className="fa-solid fa-fire-flame-curved text-primary-600 text-4xl rounded-full"></i>          
              </div>
              <div>
                <p className="text-body-lg text-primary-600">
                  Ofrecemos diseño, supervisión y ejecución de instalaciones de gas
                  natural para residencias e industrias, garantizando calidad y
                  seguridad. Contamos con el convenio BonoGas somos profesionales con
                  más de 20 años de experiencia.
                </p>
              </div>
            </div>
          </div>

          {/* Tipos de Instalaciones */}
          <div className="bg-primary-50 rounded-xl container-spacing item-spacing">
            <h2 className="heading-3 text-primary-700 item-spacing flex items-center gap-2">
              <i className="fa-solid fa-layer-group text-complemento-500"></i>
              Tipos de Instalaciones
            </h2>
            
            {renderNavigationMenu()}
            {isSticky && <div className="h-20"></div>}

            {/* Contenido Dinámico */}
            {installationTypes.map((type) => (
              <div
                key={type.id}
                className={`${
                  activeTab === type.id ? "block" : "hidden"
                }`}
              >
                <div className="bg-primary-700 text-white rounded-xl overflow-hidden shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="p-4 sm:p-6 md:p-8">
                      <h3 className="heading-2 text-primary-100">
                        Instalación {type.title} de Gas
                      </h3>
                      <p className="text-body-lg mt-2 text-primary-100">
                        {type.subtitle}
                      </p>

                      <div className="bg-white text-primary-800 rounded-xl p-3 sm:p-6 mt-6 sm:mt-8 shadow-md">
                        <h4 className="heading-4 text-primary-700 mb-3 sm:mb-4">
                          ¿Qué es la instalación de gas {type.id}?
                        </h4>
                        <p className="text-body">{type.description}</p>
                        
                        {type.additionalInfo && (
                          <p className="text-body mt-4">{type.additionalInfo}</p>
                        )}

                        {/* Tipos de establecimientos si existen */}
                        {type.establishmentTypes && (
                          <>
                            <h5 className="heading-5 text-primary-700 mt-6 mb-3 sm:mb-4">
                              Ideal para establecimientos como:
                            </h5>
                            <ul className="grid grid-cols-2 gap-2">
                              {type.establishmentTypes.map((establishment, index) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-1.5 text-primary-700"
                                >
                                  <i className="fa-solid fa-check-circle text-secondary-500 text-sm flex-shrink-0"></i>
                                  <span className="text-body-sm xs:text-body">{establishment}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {/* Aplicaciones principales si existen */}
                        {type.applications && (
                          <>
                            <h5 className="heading-5 text-primary-700 mt-6 mb-3 sm:mb-4">
                              Aplicaciones principales:
                            </h5>
                            <ul className="grid grid-cols-2 gap-2">
                              {type.applications.map((application, index) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-1.5 text-primary-700"
                                >
                                  <i className="fa-solid fa-check-circle text-secondary-500 text-sm flex-shrink-0"></i>
                                  <span className="text-body-sm xs:text-body">{application}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {/* Beneficios si existen */}
                        {type.benefits && (
                          <>
                            <h5 className="heading-5 text-primary-700 mt-6 mb-3 sm:mb-4">
                              Beneficios principales:
                            </h5>
                            <div className="grid grid-cols-3 gap-1.5 sm:gap-3 md:gap-4">
                              {type.benefits.map((benefit, index) => (
                                <div
                                  key={index}
                                  className="border border-primary-100 rounded-lg p-2 sm:p-4 text-center flex flex-col items-center gap-1 sm:gap-2"
                                >
                                  {index === 0 && <i className="fa-solid fa-gauge-high text-secondary-500 text-lg sm:text-2xl mb-1"></i>}
                                  {index === 1 && <i className="fa-solid fa-leaf text-secondary-500 text-lg sm:text-2xl mb-1"></i>}
                                  {index === 2 && <i className="fa-solid fa-shield-halved text-secondary-500 text-lg sm:text-2xl mb-1"></i>}
                                  <span className="text-body-sm sm:text-body font-medium">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <ActionButton
                          to="/contacto"
                          text="Consultar por instalación"
                          icon="fa-solid fa-file-lines"
                          variant="secondary"
                        />
                        <WhatsAppButton 
                          phoneNumber="51959363858"
                          variant="default"
                          className="mx-auto"
                        />
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <div className="h-full relative overflow-hidden">
                        <img 
                          src={type.image} 
                          alt={`Instalación ${type.title}`} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/600x800?text=Imagen+No+Disponible";
                          }}
                        />
                </div>
              </div>
                    {/* Imagen para móvil */}
                    <div className="block lg:hidden w-full h-48 sm:h-64 md:h-80 overflow-hidden">
                      <img 
                        src={type.image} 
                        alt={`Instalación ${type.title}`} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/600x400?text=Imagen+No+Disponible";
                        }}
                      />
                </div>
              </div>
                </div>

                {/* Pasos del proceso específicos para cada tipo */}
                <div className="mt-8">
                  <h3 className="heading-4 text-primary-700 mb-6 flex items-center gap-2">
                    <i className="fa-solid fa-diagram-project text-complemento-500"></i>
                    Proceso de Instalación {type.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(() => {
                      let pasos = [];
                      if (type.id === INSTALLATION_TYPES.RESIDENCIAL) {
                        pasos = [
                          {
                            icon: "fa-solid fa-bullhorn",
                            title: "PASO 1",
                            subtitle: "DIFUSIÓN DEL PROGRAMA Y/O SERVICIOS",
                            description: "Información completa sobre nuestros servicios y beneficios del programa."
                          },
                          {
                            icon: "fa-solid fa-file-signature",
                            title: "PASO 2",
                            subtitle: "SUSCRIPCIÓN DE CONTRATO",
                            description: "Formalización del servicio con términos y condiciones claras."
                          },
                          {
                            icon: "fa-solid fa-wrench",
                            title: "PASO 3",
                            subtitle: "CONSTRUCCIÓN DE LA INSTALACIÓN INTERNA",
                            description: "Instalación profesional de tuberías y conexiones internas."
                          },
                          {
                            icon: "fa-solid fa-network-wired",
                            title: "PASO 4",
                            subtitle: "CONSTRUCCIÓN DE LA INSTALACIÓN EXTERNA",
                            description: "Conexión segura a la red de distribución externa."
                          },
                          {
                            icon: "fa-solid fa-check-circle",
                            title: "PASO 5",
                            subtitle: "HABILITACIÓN DEL SERVICIO",
                            description: "Pruebas de seguridad y activación del servicio."
                          },
                          {
                            icon: "fa-solid fa-headset",
                            title: "PASO 6",
                            subtitle: "ATENCIÓN AL USUARIO",
                            description: "Soporte continuo y servicio post-instalación."
                          }
                        ];
                      } else if (type.id === INSTALLATION_TYPES.COMERCIAL) {
                        pasos = [
                          {
                            icon: "fa-solid fa-bullhorn",
                            title: "PASO 1",
                            subtitle: "DIFUSIÓN DEL PROGRAMA Y/O SERVICIOS",
                            description: "Información detallada sobre nuestros servicios de instalación comercial."
                          },
                          {
                            icon: "fa-solid fa-file-signature",
                            title: "PASO 2",
                            subtitle: "SUSCRIPCIÓN DE CONTRATO",
                            description: "Formalización del servicio con términos y condiciones específicos para negocios."
                          },
                          {
                            icon: "fa-solid fa-wrench",
                            title: "PASO 3",
                            subtitle: "CONSTRUCCIÓN DE LA INSTALACIÓN INTERNA",
                            description: "Instalación profesional de tuberías y conexiones internas para uso comercial."
                          },
                          {
                            icon: "fa-solid fa-network-wired",
                            title: "PASO 4",
                            subtitle: "CONSTRUCCIÓN DE LA INSTALACIÓN EXTERNA",
                            description: "Conexión segura a la red de distribución externa y sistemas de regulación."
                          },
                          {
                            icon: "fa-solid fa-check-circle",
                            title: "PASO 5",
                            subtitle: "HABILITACIÓN DEL SERVICIO",
                            description: "Pruebas de seguridad y activación del servicio comercial."
                          },
                          {
                            icon: "fa-solid fa-headset",
                            title: "PASO 6",
                            subtitle: "ATENCIÓN AL USUARIO",
                            description: "Soporte continuo y servicio post-instalación para su negocio."
                          }
                        ];
                      } else if (type.id === INSTALLATION_TYPES.MULTIFAMILIAR) {
                        pasos = [
                          {
                            icon: "fa-solid fa-clipboard-check",
                            title: "PASO 1",
                            subtitle: "EVALUACIÓN Y DISEÑO",
                            description: "Inspección técnica y diseño del sistema centralizado."
                          },
                          {
                            icon: "fa-solid fa-network-wired",
                            title: "PASO 2",
                            subtitle: "INFRAESTRUCTURA EXTERNA",
                            description: "Conexión al suministro principal y red externa."
                          },
                          {
                            icon: "fa-solid fa-wrench",
                            title: "PASO 3",
                            subtitle: "INFRAESTRUCTURA INTERNA",
                            description: "Instalación de redes y medidores individuales."
                          },
                          {
                            icon: "fa-solid fa-plug",
                            title: "PASO 4",
                            subtitle: "CONEXIONES INDIVIDUALES",
                            description: "Conexión a cada vivienda y sus artefactos."
                          },
                          {
                            icon: "fa-solid fa-vial",
                            title: "PASO 5",
                            subtitle: "PRUEBAS Y CERTIFICACIÓN",
                            description: "Verificación de seguridad y certificación."
                          },
                          {
                            icon: "fa-solid fa-check-circle",
                            title: "PASO 6",
                            subtitle: "HABILITACIÓN",
                            description: "Puesta en marcha del sistema centralizado."
                          }
                        ];
                      } else if (type.id === INSTALLATION_TYPES.INDUSTRIAL) {
                        pasos = [
                          {
                            icon: "fa-solid fa-search",
                            title: "PASO 1",
                            subtitle: "EVALUACIÓN INICIAL Y DISEÑO",
                            description: "Estudio técnico completo y diseño especializado del sistema."
                          },
                          {
                            icon: "fa-solid fa-network-wired",
                            title: "PASO 2",
                            subtitle: "INFRAESTRUCTURA EXTERNA",
                            description: "Instalación de EMR y conexión a la red principal."
                          },
                          {
                            icon: "fa-solid fa-wrench",
                            title: "PASO 3",
                            subtitle: "INFRAESTRUCTURA INTERNA",
                            description: "Instalación de tuberías y sistemas de seguridad internos."
                          },
                          {
                            icon: "fa-solid fa-vial",
                            title: "PASO 4",
                            subtitle: "PRUEBAS Y CERTIFICACIÓN",
                            description: "Pruebas de hermeticidad y certificación del sistema."
                          },
                          {
                            icon: "fa-solid fa-check-circle",
                            title: "PASO 5",
                            subtitle: "PUESTA EN MARCHA",
                            description: "Activación y pruebas finales del sistema."
                          },
                          {
                            icon: "fa-solid fa-tools",
                            title: "PASO 6",
                            subtitle: "MANTENIMIENTO",
                            description: "Mantenimiento preventivo y atención continua."
                          }
                        ];
                      }
                      return pasos.map((paso, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 transition-all duration-300 hover:shadow-lg border border-primary-100">
                          <div className="flex flex-col items-start gap-2">
                            <div className="flex items-center gap-3 w-full">
                              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <i className={`${paso.icon} text-white text-lg`}></i>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-sm font-bold text-primary-700">{paso.title}</h4>
                                <h5 className="text-sm font-medium text-primary-600 leading-tight">{paso.subtitle}</h5>
              </div>
                </div>
                            <div className="pl-[52px]">
                              <p className="text-xs text-primary-600">{paso.description}</p>
              </div>
            </div>
          </div>
                      ));
                    })()}
                </div>

                  {/* Características adicionales específicas para cada tipo */}
                  {(type.id === INSTALLATION_TYPES.COMERCIAL || type.id === INSTALLATION_TYPES.MULTIFAMILIAR || type.id === INSTALLATION_TYPES.INDUSTRIAL) && (
                    <div className="mt-6">
                      <h4 className="heading-4 text-primary-700 mb-4 flex items-center gap-2">
                        <i className="fa-solid fa-star text-complemento-500"></i>
                        Características Adicionales
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {type.id === INSTALLATION_TYPES.COMERCIAL && [
                          {
                            title: "Adaptación a necesidades",
                            description: "Diseño personalizado según tipo de negocio, consumo y equipos específicos."
                          },
                          {
                            title: "Mayor capacidad",
                            description: "Sistemas diseñados para alto consumo con estrictas normas de seguridad."
                          },
                          {
                            title: "Versatilidad",
                            description: "Compatibilidad con gas natural o GLP según disponibilidad."
                          },
                          {
                            title: "Soporte especializado",
                            description: "Atención técnica dedicada para establecimientos comerciales."
                          }
                        ].map((item, index) => (
                          <div key={index} className="bg-white rounded-lg p-4 border border-primary-100 hover:shadow-lg transition-all duration-300">
                            <h5 className="text-base font-bold text-primary-700 mb-2">{item.title}</h5>
                            <p className="text-sm text-primary-600">{item.description}</p>
              </div>
                        ))}
                        {type.id === INSTALLATION_TYPES.MULTIFAMILIAR && [
                          {
                            title: "Sistema Centralizado",
                            description: "Distribución eficiente desde una fuente central a todas las viviendas."
                          },
                          {
                            title: "Medición Individual",
                            description: "Cada vivienda controla y paga su propio consumo."
                          },
                          {
                            title: "Alta Seguridad",
                            description: "Cumplimiento de estrictas normas de seguridad y calidad."
                          },
                          {
                            title: "Mantenimiento Optimizado",
                            description: "Sistema de mantenimiento centralizado para todo el edificio."
                          }
                        ].map((item, index) => (
                          <div key={index} className="bg-white rounded-lg p-4 border border-primary-100 hover:shadow-lg transition-all duration-300">
                            <h5 className="text-base font-bold text-primary-700 mb-2">{item.title}</h5>
                            <p className="text-sm text-primary-600">{item.description}</p>
                </div>
                        ))}
                        {type.id === INSTALLATION_TYPES.INDUSTRIAL && [
                          {
                            title: "Alto Rendimiento",
                            description: "Sistemas diseñados para procesos industriales que requieren energía constante."
                          },
                          {
                            title: "Seguridad Avanzada",
                            description: "Sistemas de detección y respuesta a emergencias integrados."
                          },
                          {
                            title: "Eficiencia Económica",
                            description: "Menor costo operativo comparado con otros combustibles industriales."
                          },
                          {
                            title: "Monitoreo Continuo",
                            description: "Sistema de supervisión y control en tiempo real."
                          }
                        ].map((item, index) => (
                          <div key={index} className="bg-white rounded-lg p-4 border border-primary-100 hover:shadow-lg transition-all duration-300">
                            <h5 className="text-base font-bold text-primary-700 mb-2">{item.title}</h5>
                            <p className="text-sm text-primary-600">{item.description}</p>
              </div>
                        ))}
                </div>
              </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary-50 rounded-xl container-spacing text-center mb-5">
            <h2 className="heading-3 text-primary-800 mb-4">
              ¿Listo para instalar gas natural?
            </h2>
            <p className="text-body-lg text-primary-600 mb-6">
              Solicite una evaluación gratuita y conozca los beneficios del
              programa BonoGas
            </p>
            <ActionButton
              to="/contacto"
              text="Solicitar Evaluación"
              icon="fa-solid fa-fire-flame-curved"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instalacion; 
