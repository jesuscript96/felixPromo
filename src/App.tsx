/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import FloatingNav from './components/FloatingNav';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import AmenitiesSection from './components/AmenitiesSection';
import DetailsSection from './components/DetailsSection';
import PropertyDetails from './components/PropertyDetails';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-white">
      <FloatingNav />
      <Hero />
      <AboutSection />
      <ProjectSection />
      <AmenitiesSection />
      <DetailsSection />
      <PropertyDetails />
      <Footer />
    </div>
  );
}
