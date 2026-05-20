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
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl text-white"
        >
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase mb-2">
            {s['Etiqueta Superior'] ?? 'Promoción'}
          </p>
          <h1 className="text-[54px] md:text-[86px] font-heading font-medium mb-2 tracking-tight">
            {config['Nombre Promoción'] ?? 'NARA Moncada'}
          </h1>
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase font-light mb-12 opacity-90">
            {config['Tagline Hero'] ?? 'Vanguardia y Diseño en el eje norte de Valencia'}
          </p>

          <p className="text-base md:text-lg font-light mb-4">
            {config['Descripción Hero'] ?? 'A un paso del CEU y a 20 minutos de Valencia'}
          </p>
          <h2 className="text-[32px] md:text-[43px] font-heading font-medium leading-tight mb-10">
            {config['Subtítulo Hero'] ?? '25 Viviendas de 1, 2 dormitorios y Áticos'}
          </h2>

          <div className="inline-block px-8 py-4 border border-white/50 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            <span className="text-xs tracking-[0.2em] uppercase font-medium">
              {config['Localización'] ?? 'Valencia, España'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
