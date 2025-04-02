import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import WhatsAppButton from '../components/WhatsAppButton';
import gasNaturalImage from '../assets/image/slider/gas_natural.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faClock 
} from '@fortawesome/free-solid-svg-icons';

const Contacto = () => {
  const [formData, setFormData] = useState({
    tipoPersona: '',
    motivoContacto: '',
    nombreEmpresa: '',
    nombre: '',
    apellidos: '',
    dni: '',
    telefono: '',
    email: '',
    mensaje: '',
    aceptaTerminos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
  };

  const motivosContacto = [
    { value: 'informacion', label: 'Información' },
    { value: 'solicitud_instalacion', label: 'Solicitud de Instalación' },
    { value: 'asistencia_tecnica', label: 'Solicitud de Asistencia Técnica' },
    { value: 'reclamo', label: 'Solicitud de Reclamo' },
    { value: 'mantenimiento', label: 'Servicio de Mantenimiento' },
    { value: 'emergencia', label: 'Reporte de Emergencia' },
    { value: 'presupuesto', label: 'Solicitud de Presupuesto' },
    { value: 'otros', label: 'Otros' }
  ];

  return (
    <div className="w-full">
      <PageBanner
        title="Contacto y consultas"
        subtitle="Kaizen pone a disposición su formulario de contactos y consultas"
        backgroundImage={gasNaturalImage}
      />
      <div className="section-spacing">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 grid-spacing">
            {/* Formulario de Contacto */}
            <div className="bg-white rounded-xl shadow-custom container-spacing">
              <h2 className="heading-3 text-primary-700 item-spacing">
                Envíanos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="tipoPersona" className="block text-primary-600 mb-2 text-body">
                    Selecciona una opción*
                  </label>
                  <select
                    id="tipoPersona"
                    name="tipoPersona"
                    value={formData.tipoPersona}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-complemento-500 focus:border-transparent"
                    required
                  >
                    <option value="">Seleccione el tipo de persona</option>
                    <option value="natural">Persona Natural / Domicilio</option>
                    <option value="juridica">Persona Jurídica / Empresa / Negocio</option>
                  </select>
                </div>

                {formData.tipoPersona === 'juridica' && (
                  <div>
                    <label htmlFor="nombreEmpresa" className="block text-primary-600 mb-2 text-body">
                      Nombre de la Empresa*
                    </label>
                    <input
                      type="text"
                      id="nombreEmpresa"
                      name="nombreEmpresa"
                      value={formData.nombreEmpresa}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-complemento-500 focus:border-transparent"
                      required={formData.tipoPersona === 'juridica'}
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="motivoContacto" className="block text-primary-600 mb-2 text-body">
                    Motivos de Contacto*
                  </label>
                  <select
                    id="motivoContacto"
                    name="motivoContacto"
                    value={formData.motivoContacto}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-complemento-500 focus:border-transparent"
                    required
                  >
                    <option value="">Seleccione el motivo</option>
                    {motivosContacto.map(motivo => (
                      <option key={motivo.value} value={motivo.value}>
                        {motivo.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-primary-600 mb-2 text-body">
                      {formData.tipoPersona === 'juridica' ? 'Nombre del Representante*' : 'Nombre*'}
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-complemento-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="apellidos" className="block text-primary-600 mb-2 text-body">
                      {formData.tipoPersona === 'juridica' ? 'Apellidos del Representante*' : 'Apellidos*'}
                    </label>
                    <input
                      type="text"
                      id="apellidos"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-complemento-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="dni" className="block text-primary-600 mb-2 text-body">
                      {formData.tipoPersona === 'juridica' ? 'DNI del Representante*' : 'DNI*'}
                    </label>
                    <input
                      type="text"
                      id="dni"
                      name="dni"
                      value={formData.dni}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-complemento-500 focus:border-transparent"
                      required
                      maxLength="8"
                      pattern="[0-9]{8}"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-primary-600 mb-2 text-body">
                      Teléfono*
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-complemento-500 focus:border-transparent"
                      required
                      pattern="[0-9]{9}"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-primary-600 mb-2 text-body">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-complemento-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-primary-600 mb-2 text-body">
                    Mensaje*
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-complemento-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="aceptaTerminos"
                    name="aceptaTerminos"
                    checked={formData.aceptaTerminos}
                    onChange={handleChange}
                    className="w-4 h-4 text-complemento-500 border-primary-300 rounded focus:ring-complemento-500"
                    required
                  />
                  <label htmlFor="aceptaTerminos" className="text-body text-primary-600">
                    Acepto los <a href="#" className="text-complemento-500 hover:underline">Términos y Condiciones</a>
                  </label>
                </div>

                <div className="text-body-sm text-primary-500 mb-4">
                  * Campos obligatorios
                </div>

                <button
                  type="submit"
                  className="w-full bg-complemento-500 hover:bg-complemento-600 text-white px-8 py-3 rounded-lg 
                    transition-all duration-300 transform hover:scale-105 text-body font-medium"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-custom container-spacing">
                <h2 className="heading-3 text-primary-700 item-spacing">
                  Información de Contacto
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="icon-medium text-complemento-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="heading-5 text-primary-700">Dirección</h3>
                      <p className="text-body text-primary-600">
                        Jr. Bartolomé Ruiz 293, Urb. Salamanca de Monterrico, Ate
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FontAwesomeIcon 
                        icon={faPhone}
                        className="icon-medium text-complemento-500"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="heading-5 text-primary-700">Teléfono</h3>
                      <p className="text-body text-primary-600">
                        01-6828303
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FontAwesomeIcon 
                        icon={faEnvelope}
                        className="icon-medium text-complemento-500"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="heading-5 text-primary-700">Correo</h3>
                      <p className="text-body text-primary-600">
                        grupokaizen.ing@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FontAwesomeIcon 
                        icon={faClock}
                        className="icon-medium text-complemento-500"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="heading-5 text-primary-700">Horario</h3>
                      <p className="text-body text-primary-600">
                        Lunes a Viernes: 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom container-spacing">
                <h2 className="heading-3 text-primary-700 item-spacing">
                  Horario de Atención
                </h2>
                <div className="space-y-2">
                  <p className="text-body text-primary-600">
                    <span className="font-medium">Lunes a Viernes:</span> 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-body text-primary-600">
                    <span className="font-medium">Sábados:</span> 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-6 md:p-8">
                <div className="text-center">
                  <h2 className="heading-3 text-white mb-4">
                    ¿Necesitas atención inmediata?
                  </h2>
                  <p className="text-white/90 mb-6">
                    Contáctanos directamente por WhatsApp para una respuesta rápida
                  </p>
                  <div className="text-center">
                    <WhatsAppButton 
                      phoneNumber="51959363858"
                      variant="default"
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto; 