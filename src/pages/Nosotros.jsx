import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Imágenes
import gasNaturalImage from '../assets/image/slider/gas_natural.jpg';
import nosotros1 from '../assets/image/nosotros/01.jpg';
import nosotros2 from '../assets/image/nosotros/02.jpg';
import nosotros3 from '../assets/image/nosotros/03.jpg';
import nosotros4 from '../assets/image/nosotros/04.jpg';
import nosotros5 from '../assets/image/nosotros/05.jpg';

// Imágenes del equipo
import team1 from '../assets/image/team/01.png';
import team2 from '../assets/image/team/02.png';
import team3 from '../assets/image/team/03.png';
import team4 from '../assets/image/team/04.png';
import team5 from '../assets/image/team/05.png';
import team6 from '../assets/image/team/06.png';
import team7 from '../assets/image/team/07.png';

// Constantes
const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  arrows: false,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  pauseOnHover: true
};

const THUMBNAIL_SETTINGS = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true
};

// Componentes de UI
const TeamMemberCard = ({ name, position, image }) => (
  <div className="group">
    <div className="overflow-hidden rounded-lg shadow-md transition-all duration-500 transform group-hover:shadow-xl">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={image} 
          alt={`${name} - ${position}`} 
          className="w-full h-full object-cover object-center transition-transform duration-700 transform group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="heading-4 text-primary-700 group-hover:text-primary-600 transition-colors duration-300">{name}</h3>
        <p className="text-secondary-500 font-medium">{position}</p>
      </div>
    </div>
  </div>
);

const AccordionItem = ({ title, content, icon, isActive, onClick }) => (
  <div className="border-b border-primary-100 last:border-b-0">
    <div 
      className={`flex items-center p-3 cursor-pointer transition-colors duration-300
        ${isActive ? 'bg-primary-50' : 'bg-white hover:bg-primary-50/50'}`}
      onClick={onClick}
    >
      <div className={`mr-3 icon-medium ${isActive ? 'text-secondary-500' : 'text-primary-400'}`}>
        {icon}
      </div>
      <h3 className={`heading-5 ${isActive ? 'text-primary-700' : 'text-primary-600'}`}>
        {title}
      </h3>
    </div>
    <div 
      className={`transition-all duration-300 ease-in-out px-3 md:px-4 pb-3 md:pb-4
        ${isActive ? 'max-h-96 opacity-100 pt-2' : 'max-h-0 opacity-0 overflow-hidden'}`}
    >
      {typeof content === 'string' ? (
        <p className="text-primary-600 text-body">{content}</p>
      ) : (
        content
      )}
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start space-x-3 md:space-x-4">
    <div className="text-secondary-500 flex-shrink-0">
      <i className={`${icon} icon-large`}></i>
    </div>
    <div>
      <h3 className="heading-4 text-primary-700 mb-1 md:mb-2">
        {title}
      </h3>
      <p className="text-body text-primary-600">
        {description}
      </p>
    </div>
  </div>
);

// Datos estáticos
const sliderImages = [
  { src: nosotros1, alt: "Instalaciones de gas natural" },
  { src: nosotros2, alt: "Equipo profesional" },
  { src: nosotros3, alt: "Proyectos completados" },
  { src: nosotros4, alt: "Servicios de calidad" },
  { src: nosotros5, alt: "Trabajo en equipo" }
];

const accordionItems = [
  {
    title: "Misión",
    content: "Nos dedicamos a proporcionar soluciones innovadoras y de alta calidad que transforman la manera en que nuestros clientes interactúan con la tecnología. Nos esforzamos por crear un impacto positivo y duradero en cada proyecto que emprendemos.",
    icon: <i className="fas fa-bullseye"></i>
  },
  {
    title: "Visión",
    content: "Aspiramos a ser líderes globales en innovación tecnológica, estableciendo nuevos estándares de excelencia y creando soluciones que inspiren y empoderen a las futuras generaciones.",
    icon: <i className="fas fa-eye"></i>
  },
  {
    title: "Valores",
    content: (
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <ul className="list-disc list-inside text-primary-600 space-y-3">
          <li>
            <h4 className="font-semibold text-primary-700 inline-block mb-1">Integridad.</h4>
            <p className="text-primary-600 pl-6">Actuamos con honestidad y transparencia en todas nuestras interacciones.</p>
          </li>
          <li>
            <h4 className="font-semibold text-primary-700 inline-block mb-1">Innovación</h4>
            <p className="text-primary-600 pl-6">Buscamos constantemente nuevas formas de resolver problemas.</p>
          </li>
        </ul>
        <ul className="list-disc list-inside text-primary-600 space-y-3 mt-3 md:mt-0">
          <li>
            <h4 className="font-semibold text-primary-700 inline-block mb-1">Excelencia</h4>
            <p className="text-primary-600 pl-6">Nos esforzamos por alcanzar los más altos niveles de calidad.</p>
          </li>
          <li>
            <h4 className="font-semibold text-primary-700 inline-block mb-1">Colaboración</h4>
            <p className="text-primary-600 pl-6">Trabajamos juntos como equipo, valorando las diferentes perspectivas.</p>
          </li>
        </ul>
      </div>
    ),
    icon: <i className="fas fa-hand-holding-heart"></i>
  }
];

