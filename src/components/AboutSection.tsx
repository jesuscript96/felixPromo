import { motion } from 'motion/react';
import aboutImg from '../images/Residencial San Blas.jpg';

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 px-6 md:px-12 lg:px-24 bg-brand-bg text-brand-text">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase font-medium mb-4 text-brand-accent">Sobre nosotros</p>
            <h2 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-8">
              Oportunidad en<br />Moncada
              <div className="w-24 h-[1px] bg-brand-accent mt-8" />
            </h2>

            <div className="space-y-6 text-lg font-light leading-relaxed text-brand-text/80">
              <p>
                En NARA Capital, ofrecemos esta oportunidad en una ubicación privilegiada. Moncada es una zona de alta demanda estratégica por su cercanía con la Universidad CEU Cardenal Herrera.
              </p>
              <p>
                Con un crecimiento constante del mercado, NARA Moncada no solo ofrece un hogar excepcional de vanguardia y diseño, sino que también representa una inversión sólida con rentabilidad sostenida.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden shadow-xl"
          >
            <img
              src={aboutImg}
              alt="NARA Moncada Exterior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-brand-text/10 m-4 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
