/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ComponentType } from 'react';
import { ContentProvider, useContent } from './context/ContentContext';
import Hero from './components/Hero';
import FloatingNav from './components/FloatingNav';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import AmenitiesSection from './components/AmenitiesSection';
import DetailsSection from './components/DetailsSection';
import PropertyDetails from './components/PropertyDetails';
import Footer from './components/Footer';

const SECTION_COMPONENTS: Record<string, ComponentType> = {
  hero: Hero,
  nosotros: AboutSection,
  proyecto: ProjectSection,
  amenidades: AmenitiesSection,
  detalles: DetailsSection,
  propiedad: PropertyDetails,
};

function AppContent() {
  const { loading, seccionesOrden } = useContent();

  if (loading) {
    return (
      <div className="fixed inset-0 bg-brand-bg flex items-center justify-center z-50">
        <div className="flex flex-col items-center gap-8">
          <div className="w-14 h-14 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
          <p className="font-heading text-2xl text-brand-accent tracking-[0.3em] uppercase">
            Nara Moncada
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-white">
      <FloatingNav />
      {seccionesOrden.map((clave) => {
        const Component = SECTION_COMPONENTS[clave];
        return Component ? <Component key={clave} /> : null;
      })}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}
