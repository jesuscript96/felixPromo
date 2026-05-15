import { useState, useEffect, Fragment } from 'react';
import { MapPin, Map, BedDouble, ChevronLeft, ChevronRight, Play, Eye, Mail, Download, Phone, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import img1Fallback from '../images/Residencial San Blas - 2.jpg';
import img2Fallback from '../images/Residencial Terra.png';
import img3Fallback from '../images/Residencial Terra - 2.png';
import img4Fallback from '../images/Residencial San Blas - 3.jpg';
import { fetchTypologies, fetchUnits, Typology, Unit } from '../services/airtable';
import { useContent } from '../context/ContentContext';

const FALLBACK_IMAGES = [img1Fallback, img2Fallback, img3Fallback, img4Fallback];

export default function PropertyDetails() {
  const { config, secciones, imagenes } = useContent();
  const s = secciones['propiedad'] ?? {};

  // Galería: imágenes de Airtable o fallbacks estáticos
  const galeriaAirtable = imagenes['galeria'] ?? [];
  const galleryImages: string[] =
    galeriaAirtable.length > 0
      ? galeriaAirtable.map((img) => img.Imagen?.[0]?.url ?? '').filter(Boolean)
      : FALLBACK_IMAGES;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const [typologies, setTypologies] = useState<Typology[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [expandedTypologyId, setExpandedTypologyId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const [fetchedTypologies, fetchedUnits] = await Promise.all([
        fetchTypologies(),
        fetchUnits(),
      ]);
      setTypologies(fetchedTypologies);
      setUnits(fetchedUnits);
      setIsLoading(false);
    };
    loadData();
  }, []);

  const toggleTypology = (id: string) => {
    setExpandedTypologyId((prev) => (prev === id ? null : id));
  };

  const getUnitsForTypology = (typologyId: string) =>
    units.filter((u) => u.Tipología?.includes(typologyId));

  // Datos de contacto desde config
  const telefono = config['Teléfono'] ?? '+34 900 123 456';
  const dirPromocion = config['Dirección Promoción'] ?? 'Moncada';
  const cpPromocion = config['CP Promoción'] ?? '46113';
  const ciudadPromocion = config['Ciudad Promoción'] ?? 'Moncada, Valencia';
  const dirOficina = config['Dirección Oficina'] ?? 'Avenida de las Cortes Valencianas 58';
  const cpOficina = config['CP Oficina'] ?? '46015';
  const ciudadOficina = config['Ciudad Oficina'] ?? 'Valencia';
  const horarioLV = config['Horario L-V'] ?? '10:00h - 14:00h | 16:30h - 20:00h';
  const horarioSab = config['Horario Sábado'] ?? '10:00h - 14:00h';
  const horarioDom = config['Horario Domingo'] ?? 'Cerrado';

  return (
    <section id="promocion" className="py-24 bg-brand-bg text-brand-text">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* 1. Cabecera */}
        <div className="mb-16 border-b border-brand-text/10 pb-8">
          <h1 className="text-5xl md:text-6xl font-heading font-medium mb-6">
            {config['Nombre Promoción'] ?? 'NARA Moncada'}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-light tracking-wide">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-accent" />
                <span>{ciudadPromocion}</span>
              </div>
              <div className="flex items-center gap-2">
                <Map className="w-4 h-4 text-brand-accent" />
                <span>{dirPromocion}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium">
              <div className="bg-brand-text text-brand-bg px-4 py-2">
                Desde <span className="text-lg">{config['Precio Desde'] ?? '320.000€'}</span>
              </div>
              <div className="flex items-center gap-2 border border-brand-text/20 px-4 py-2">
                <BedDouble className="w-4 h-4 text-brand-accent" />
                <span>1, 2 y 3</span>
              </div>
              <div className="text-brand-accent tracking-widest uppercase text-xs font-bold">
                {config['Estado Comercialización'] ?? 'EN COMERCIALIZACIÓN'}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Galería + Formulario */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24">

          {/* Galería */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            <div className="relative aspect-[16/9] overflow-hidden bg-brand-text/5 group">
              <img
                src={galleryImages[currentImageIndex]}
                alt="Vista de la promoción"
                className="w-full h-full object-cover transition-transform duration-700"
              />

              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 text-brand-text transition-colors opacity-0 group-hover:opacity-100">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 text-brand-text transition-colors opacity-0 group-hover:opacity-100">
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 left-6 flex gap-4">
                {config['URL Vídeo'] && (
                  <a
                    href={config['URL Vídeo']}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-brand-accent text-brand-bg px-4 py-2 text-sm font-medium hover:bg-brand-accent/90 transition-colors"
                  >
                    <Play className="w-4 h-4" /> Ver vídeo
                  </a>
                )}
                {config['URL Visita Virtual'] && (
                  <a
                    href={config['URL Visita Virtual']}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-white text-brand-text px-4 py-2 text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    <Eye className="w-4 h-4" /> Visita Virtual
                  </a>
                )}
              </div>

              <div className="absolute bottom-6 right-6 bg-black/50 text-white px-3 py-1 text-sm font-mono backdrop-blur-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative flex-shrink-0 w-32 aspect-video overflow-hidden transition-opacity ${
                    currentImageIndex === idx
                      ? 'opacity-100 ring-2 ring-brand-text ring-offset-2 ring-offset-brand-bg'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 bg-white p-8 border border-brand-text/10 shadow-sm">
              <h3 className="text-2xl font-heading font-medium mb-2">
                {s.Subtítulo ?? '¿Estás interesado?'}
              </h3>
              <p className="text-sm font-light text-brand-text/70 mb-6">
                {s['Párrafo 1'] ?? 'Déjanos tus datos y nos pondremos en contacto contigo lo antes posible.'}
              </p>

              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Nombre*" required className="w-full border-b border-brand-text/20 py-3 bg-transparent focus:outline-none focus:border-brand-text transition-colors font-light text-sm" />
                <input type="text" placeholder="Apellidos*" required className="w-full border-b border-brand-text/20 py-3 bg-transparent focus:outline-none focus:border-brand-text transition-colors font-light text-sm" />
                <input type="tel" placeholder="Teléfono*" required className="w-full border-b border-brand-text/20 py-3 bg-transparent focus:outline-none focus:border-brand-text transition-colors font-light text-sm" />
                <input type="email" placeholder="E-mail*" required className="w-full border-b border-brand-text/20 py-3 bg-transparent focus:outline-none focus:border-brand-text transition-colors font-light text-sm" />

                <div className="mt-4 flex flex-col gap-3">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" required className="mt-1 accent-brand-text" />
                    <span className="text-xs font-light text-brand-text/80 group-hover:text-brand-text">
                      He leído y acepto los{' '}
                      <a href={config['URL Privacidad'] ?? '#'} className="underline hover:text-brand-accent">
                        Términos, Condiciones y Política de Privacidad
                      </a>.*
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-1 accent-brand-text" />
                    <span className="text-xs font-light text-brand-text/80 group-hover:text-brand-text">
                      Autorizo el envío de publicidad y promociones.
                    </span>
                  </label>
                </div>

                <button type="submit" className="mt-6 flex items-center justify-center gap-2 bg-brand-accent text-brand-bg py-4 font-medium tracking-widest uppercase text-sm hover:bg-brand-accent/90 transition-colors">
                  <Mail className="w-4 h-4" /> Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 3. Tipologías */}
        <div className="mb-24">
          <h2 className="text-3xl font-heading font-medium mb-8">
            {s.Título ?? 'Tipologías de viviendas'}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-brand-text/20 text-xs tracking-widest uppercase font-medium text-brand-text/60">
                  <th className="py-4 px-4 font-medium">Tipología</th>
                  <th className="py-4 px-4 font-medium">Uds Totales</th>
                  <th className="py-4 px-4 font-medium">Rango m²</th>
                  <th className="py-4 px-4 font-medium">Zonas Comunes</th>
                  <th className="py-4 px-4 font-medium text-center">Plano</th>
                  <th className="py-4 px-4 font-medium text-right">Desplegar</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light">
                {isLoading ? (
                  <tr><td colSpan={6} className="py-6 text-center">Cargando datos...</td></tr>
                ) : typologies.map((item) => {
                  const isExpanded = expandedTypologyId === item.id;
                  const typologyUnits = getUnitsForTypology(item.id);
                  return (
                    <Fragment key={item.id}>
                      <tr onClick={() => toggleTypology(item.id)} className="cursor-pointer border-b border-brand-text/10 hover:bg-brand-accent/10 transition-colors">
                        <td className="py-6 px-4 font-medium">{item.Nombre || 'N/A'}</td>
                        <td className="py-6 px-4">{item['Uds. Totales'] || 0}</td>
                        <td className="py-6 px-4">{item['Rango Tamaño'] || '-'}</td>
                        <td className="py-6 px-4">{item['Zonas Comunes'] || '-'}</td>
                        <td className="py-6 px-4 text-center">
                          {item['Planos de Tipología']?.[0] ? (
                            <a href={item['Planos de Tipología'][0].url} target="_blank" rel="noreferrer" className="text-brand-accent hover:text-brand-highlight transition-colors inline-block" onClick={(e) => e.stopPropagation()} title="Descargar plano">
                              <Download className="w-5 h-5" />
                            </a>
                          ) : '-'}
                        </td>
                        <td className="py-6 px-4 text-right">
                          <button className="p-2 border border-brand-text/20 hover:bg-brand-accent hover:border-brand-accent hover:text-brand-bg transition-colors">
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr>
                          <td colSpan={6} className="p-0 border-b border-brand-text/10 bg-brand-accent/5">
                            <div className="p-6 md:px-12">
                              <h4 className="text-sm font-medium mb-4 uppercase tracking-wider text-brand-text border-l-2 border-brand-accent pl-3">Unidades de la Tipología</h4>
                              {typologyUnits.length > 0 ? (
                                <div className="overflow-x-auto">
                                  <table className="w-full text-left border-collapse text-sm bg-white shadow-sm border border-brand-text/5">
                                    <thead>
                                      <tr className="border-b border-brand-text/20 font-medium bg-brand-bg">
                                        <th className="py-3 px-4 text-brand-text/80">Ref.</th>
                                        <th className="py-3 px-4 text-brand-text/80">Planta</th>
                                        <th className="py-3 px-4 text-brand-text/80">Habitaciones</th>
                                        <th className="py-3 px-4 text-brand-text/80">m² Const.</th>
                                        <th className="py-3 px-4 text-brand-text/80">Terraza</th>
                                        <th className="py-3 px-4 text-brand-text/80">Estado</th>
                                        <th className="py-3 px-4 text-right text-brand-text/80">Precio</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {typologyUnits.sort((a, b) => (a.Referencia || '').localeCompare(b.Referencia || '')).map((unit) => (
                                        <tr key={unit.id} className="border-b border-brand-text/10 last:border-0 hover:bg-brand-accent/5 transition-colors">
                                          <td className="py-3 px-4 font-medium">{unit.Referencia || '-'}</td>
                                          <td className="py-3 px-4">{unit.Planta || '-'}</td>
                                          <td className="py-3 px-4">{unit.Habitaciones || '-'}</td>
                                          <td className="py-3 px-4">{unit['m² Construidos'] ? `${unit['m² Construidos']} m²` : '-'}</td>
                                          <td className="py-3 px-4">{unit['m² Terraza'] ? `${unit['m² Terraza']} m²` : '-'}</td>
                                          <td className="py-3 px-4">
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${unit.Estado === 'Disponible' ? 'bg-green-100 text-green-800' : unit.Estado === 'Reservado' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                              {unit.Estado || 'Desconocido'}
                                            </span>
                                          </td>
                                          <td className="py-3 px-4 text-right font-medium text-brand-accent">
                                            {unit['Precio de Venta (PVP)']
                                              ? new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(unit['Precio de Venta (PVP)']!)
                                              : 'Consultar'}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              ) : (
                                <p className="text-sm text-brand-text/60 italic border border-brand-text/10 p-4 bg-white">No hay unidades cargadas para esta tipología.</p>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {config['URL Memoria Calidades'] ? (
              <a
                href={config['URL Memoria Calidades']}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-brand-accent text-brand-text px-6 py-3 text-sm font-medium hover:bg-brand-accent hover:text-brand-bg transition-colors"
              >
                <Download className="w-4 h-4" /> Descargar memoria de calidades
              </a>
            ) : (
              <button className="flex items-center gap-2 border border-brand-accent text-brand-text px-6 py-3 text-sm font-medium hover:bg-brand-accent hover:text-brand-bg transition-colors">
                <Download className="w-4 h-4" /> Descargar memoria de calidades
              </button>
            )}
            {config['URL Dossier'] ? (
              <a
                href={config['URL Dossier']}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-brand-accent text-brand-text px-6 py-3 text-sm font-medium hover:bg-brand-accent hover:text-brand-bg transition-colors"
              >
                <Download className="w-4 h-4" /> Descargar dossier
              </a>
            ) : (
              <button className="flex items-center gap-2 border border-brand-accent text-brand-text px-6 py-3 text-sm font-medium hover:bg-brand-accent hover:text-brand-bg transition-colors">
                <Download className="w-4 h-4" /> Descargar dossier
              </button>
            )}
          </div>
        </div>

        {/* 4. Ubicación y Contacto */}
        <div>
          <h2 className="text-3xl font-heading font-medium mb-8">
            {s['Etiqueta Superior'] ?? 'Ubicación de la promoción'}
          </h2>

          <div className="relative w-full h-[400px] bg-gray-200 mb-12 flex items-center justify-center group overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute top-4 right-4 flex bg-white shadow-sm text-xs font-medium">
              <button className="px-4 py-2 bg-gray-100 text-brand-text">Map</button>
              <button className="px-4 py-2 text-brand-text/60 hover:text-brand-text">Satellite</button>
            </div>
            <button className="relative z-10 bg-brand-accent text-brand-bg px-8 py-4 font-medium tracking-widest uppercase text-sm hover:bg-brand-highlight transition-colors shadow-xl">
              Ver ubicación
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-brand-text/10 pt-12">
            <div className="flex gap-4">
              <div className="mt-1">
                <MapPin className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Dirección de la promoción</h4>
                <p className="text-sm font-light leading-relaxed text-brand-text/80">
                  {dirPromocion}<br />
                  {cpPromocion}<br />
                  {ciudadPromocion}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1">
                <Map className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Oficina de ventas</h4>
                <p className="text-sm font-light leading-relaxed text-brand-text/80 mb-4">
                  {dirOficina}<br />
                  {cpOficina}<br />
                  {ciudadOficina}
                </p>

                <div className="flex items-center gap-2 mb-4 text-brand-accent font-medium">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${telefono.replace(/\s/g, '')}`} className="hover:underline">{telefono}</a>
                </div>

                <div className="flex gap-2 text-sm font-light text-brand-text/80">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p><span className="font-medium text-brand-text">L-V:</span> {horarioLV}</p>
                    <p><span className="font-medium text-brand-text">Sábado:</span> {horarioSab}</p>
                    <p><span className="font-medium text-brand-text">Domingo:</span> {horarioDom}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
