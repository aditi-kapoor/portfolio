'use client';

import {
  Navigation,
  Hero,
  Experience,
  Education,
  Skills,
  Contact
} from './components';

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation scrollToTop={scrollToTop} />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}
