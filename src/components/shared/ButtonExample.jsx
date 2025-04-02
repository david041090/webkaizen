import React from 'react';
import Button from './Button';

/**
 * Componente de ejemplo que muestra diferentes variantes del botón
 * utilizando las clases de utilidad responsiva.
 */
const ButtonExample = () => {
  return (
    <div className="bg-white section-spacing">
      <div className="container mx-auto px-4">
        <h2 className="heading-2 text-primary-700 item-spacing text-center">Ejemplos de Botones</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-spacing container-spacing">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="heading-4 text-primary-700 mb-4">Variantes</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primario</Button>
              <Button variant="secondary">Secundario</Button>
              <Button variant="outline">Contorno</Button>
              <Button variant="ghost">Fantasma</Button>
              <Button variant="danger">Peligro</Button>
              <Button variant="success">Éxito</Button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="heading-4 text-primary-700 mb-4">Tamaños</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="small">Pequeño</Button>
              <Button size="medium">Mediano</Button>
              <Button size="large">Grande</Button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="heading-4 text-primary-700 mb-4">Con Iconos</h3>
            <div className="flex flex-wrap gap-3">
              <Button icon="fas fa-download" iconPosition="left">Descargar</Button>
              <Button icon="fas fa-arrow-right" iconPosition="right" variant="secondary">Siguiente</Button>
              <Button icon="fas fa-save" size="large" variant="success">Guardar</Button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="heading-4 text-primary-700 mb-4">Redondeados</h3>
            <div className="flex flex-wrap gap-3">
              <Button rounded>Redondeado</Button>
              <Button rounded variant="secondary" icon="fas fa-plus">Añadir</Button>
              <Button rounded size="large" variant="outline" icon="fas fa-user">Perfil</Button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="heading-4 text-primary-700 mb-4">Ancho Completo</h3>
            <div className="space-y-3">
              <Button fullWidth>Botón Ancho Completo</Button>
              <Button fullWidth variant="secondary" icon="fas fa-envelope">Enviar Mensaje</Button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="heading-4 text-primary-700 mb-4">Estados</h3>
            <div className="flex flex-wrap gap-3">
              <Button>Normal</Button>
              <Button disabled>Deshabilitado</Button>
              <Button variant="outline" disabled>Deshabilitado</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonExample; 