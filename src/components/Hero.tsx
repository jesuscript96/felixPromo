import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import heroBgFallback from '../images/Residencial Terra.png';

export default function Hero() {
  const { config, secciones, imagenes } = useContent();
  const s = secciones['hero'] ?? {};
  const bgUrl = imagenes['hero']?.[0]?.Imagen?.[0]?.url ?? heroBgFallback;

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        {/* Soft, premium light overlay to guarantee contrast for dark letters */}
        <div className="absolute inset-0 bg-brand-bg/65 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 xl:px-32 pb-32 xl:pb-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl text-brand-text"
        >
          <p className="text-xs md:text-sm xl:text-base tracking-[0.2em] uppercase mb-2 text-brand-accent font-semibold">
            {s['Etiqueta Superior'] ?? 'Promoción'}
          </p>
          <h1 className="text-[54px] md:text-[86px] xl:text-[110px] 2xl:text-[130px] font-heading font-medium mb-2 tracking-tight leading-none">
            {config['Nombre Promoción'] ?? 'NARA Moncada'}
          </h1>
          <p className="text-xs md:text-sm xl:text-base tracking-[0.3em] uppercase font-medium mb-12 xl:mb-16 text-brand-accent/90">
            {config['Tagline Hero'] ?? 'Vanguardia y Diseño en el eje norte de Valencia'}
          </p>

          <p className="text-base md:text-lg xl:text-xl font-light mb-4 text-brand-text/90">
            {config['Descripción Hero'] ?? 'A un paso del CEU y a 20 minutos de Valencia'}
          </p>
          <h2 className="text-[32px] md:text-[43px] xl:text-[56px] 2xl:text-[64px] font-heading font-medium leading-tight mb-10 xl:mb-14">
            {config['Subtítulo Hero'] ?? '25 Viviendas de 1, 2 dormitorios y Áticos'}
          </h2>

          <div className="inline-block px-8 py-4 border border-brand-text/30 bg-white/20 backdrop-blur-sm hover:bg-brand-accent hover:border-brand-accent hover:text-brand-bg transition-all duration-300 cursor-pointer">
            <span className="text-xs tracking-[0.2em] uppercase font-semibold">
              {config['Localización'] ?? 'Valencia, España'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
