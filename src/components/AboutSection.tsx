import { motion } from 'motion/react';

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
              Construyendo un futuro<br />más sostenible
              <div className="w-24 h-[1px] bg-brand-text mt-8" />
            </h2>
            
            <div className="space-y-6 text-lg font-light leading-relaxed text-brand-text/80">
              <p>
                En Verdea Real Estate, creemos que el desarrollo urbano debe ir de la mano con el respeto por nuestro entorno. Nos dedicamos a crear espacios que no solo ofrecen un hogar excepcional, sino que también contribuyen positivamente al medio ambiente.
              </p>
              <p>
                Nuestra filosofía se basa en la innovación arquitectónica, el uso de materiales nobles y sostenibles, y la integración de la naturaleza en el día a día de las personas. Cada proyecto es una oportunidad para redefinir la forma en que habitamos nuestras ciudades.
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
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Arquitectura sostenible"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-brand-text/10 m-4 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
