import { motion } from 'motion/react';
import { Sun, Dumbbell, Building, Car, Waves, Bike, Trees, ShieldCheck, Coffee, Wifi, type LucideIcon } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import amenitiesBgFallback from '../images/Residencial Terra - 2.png';

const ICON_MAP: Record<string, LucideIcon> = {
  sun: Sun,
  piscina: Sun,
  pool: Sun,
  waves: Waves,
  dumbbell: Dumbbell,
  gimnasio: Dumbbell,
  gym: Dumbbell,
  building: Building,
  sala: Building,
  car: Car,
  garaje: Car,
  garage: Car,
  parking: Car,
  bike: Bike,
  trees: Trees,
  shield: ShieldCheck,
  coffee: Coffee,
  wifi: Wifi,
};

function resolveIcon(name?: string) {
  if (!name) return Sun;
  return ICON_MAP[name.toLowerCase()] ?? Sun;
}

export default function AmenitiesSection() {
  const { secciones, imagenes, amenidades } = useContent();
  const s = secciones['amenidades'] ?? {};
  const bgUrl = imagenes['amenidades']?.[0]?.Imagen?.[0]?.url ?? amenitiesBgFallback;

  return (
    <section id="entorno" className="relative min-h-screen w-full overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32 py-24 xl:py-36 2xl:py-48 flex flex-col lg:flex-row gap-16 lg:gap-24 xl:gap-32">
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-medium leading-tight mb-8 xl:mb-12">
              {s.Título ?? 'Un lugar donde crecer, conectar y vivir experiencias'}
              <div className="w-32 xl:w-40 h-[1px] bg-white mt-8" />
            </h2>
            <p className="text-lg md:text-xl xl:text-2xl font-light leading-relaxed text-white/90">
              {s['Párrafo 1'] ?? ''}
            </p>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 xl:grid-cols-3 gap-x-8 xl:gap-x-12 gap-y-12 xl:gap-y-16">
          {amenidades.map((item, index) => {
            const Icon = resolveIcon(item.Icono);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start gap-4 border-b border-white/20 pb-6 xl:pb-8 group hover:border-white/60 transition-colors"
              >
                <Icon className="w-10 h-10 xl:w-12 xl:h-12 text-white/80 group-hover:text-brand-highlight transition-colors" strokeWidth={1.5} />
                <span className="text-lg xl:text-xl font-light tracking-wide text-white">{item.Nombre}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
