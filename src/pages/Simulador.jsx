import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import gasNaturalImage from "../assets/image/slider/gas_natural.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Simulador = () => {
  const [artefactos, setArtefactos] = useState({
    secadora: { tipo: "Electricidad", seleccionado: false },
    terma: { tipo: "Electricidad", seleccionado: false },
    cocina: { tipo: "Electricidad", seleccionado: false }
  });

  const [resultados, setResultados] = useState(null);

  // Costos promedio mensuales actualizados
  const costos = {
    secadora: {
      Electricidad: 95,
      GN: 35
    },
    terma: {
      Electricidad: 140,
      GN: 45
    },
    cocina: {
      Electricidad: 80,
      GN: 25
    }
  };

  const handleTipoChange = (artefacto, tipo) => {
    setArtefactos(prev => ({
      ...prev,
      [artefacto]: { ...prev[artefacto], tipo }
    }));
  };

  const handleSeleccion = (artefacto) => {
    setArtefactos(prev => ({
      ...prev,
      [artefacto]: { ...prev[artefacto], seleccionado: !prev[artefacto].seleccionado }
    }));
  };

  const calcularAhorro = () => {
    let ahorroTotal = 0;
    let detalles = [];

    Object.entries(artefactos).forEach(([artefacto, config]) => {
      if (config.seleccionado) {
        const costoElectricidad = costos[artefacto].Electricidad;
        const costoGN = costos[artefacto].GN;
        const ahorroMensual = config.tipo === 'GN' ? (costoElectricidad - costoGN) : 0;

        detalles.push({
          producto: artefacto,
          ahorroMensual: ahorroMensual,
          costoElectricidad: costoElectricidad,
          costoGN: costoGN,
          tipo: config.tipo
        });

        ahorroTotal += ahorroMensual;
      }
    });

    setResultados({
      ahorroTotal,
      detalles
    });
  };

  const limpiarSimulador = () => {
    setArtefactos({
      secadora: { tipo: "Electricidad", seleccionado: false },
      terma: { tipo: "Electricidad", seleccionado: false },
      cocina: { tipo: "Electricidad", seleccionado: false }
    });
    setResultados(null);
  };

  const pasos = [
    {
      numero: "1",
      texto: "Selecciona artefactos",
    },
    {
      numero: "2",
      texto: "Elige el tipo de energía"
    },
    {
      numero: "3",
      texto: "Calcula tu ahorro"
    }
  ];

  return (
    <div className="w-full bg-gray-50">
      <PageBanner
        title="Simulador de ahorro"
        backgroundImage={gasNaturalImage}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Pasos */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary-700 mb-6">¿Cómo funciona?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pasos.map((paso) => (
                  <div key={paso.numero} className="flex items-start gap-4 bg-primary-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{paso.numero}</span>
                    </div>
                    <div>
                      <h3 className="text-primary-700 font-semibold mb-1">{paso.texto}</h3>
                      <p className="text-sm text-primary-600">{paso.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Calculadora */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary-700 mb-6">Calculadora de Ahorro</h2>
              
              {/* Grid principal */}
              <div className="grid md:grid-cols-12 gap-6">
                {/* Panel izquierdo: Selector */}
                <div className="md:col-span-7">
                  <div className="space-y-4">
                    <div className="bg-primary-50 rounded-lg p-4 mb-4">
                      <h3 className="text-lg font-semibold text-primary-700 mb-2">
                        Selecciona tus artefactos:
                      </h3>
                      {Object.entries(artefactos).map(([nombre, config]) => (
                        <div key={nombre} className="flex items-center gap-3 bg-white rounded p-3 mb-2">
                          <label className="flex items-center gap-2 flex-1">
                            <input
                              type="checkbox"
                              checked={config.seleccionado}
                              onChange={() => handleSeleccion(nombre)}
                              className="w-4 h-4 text-primary-600 rounded"
                            />
                            <span className="text-sm font-medium text-primary-700 capitalize">{nombre}</span>
                          </label>
                          <select
                            value={config.tipo}
                            onChange={(e) => handleTipoChange(nombre, e.target.value)}
                            className="text-sm rounded border-gray-300 py-1.5 px-2"
                            disabled={!config.seleccionado}
                          >
                            <option value="Electricidad">Electricidad</option>
                            <option value="GN">Gas Natural</option>
                          </select>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <button
                        onClick={calcularAhorro}
                        className="flex-1 bg-primary-600 text-white py-2.5 rounded-lg hover:bg-primary-700 
                        transition-colors duration-300 text-sm font-medium"
                      >
                        Calcular Ahorro
                      </button>
                      <button
                        onClick={limpiarSimulador}
                        className="px-4 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 
                        transition-colors duration-300 text-sm font-medium"
                      >
                        Limpiar
                      </button>
                    </div>
                  </div>
                </div>

                {/* Panel derecho: Resultados */}
                <div className="md:col-span-5">
                  {resultados ? (
                    <div className="bg-primary-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-primary-700 mb-3">Tu Ahorro Estimado</h3>
                      <div className="space-y-3">
                        {resultados.detalles.map((detalle, index) => (
                          <div key={index} className="bg-white rounded p-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium capitalize">{detalle.producto}</span>
                              <span className="text-sm font-semibold text-green-600">
                                {detalle.tipo === 'GN' ? 
                                  `Ahorro: S/ ${detalle.costoElectricidad - detalle.costoGN}` : 
                                  'Ahorro: S/ 0'}
                              </span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-600">
                              <span>
                                {detalle.tipo === 'Electricidad' ? 
                                  `Electricidad: S/ ${detalle.costoElectricidad}` : 
                                  `Electricidad: S/ ${detalle.costoElectricidad}`}
                              </span>
                              <span>Con GN: S/ {detalle.costoGN}</span>
                            </div>
                          </div>
                        ))}
                        <div className="border-t border-primary-200 pt-3 mt-4">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-primary-700">Ahorro Total Mensual:</span>
                            <span className="text-xl font-bold text-green-600">
                              S/ {resultados.ahorroTotal}
                            </span>
                          </div>
                        </div>
                        
                        {/* Leyenda explicativa */}
                        <div className="mt-4 text-xs text-gray-600 bg-white rounded p-3">
                          <p>
                            * Cálculo referencial comparando su consumo de gas natural mensual vs consumo con artefactos eléctricos.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-primary-50 rounded-lg p-6 h-full flex items-center justify-center text-center">
                      <div>
                        <p className="text-primary-600 font-medium mb-2">
                          ¡Descubre cuánto puedes ahorrar!
                        </p>
                        <p className="text-sm text-primary-500">
                          Selecciona tus artefactos para calcular tu ahorro mensual
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

         
          
        </div>
      </div>
    </div>
  );
};

export default Simulador; 