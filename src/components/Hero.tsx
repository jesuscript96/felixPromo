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
        style={{ 
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full px-6 md:px-12 lg:px-24 xl:px-32 pt-32 pb-8 md:pb-10 xl:pb-12">
        {/* Bloque Superior Animado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl text-white/90"
        >
          <p className="text-[10.8px] md:text-[12.6px] xl:text-[14.4px] tracking-[0.2em] uppercase mb-2 text-white/75 font-semibold">
            {s['Etiqueta Superior'] ?? 'Promoción'}
          </p>
          <h1 className="text-[48.6px] md:text-[77.4px] xl:text-[99px] 2xl:text-[117px] font-heading font-medium mb-2 tracking-tight leading-none text-white/95">
            {config['Nombre Promoción'] ?? 'NARA Moncada'}
          </h1>
          <p className="text-[10.8px] md:text-[12.6px] xl:text-[14.4px] tracking-[0.3em] uppercase font-medium text-white/80">
            {config['Tagline Hero'] ?? 'Vanguardia y Diseño en el eje norte de Valencia'}
          </p>
        </motion.div>

        {/* Bloque Inferior Estático */}
        <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl text-white/90 mt-8 md:mt-0">
          <p className="text-[14.4px] md:text-[16.2px] xl:text-[18px] font-light mb-4 text-white/85">
            {config['Descripción Hero'] ?? 'A un paso del CEU y a 20 minutos de Valencia'}
          </p>
          <h2 className="text-[28.8px] md:text-[38.7px] xl:text-[50.4px] 2xl:text-[57.6px] font-heading font-medium leading-tight mb-10 xl:mb-14 text-white/95">
            {config['Subtítulo Hero'] ?? '25 Viviendas de 1, 2 dormitorios y Áticos'}
          </h2>

          <div className="inline-block px-8 py-4 border border-white/40 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            <span className="text-[10.8px] tracking-[0.2em] uppercase font-semibold">
              {config['Localización'] ?? 'Valencia, España'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

