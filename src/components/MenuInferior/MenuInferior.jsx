import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    icon: 'fas fa-home',
    title: 'Gas natural',
    subtitle: 'y sus beneficios',
    path: '/GasNatural'
  },
  {
    icon: 'fas fa-calculator',
    title: 'Simulador de',
    subtitle: 'ahorro',
    path: '/simulador'
  },
  {
    icon: 'fas fa-question-circle',
    title: 'Preguntas',
    subtitle: 'frecuentes',
    path: '/faq'
  },
  {
    icon: 'fas fa-info-circle',
    title: '¿Qué es',
    subtitle: 'BonoGas?',
    path: 'https://www.gob.pe/44184-programa-bonogas',
    isExternal: true
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Trabaja con',
    subtitle: 'nosotros',
    path: '/trabaja'
  }
];

const MenuInferior = () => {
  return (
    <>
      {/* Versión Desktop - Superpuesta sobre el slider */}
      <div className="hidden md:block w-full absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="bg-sky-400 rounded-t-lg shadow-lg">
            <div className="grid grid-cols-5">
              {menuItems.map((item, index) => (
                item.isExternal ? (
                  <a
                    key={index}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center py-4 px-2 text-white hover:bg-sky-500 transition-all duration-300
                      ${index === 0 ? 'rounded-tl-lg' : ''}
                      ${index === menuItems.length - 1 ? 'rounded-tr-lg' : ''}
                      ${index !== menuItems.length - 1 ? 'border-r border-sky-300' : ''}`}
                  >
                    <i className={`${item.icon} text-2xl mb-2`}></i>
                    <div className="text-center">
                      <div className="text-sm font-medium leading-tight">{item.title}</div>
                      <div className="text-sm leading-tight">{item.subtitle}</div>
                    </div>
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    className={`flex flex-col items-center justify-center py-4 px-2 text-white hover:bg-sky-500 transition-all duration-300
                      ${index === 0 ? 'rounded-tl-lg' : ''}
                      ${index === menuItems.length - 1 ? 'rounded-tr-lg' : ''}
                      ${index !== menuItems.length - 1 ? 'border-r border-sky-300' : ''}`}
                  >
                    <i className={`${item.icon} text-2xl mb-2`}></i>
                    <div className="text-center">
                      <div className="text-sm font-medium leading-tight">{item.title}</div>
                      <div className="text-sm leading-tight">{item.subtitle}</div>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Versión Mobile - Ocupando exactamente el 40% inferior de la pantalla */}
      <div className="md:hidden w-full h-full bg-sky-400">
        <div className="flex flex-col h-full justify-between">
          {menuItems.map((item, index) => (
            item.isExternal ? (
              <a
                key={index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-3 flex-1 border-b border-sky-300 hover:bg-sky-500 transition-all duration-300"
              >
                <i className={`${item.icon} text-xl text-white w-8`}></i>
                <div className="text-white">
                  <span className="font-medium">{item.title}</span>
                  {' '}
                  <span>{item.subtitle}</span>
                </div>
              </a>
            ) : (
              <Link
                key={index}
                to={item.path}
                className="flex items-center px-4 py-3 flex-1 border-b border-sky-300 hover:bg-sky-500 transition-all duration-300"
              >
                <i className={`${item.icon} text-xl text-white w-8`}></i>
                <div className="text-white">
                  <span className="font-medium">{item.title}</span>
                  {' '}
                  <span>{item.subtitle}</span>
                </div>
              </Link>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuInferior; 