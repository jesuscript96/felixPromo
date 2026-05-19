import { useState } from 'react';
import { motion } from 'motion/react';
import { Sun, Dumbbell, Building, Car, Waves, Bike, Trees, ShieldCheck, Coffee, Wifi, ChevronLeft, ChevronRight, type LucideIcon } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import amenitiesBgFallback from '../images/Residencial Terra - 2.png';
import fallback1 from '../images/Residencial San Blas - 2.jpg';
import fallback2 from '../images/Residencial Terra.png';
import fallback3 from '../images/Residencial Terra - 2.png';

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

  const carouselFromAirtable = (imagenes['amenidades'] ?? [])
    .slice(1)
    .map((img) => ({ url: img.Imagen?.[0]?.url ?? '', alt: img['Texto Alt'] ?? '' }))
    .filter((img) => img.url);

  const carouselImages =
    carouselFromAirtable.length > 0
      ? carouselFromAirtable
      : [
          { url: fallback1, alt: 'Zona común' },
          { url: fallback2, alt: 'Zona común' },
          { url: fallback3, alt: 'Zona común' },
        ];

  const [carouselIndex, setCarouselIndex] = useState(0);
  const maxIndex = Math.max(0, carouselImages.length - 3);
  const prevSlide = () => setCarouselIndex((prev) => Math.max(0, prev - 1));
  const nextSlide = () => setCarouselIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <section id="entorno" className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-8">
              {s.Título ?? 'Un lugar donde crecer, conectar y vivir experiencias'}
              <div className="w-32 h-[1px] bg-white mt-8" />
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-white/90">
              {s['Párrafo 1'] ?? ''}
            </p>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-x-8 gap-y-12">
          {amenidades.map((item, index) => {
            const Icon = resolveIcon(item.Icono);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start gap-4 border-b border-white/20 pb-6 group hover:border-white/60 transition-colors"
              >
                <Icon className="w-10 h-10 text-white/80 group-hover:text-brand-highlight transition-colors" strokeWidth={1.5} />
                <span className="text-lg font-light tracking-wide text-white">{item.Nombre}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Carousel de fotos de amenidades */}
      <div className="relative z-10 w-full pb-16 px-6 md:px-12 lg:px-16">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${carouselIndex * (100 / 3)}%)` }}
          >
            {carouselImages.map((img, i) => (
              <div key={i} className="flex-shrink-0 w-1/3 px-2 h-52 md:h-64">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {carouselIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {carouselIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
