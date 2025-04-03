import React, { useState, useEffect, useCallback } from 'react';
import PageBanner from '../components/PageBanner';
import gasNaturalImage from '../assets/image/slider/gas_natural.jpg';
import '../styles/Galeria.css';

// Importar las imágenes usando importación dinámica de Vite
const CATEGORIES = {
  residencial: Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    path: `/src/assets/image/galeria/residencial/${String(i + 1).padStart(2, '0')}.jpg`
  })),
  comercial: Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    path: `/src/assets/image/galeria/comercial/${String(i + 1).padStart(2, '0')}.jpg`
  })),
  multifamiliar: Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    path: `/src/assets/image/galeria/multifamiliar/${String(i + 1).padStart(2, '0')}.jpg`
  })),
  industrial: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    path: `/src/assets/image/galeria/industrial/${String(i + 1).padStart(2, '0')}.jpg`
  }))
};

const Galeria = () => {
  const [images, setImages] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const categorias = ["Todos", "Residencial", "Comercial", "Multifamiliar", "Industrial"];

  const cargarImagenes = useCallback(async () => {
    setIsLoading(true);
    try {
      let todasLasImagenes = [];

      if (categoriaActiva === "Todos") {
        for (const [categoria, imagenes] of Object.entries(CATEGORIES)) {
          const imagenesCategoria = await Promise.all(
            imagenes.map(async (img) => {
              try {
                const imageUrl = new URL(img.path, import.meta.url).href;
                return {
                  src: imageUrl,
                  alt: `Imagen ${categoria} ${img.id}`,
                  categoria: categoria
                };
              } catch (error) {
                console.error(`Error cargando imagen ${img.path}:`, error);
                return null;
              }
            })
          );
          todasLasImagenes = [...todasLasImagenes, ...imagenesCategoria.filter(Boolean)];
        }
      } else {
        const categoriaKey = categoriaActiva.toLowerCase();
        if (CATEGORIES[categoriaKey]) {
          const imagenesCategoria = await Promise.all(
            CATEGORIES[categoriaKey].map(async (img) => {
              try {
                const imageUrl = new URL(img.path, import.meta.url).href;
                return {
                  src: imageUrl,
                  alt: `Imagen ${categoriaKey} ${img.id}`,
                  categoria: categoriaKey
                };
              } catch (error) {
                console.error(`Error cargando imagen ${img.path}:`, error);
                return null;
              }
            })
          );
          todasLasImagenes = imagenesCategoria.filter(Boolean);
        }
      }

      setImages(todasLasImagenes);
    } catch (error) {
      console.error('Error cargando imágenes:', error);
    } finally {
      setIsLoading(false);
    }
  }, [categoriaActiva]);

  useEffect(() => {
    cargarImagenes();
  }, [cargarImagenes]);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
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

  const handleKeyDown = useCallback((e) => {
    if (!isModalOpen) return;
    
    if (e.key === 'ArrowLeft') {
      handlePrevImage(e);
    } else if (e.key === 'ArrowRight') {
      handleNextImage(e);
    } else if (e.key === 'Escape') {
      handleCloseModal();
    }
  }, [isModalOpen, currentImageIndex, images]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown]);

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
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className={`
                  px-6 py-2 rounded-full transition-all duration-300
                  ${categoriaActiva === categoria 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                `}
                onClick={() => setCategoriaActiva(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  onClick={() => handleImageClick(image, index)}
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver imagen
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div 
            className="relative max-w-7xl mx-auto p-4 w-full h-full flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10"
              onClick={handleCloseModal}
              aria-label="Cerrar"
            >
              ×
            </button>
            
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
              onClick={handlePrevImage}
              aria-label="Imagen anterior"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
              onClick={handleNextImage}
              aria-label="Imagen siguiente"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria; 