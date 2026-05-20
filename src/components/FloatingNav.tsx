import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';

export default function FloatingNav() {
  const { navegacion } = useContent();
  const [active, setActive] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = navegacion.map((item) => document.getElementById(item['ID Sección'] ?? ''));
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;

      if (atBottom && navegacion.length > 0) {
        setActive(navegacion[navegacion.length - 1]['ID Sección'] ?? '');
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(navegacion[i]['ID Sección'] ?? '');
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navegacion]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isScrolled ? 0 : -100, opacity: isScrolled ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none"
    >
      <div className="flex items-center bg-brand-bg/95 backdrop-blur-md border border-brand-text/10 shadow-sm pointer-events-auto">
        {navegacion.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActive(item['ID Sección'] ?? '');
              document.getElementById(item['ID Sección'] ?? '')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`relative px-4 md:px-8 py-4 text-[10px] md:text-xs font-medium tracking-[0.2em] transition-all duration-300 ${
              active === item['ID Sección']
                ? 'text-brand-bg bg-brand-accent'
                : 'text-brand-text/60 hover:text-brand-accent hover:bg-brand-accent/5'
            }`}
          >
            <span className="relative z-10">{item.Etiqueta}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
