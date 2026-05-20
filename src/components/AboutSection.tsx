import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import aboutImgFallback from '../images/Residencial San Blas.jpg';

export default function AboutSection() {
  const { secciones, imagenes } = useContent();
  const s = secciones['nosotros'] ?? {};
  const imgUrl = imagenes['nosotros']?.[0]?.Imagen?.[0]?.url ?? aboutImgFallback;
  const imgAlt = imagenes['nosotros']?.[0]?.['Texto Alt'] ?? 'NARA Moncada Exterior';

  return (
    <section id="nosotros" className="py-24 xl:py-36 2xl:py-48 px-6 md:px-12 lg:px-24 xl:px-32 bg-brand-bg text-brand-text">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 xl:gap-32 items-center">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm xl:text-base tracking-[0.3em] uppercase font-medium mb-4 text-brand-accent">
              {s['Etiqueta Superior'] ?? 'Sobre nosotros'}
            </p>
            <h2 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-medium leading-tight mb-8 xl:mb-12">
              {s.Título ?? 'Oportunidad en Moncada'}
              <div className="w-24 xl:w-32 h-[1px] bg-brand-accent mt-8" />
            </h2>

            <div className="space-y-6 xl:space-y-8 text-lg xl:text-xl font-light leading-relaxed text-brand-text/80">
              {s['Párrafo 1'] && <p>{s['Párrafo 1']}</p>}
              {s['Párrafo 2'] && <p>{s['Párrafo 2']}</p>}
              {s['Párrafo 3'] && <p>{s['Párrafo 3']}</p>}
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden shadow-xl"
          >
            <img src={imgUrl} alt={imgAlt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 border border-brand-text/10 m-4 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
