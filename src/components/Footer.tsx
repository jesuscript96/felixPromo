export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-accent text-brand-bg py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-2xl font-heading font-medium tracking-wider">NARA MONCADA</span>
          <span className="text-sm font-light text-brand-bg/60 tracking-widest uppercase">by NARA Capital & GOOR.STUDIO</span>
        </div>

        <div className="flex gap-8 text-sm font-light tracking-wide">
          <a href="#" className="hover:text-brand-highlight transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-brand-highlight transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-brand-highlight transition-colors">Cookies</a>
        </div>

        <div className="text-sm font-light text-brand-bg/60">
          © {new Date().getFullYear()} NARA Capital. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
