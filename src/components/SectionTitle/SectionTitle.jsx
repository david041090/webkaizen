import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({
  title,
  subtitle,
  icon,
  align = "left", // left | center
  variant = "default", // default | large
  className = ""
}) => {
  const baseStyles = "text-primary-700";
  
  const variants = {
    default: "heading-4",
    large: "heading-3"
  };

  const alignments = {
    left: "text-left",
    center: "text-center"
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${alignments[align]} ${className}`;

  return (
    <div className={`${align === 'center' ? 'text-center' : ''} mb-6`}>
      <h2 className={finalClassName}>
        {icon && (
          <i className={`${icon} text-complemento-500 ${align === 'left' ? 'mr-2' : 'mb-2 block'}`}></i>
        )}
        {title}
      </h2>
      {subtitle && (
        <p className={`text-body-lg text-primary-600 mt-2 ${align === 'center' ? 'mx-auto max-w-2xl' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
  variant: PropTypes.oneOf(['default', 'large']),
  className: PropTypes.string
};

export default SectionTitle; 