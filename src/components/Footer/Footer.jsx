import React from 'react';

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href}
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
  >
    <i className={`fab fa-${icon} icon-medium`}></i>
  </a>
);

const ContactItem = ({ icon, title, children }) => (
  <div className="flex items-center space-x-3 text-primary-100">
    <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center">
      <i className={icon}></i>
    </div>
    <div>
      <p className="font-medium text-white">{title}</p>
      {children}
    </div>
  </div>
);

const ServiceItem = ({ icon, text }) => (
  <li className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center">
      <i className={icon}></i>
    </div>
    <span>{text}</span>
  </li>
);

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/profile.php?id=100078954631590", icon: "facebook-f" },
    { href: "https://www.instagram.com/gkaizen.ic?igsh=NzR0bnlza3ZrMGJv", icon: "instagram" },
    { href: "https://www.youtube.com/@grupokaizenic", icon: "youtube" },
    { href: "https://www.tiktok.com/@grupokaizenic", icon: "tiktok" }
  ];

  const services = [
    { icon: "fas fa-tools", text: "Instalación de Gas Natural" },
    { icon: "fas fa-wrench", text: "Mantenimiento" },
    { icon: "fas fa-exclamation-circle", text: "Emergencias 24/7" }
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-spacing">
          {/* Mapa */}
          <div className="space-y-4">
            <h3 className="heading-3 text-white item-spacing">Ubicación de Oficina</h3>
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.4661972297659!2d-76.98208278758213!3d-12.078558840066394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA0JzQyLjgiUyA3NsKwNTgnNTUuNSJX!5e0!3m2!1ses-419!2spe!4v1635789012345!5m2!1ses-419!2spe&markers=color:red%7Clabel:GK%7C-12.078558840066394,-76.98208278758213"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Grupo Kaizen"
                className="filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>
          </div>

          {/* Información */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-3 text-white item-spacing">GRUPO KAIZEN</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 grid-spacing">
                {/* Contacto */}
                <div className="space-y-4">
                  <div className="space-y-3">
                    <ContactItem icon="fas fa-phone-alt" title="Central Telefónica">
                      <a href="tel:016828303" className="text-body-sm hover:text-complemento-300 transition-colors">
                        01-6828303
                      </a>
                    </ContactItem>

                    <ContactItem icon="fab fa-whatsapp text-lg" title="WhatsApp">
                      <a href="https://wa.me/51959363858" className="text-body-sm hover:text-complemento-300 transition-colors">
                        959363858
                      </a>
                    </ContactItem>

                    <ContactItem icon="fas fa-envelope" title="Correo">
                      <a href="mailto:grupokaizen.ing@gmail.com" className="text-body-sm hover:text-complemento-300 transition-colors break-all">
                        grupokaizen.ing@gmail.com
                      </a>
                    </ContactItem>
                  </div>
                </div>

                {/* Dirección y servicios */}
                <div className="space-y-4">
                  <ContactItem icon="fas fa-map-marker-alt" title="Dirección">
                    <p className="text-body-sm leading-relaxed">
                      Jr. Bartolomé Ruiz 293, Urb. Salamanca de Monterrico, Ate
                    </p>
                  </ContactItem>

                  <div className="space-y-2">
                    <p className="font-medium text-white">Servicios</p>
                    <ul className="text-primary-100 space-y-2 text-body-sm">
                      {services.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="pt-6">
              <h4 className="heading-5 text-white mb-4">Síguenos en</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <SocialIcon key={index} {...social} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="text-center text-primary-100 text-body-sm">
            <p>© {new Date().getFullYear()} GRUPO KAIZEN - Ingeniería & Construcción. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 