const teamMembers = [
  {
    name: "Miembro 1",
    position: "Cargo 1",
    image: team1
  },
  {
    name: "Miembro 2",
    position: "Cargo 2",
    image: team2
  },
  {
    name: "Miembro 3",
    position: "Cargo 3",
    image: team3
  },
  {
    name: "Miembro 4",
    position: "Cargo 4",
    image: team4
  },
  {
    name: "Miembro 5",
    position: "Cargo 5",
    image: team5
  },
  {
    name: "Miembro 6",
    position: "Cargo 6",
    image: team6
  },
  {
    name: "Miembro 7",
    position: "Cargo 7",
    image: team7
  }
];

const features = [
  {
    icon: "fas fa-certificate",
    title: "Experiencia Comprobada",
    description: "Más de 20 años en el sector energético con profesionales certificados."
  },
  {
    icon: "fas fa-shield-alt",
    title: "Garantía de Calidad",
    description: "Total garantía en calidad y seguridad en todas nuestras instalaciones."
  },
  {
    icon: "fas fa-check-circle",
    title: "Certificaciones Oficiales",
    description: "Registrados en Osinergmin y con convenio del Ministerio de Energía y Minas."
  },
  {
    icon: "fas fa-users",
    title: "Equipo Multidisciplinario",
    description: "Profesionales especializados en todos los aspectos de instalaciones de gas natural."
  }
];

// Componente principal
const Nosotros = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <div className="w-full">
      <PageBanner
        title="Nosotros"
        subtitle="Comprometidos con la excelencia en servicios de gas natural"
        backgroundImage={gasNaturalImage}
      />
      
      <div className="bg-[#00408F] section-spacing">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-spacing item-spacing">
            {/* Imágenes de gas natural - LADO IZQUIERDO */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="w-full relative">
                <Slider {...SLIDER_SETTINGS}>
                  {sliderImages.map((image, index) => (
                    <div key={index} className="outline-none">
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              
              {/* Miniaturas abajo del slider principal */}
              <div className="mt-3 px-4 overflow-hidden hidden md:block">
                <Slider {...THUMBNAIL_SETTINGS}>
                  {sliderImages.map((image, index) => (
                    <div key={index} className="outline-none px-1">
                      <div className="aspect-[16/9] rounded-md overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={`Miniatura ${index + 1}`} 
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            
            {/* Información de quiénes somos - LADO DERECHO */}
            <div className="bg-white rounded-xl shadow-lg container-spacing">
              <h1 className="heading-2 text-primary-700 item-spacing">
                Quiénes Somos
              </h1>
              <p className="text-body-lg text-primary-600 item-spacing leading-relaxed">
                Somos una empresa multidisciplinaria que brinda servicio de diseño, supervisión y ejecución de obras para las instalaciones de gas natural en residencias, comercios, edificios, multifamiliares e industrias con total garantía en calidad y seguridad.
              </p>
              <p className="text-body-lg text-primary-600 item-spacing leading-relaxed">
                Contamos con el convenio BonoGas del Ministerio de Energía y Minas y el sector privado, con profesionales con más de 20 años de experiencia en el sector energético registrados en Osinergmin.
              </p>
              
              {/* Nuestra Filosofía */}
              <div className="mt-6 md:mt-8">
                <h2 className="heading-3 text-primary-700 mb-3 md:mb-4 flex items-center">
                  <span className="mr-2"><i className="fas fa-star text-secondary-500"></i></span>
                  Nuestra Filosofía
                </h2>
                
                {/* Acordeón de Misión, Visión y Valores */}
                <div className="border border-primary-100 rounded-lg overflow-hidden">
                  {accordionItems.map((item, index) => (
                    <AccordionItem
                      key={index}
                      title={item.title}
                      content={item.content}
                      icon={item.icon}
                      isActive={activeAccordion === index}
                      onClick={() => setActiveAccordion(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Por qué elegirnos */}
          <div className="bg-white rounded-xl shadow-lg container-spacing item-spacing">
            <h2 className="heading-3 text-primary-700 mb-4 md:mb-6 text-center">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-spacing">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sección Nuestro Equipo */}
      <div className="bg-white section-spacing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="heading-1 text-primary-900 mb-2 md:mb-4">Nuestro Equipo</h2>
            <p className="text-body-lg text-primary-600 max-w-3xl mx-auto">
              Contamos con profesionales altamente calificados y comprometidos con la excelencia en cada proyecto que emprendemos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 grid-spacing">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros; 