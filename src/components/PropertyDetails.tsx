import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Map, BedDouble, ChevronLeft, ChevronRight, Play, Eye, Mail, Download, Calculator, Info, Phone, Clock } from 'lucide-react';

export default function PropertyDetails() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const typologies = [
    { type: 'Piso', regime: 'Venta', status: 'Libre', beds: 2, size: '85.40 m²', price: '320.000 €' },
    { type: 'Piso', regime: 'Venta', status: 'Libre', beds: 3, size: '105.63 m²', price: '460.000 €' },
    { type: 'Ático', regime: 'Venta', status: 'Libre', beds: 4, size: '145.20 m²', price: '680.000 €' },
  ];

  return (
    <section id="promocion" className="py-24 bg-brand-bg text-brand-text">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* 1. Cabecera de Título y Datos Rápidos */}
        <div className="mb-16 border-b border-brand-text/10 pb-8">
          <h1 className="text-5xl md:text-6xl font-heading font-medium mb-6">Verdea Godella</h1>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Metadatos de Ubicación */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-light tracking-wide">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-accent" />
                <span>Valencia - Godella</span>
              </div>
              <div className="flex items-center gap-2">
                <Map className="w-4 h-4 text-brand-accent" />
                <span>Calle Montgó 19, Godella</span>
              </div>
            </div>

            {/* Resumen de Venta */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium">
              <div className="bg-brand-text text-brand-bg px-4 py-2">
                Desde <span className="text-lg">320.000€</span>
              </div>
              <div className="flex items-center gap-2 border border-brand-text/20 px-4 py-2">
                <BedDouble className="w-4 h-4 text-brand-accent" />
                <span>2, 3 y 4</span>
              </div>
              <div className="text-brand-accent tracking-widest uppercase text-xs font-bold">
                EN COMERCIALIZACIÓN
              </div>
            </div>
          </div>
        </div>

        {/* 2. Sección Principal de Contenido (Dos Columnas) */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          
          {/* Columna Izquierda: Contenido Visual */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            {/* Galería Principal */}
            <div className="relative aspect-[16/9] overflow-hidden bg-brand-text/5 group">
              <img 
                src={images[currentImageIndex]} 
                alt="Vista de la promoción" 
                className="w-full h-full object-cover transition-transform duration-700"
              />
              
              {/* Controles de Navegación */}
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 text-brand-text transition-colors opacity-0 group-hover:opacity-100">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 text-brand-text transition-colors opacity-0 group-hover:opacity-100">
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Botones de Acción Superpuestos */}
              <div className="absolute bottom-6 left-6 flex gap-4">
                <button className="flex items-center gap-2 bg-brand-text text-brand-bg px-4 py-2 text-sm font-medium hover:bg-brand-accent transition-colors">
                  <Play className="w-4 h-4" /> Ver vídeo
                </button>
                <button className="flex items-center gap-2 bg-white text-brand-text px-4 py-2 text-sm font-medium hover:bg-gray-100 transition-colors">
                  <Eye className="w-4 h-4" /> Visita Virtual
                </button>
              </div>

              {/* Indicador */}
              <div className="absolute bottom-6 right-6 bg-black/50 text-white px-3 py-1 text-sm font-mono backdrop-blur-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Carrusel de Miniaturas */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative flex-shrink-0 w-32 aspect-video overflow-hidden transition-opacity ${currentImageIndex === idx ? 'opacity-100 ring-2 ring-brand-text ring-offset-2 ring-offset-brand-bg' : 'opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Captación de Leads (Sticky Form) */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 bg-white p-8 border border-brand-text/10 shadow-sm">
              <h3 className="text-2xl font-heading font-medium mb-2">¿Estás interesado?</h3>
              <p className="text-sm font-light text-brand-text/70 mb-6">Déjanos tus datos y nos pondremos en contacto contigo lo antes posible.</p>
              
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Nombre*" required className="w-full border-b border-brand-text/20 py-3 bg-transparent focus:outline-none focus:border-brand-text transition-colors font-light text-sm" />
                <input type="text" placeholder="Apellidos*" required className="w-full border-b border-brand-text/20 py-3 bg-transparent focus:outline-none focus:border-brand-text transition-colors font-light text-sm" />
                <input type="tel" placeholder="Teléfono*" required className="w-full border-b border-brand-text/20 py-3 bg-transparent focus:outline-none focus:border-brand-text transition-colors font-light text-sm" />
                <input type="email" placeholder="E-mail*" required className="w-full border-b border-brand-text/20 py-3 bg-transparent focus:outline-none focus:border-brand-text transition-colors font-light text-sm" />
                
                <div className="mt-4 flex flex-col gap-3">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" required className="mt-1 accent-brand-text" />
                    <span className="text-xs font-light text-brand-text/80 group-hover:text-brand-text">
                      He leído y acepto los <a href="#" className="underline hover:text-brand-accent">Términos, Condiciones y Política de Privacidad</a>.*
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-1 accent-brand-text" />
                    <span className="text-xs font-light text-brand-text/80 group-hover:text-brand-text">
                      Autorizo el envío de publicidad y promociones.
                    </span>
                  </label>
                </div>

                <button type="submit" className="mt-6 flex items-center justify-center gap-2 bg-brand-text text-brand-bg py-4 font-medium tracking-widest uppercase text-sm hover:bg-brand-accent transition-colors">
                  <Mail className="w-4 h-4" /> Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 3. Sección de Tipologías */}
        <div className="mb-24">
          <h2 className="text-3xl font-heading font-medium mb-8">Tipologías de viviendas</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-brand-text/20 text-xs tracking-widest uppercase font-medium text-brand-text/60">
                  <th className="py-4 px-4 font-medium">Tipología</th>
                  <th className="py-4 px-4 font-medium">Tipo</th>
                  <th className="py-4 px-4 font-medium">Régimen</th>
                  <th className="py-4 px-4 font-medium">Dormitorios</th>
                  <th className="py-4 px-4 font-medium">Metros const.</th>
                  <th className="py-4 px-4 font-medium">Precio</th>
                  <th className="py-4 px-4 font-medium text-center">Plano</th>
                  <th className="py-4 px-4 font-medium text-right">Información</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light">
                {typologies.map((item, idx) => (
                  <tr key={idx} className="border-b border-brand-text/10 hover:bg-brand-text/5 transition-colors">
                    <td className="py-6 px-4 font-medium">{item.type}</td>
                    <td className="py-6 px-4">{item.regime}</td>
                    <td className="py-6 px-4">{item.status}</td>
                    <td className="py-6 px-4">{item.beds}</td>
                    <td className="py-6 px-4">{item.size}</td>
                    <td className="py-6 px-4 font-medium">{item.price}</td>
                    <td className="py-6 px-4 text-center">
                      <button className="text-brand-accent hover:text-brand-text transition-colors inline-block">
                        <Download className="w-5 h-5" />
                      </button>
                    </td>
                    <td className="py-6 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 border border-brand-text/20 hover:bg-brand-text hover:text-brand-bg transition-colors" title="Calcula tu hipoteca">
                          <Calculator className="w-4 h-4" />
                        </button>
                        <button className="p-2 border border-brand-text/20 hover:bg-brand-text hover:text-brand-bg transition-colors" title="Más información">
                          <Info className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 border border-brand-text px-6 py-3 text-sm font-medium hover:bg-brand-text hover:text-brand-bg transition-colors">
              <Download className="w-4 h-4" /> Descargar memoria de calidades
            </button>
            <button className="flex items-center gap-2 border border-brand-text px-6 py-3 text-sm font-medium hover:bg-brand-text hover:text-brand-bg transition-colors">
              <Download className="w-4 h-4" /> Descargar dossier
            </button>
          </div>
        </div>

        {/* 4. Sección de Ubicación y Contacto Offline */}
        <div>
          <h2 className="text-3xl font-heading font-medium mb-8">Ubicación de la promoción</h2>
          
          <div className="relative w-full h-[400px] bg-gray-200 mb-12 flex items-center justify-center group overflow-hidden">
            {/* Placeholder for Google Maps */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute top-4 right-4 flex bg-white shadow-sm text-xs font-medium">
              <button className="px-4 py-2 bg-gray-100 text-brand-text">Map</button>
              <button className="px-4 py-2 text-brand-text/60 hover:text-brand-text">Satellite</button>
            </div>
            <button className="relative z-10 bg-brand-text text-brand-bg px-8 py-4 font-medium tracking-widest uppercase text-sm hover:bg-brand-accent transition-colors shadow-xl">
              Ver ubicación
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-brand-text/10 pt-12">
            {/* Dirección de la promoción */}
            <div className="flex gap-4">
              <div className="mt-1">
                <MapPin className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Dirección de la promoción</h4>
                <p className="text-sm font-light leading-relaxed text-brand-text/80">
                  Calle Montgó 19<br />
                  46110<br />
                  Godella, Valencia
                </p>
              </div>
            </div>

            {/* Dirección de la oficina de ventas */}
            <div className="flex gap-4">
              <div className="mt-1">
                <Map className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Oficina de ventas</h4>
                <p className="text-sm font-light leading-relaxed text-brand-text/80 mb-4">
                  Avenida de las Cortes Valencianas 58<br />
                  46015<br />
                  Valencia
                </p>
                
                <div className="flex items-center gap-2 mb-4 text-brand-accent font-medium">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+34900123456" className="hover:underline">+34 900 123 456</a>
                </div>

                <div className="flex gap-2 text-sm font-light text-brand-text/80">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p><span className="font-medium text-brand-text">L-V:</span> 10:00h - 14:00h | 16:30h - 20:00h</p>
                    <p><span className="font-medium text-brand-text">Sábado:</span> 10:00h - 14:00h</p>
                    <p><span className="font-medium text-brand-text">Domingo:</span> Cerrado</p>
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
