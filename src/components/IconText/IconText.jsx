import React from 'react';
import PropTypes from 'prop-types';

const IconText = ({
  icon,
  text,
  variant = "default", // default | list | feature
  className = ""
}) => {
  const baseStyles = "flex items-center gap-1.5";
  
  const variants = {
    default: "text-primary-600",
    list: "text-primary-700",
    feature: "text-primary-700 font-medium"
  };

  const iconStyles = {
    default: "text-complemento-500",
    list: "text-secondary-500 text-sm flex-shrink-0",
    feature: "text-secondary-500 text-lg"
  };

  const textStyles = {
    default: "text-body",
    list: "text-body-sm xs:text-body",
    feature: "text-body"
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <div className={finalClassName}>
      <i className={`${icon} ${iconStyles[variant]}`}></i>
      <span className={textStyles[variant]}>{text}</span>
    </div>
  );
};

IconText.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'list', 'feature']),
  className: PropTypes.string
};

export default IconText; 