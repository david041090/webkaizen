import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  title,
  description,
  icon,
  variant = "default", // default | benefit | feature
  className = ""
}) => {
  const baseStyles = "transition-all duration-300";
  
  const variants = {
    default: "bg-white rounded-lg p-4 border border-primary-100 hover:shadow-lg",
    benefit: "border border-primary-100 rounded-lg p-2 sm:p-4 text-center flex flex-col items-center gap-1 sm:gap-2",
    feature: "bg-white rounded-lg p-4 transition-all duration-300 hover:shadow-lg border border-primary-100"
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <div className={finalClassName}>
      {icon && (
        <div className={variant === "benefit" ? "mb-1" : "mb-2"}>
          <i className={`${icon} ${variant === "benefit" ? "text-secondary-500 text-lg sm:text-2xl" : "text-complemento-500"}`}></i>
        </div>
      )}
      <h5 className={`${
        variant === "benefit" 
          ? "text-body-sm sm:text-body font-medium" 
          : "text-base font-bold text-primary-700 mb-2"
      }`}>
        {title}
      </h5>
      {description && (
        <p className={`${
          variant === "benefit"
            ? ""
            : "text-sm text-primary-600"
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'benefit', 'feature']),
  className: PropTypes.string
};

export default Card; 