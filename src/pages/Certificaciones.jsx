import React from 'react';
import PageBanner from '../components/PageBanner';
import gasNaturalImage from '../assets/image/slider/gas_natural.jpg';
import osinergminLogo from '../assets/image/asinergmin.png';
import veritasLogo from '../assets/image/veritas.png';

const Certificaciones = () => {
  return (
    <div className="w-full">
      <PageBanner
        title="Certificaciones"
        subtitle="Respaldados por los más altos estándares de calidad"
        backgroundImage={gasNaturalImage}
      />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Certificaciones Principales */}
          <section className="mb-8 md:mb-12">
            <h2 className="heading-1 text-primary-800 text-center mb-6 md:mb-8">
              Instituciones que nos respaldan
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Osinergmin */}
              <div className="bg-gradient-to-b from-white to-primary-50 rounded-2xl shadow-custom p-4 md:p-6 relative overflow-hidden">
                {/* Fondo decorativo */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100/30 rounded-full transform translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-complemento-100/30 rounded-full transform -translate-x-8 translate-y-8"></div>
                
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white p-3 rounded-xl shadow-md">
                      <img
                        src={osinergminLogo}
                        alt="Osinergmin"
                        className="h-16 md:h-20 w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-body text-primary-700 font-medium text-center">
                      Certificado con la categoría IG-3 que permite:
                    </p>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <i className="fas fa-check text-complemento-500 text-lg"></i>
                          <span className="text-body-sm text-primary-600">Diseñar instalaciones de gas natural</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <i className="fas fa-check text-complemento-500 text-lg"></i>
                          <span className="text-body-sm text-primary-600">Supervisar obras</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <i className="fas fa-check text-complemento-500 text-lg"></i>
                          <span className="text-body-sm text-primary-600">Construir y reparar instalaciones</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <i className="fas fa-check text-complemento-500 text-lg"></i>
                          <span className="text-body-sm text-primary-600">Mantener instalaciones</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bureau Veritas */}
              <div className="bg-gradient-to-b from-white to-primary-50 rounded-2xl shadow-custom p-4 md:p-6 relative overflow-hidden">
                {/* Fondo decorativo */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100/30 rounded-full transform translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-complemento-100/30 rounded-full transform -translate-x-8 translate-y-8"></div>
                
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white p-3 rounded-xl shadow-md">
                      <img
                        src={veritasLogo}
                        alt="Bureau Veritas"
                        className="h-16 md:h-20 w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-body text-primary-700 font-medium text-center">
                      Certificado que garantiza:
                    </p>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <i className="fas fa-check text-complemento-500 text-lg"></i>
                          <span className="text-body-sm text-primary-600">Cumplimiento de normas técnicas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <i className="fas fa-check text-complemento-500 text-lg"></i>
                          <span className="text-body-sm text-primary-600">Seguridad y salud en proyectos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <i className="fas fa-check text-complemento-500 text-lg"></i>
                          <span className="text-body-sm text-primary-600">Sostenibilidad ambiental</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Estándares de Calidad */}
          <section className="mb-8 md:mb-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-4 md:p-6">
            <h2 className="heading-2 text-white text-center mb-6 md:mb-8">
              Estándares de Calidad
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-tools text-2xl text-white"></i>
                  </div>
                  <h3 className="heading-3 text-white">
                    Materiales Certificados
                  </h3>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-complemento-500 text-lg"></i>
                      <span className="text-body-sm text-white">Tuberías y accesorios con certificación internacional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-complemento-500 text-lg"></i>
                      <span className="text-body-sm text-white">Válvulas de seguridad homologadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-complemento-500 text-lg"></i>
                      <span className="text-body-sm text-white">Equipos de medición calibrados</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-clipboard-check text-2xl text-white"></i>
                  </div>
                  <h3 className="heading-3 text-white">
                    Procesos Certificados
                  </h3>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-complemento-500 text-lg"></i>
                      <span className="text-body-sm text-white">Procedimientos estandarizados de instalación</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-complemento-500 text-lg"></i>
                      <span className="text-body-sm text-white">Pruebas de hermeticidad documentadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-complemento-500 text-lg"></i>
                      <span className="text-body-sm text-white">Control de calidad en cada etapa</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Certificado */}
          <section className="mb-8 md:mb-12">
            <h2 className="heading-2 text-primary-800 text-center mb-6 md:mb-8">
              Personal Certificado
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-2xl shadow-custom p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-tie text-2xl text-primary-700"></i>
                </div>
                <h3 className="heading-4 text-primary-700 mb-2">
                  Técnicos Especializados
                </h3>
                <p className="text-body text-primary-600">
                  Profesionales con certificación IG1, IG2 e IG3 de Osinergmin.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-custom p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-graduate text-2xl text-primary-700"></i>
                </div>
                <h3 className="heading-4 text-primary-700 mb-2">
                  Ingenieros Calificados
                </h3>
                <p className="text-body text-primary-600">
                  Ingenieros con especialización en gas natural y sistemas de tuberías.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-custom p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-hard-hat text-2xl text-primary-700"></i>
                </div>
                <h3 className="heading-4 text-primary-700 mb-2">
                  Personal de Seguridad
                </h3>
                <p className="text-body text-primary-600">
                  Equipo capacitado en normas de seguridad y procedimientos de emergencia.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-4 md:p-6 text-center">
            <h2 className="heading-2 text-white mb-2 md:mb-3">
              ¿Desea una instalación certificada?
            </h2>
            <p className="text-body text-primary-100 mb-3 md:mb-4 max-w-2xl mx-auto">
              Contáctenos para obtener más información sobre nuestras certificaciones y servicios
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

export default Certificaciones; 