import { motion } from 'motion/react';

export default function DetailsSection() {
  const details = [
    {
      title: 'Coworking',
      description: 'Coworking abierto a la comunidad, diseñado para impulsar nuevas formas de trabajo en comunidad. Un espacio que cuida, conecta y potencia el talento compartido.'
    },
    {
      title: 'Gym',
      description: 'Gimnasio comunitario para los amantes de la vida saludable, con terraza abierta al paisaje, donde el bienestar se conecta con la Huerta valenciana.'
    },
    {
      title: 'Patio central',
      description: 'El corazón verde del proyecto: un espacio compartido que conecta y da vida a la comunidad de Verdea. Diseñado para convivir, descansar y disfrutar en un entorno natural y luminoso.'
    },
    {
      title: 'Zonas vegetales',
      description: 'Iluminadas por el gran patio central, donde sentarte y disfrutar de la naturaleza en el interior de tu hogar.'
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
            <div className="w-32 h-[1px] bg-brand-text mt-8" />
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
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Common areas of Verdea project"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
