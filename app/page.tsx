'use client';

import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
