// Remove any imports related to react-image-lightbox
import React, { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import gasNaturalImage from '../assets/image/slider/gas_natural.jpg';
import configGaleria from '../config/galeria.json';

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
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const categorias = ["Todos", "Residencial", "Comercial", "Multifamiliar", "Industrial"];

  useEffect(() => {
    const cargarImagenes = () => {
      try {
        const imagenesConfiguradas = [];
        const imagenesImportadas = importarImagenes();
        const categorias = ["comercial", "industrial", "multifamiliar", "residencial"];

        categorias.forEach(categoria => {
          const imagenesCategoria = configGaleria.categorias[categoria].map(imagen => ({
            src: imagenesImportadas[categoria][imagen.id],
            width: 1,
            height: 1,
            title: imagen.caption,
            categoria: categoria.charAt(0).toUpperCase() + categoria.slice(1)
          }));
          imagenesConfiguradas.push(...imagenesCategoria);
        });

        const imagenesDesordenadas = imagenesConfiguradas
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);

        setImages(imagenesDesordenadas);
      } catch (error) {
        console.error("Error al cargar las imágenes:", error);
      }
    };

    cargarImagenes();
  }, []);

  const imagenesFiltradas = categoriaActiva === "Todos"
    ? images
    : images.filter(imagen => imagen.categoria === categoriaActiva);

  const handleClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  // Determinar si estamos en móvil para aplicar estilos específicos
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const imageRenderer = ({ index, photo, margin }) => (
    <div
      key={index}
      style={{
        margin: isMobile ? '2px' : '4px',
        width: photo.width,
        height: photo.height,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '6px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      onClick={(e) => handleClick(e, { index })}
    >
      <img
        src={photo.src}
        alt={photo.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '6px',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
            color: 'white',
            fontSize: '12px',
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
          className="image-caption"
        >
          {photo.title}
        </div>
      )}
    </div>
  );

  const handleClose = () => {
    setIsOpen(false);
    setPhotoIndex(0);
  };

  const handleMovePrev = () => {
    setPhotoIndex((photoIndex + imagenesFiltradas.length - 1) % imagenesFiltradas.length);
  };

  const handleMoveNext = () => {
    setPhotoIndex((photoIndex + 1) % imagenesFiltradas.length);
  };

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
        <div className="relative max-w-7xl w-full mx-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-50"
          >
            ×
          </button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <PageBanner
        title="Galería"
        subtitle="Conoce nuestros trabajos y proyectos realizados"
        backgroundImage={gasNaturalImage}
      />
      <div className="container mx-auto px-4 section-spacing">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaActiva(categoria)}
                className={`px-6 py-2 rounded-full transition-all duration-300 text-body-sm ${
                  categoriaActiva === categoria
                    ? "bg-complemento-500 text-white"
                    : "bg-primary-50 text-primary-600 hover:bg-primary-100"
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>

          <div className="mb-12">
            {imagenesFiltradas.length > 0 ? (
              <div className="gallery-grid">
                {imagenesFiltradas.map((photo, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="gallery-image"
                    />
                    {!isMobile && (
                      <div className="image-caption">
                        {photo.title}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-primary-600">Cargando imágenes...</p>
              </div>
            )}
          </div>

          <Modal isOpen={isOpen} onClose={handleClose}>
            <div className="relative">
              <img
                src={imagenesFiltradas[photoIndex]?.src}
                alt={imagenesFiltradas[photoIndex]?.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <p className="text-center">{imagenesFiltradas[photoIndex]?.title}</p>
              </div>
              <button
                onClick={handleMovePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full hover:bg-black/80"
              >
                ←
              </button>
              <button
                onClick={handleMoveNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full hover:bg-black/80"
              >
                →
              </button>
            </div>
          </Modal>
        </div>
      </div>

      <style jsx>{`
        .gallery-grid {
          column-count: 5;
          column-gap: 8px;
          padding: 4px;
        }

        @media (max-width: 1200px) {
          .gallery-grid {
            column-count: 4;
          }
        }

        @media (max-width: 900px) {
          .gallery-grid {
            column-count: 3;
          }
        }

        @media (max-width: 600px) {
          .gallery-grid {
            column-count: 2;
            column-gap: 4px;
            padding: 2px;
          }
        }

        .gallery-item {
          break-inside: avoid;
          margin-bottom: 8px;
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease-in-out;
        }

        .gallery-item:hover {
          transform: scale(1.02);
        }

        .gallery-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 6px;
        }

        .image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 6px;
          background: linear-gradient(transparent, rgba(0,0,0,0.7));
          color: white;
          font-size: 12px;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .gallery-item:hover .image-caption {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Galeria;