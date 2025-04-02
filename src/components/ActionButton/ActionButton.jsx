import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ActionButton = ({
  to,
  href,
  text,
  icon,
  variant = "primary", // primary | secondary | outline
  className = "",
  onClick
}) => {
  const baseStyles = "transition-all duration-300 flex items-center gap-2 text-body font-medium rounded-lg";
  
  const variants = {
    primary: "bg-secondary-500 hover:bg-complemento-600 text-white px-8 py-3 justify-center transform hover:scale-105",
    secondary: "bg-white text-primary-600 hover:bg-secondary-200 px-4 sm:px-6 py-2.5 sm:py-3 justify-center sm:justify-start",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-4 sm:px-6 py-2.5 sm:py-3 justify-center"
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={finalClassName} onClick={onClick}>
        {icon && <i className={icon}></i>}
        {text}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={finalClassName}
        onClick={onClick}
      >
        {icon && <i className={icon}></i>}
        {text}
      </a>
    );
  }

  return (
    <button className={finalClassName} onClick={onClick}>
      {icon && <i className={icon}></i>}
      {text}
    </button>
  );
};

ActionButton.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default ActionButton; 