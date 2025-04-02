import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Instalacion from '../pages/Instalacion';
import Servicios from '../pages/Servicios';
import Certificaciones from '../pages/Certificaciones';
import Clientes from '../pages/Clientes';
import Galeria from '../pages/Galeria';
import Contacto from '../pages/Contacto';
import GasNatural from '../pages/GasNatural';
import Simulador from '../pages/Simulador';
import FAQ from '../pages/FAQ';
import Trabaja from '../pages/Trabaja';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/instalacion" element={<Instalacion />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/certificaciones" element={<Certificaciones />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/GasNatural" element={<GasNatural />} />
      <Route path="/simulador" element={<Simulador />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/trabaja" element={<Trabaja />} />
    </Routes>
  );
};

export default AppRoutes; 