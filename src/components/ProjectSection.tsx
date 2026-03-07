import { motion } from 'motion/react';
import projectImg from '../images/Residencial San Blas - 2.jpg';

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
            Diseño y<br />Exclusividad
            <div className="w-32 h-[1px] bg-brand-accent mt-8" />
          </h2>

          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-brand-text/90">
            <p>
              NARA Moncada es un <strong className="font-medium">proyecto residencial</strong> de obra nueva donde la{' '}
              <strong className="font-medium">sostenibilidad</strong> y la <strong className="font-medium">vanguardia</strong> se unen con las
              mejores calidades para ofrecer una nueva forma de vivir y una rentabilidad inmejorable.
            </p>

            <p>
              Ubicado a 20 minutos de Valencia y a 12 minutos a pie del Metro, el edificio cuenta con <strong className="font-medium">25
                viviendas de 1, 2 dormitorios y Áticos</strong> junto a <strong className="font-medium">25 trasteros y garajes</strong>.
            </p>

            <p>
              El residencial comparte un diseño arquitectónico exclusivo, garantizando <strong className="font-medium">luz natural</strong> en los ~2,160 m² de superficie construida.
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
            src={projectImg}
            alt="Interior view of NARA Moncada"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
