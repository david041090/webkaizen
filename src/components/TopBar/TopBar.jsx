import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-primary-900 text-white relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center h-8">
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:info@gkaizen.com" 
              className="flex items-center text-white hover:text-complemento-300 transition-colors duration-200 group cursor-pointer"
              aria-label="Email"
            >
              <i className="fas fa-envelope mr-2"></i>
              <span className="text-sm group-hover:text-complemento-300">info@gkaizen.com</span>
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100078954631590" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-complemento-300 transition-colors duration-200 cursor-pointer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>

            </a>
            <a 
              href="https://www.instagram.com/gkaizen.ic?igsh=NzR0bnlza3ZrMGJv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-complemento-300 transition-colors duration-200 cursor-pointer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-complemento-300 transition-colors duration-200 cursor-pointer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
           
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-complemento-300 transition-colors duration-200 cursor-pointer"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 