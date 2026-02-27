import { motion } from 'motion/react';

export default function ProjectSection() {
  return (
    <section id="proyecto" className="min-h-screen w-full bg-brand-bg flex flex-col lg:flex-row">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-12 text-brand-text">
            Confort, Sostenibilidad y<br />Eficiencia
            <div className="w-32 h-[1px] bg-brand-text mt-8" />
          </h2>

          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-brand-text/90">
            <p>
              Verdea es un <strong className="font-medium">proyecto residencial</strong> de obra nueva donde la{' '}
              <strong className="font-medium">sostenibilidad</strong> y la <strong className="font-medium">eficiencia energética</strong> se unen con las
              mejores calidades para ofrecer una nueva forma de vivir,
              proporcionando un <strong className="font-medium">impacto positivo</strong> ambiental,
              económico y social.
            </p>

            <p>
              Ubicado en Valencia, el residencial cuenta con <strong className="font-medium">74
              viviendas de 1 y 2 dormitorios</strong> diseñadas en madera y con
              espectaculares vistas a La Huerta de Valencia.
            </p>

            <p>
              El residencial comparte un diseño arquitectónico sostenible
              y vanguardista, con un <strong className="font-medium">gran patio central</strong> como elemento
              principal, garantizando <strong className="font-medium">luz natural y ventilación</strong> en todo el
              edificio.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 m-4 lg:m-8 lg:ml-0 overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Interior view of Verdea project"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
