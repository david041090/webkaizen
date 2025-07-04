import React, { useState } from 'react';
import PageBanner from "../components/PageBanner";
import faqImage from "../assets/image/slider/gas_natural.jpg";

// Clases de utilidad para tipografía responsiva
const textStyles = {
  heading: "text-2xl md:text-3xl lg:text-4xl font-bold",
  subtitle: "text-base md:text-lg lg:text-xl text-gray-600",
  question: "text-base md:text-lg font-medium",
  answer: "text-sm md:text-base text-gray-600 leading-relaxed",
  number: "text-sm md:text-base font-semibold",
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "¿En qué beneficia el gas natural a mi casa?",
      answer: "El gas natural es el combustible más seguro y económico para su vivienda, además tendrá un servicio continuo sin necesidad de recargar su balón de gas periódicamente. Asimismo, también aportará en la reducción de contaminación ambiental."
    },
    {
      question: "¿Qué es el BonoGas?",
      answer: (
        <>
          El BonoGas busca promover el uso de gas natural en las viviendas a través de un financiamiento para la construcción de la instalación de gas natural con un punto para la cocina. Con el BonoGas se podrá:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Financiamiento del 100% para la construcción de la instalación interna de gas natural con un punto de conexión para la cocina.</li>
            <li>Plazo de hasta 10 años para realizar la devolución del financiamiento, sin intereses ni cuota inicial.</li>
            <li>Devolución del 0%, 25% y 50% del financiamiento, de acuerdo con el estrato de la manzana según el INEI.</li>
            <li>Pagos mensuales a través del recibo de consumo de gas natural.</li>
          </ul>
        </>
      )
    },
    {
      question: "¿Quiénes pueden acceder al BonoGas?",
      answer: (
        <>
          Solo pueden acceder al BonoGas aquellas personas que sus viviendas cumplan con los siguientes requisitos:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Redes de tuberías de gas natural frente al predio (redes de gas natural residencial cercanas).</li>
            <li>Vivienda calificadas dentro de los estratos Medio, Medio Bajo y Bajo según el plano estratificado a nivel de manzana por ingreso per cápita del hogar elaborado por el INEI.</li>
          </ul>
          <p className="mt-2">
          Cabe resaltar que las viviendas de hasta 6 pisos pueden acceder al beneficio (una cocina conectada al BonoGas + un segundo punto por piso), Así como las personas que se encuentren en una vivienda alquilada.
          </p>
        </>
      )
    },
    {
      question: "¿Cuánto es el financiamiento que ofrece el BonoGas y cómo se realiza la devolución?",
      answer: (
        <>
          El financiamiento que brinda el BonoGas es del 100% para la construcción de la instalación interna. Asimismo, dependiendo del estrato en el que se ubique la vivienda, el usuario deberá realizar la devolución de un porcentaje, a través de su recibo de consumo de gas natural. La devolución se realizará de la siguiente forma:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Estrato bajo: 0% devolución</li>
            <li>Estrato medio bajo: 25% devolución</li>
            <li>Estrato medio: 50% devolución</li>
          </ul>
        </>
      )
    },
    {
      question: "¿El BonoGas me da el dinero para realizar la instalación interna en mi casa?",
      answer: "No, el BonoGas es financiado por el FISE, quien le paga directamente a las Empresas Instaladoras, que elija el beneficiario, por el concepto de la instalación interna."
    },
    {
      question: "¿Qué tengo que hacer para solicitar el BonoGas?",
      answer: "Si usted desea acceder al BonoGas deberá comunicarse con las Empresas Instaladoras autorizadas para solicitar una visita a su vivienda. Debe tener en cuenta que el BonoGas solo puede ser ofrecido por las Empresas Instaladoras que estén suscritas en el mismo Programa BonoGas del FISE."
    },
    {
      question: "¿Cómo sé qué Empresas Instaladoras pueden ofrecerme el BonoGas?",
      answer: (
        <>
          Todo Asesor Comercial de Empresas instaladoras deben estar debidamente identificadas con su Chaleco y Fotocheck cuando visiten los hogares para ofrecer el servicio.
          <br />
          Usted puede ver la lista de las Empresas instaladoras autorizadas en la siguiente página:
          <br />
          <a
            href="https://fise.minem.gob.pe:23305/consultas/gnr/buscador-empresas-instaladoras"
            className="text-blue-600 hover:underline"
            target="_blank" rel="noopener noreferrer"
          >
            https://fise.minem.gob.pe:23305/consultas/gnr/buscador-empresas-instaladoras
          </a>
        </>
      )
    },
    {
      question: "¿Cuál es el costo que financiará el BonoGas?",
      answer: "Osinergmin ha establecido los costos máximos para la construcción de la instalación interna, además de otros conceptos como difusión y capacitación, los cuales deberán ser respetados por todas las Empresas Instaladoras con convenio para el financiamiento del BonoGas. En ese sentido, se han descrito dos modalidades de construcción interna: empotrada y a la vista, los cuales tienen un costo máximo ya establecido."
    },
    {
      question: "¿Puedo cambiar de Empresa Instaladora luego de firmado el convenio de financiamiento del BonoGas?",
      answer: "No. Si usted ya firmó un convenio de financiamiento con una Empresa Instaladora deberá respetar el documento. Si usted firma un segundo convenio para el mismo punto de conexión de gas natural puede perder el beneficio del BonoGas. Esto ya se encuentra establecido en una de las cláusulas del convenio de financiamiento."
    },
    {
      question: "¿Qué documentos tengo que presentar para acceder al BonoGas?",
      answer: (
        <>
          Los documentos a entregar se pueden ver clicando en el siguiente link y luego en “Requisitos”. 
          <br />
          <a 
            href="https://www.calidda.com.pe/mi-hogar/conexion-al-gas-natural" 
            className="text-blue-600 hover:underline"
            target="_blank" rel="noopener noreferrer"
          >
            https://www.calidda.com.pe/mi-hogar/conexion-al-gas-natural
          </a>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>DNI Contratante</li>
            <li>Documento de propiedad</li>
            <li>•	En caso de Alquiler Autorización y DNI del propietario</li>
          </ul>
        </>
      )
    },
    {
      question: "¿Puedo realizar la devolución del financiamiento antes del plazo de 10 años?",
      answer: "Sí, pero deberá notificar a Osinergmin. Cuando su conexión de gas natural sea habilitada, es decir, usted ya cuente con el servicio de gas natural en su cocina, puede escribir a los datos que aparecen en su convenio de financiamiento para poder adelantar los pagos."
    },
    {
      question: "¿Cuánto demora toda la instalación interna de gas natural?",
      answer: (
        <>
          Solo la instalación puede demorar un máximo de 2 días hábiles, dependiendo de la dificultad de la misma.
          <br />
          En general el proceso sería el siguiente:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Inicio de proceso: Firma de Contrato de Suministro y aprobación del contrato (5 días hábiles).</li>
            <li>Construcción interna y acometida: (2 días hábiles).</li>
            <li>Realización de la Tubería de Conexión Externa pista a gabinete (Responsabilidad de la concesionaria Cálidda y sus contratistas, Aproximadamente de 10 a 20 días hábiles).</li>
            <li>Habilitación del Suministro: Entre 2 a 5 días.</li>
          </ul>
        </>
      )
    },
    {
      question: "¿Cuánto tiempo de garantía tiene la instalación interna?",
      answer: "La garantía es aplicada desde la habilitación del suministro hasta 3 años de funcionamiento."
    },
    {
      question: "¿A quién llamo si tengo un problema con la instalación interna?",
      answer: "Si tuviera algún inconveniente con la tubería de la instalación interna deberá comunicarse con la Empresa Instaladora con quien realizó la construcción y solicitar la revisión de la instalación y la reparación de algún desperfecto, en el caso se requiera."
    },
    {
      question: "¿A quién llamo si tengo un problema con el servicio de gas natural?",
      answer: "Cuando usted ya cuente con el servicio de gas natural, deberá llamar a la Concesionaria de su zona. Para el caso de Lima es Cálidda (Número: 1808)."
    },
    {
      question: "¿Qué pasa si la Empresa Instaladora no cumple con sus responsabilidades y no responde a mis comunicaciones?",
      answer: (
        <>
          Si en caso la empresa ignora su comunicación, podrá comunicarse con el Administrador FISE (Osinergmin) al correo{' '}
          <a href="mailto:programagnr@osinergmin.gob.pe" className="text-primary-600 hover:text-primary-700">
            programagnr@osinergmin.gob.pe
          </a>
          .
        </>
      )
    },
    {
      question: "¿Qué pasa si la concesionaria no cumple con sus responsabilidades dentro de los plazos establecidos?",
      answer: "La concesionaria está obligada a construir la tubería de conexión en un plazo máximo de 20 días hábiles desde la construcción de la instalación interna en el predio. En caso de incumplimiento podría presentar su reclamo a la concesionaria a través del siguiente número 01-6149000 (Opción 6) y como segunda instancia a Osinergmin."
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50">
      <PageBanner
        title="Preguntas Frecuentes"
        subtitle="Encuentra respuestas a las preguntas más comunes que puedas tener"
        backgroundImage={faqImage}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="divide-y divide-gray-100">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className={`group transition-all duration-200 ${
                    activeIndex === index 
                      ? 'bg-gradient-to-r from-primary-50 to-primary-100' 
                      : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100'
                  }`}
                >
                  <button
                    className="w-full px-6 py-5 flex justify-between items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-center text-left pr-6">
                      <span className={`${textStyles.number} w-10 h-10 flex items-center justify-center rounded-full ${
                        activeIndex === index 
                          ? 'bg-primary-600 text-white' 
                          : 'bg-gray-100 text-primary-600 group-hover:bg-primary-100'
                      } mr-4 transition-colors duration-200`}>
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span className={`${textStyles.question} ${
                        activeIndex === index 
                          ? 'text-primary-900' 
                          : 'text-gray-700 group-hover:text-primary-700'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <span 
                      className={`text-2xl transform transition-transform duration-300 ${
                        activeIndex === index 
                          ? 'rotate-180 text-primary-600' 
                          : 'text-primary-400 group-hover:text-primary-600'
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      activeIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pl-20">
                      <div className={`${textStyles.answer} prose prose-primary max-w-none`}>
                        {typeof faq.answer === 'string' ? (
                          <p className="text-gray-600">{faq.answer}</p>
                        ) : (
                          faq.answer
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default FAQ;