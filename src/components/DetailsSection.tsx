import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import detailsImgFallback from '../images/Residencial San Blas - 3.jpg';

export default function DetailsSection() {
  const { secciones, imagenes, zonasComunes } = useContent();
  const s = secciones['detalles'] ?? {};
  const imgUrl = imagenes['detalles']?.[0]?.Imagen?.[0]?.url ?? detailsImgFallback;
  const imgAlt = imagenes['detalles']?.[0]?.['Texto Alt'] ?? 'Common areas of NARA Moncada';

  return (
    <section id="viviendas" className="min-h-screen w-full bg-brand-bg flex flex-col lg:flex-row py-24 xl:py-36">
      <div className="w-full lg:w-1/2 px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-medium leading-tight mb-16 xl:mb-20 text-brand-text">
            {s.Título ?? 'Espacios comunes Planta Baja'}
            <div className="w-32 xl:w-40 h-[1px] bg-brand-accent mt-8" />
          </h2>

          <div className="space-y-12 xl:space-y-16">
            {zonasComunes.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <h3 className="text-xl xl:text-2xl font-semibold mb-3 text-brand-text group-hover:text-brand-accent transition-colors">
                  {item.Nombre}
                </h3>
                <p className="text-lg xl:text-xl font-light leading-relaxed text-brand-text/80">
                  {item.Descripción}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative mt-16 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 m-4 lg:m-8 lg:ml-0 overflow-hidden shadow-xl"
        >
          <img src={imgUrl} alt={imgAlt} className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
