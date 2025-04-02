import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importar los logos
import veritas from '../../assets/image/bussines/veritas.png';
import asinergmin from '../../assets/image/bussines/asinergmin.png';
import logo from '../../assets/image/bussines/logo.png';
import logodark from '../../assets/image/bussines/logodark.png';

const LOGOS = [
  { src: veritas, alt: 'Bureau Veritas' },
  { src: asinergmin, alt: 'Osinergmin' },
  { src: logo, alt: 'Logo Light' },
  { src: logodark, alt: 'Logo Dark' },
];

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full bg-white py-8">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {LOGOS.map((logo, index) => (
            <div key={index} className="px-2">
              <div className="flex justify-center items-center h-16 group">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 w-auto object-contain transition-all duration-300 
                  md:filter md:grayscale md:group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider; 