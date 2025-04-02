import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const FeatureSection = ({
  title,
  icon,
  items,
  columns = 2,
  variant = "default" // default | benefit
}) => {
  return (
    <div className="mt-6">
      <h4 className="heading-4 text-primary-700 mb-4 flex items-center gap-2">
        {icon && <i className={`${icon} text-complemento-500`}></i>}
        {title}
      </h4>
      <div className={`grid grid-cols-1 ${
        variant === "benefit" 
          ? "sm:grid-cols-3" 
          : `sm:grid-cols-${columns}`
      } gap-4`}>
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            variant={variant === "benefit" ? "benefit" : "feature"}
          />
        ))}
      </div>
    </div>
  );
};

FeatureSection.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      icon: PropTypes.string
    })
  ).isRequired,
  columns: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'benefit'])
};

export default FeatureSection; 