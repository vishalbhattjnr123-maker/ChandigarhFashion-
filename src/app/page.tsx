"use client";

import Hero from '@/components/Hero';
import Editorial from '@/components/Editorial';
import ModelGrid from '@/components/ModelGrid';
import Events from '@/components/Events';
import Services from '@/components/Services';
import FeaturedWork from '@/components/FeaturedWork';
import Registration from '@/components/Registration';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Editorial />
      <ModelGrid limit={true} />
      <Events limit={true} />

      {/* Advertisements Banner */}
      <section id="advertisements" className="relative h-[60vh] bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/26897.webp" alt="Advertisements" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="font-editorial text-3xl md:text-5xl text-white mb-6">YOUR BRAND.<br />OUR TALENT.<br />ONE VISION.</h2>
          <button
            onClick={() => window.open('https://wa.me/917018408855?text=Hello%20Chandigarh%20Fashion,%20I%20am%20interested%20in%20a%20brand%20campaign.', '_blank')}
            className="bg-white text-black px-6 py-3 text-[10px] tracking-widest uppercase hover:bg-accent hover:text-white transition-colors  font-medium"
          >
            Start a Campaign
          </button>
        </div>
      </section>

      <Services limit={true} />
      <FeaturedWork />
      <About />
      <Gallery limit={true} />
      <Registration />
      <Contact />
    </>
  );
}
