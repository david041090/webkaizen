import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import TopBar from '../components/TopBar/TopBar';
import Footer from '../components/Footer/Footer';
import FloatingIcons from '../components/FloatingIcons/FloatingIcons';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingIcons />
    </div>
  );
};

export default MainLayout; 