import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Datos estáticos
const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/profile.php?id=100078954631590", icon: "facebook-f", label: "Facebook" },
  { href: "https://www.instagram.com/gkaizen.ic?igsh=NzR0bnlza3ZrMGJv", icon: "instagram", label: "Instagram" },
  { href: "https://www.youtube.com/@grupokaizenic", icon: "youtube", label: "YouTube" },
  { href: "https://www.tiktok.com/@grupokaizenic", icon: "tiktok", label: "TikTok" }
];

const CONTACT_INFO = [
  { icon: "fa-phone", title: "Teléfonos", content: ["01-6828303", "+51 9363858"] },
  { icon: "fa-envelope", title: "Correo", content: ["grupokaizen.ing@gmail.com"] },
  { icon: "fa-map-marker-alt", title: "Dirección", content: ["Jr. Bartolomé Ruiz 293, Urb. Salamanca de Monterrico, Ate"] },
  { 
    icon: "fa-clock", 
    title: "Horario de Atención", 
    content: [
      "Lunes a Viernes: 8:00 AM - 6:00 PM",
      "Sábados: 9:00 AM - 1:00 PM",
      "Domingos: Cerrado"
    ]
  }
];

// Componentes reutilizables
const SectionTitle = ({ children }) => (
  <h3 className="text-lg font-bold text-primary-900 mb-4 relative inline-block">
    {children}
    <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-complemento-400" />
  </h3>
);

const SocialIcon = ({ href, icon, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group"
    aria-label={label}
  >
    <div className="w-10 h-10 bg-primary-800 hover:bg-complemento-400 text-white rounded-full 
      flex items-center justify-center transition-all duration-300 
      group-hover:shadow-[0_0_15px_rgba(0,255,157,0.3)]">
      <i className={`fab fa-${icon} text-base`} />
    </div>
  </a>
);

const ContactItem = ({ icon, title, content }) => (
  <div className="flex items-start gap-3">
    <div className="w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center flex-shrink-0">
      <i className={`fas ${icon} text-complemento-400 text-sm`} />
    </div>
    <div>
      <h3 className="font-medium text-primary-900">{title}</h3>
      <div className="text-primary-800 text-sm">
        {content.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < content.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

const InfoCard = ({ icon, title, children }) => (
  <div className="bg-primary-50/50 p-4 rounded-lg border border-primary-100">
    <h4 className="font-semibold text-primary-900 mb-2 flex items-center">
      <i className={`fas ${icon} text-complemento-400 mr-2`} />
      {title}
    </h4>
    <p className="text-primary-800 text-sm">{children}</p>
  </div>
);

const EmergencyButton = () => (
  <div className="bg-red-50 p-4 rounded-lg border border-red-100">
    <h3 className="font-semibold text-red-900 mb-2 flex items-center">
      <i className="fas fa-exclamation-circle text-red-500 mr-2" />
      Servicio de Emergencia 24/7
    </h3>
    <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg 
      transition-all duration-300 transform hover:scale-105 text-sm font-medium mt-2">
      Llamar a Emergencias
    </button>
  </div>
);

const AsideLateral = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-[100]"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white z-[110] shadow-2xl overflow-y-auto"
          >
            <div className="sticky top-0 z-20 bg-gradient-to-r from-primary-900 to-primary-800 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">INFORMACIÓN</h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group"
                >
                  <i className="fas fa-times text-white text-xl group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-8">
              <section>
                <SectionTitle>Información de Contacto</SectionTitle>
                <div className="space-y-4">
                  {CONTACT_INFO.map((item, index) => (
                    <ContactItem key={index} {...item} />
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle>Síguenos</SectionTitle>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialIcon key={index} {...social} />
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle>Sobre Nosotros</SectionTitle>
                <div className="space-y-4">
                  <InfoCard icon="fa-star" title="Misión">
                  Somos una empresa comprometida en el desarrollo del país, por ello creemos que es fundamental el acceso a nuevas energías para dar una mejor calidad de vida y de aporte económico con negocios sostenibles. Nosostros construimos para desbloquear el potencial.
                  </InfoCard>
                  <InfoCard icon="fa-chart-line" title="Visión">
                  Ser una empresa líder en el mercado en instalaciones de gas con eficiencia y responsabilidad sostenible. Con valores orientados en las personas, centrados en el cliente, respetamos el medio ambiente, siempre impulsados por la innovación y porsupuesto diversos e inclusivos.
                  </InfoCard>
                </div>
              </section>

              <section>
                {/*<EmergencyButton />*/}
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AsideLateral; 