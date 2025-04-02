import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import AsideLateral from '../AsideLateral/AsideLateral';

const navigationLinks = [
  { path: '/', label: 'Inicio', icon: 'fa-home' },
  { path: '/nosotros', label: 'Nosotros', icon: 'fa-users' },
  { path: '/instalacion', label: 'Instalación', icon: 'fa-tools' },
  { path: '/certificaciones', label: 'Certificaciones', icon: 'fa-certificate' },
  { path: '/clientes', label: 'Clientes', icon: 'fa-handshake' },
  { path: '/galeria', label: 'Galería', icon: 'fa-images' },
  { path: '/contacto', label: 'Contacto', icon: 'fa-envelope' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const topBarHeight = 32;
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsSticky(position > topBarHeight);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const translateY = Math.min(scrollPosition, topBarHeight);

  return (
    <>
      <nav 
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300
          ${isSticky ? 'bg-gradient-to-r from-primary-900/95 via-primary-800/95 to-primary-900/95 backdrop-blur-sm shadow-lg' : ''}`}
        style={{ 
          transform: `translateY(-${translateY}px)`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <Logo />
              </Link>
            </div>

            {/* Menú y botones alineados a la derecha */}
            <div className="flex items-center">
              {/* Menú Desktop */}
              <nav className="hidden xl:flex items-center gap-2 mr-4">
                {navigationLinks.map(({ path, label, icon }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`relative px-3 py-1.5 text-body-sm font-medium tracking-wider uppercase transition-all duration-300
                      ${location.pathname === path 
                        ? 'text-white bg-primary-800 ring-1 ring-complemento-300/30' 
                        : 'text-primary-100 hover:text-white'}
                      hover:bg-primary-800/80
                      group overflow-hidden rounded-md`}
                  >
                    <span className="relative z-10 flex items-center">
                      <i className={`fas ${icon} icon-small mr-2 ${location.pathname === path 
                        ? 'text-complemento-300' 
                        : 'opacity-0 group-hover:opacity-100 transition-opacity duration-300'}`}></i>
                      {label}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Botones de acción - Desktop */}
              <div className="hidden xl:flex items-center">
                <button 
                  onClick={() => setIsAsideOpen(true)}
                  className="bg-white/90 p-2.5 rounded-md hover:bg-white transition-all duration-300 group ring-1 ring-white/10"
                  aria-label="Abrir panel lateral"
                >
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 h-1.5 rounded-full bg-gray-800 group-hover:bg-[#00ff9d] transition-colors duration-300"
                      ></div>
                    ))}
                  </div>
                </button>
              </div>

              {/* Botón Menú Móvil */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden inline-flex items-center justify-center p-2 rounded-md text-primary-100 
                  hover:text-complemento-300 hover:bg-primary-800/50 focus:outline-none transition-all duration-300"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} icon-medium transition-transform duration-200`} />
              </button>
            </div>
          </div>

          {/* Menú Móvil */}
          <div 
            className={`xl:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden
              ${isSticky ? 'bg-primary-900/95' : 'bg-primary-900/80'}`}
          >
            <div className="py-2 space-y-0.5">
              {navigationLinks.map(({ path, label, icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center px-3 py-2 rounded-md text-body-sm font-medium transition-all duration-300
                    ${location.pathname === path
                      ? 'text-white bg-primary-800 ring-1 ring-complemento-300/30' 
                      : 'text-primary-100 hover:text-white hover:bg-primary-800/80'}
                    group relative overflow-hidden`}
                >
                  <div className="flex items-center">
                    <i className={`fas ${icon} icon-small transition-all duration-300 
                      ${location.pathname === path 
                        ? 'text-complemento-300' 
                        : 'group-hover:text-complemento-300 group-hover:scale-110'}`}></i>
                    <span className="ml-2.5 relative z-10">{label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* AsideLateral Component */}
      <AsideLateral 
        isOpen={isAsideOpen} 
        onClose={() => setIsAsideOpen(false)} 
      />
    </>
  );
};

export default Navbar; 