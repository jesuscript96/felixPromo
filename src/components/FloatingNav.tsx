import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function FloatingNav() {
  const [active, setActive] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'nosotros', label: 'NOSOTROS' },
    { id: 'proyecto', label: 'PROYECTO' },
    { id: 'promocion', label: 'PROMOCIÓN' },
    { id: 'contacto', label: 'CONTACTO' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Scroll spy logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isScrolled ? 0 : -100, opacity: isScrolled ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none"
    >
      <div className="flex items-center bg-brand-bg/95 backdrop-blur-md border border-brand-text/10 shadow-sm pointer-events-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActive(item.id);
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`relative px-4 md:px-8 py-4 text-[10px] md:text-xs font-medium tracking-[0.2em] transition-all duration-300 ${
              active === item.id ? 'text-brand-bg bg-brand-text' : 'text-brand-text/60 hover:text-brand-text hover:bg-brand-text/5'
            }`}
          >
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
