import React from 'react';
import PageBanner from '../components/PageBanner';
import gasNaturalImage from '../assets/image/slider/gas_natural.jpg';

const Servicios = () => {
  return (
    <div className="w-full">
      <PageBanner
        title="Nuestros Servicios"
        subtitle="Soluciones integrales en gas natural para su hogar o negocio"
        backgroundImage={gasNaturalImage}
      />
      <div className="container mx-auto px-4 section-spacing">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading-2 text-primary-800 item-spacing">
            Nuestros Servicios
          </h1>

          {/* Servicio Principal */}
          <div className="bg-white rounded-xl shadow-custom container-spacing item-spacing">
            <div className="grid md:grid-cols-2 grid-spacing items-center">
              <div>
                <h2 className="heading-3 text-primary-700 item-spacing">
                  Instalación de Gas Natural
                </h2>
                <p className="text-body-lg text-primary-600 mb-6">
                  Realizamos instalaciones de gas natural para hogares y empresas, 
                  cumpliendo con todos los estándares de seguridad y normativas vigentes.
                </p>
                <ul className="space-y-3 text-body text-primary-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-complemento-500 mr-2 icon-small"></i>
                    Instalaciones residenciales
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-complemento-500 mr-2 icon-small"></i>
                    Instalaciones comerciales
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-complemento-500 mr-2 icon-small"></i>
                    Conversiones y adaptaciones
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-complemento-500 mr-2 icon-small"></i>
                    Certificación incluida
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <i className="fas fa-fire text-9xl text-complemento-500"></i>
              </div>
            </div>
          </div>

          {/* Grid de Servicios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-spacing">
            {/* Mantenimiento */}
            <div className="bg-white rounded-xl shadow-custom container-spacing">
              <div className="text-complemento-500 mb-4">
                <i className="fas fa-tools icon-large"></i>
              </div>
              <h3 className="heading-4 text-primary-700 mb-3">
                Mantenimiento Preventivo
              </h3>
              <p className="text-body text-primary-600 mb-4">
                Servicio de mantenimiento regular para asegurar el funcionamiento 
                óptimo y seguro de su instalación de gas.
              </p>
              <ul className="space-y-2 text-body-sm text-primary-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-complemento-500 mr-2 icon-small"></i>
                  Revisión de tuberías
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-complemento-500 mr-2 icon-small"></i>
                  Control de fugas
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-complemento-500 mr-2 icon-small"></i>
                  Limpieza de sistemas
                </li>
              </ul>
            </div>

            {/* Certificaciones */}
            <div className="bg-white rounded-xl shadow-custom container-spacing">
              <div className="text-complemento-500 mb-4">
                <i className="fas fa-certificate icon-large"></i>
              </div>
              <h3 className="heading-4 text-primary-700 mb-3">
                Certificaciones
              </h3>
              <p className="text-body text-primary-600 mb-4">
                Realizamos todas las certificaciones necesarias para su instalación 
                de gas natural, cumpliendo con la normativa vigente.
              </p>
              <ul className="space-y-2 text-body-sm text-primary-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-complemento-500 mr-2 icon-small"></i>
                  Certificación inicial
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-complemento-500 mr-2 icon-small"></i>
                  Renovación de certificados
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-complemento-500 mr-2 icon-small"></i>
                  Inspecciones técnicas
                </li>
              </ul>
            </div>

            {/* Emergencias */}
            <div className="bg-white rounded-xl shadow-custom container-spacing">
              <div className="text-complemento-500 mb-4">
                <i className="fas fa-exclamation-triangle icon-large"></i>
              </div>
              <h3 className="heading-4 text-primary-700 mb-3">
                Atención de Emergencias
              </h3>
              <p className="text-body text-primary-600 mb-4">
                Servicio de emergencia disponible 24/7 para atender cualquier 
                incidencia con su instalación de gas.
              </p>
              <ul className="space-y-2 text-body-sm text-primary-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-complemento-500 mr-2 icon-small"></i>
                  Atención inmediata
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-complemento-500 mr-2 icon-small"></i>
                  Personal especializado
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-complemento-500 mr-2 icon-small"></i>
                  Disponibilidad 24/7
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-primary-50 rounded-xl container-spacing text-center">
            <h2 className="heading-3 text-primary-800 mb-4">
              ¿Necesita alguno de nuestros servicios?
            </h2>
            <p className="text-body-lg text-primary-600 mb-6">
              Contáctenos para obtener una cotización gratuita y personalizada
            </p>
            <button className="bg-complemento-500 hover:bg-complemento-600 text-white px-8 py-3 rounded-lg 
              transition-all duration-300 transform hover:scale-105 text-body font-medium">
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios; 