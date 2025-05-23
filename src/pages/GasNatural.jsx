import React from "react";
import PageBanner from "../components/PageBanner";
import gasNaturalImage from "../assets/image/slider/gas_natural.jpg";
import WhatsAppButton from '../components/WhatsAppButton';

const GasNatural = () => {
  const beneficios = [
    {
      id: "economico",
      icon: "fa-solid fa-dollar-sign",
      title: "ECONÓMICO",
      description: "Ahorro en el gasto mensual es hasta un 70% comparado al uso de electricidad y hasta un 40% con el GLP de balón.",
      highlight: "Ahorro promedio mensual significativo para tu economía familiar"
    },
    {
      id: "seguro",
      icon: "fa-solid fa-shield-halved",
      title: "SEGURO",
      description: "Más liviano que el aire, se disipa rápidamente cualquier fuga. Monitoreo las 24 horas del día. No es tóxico. Es inoloro (se le agrega un olor para detectarlo).",
      highlight: "Sistema de seguridad integral con revisión quinquenal obligatoria"
    },
    {
      id: "servicio-continuo",
      icon: "fa-solid fa-bolt",
      title: "SERVICIO CONTINUO",
      description: "Cocina o báñate con agua caliente sin interrupciones ya que el Gas Natural nunca se acaba. Es distribuido continuamente por tuberías subterráneas.",
      highlight: "Suministro ininterrumpido las 24 horas del día"
    },
    {
      id: "ecologico",
      icon: "fa-solid fa-leaf",
      title: "ECOLÓGICO Y LIMPIO",
      description: "Contribuye al medio ambiente y a tu salud. Emite menor cantidad de CO2 al medioambiente.",
      highlight: "Reduce tu huella de carbono mientras cuidas tu salud"
    }
  ];

  return (
    <div className="w-full">
      <PageBanner
        title="El Gas Natural y Sus Beneficios"
        subtitle="Conoce las ventajas de usar gas natural en tu hogar"
        backgroundImage={gasNaturalImage}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Grid de beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {beneficios.map((beneficio) => (
              <div
                key={beneficio.id}
                className="bg-white rounded-xl shadow-custom p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  {/* Encabezado con icono y título */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-complemento-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${beneficio.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="heading-4 text-primary-700">{beneficio.title}</h3>
                  </div>

                  {/* Descripción */}
                  <p className="text-body text-primary-600">
                    {beneficio.description}
                  </p>

                  {/* Destacado */}
                  <div className="bg-primary-50 rounded-lg p-4 mt-2">
                    <p className="text-body-sm text-primary-700 font-medium">
                      {beneficio.highlight}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default GasNatural; 