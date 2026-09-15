"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 lg:px-10 bg-bg-secondary flex flex-col md:flex-row items-center gap-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 aspect-square md:aspect-[3/4] relative"
            >
                <Image src="/images/118235.webp" alt="About Chandigarh Fashion" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 max-w-xl"
            >
                <span className="text-accent text-[10px] tracking-[0.2em] uppercase block mb-4">About Us</span>
                <h2 className="font-editorial text-4xl md:text-5xl text-text-primary mb-8">
                    THE FUTURE OF FASHION STARTS HERE.
                </h2>
                <p className="text-text-muted text-sm leading-relaxed font-light mb-8">
                    Chandigarh Fashion is a professional platform connecting models, designers, brands, creators, and fashion events. With an uncompromising commitment to quality and professionalism, we curate opportunities that define the next generation of global fashion aesthetics.
                </p>
                <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.2em] text-text-primary">
                    <span className="border-b border-black/10 pb-2">Professional Talent</span>
                    <span className="border-b border-black/10 pb-2">Fashion Network</span>
                    <span className="border-b border-black/10 pb-2">Brand Campaigns</span>
                    <span className="border-b border-black/10 pb-2">Event Production</span>
                    <span className="border-b border-black/10 pb-2">International Vision</span>
                </div>
            </motion.div>
        </section>
    );
}
