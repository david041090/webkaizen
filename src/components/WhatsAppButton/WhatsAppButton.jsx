import React from 'react';
import PropTypes from 'prop-types';

const WhatsAppButton = ({ 
  phoneNumber = "51999393895",
  text = "Escribir a WhatsApp",
  className = "",
  variant = "default" // default | inline
}) => {
  const baseStyles = "transition-all duration-300 flex items-center gap-2 text-body font-medium rounded-lg";
  
  const variants = {
    default: "bg-[#25D366] hover:bg-[#128C7E] text-white px-4 sm:px-6 py-2.5 sm:py-3 justify-center",
    inline: "bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 justify-center transform hover:scale-105"
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={finalClassName}
    >
      <i className="fa-brands fa-whatsapp text-xl"></i>
      {text}
    </a>
  );
};

WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'inline'])
};

export default WhatsAppButton; 