import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import fallback1 from '../images/Residencial San Blas - 2.jpg';
import fallback2 from '../images/Residencial Terra.png';
import fallback3 from '../images/Residencial Terra - 2.png';
import fallback4 from '../images/Residencial San Blas - 3.jpg';
import fallback5 from '../images/Residencial San Blas.jpg';

const FALLBACKS = [fallback1, fallback2, fallback3, fallback4, fallback5];

export default function ProjectSection() {
  const { secciones, imagenes } = useContent();
  const s = secciones['proyecto'] ?? {};
  const [activeIndex, setActiveIndex] = useState(0);
  const [isXl, setIsXl] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1280);

  useEffect(() => {
    const handler = () => setIsXl(window.innerWidth >= 1280);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const cardSizes = {
    activeW: isXl ? '44%' : '40%',
    activeH: isXl ? 600 : 480,
    d1W: isXl ? '18%' : '16%',
    d1H: isXl ? 420 : 330,
    d2W: isXl ? '12%' : '10%',
    d2H: isXl ? 300 : 230,
  };

  // Map carousel slides dynamically from IMAGENES table with Sección = 'proyecto'
  const projectImages = imagenes['proyecto'] ?? [];
  const zones = projectImages.length > 0
    ? projectImages.map((img, i) => ({
        id: img.id,
        Nombre: img.Nombre ?? `Diseño ${i + 1}`,
        Descripción: img['Texto Alt'] ?? '',
        imgUrl: img.Imagen?.[0]?.url ?? FALLBACKS[i % FALLBACKS.length],
      }))
    : FALLBACKS.map((fb, i) => {
        const fallbackTitles = [
          'Arquitectura Sostenible',
          'Interiores Luminosos',
          'Vanguardia y Confort',
          'Acabados Premium',
          'Diseño Exclusivo'
        ];
        return {
          id: `fallback-${i}`,
          Nombre: fallbackTitles[i] ?? `Diseño ${i + 1}`,
          Descripción: 'Detalle de diseño exclusivo y alta calidad del residencial NARA Moncada.',
          imgUrl: fb,
        };
      });

  // Automatically center the active slide once images load
  useEffect(() => {
    if (zones.length > 0) {
      setActiveIndex(Math.floor(zones.length / 2));
    }
  }, [zones.length]);

  const activeIndexClamped = Math.min(Math.max(0, activeIndex), Math.max(0, zones.length - 1));

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(zones.length - 1, i + 1));

  return (
    <section id="proyecto" className="py-24 xl:py-36 bg-brand-bg overflow-hidden">

      {/* Cabecera */}
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 mb-16 xl:mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-medium leading-tight mb-8 xl:mb-12 text-brand-text">
            {s.Título ?? 'Diseño y Exclusividad'}
            <div className="w-32 xl:w-40 h-[1px] bg-brand-accent mt-8" />
          </h2>
          {s['Párrafo 1'] && (
            <p className="text-lg xl:text-xl font-light leading-relaxed text-brand-text/80 max-w-2xl xl:max-w-3xl">
              {s['Párrafo 1']}
            </p>
          )}
        </motion.div>
      </div>

      {/* Coverflow — desktop */}
      <div className="hidden md:block">
        <div className="flex items-end justify-center gap-3 px-4">
          {zones.map((zone, i) => {
            const dist = Math.abs(i - activeIndexClamped);
            const isActive = i === activeIndexClamped;

            return (
              <motion.div
                key={zone.id}
                animate={{
                  width: dist > 2 ? '0%' : isActive ? cardSizes.activeW : dist === 1 ? cardSizes.d1W : cardSizes.d2W,
                  height: dist > 2 ? 0 : isActive ? cardSizes.activeH : dist === 1 ? cardSizes.d1H : cardSizes.d2H,
                  opacity: dist > 2 ? 0 : isActive ? 1 : dist === 1 ? 0.72 : 0.5,
                }}
                style={{ pointerEvents: dist > 2 ? 'none' : 'auto', minWidth: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative flex-shrink-0 overflow-hidden cursor-pointer"
                onClick={() => setActiveIndex(i)}
              >
                <img
                  src={zone.imgUrl}
                  alt={zone.Nombre ?? ''}
                  className="w-full h-full object-cover"
                />

                {/* Degradado inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Título y descripción */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3
                    className="font-heading text-white font-medium leading-tight transition-all duration-500"
                    style={{ fontSize: isActive ? '1.75rem' : '0.8rem' }}
                  >
                    {zone.Nombre}
                  </h3>
                  {isActive && zone.Descripción && (
                    <p className="text-white/80 text-sm font-light mt-2 line-clamp-2">
                      {zone.Descripción}
                    </p>
                  )}
                </div>

                {/* Borde activo en la parte inferior */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-highlight" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            disabled={activeIndexClamped === 0}
            className="p-3 border border-brand-text/20 text-brand-text hover:bg-brand-accent hover:border-brand-accent hover:text-brand-bg disabled:opacity-25 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Indicadores de punto */}
          <div className="flex gap-2">
            {zones.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndexClamped ? 'bg-brand-accent w-6' : 'bg-brand-text/20 hover:bg-brand-text/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={activeIndexClamped === zones.length - 1}
            className="p-3 border border-brand-text/20 text-brand-text hover:bg-brand-accent hover:border-brand-accent hover:text-brand-bg disabled:opacity-25 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider simple — móvil */}
      <div className="md:hidden px-6">
        {zones[activeIndexClamped] && (
          <div className="relative w-full h-[360px] overflow-hidden">
            <img
              src={zones[activeIndexClamped].imgUrl}
              alt={zones[activeIndexClamped].Nombre ?? ''}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-heading text-white font-medium">
                {zones[activeIndexClamped].Nombre}
              </h3>
              {zones[activeIndexClamped].Descripción && (
                <p className="text-white/80 text-sm font-light mt-2 line-clamp-2">
                  {zones[activeIndexClamped].Descripción}
                </p>
              )}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-highlight" />
            </div>
          </div>
        )}

        <div className="flex items-center justify-center gap-6 mt-6">
          <button onClick={prev} disabled={activeIndexClamped === 0} className="p-3 border border-brand-text/20 text-brand-text hover:bg-brand-accent hover:border-brand-accent hover:text-brand-bg disabled:opacity-25 transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-brand-text/50 font-light tabular-nums">
            {activeIndexClamped + 1} / {zones.length}
          </span>
          <button onClick={next} disabled={activeIndexClamped === zones.length - 1} className="p-3 border border-brand-text/20 text-brand-text hover:bg-brand-accent hover:border-brand-accent hover:text-brand-bg disabled:opacity-25 transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </section>
  );
}
