import { motion } from 'motion/react';
import detailsImg from '../images/Residencial San Blas - 3.jpg';

export default function DetailsSection() {
  const details = [
    {
      title: 'Piscina Comunitaria',
      description: 'Disfruta de una zona de baño exclusiva, ideal para refrescarse y relajarse bajo el clima soleado de Valencia, todo dentro del recinto.'
    },
    {
      title: 'Gimnasio',
      description: 'Zonas deportivas equipadas para mantener un estilo de vida activo y saludable sin tener que salir del edificio.'
    },
    {
      title: 'Sala Polivalente',
      description: 'Un espacio flexbile y acogedor pensado para el ocio, reuniones de la comunidad, y celebraciones, potenciando la vida compartida.'
    },
    {
      title: 'Trasteros y Garajes',
      description: '25 plazas de aparcamiento y trasteros privados, ofreciendo la máxima comodidad y seguridad en tu día a día.'
    }
  ];

  return (
    <section id="viviendas" className="min-h-screen w-full bg-brand-bg flex flex-col lg:flex-row py-24">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-16 text-brand-text">
            Espacios comunes<br />Planta Baja
            <div className="w-32 h-[1px] bg-brand-accent mt-8" />
          </h2>

          <div className="space-y-12">
            {details.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <h3 className="text-xl font-semibold mb-3 text-brand-text group-hover:text-brand-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg font-light leading-relaxed text-brand-text/80">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative mt-16 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 m-4 lg:m-8 lg:ml-0 overflow-hidden shadow-xl"
        >
          <img
            src={detailsImg}
            alt="Common areas of NARA Moncada"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
