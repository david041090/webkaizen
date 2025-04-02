import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Sobre Nosotros</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">
          Web Kaizen es una plataforma dedicada a la mejora continua y el desarrollo profesional.
          Nuestro objetivo es proporcionar herramientas y recursos que ayuden a las personas y
          organizaciones a alcanzar su máximo potencial.
        </p>
        <p className="text-gray-600 mb-4">
          Fundada en 2024, nos especializamos en:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Desarrollo de habilidades profesionales</li>
          <li>Gestión de proyectos eficiente</li>
          <li>Análisis de datos y métricas</li>
          <li>Colaboración en equipo</li>
        </ul>
      </div>
    </div>
  );
};

export default About; 