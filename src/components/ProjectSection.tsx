import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import projectImgFallback from '../images/Residencial San Blas - 2.jpg';

export default function ProjectSection() {
  const { secciones, imagenes } = useContent();
  const s = secciones['proyecto'] ?? {};
  const imgUrl = imagenes['proyecto']?.[0]?.Imagen?.[0]?.url ?? projectImgFallback;
  const imgAlt = imagenes['proyecto']?.[0]?.['Texto Alt'] ?? 'Interior view of NARA Moncada';

  return (
    <section id="proyecto" className="min-h-screen w-full bg-brand-bg flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-12 text-brand-text">
            {s.Título ?? 'Diseño y Exclusividad'}
            <div className="w-32 h-[1px] bg-brand-accent mt-8" />
          </h2>

          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-brand-text/90">
            {s['Párrafo 1'] && <p>{s['Párrafo 1']}</p>}
            {s['Párrafo 2'] && <p>{s['Párrafo 2']}</p>}
            {s['Párrafo 3'] && <p>{s['Párrafo 3']}</p>}
          </div>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative">
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
