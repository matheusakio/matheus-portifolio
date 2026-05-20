import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { CareerHighlights } from '@/src/components/CareerHighlights';
import { About } from '@/src/components/About';
import { FeaturedProjects } from '@/src/components/FeaturedProjects';
import { AllProjects } from '@/src/components/AllProjects';
import { Integrations } from '@/src/components/Integrations';
import { Web3 } from '@/src/components/Web3';
import { Experience } from '@/src/components/Experience';
import { Skills } from '@/src/components/Skills';
import { Contact } from '@/src/components/Contact';
import { Footer } from '@/src/components/Footer';
import { ParticlesBackground } from '@/src/components/ParticlesBackground';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <ParticlesBackground />
      <Header />
      <Hero />
      <CareerHighlights />
      <About />
      <FeaturedProjects />
      <AllProjects />
      <Integrations />
      <Web3 />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
