import { motion } from 'motion/react';
import { Sun, Dumbbell, Building, Car } from 'lucide-react';
import amenitiesBg from '../images/Residencial Terra - 2.png';

export default function AmenitiesSection() {
  const amenities = [
    { icon: Sun, label: 'Piscina' },
    { icon: Dumbbell, label: 'Gimnasio' },
    { icon: Building, label: 'Sala Polivalente' },
    { icon: Car, label: 'Garajes y Trasteros' },
  ];

  return (
    <section id="entorno" className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${amenitiesBg})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-8">
              Un lugar donde crecer,<br />
              conectar y vivir experiencias
              <div className="w-32 h-[1px] bg-white mt-8" />
            </h2>

            <p className="text-lg md:text-xl font-light leading-relaxed text-white/90">
              NARA Moncada es mucho más que un conjunto de viviendas, es un
              espacio pensado para <strong className="font-medium text-white">elevar el desarrollo personal y la
                calidad de vida en comunidad</strong>. Este residencial incluye
              servicios y <strong className="font-medium text-white">zonas comunes premium</strong> que invitan a convivir,
              relacionarse y relajarse.
            </p>
          </motion.div>
        </div>

        {/* Right Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-x-8 gap-y-12">
          {amenities.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start gap-4 border-b border-white/20 pb-6 group hover:border-white/60 transition-colors"
            >
              <item.icon className="w-10 h-10 text-white/80 group-hover:text-brand-highlight transition-colors" strokeWidth={1.5} />
              <span className="text-lg font-light tracking-wide text-white">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
