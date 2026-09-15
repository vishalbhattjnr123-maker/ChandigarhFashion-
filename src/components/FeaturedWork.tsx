"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const work = [
    { id: 1, title: 'Autumn Collection', cat: 'Fashion Campaign', year: '2025', img: '/images/37075.webp' },
    { id: 2, title: 'Vogue Edit', cat: 'Editorial', year: '2025', img: '/images/38184.webp' },
    { id: 3, title: 'Elite Runway', cat: 'Event Coordination', year: '2026', img: '/images/456184.webp' }
];

export default function FeaturedWork() {
    return (
        <section id="featured-work" className="py-20 px-6 lg:px-10 bg-bg-primary">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-editorial text-4xl md:text-5xl text-text-primary mb-12 text-center">FEATURED WORK</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                    {work.map((w, i) => (
                        <motion.div
                            key={w.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`flex flex-col group  ${i === 1 ? 'md:mt-12' : ''} ${i === 2 ? 'md:-mt-12' : ''}`}
                        >
                            <div className="relative aspect-[3/4] overflow-hidden mb-5">
                                <Image
                                    src={w.img}
                                    alt={w.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-editorial text-xl md:text-2xl mb-2 text-text-primary group-hover:text-accent transition-colors">{w.title}</h3>
                            <div className="flex justify-between items-center text-[9px] tracking-widest uppercase text-text-muted border-t border-black/10 pt-3">
                                <span>{w.cat}</span>
                                <span>{w.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
