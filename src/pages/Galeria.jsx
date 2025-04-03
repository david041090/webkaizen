import React, { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import gasNaturalImage from '../assets/image/slider/gas_natural.jpg';
import configGaleria from '../config/galeria.json';
import '../styles/Galeria.css';

const importarImagenes = () => {
  const imagenes = {
    comercial: {
      1: new URL('../assets/image/galeria/comercial/01.jpg', import.meta.url).href,
      2: new URL('../assets/image/galeria/comercial/02.jpg', import.meta.url).href,
      3: new URL('../assets/image/galeria/comercial/03.jpg', import.meta.url).href,
      4: new URL('../assets/image/galeria/comercial/04.jpg', import.meta.url).href,
      5: new URL('../assets/image/galeria/comercial/05.jpg', import.meta.url).href,
      6: new URL('../assets/image/galeria/comercial/06.JPG', import.meta.url).href,
      7: new URL('../assets/image/galeria/comercial/07.JPG', import.meta.url).href,
      8: new URL('../assets/image/galeria/comercial/08.JPG', import.meta.url).href,
      9: new URL('../assets/image/galeria/comercial/09.JPG', import.meta.url).href,
      10: new URL('../assets/image/galeria/comercial/10.JPG', import.meta.url).href,
      11: new URL('../assets/image/galeria/comercial/11.JPG', import.meta.url).href,
      12: new URL('../assets/image/galeria/comercial/12.JPG', import.meta.url).href,
      13: new URL('../assets/image/galeria/comercial/13.JPG', import.meta.url).href
    },
    industrial: {
      1: new URL('../assets/image/galeria/industrial/01.jpg', import.meta.url).href,
      2: new URL('../assets/image/galeria/industrial/02.jpg', import.meta.url).href,
      3: new URL('../assets/image/galeria/industrial/03.jpg', import.meta.url).href,
      4: new URL('../assets/image/galeria/industrial/04.jpg', import.meta.url).href,
      5: new URL('../assets/image/galeria/industrial/05.jpg', import.meta.url).href,
      6: new URL('../assets/image/galeria/industrial/06.jpg', import.meta.url).href,
      7: new URL('../assets/image/galeria/industrial/07.jpg', import.meta.url).href,
      8: new URL('../assets/image/galeria/industrial/08.jpg', import.meta.url).href,
      9: new URL('../assets/image/galeria/industrial/09.jpg', import.meta.url).href
    },
    multifamiliar: {
      1: new URL('../assets/image/galeria/multifamiliar/01.jpg', import.meta.url).href,
      2: new URL('../assets/image/galeria/multifamiliar/02.jpg', import.meta.url).href,
      3: new URL('../assets/image/galeria/multifamiliar/03.jpg', import.meta.url).href,
      4: new URL('../assets/image/galeria/multifamiliar/04.jpg', import.meta.url).href,
      5: new URL('../assets/image/galeria/multifamiliar/05.jpg', import.meta.url).href,
      6: new URL('../assets/image/galeria/multifamiliar/06.jpg', import.meta.url).href,
      7: new URL('../assets/image/galeria/multifamiliar/07.jpg', import.meta.url).href,
      8: new URL('../assets/image/galeria/multifamiliar/08.jpg', import.meta.url).href,
      9: new URL('../assets/image/galeria/multifamiliar/09.jpg', import.meta.url).href,
      10: new URL('../assets/image/galeria/multifamiliar/10.jpg', import.meta.url).href,
      11: new URL('../assets/image/galeria/multifamiliar/11.jpg', import.meta.url).href,
      12: new URL('../assets/image/galeria/multifamiliar/12.jpg', import.meta.url).href,
      13: new URL('../assets/image/galeria/multifamiliar/13.jpg', import.meta.url).href,
      14: new URL('../assets/image/galeria/multifamiliar/14.jpg', import.meta.url).href,
      15: new URL('../assets/image/galeria/multifamiliar/15.jpg', import.meta.url).href,
      16: new URL('../assets/image/galeria/multifamiliar/16.jpg', import.meta.url).href,
      17: new URL('../assets/image/galeria/multifamiliar/17.jpg', import.meta.url).href,
      18: new URL('../assets/image/galeria/multifamiliar/18.jpg', import.meta.url).href
    },
    residencial: {
      1: new URL('../assets/image/galeria/residencial/01.jpg', import.meta.url).href,
      2: new URL('../assets/image/galeria/residencial/02.jpg', import.meta.url).href,
      3: new URL('../assets/image/galeria/residencial/03.jpg', import.meta.url).href,
      4: new URL('../assets/image/galeria/residencial/04.jpg', import.meta.url).href,
      5: new URL('../assets/image/galeria/residencial/05.jpg', import.meta.url).href,
      6: new URL('../assets/image/galeria/residencial/06.jpg', import.meta.url).href,
      7: new URL('../assets/image/galeria/residencial/07.jpg', import.meta.url).href,
      8: new URL('../assets/image/galeria/residencial/08.jpg', import.meta.url).href,
      9: new URL('../assets/image/galeria/residencial/09.jpg', import.meta.url).href,
      10: new URL('../assets/image/galeria/residencial/10.jpg', import.meta.url).href,
      11: new URL('../assets/image/galeria/residencial/11.jpg', import.meta.url).href,
      12: new URL('../assets/image/galeria/residencial/12.jpg', import.meta.url).href,
      13: new URL('../assets/image/galeria/residencial/13.jpg', import.meta.url).href,
      14: new URL('../assets/image/galeria/residencial/14.jpg', import.meta.url).href,
      15: new URL('../assets/image/galeria/residencial/15.jpg', import.meta.url).href,
      16: new URL('../assets/image/galeria/residencial/16.jpg', import.meta.url).href,
      17: new URL('../assets/image/galeria/residencial/17.jpg', import.meta.url).href,
      18: new URL('../assets/image/galeria/residencial/18.jpg', import.meta.url).href,
      19: new URL('../assets/image/galeria/residencial/19.jpg', import.meta.url).href,
      20: new URL('../assets/image/galeria/residencial/20.jpg', import.meta.url).href,
      21: new URL('../assets/image/galeria/residencial/21.jpg', import.meta.url).href,
      22: new URL('../assets/image/galeria/residencial/22.jpg', import.meta.url).href,
      23: new URL('../assets/image/galeria/residencial/23.jpg', import.meta.url).href,
      24: new URL('../assets/image/galeria/residencial/24.jpg', import.meta.url).href,
      25: new URL('../assets/image/galeria/residencial/25.jpg', import.meta.url).href,
      26: new URL('../assets/image/galeria/residencial/26.jpg', import.meta.url).href,
      27: new URL('../assets/image/galeria/residencial/27.jpg', import.meta.url).href,
      28: new URL('../assets/image/galeria/residencial/28.jpg', import.meta.url).href,
      29: new URL('../assets/image/galeria/residencial/29.jpg', import.meta.url).href,
      30: new URL('../assets/image/galeria/residencial/30.jpg', import.meta.url).href,
      31: new URL('../assets/image/galeria/residencial/31.jpg', import.meta.url).href,
      32: new URL('../assets/image/galeria/residencial/32.jpg', import.meta.url).href
    }
  };
  return imagenes;
};

const Galeria = () => {
  const [images, setImages] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const categorias = ["Todos", "Residencial", "Comercial", "Multifamiliar", "Industrial"];

  useEffect(() => {
    const cargarImagenes = () => {
      const imagenes = importarImagenes();
      let todasLasImagenes = [];

      if (categoriaActiva === "Todos") {
        Object.values(imagenes).forEach(categoria => {
          Object.values(categoria).forEach(url => {
            todasLasImagenes.push({
              src: url,
              alt: "Imagen de galería"
            });
          });
        });
      } else {
        const categoriaKey = categoriaActiva.toLowerCase();
        if (imagenes[categoriaKey]) {
          Object.values(imagenes[categoriaKey]).forEach(url => {
            todasLasImagenes.push({
              src: url,
              alt: "Imagen de galería"
            });
          });
        }
      }

      setImages(todasLasImagenes);
    };

    cargarImagenes();
  }, [categoriaActiva]);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) return images.length - 1;
      return newIndex;
    });
    setSelectedImage(images[currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1]);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
    setSelectedImage(images[currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1]);
  };

  const handleKeyDown = (e) => {
    if (!isModalOpen) return;
    
    if (e.key === 'ArrowLeft') {
      handlePrevImage(e);
    } else if (e.key === 'ArrowRight') {
      handleNextImage(e);
    } else if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentImageIndex]);

  return (
    <div className="w-full relative">
      <div className="absolute inset-0">
        <PageBanner
          title="Galería"
          backgroundImage={gasNaturalImage}
          description="Explora nuestros proyectos"
        />
      </div>

      <div className="relative pt-[45vh] md:pt-[45vh]">
        <div className="container mx-auto px-4 pt-12 md:pt-16">
          <div className="categorias-container mb-8">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className={`categoria-btn ${categoriaActiva === categoria ? 'active' : ''}`}
                onClick={() => setCategoriaActiva(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => handleImageClick(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close absolute top-4 right-4 text-white text-3xl hover:text-gray-300" 
              onClick={handleCloseModal}
            >
              ×
            </button>
            
            <button
              className="modal-nav-btn left-4 transform -translate-y-1/2"
              onClick={handlePrevImage}
              aria-label="Imagen anterior"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />

            <button
              className="modal-nav-btn right-4 transform -translate-y-1/2"
              onClick={handleNextImage}
              aria-label="Imagen siguiente"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="image-counter">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria; 