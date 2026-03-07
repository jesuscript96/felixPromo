import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import heroBg from '../images/Residencial Terra.png';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Top Navigation - Hidden for now as requested */}
      {/* 
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 lg:px-24 text-white">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
          <span className="text-2xl font-light tracking-wider">VERDEA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#quienes-somos" className="hover:text-white/80 transition-colors">Quiénes somos</a>
          <a href="#urbanismo" className="hover:text-white/80 transition-colors">Urbanismo sostenible</a>
          <a href="#promociones" className="hover:text-white/80 transition-colors">Promociones</a>
          <a href="#inversores" className="hover:text-white/80 transition-colors">Inversores</a>
          <a href="#innovacion" className="hover:text-white/80 transition-colors">Innovación</a>
          <div className="flex items-center gap-2 ml-4">
            <span className="cursor-pointer font-bold">ES</span>
            <span>|</span>
            <span className="cursor-pointer text-white/60 hover:text-white transition-colors">EN</span>
          </div>
        </div>

        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
      */}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          <p className="text-sm md:text-base tracking-[0.2em] uppercase mb-2">Promoción</p>
          <h1 className="text-6xl md:text-8xl font-heading font-medium mb-2 tracking-tight">NARA Moncada</h1>
          <p className="text-sm md:text-base tracking-[0.3em] uppercase font-light mb-12 opacity-90">Vanguardia y Diseño en el eje norte de Valencia</p>

          <p className="text-lg md:text-xl font-light mb-4">A un paso del CEU y a 20 minutos de Valencia</p>
          <h2 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-10">
            25 Viviendas<br />de 1, 2 dormitorios y Áticos
          </h2>

          <div className="inline-block px-8 py-4 border border-white/50 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            <span className="text-sm tracking-[0.2em] uppercase font-medium">Valencia, España</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
