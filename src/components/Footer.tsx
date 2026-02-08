import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1929] text-[#00a6ff] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* INFORMACIÓN */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Información</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Juego Responsable</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aviso de privacidad y cookies del sitio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Programa de afiliación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mecánica de apuestas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Condiciones de apuesta</a></li>
            </ul>
          </div>

          {/* NUESTRAS SECCIONES */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Nuestras Secciones</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Deportes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Juegos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Promociones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Patrocinadoras</a></li>
            </ul>
          </div>

          {/* AYUDA */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Ayuda</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Depósito</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retirar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de reembolso</a></li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Contacto</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#00a6ff]/30 mb-8"></div>

        {/* Regional Links */}
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a href="#" className="hover:text-white transition-colors">Fun88 Vietnam</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Fun88 Vietnam 1</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Fun88 Vietnam EN</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Fun88 Thailand</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Fun88 Thailand 1</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Fun88 Thailand EN</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Fun88 China</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Fun88 Mexico</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Fun88 Chile</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Fun88 Argentina</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Fun88 Paraguay</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Fun88 India</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Fun88 Global</a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#00a6ff]/30 mb-8"></div>

        {/* Legal Text */}
        <div className="text-xs text-center leading-relaxed opacity-80">
          <p>
            WWW.FUN88MX.MX OPERADA EN MEXICO POR PRODUCCIONES MÓVILES S.A. DE C.V. ES
            TITULAR DEL PERMISO DGAJS/SCEVF/P-06/2005-TER EN UNIÓN DE UNOCA LA
            PAZ OPERADORA S.A. DE C.V. DE CONFORMIDAD CON LOS OFICIOS DGJS/1580/2017
            Y DGJS/DCRCA/1424/2022. JUEGOS PROHIBIDOS PARA MENORES DE EDAD, JUEGA
            RESPONSABLEMENTE, NO OLVIDE QUE EL PRINCIPAL PROPÓSITO ES LA RECREACIÓN Y
            DIVERSIÓN Y ESPARCIMIENTO.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
