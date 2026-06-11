import { useContent } from '../context/ContentContext';
import rkLogoFallback from '../images/rk-logo.png';

export default function Footer() {
  const { config } = useContent();

  const rkLogo = config['Comercializa Logo']?.[0]?.url ?? rkLogoFallback;
  const comercializaText = config['Comercializa Texto'] ?? 'Comercializa RK';

  return (
    <footer id="contacto" className="bg-brand-accent text-brand-bg py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
        {/* Columna 1: Marca y Copyright */}
        <div className="flex flex-col gap-4 text-left">
          <div>
            <span className="text-2xl font-heading font-medium tracking-wider block mb-1">
              {config['Nombre Marca'] ?? 'NARA MONCADA'}
            </span>
            <span className="text-xs font-light text-brand-bg/60 tracking-widest uppercase block">
              {config['Crédito Footer'] ?? 'by NARA Capital & GOOR.STUDIO'}
            </span>
          </div>
          <div className="text-xs font-light text-brand-bg/50 mt-4">
            © {new Date().getFullYear()} {config['Copyright'] ?? 'NARA Capital. Todos los derechos reservados.'}
          </div>
        </div>

        {/* Columna 2: Enlaces Legales */}
        <div className="flex flex-col gap-3 text-left">
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-brand-bg/45 mb-1">
            Información Legal
          </span>
          <div className="flex flex-col gap-2 text-sm font-light tracking-wide">
            <a
              href={config['URL Aviso Legal'] ?? '#'}
              className="hover:text-brand-highlight transition-colors w-fit"
            >
              Aviso Legal
            </a>
            <a
              href={config['URL Privacidad'] ?? '#'}
              className="hover:text-brand-highlight transition-colors w-fit"
            >
              Política de Privacidad
            </a>
            <a
              href={config['URL Política de Cookies'] ?? '#'}
              className="hover:text-brand-highlight transition-colors w-fit"
            >
              Política de Cookies
            </a>
          </div>
        </div>

        {/* Columna 3: Comercializa */}
        <div className="flex flex-col gap-4 text-left">
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-brand-bg/45 mb-1">
            Comercialización
          </span>
          <div className="flex flex-col gap-3">
            <span className="text-sm font-light text-brand-bg/80">
              {comercializaText}
            </span>
            {rkLogo && (
              <img
                src={rkLogo}
                alt="RK Logo"
                className="h-10 md:h-12 w-auto object-contain object-left max-w-[180px]"
              />
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

