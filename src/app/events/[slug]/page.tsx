"use client";

import { use } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { events } from '@/components/Events';
import { motion } from 'framer-motion';

const eventDetails = {
    'chandigarh-fashion-week': {
        desc: 'The premier fashion event in the region bringing together top designers, luxury brands, and elite runway models. Featuring exclusive showcases and VIP networking.',
        gallery: ['/images/13801.webp', '/images/14118.webp', '/images/1423.webp'],
        designers: ['Manish Malhotra', 'Ritu Kumar', 'Sabyasachi Mukherjee']
    },
    'national-model-hunt': {
        desc: 'An exquisite platform for fresh faces. Scouting the finest talent across the country and providing them the runway to launch their international careers.',
        gallery: ['/images/152442.webp', '/images/16386.webp', '/images/166365.webp'],
        designers: ['Upcoming Brands', 'Streetwear Collabs', 'High Street']
    }
};

export default function EventProfile({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const event = events.find(e => e.slug === resolvedParams.slug);
    const details = eventDetails[resolvedParams.slug as keyof typeof eventDetails];

    if (!event || !details) return notFound();

    const handleEnquire = () => {
        const text = encodeURIComponent(`Hello Chandigarh Fashion, I am interested in the event: ${event.title}.`);
        window.open(`https://wa.me/917018408855?text=${text}`, '_blank');
    };

    return (
        <main className="min-h-screen bg-bg-primary pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-[50vh] md:h-[60vh] mb-12"
                >
                    <Image src={event.img} alt={event.title} fill sizes="100vw" priority className="object-cover" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-3xl">
                    <span className="text-accent text-[10px] tracking-[0.2em] uppercase mb-4 block">{event.cat}</span>
                    <h1 className="font-editorial text-4xl md:text-6xl mb-6">{event.title}</h1>

                    <div className="flex gap-4 mb-8 text-[10px] tracking-widest uppercase text-text-muted">
                        <span>{event.date}</span> • <span>{event.loc}</span>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-10">
                        {details.desc}
                    </p>

                    <div className="mb-10">
                        <h4 className="font-editorial text-2xl mb-4">Featured Designers</h4>
                        <ul className="text-xs tracking-widest uppercase text-text-muted space-y-2">
                            {details.designers.map(d => <li key={d}>{d}</li>)}
                        </ul>
                    </div>

                    <button
                        onClick={handleEnquire}
                        className="bg-black text-white px-8 py-4 text-[10px] tracking-widest uppercase hover:bg-accent transition-colors w-fit cursor-pointer"
                    >
                        Enquire For Event
                    </button>
                </motion.div>
            </div>

            {/* Event Gallery */}
            <div className="mt-20 py-20 px-6 md:px-12 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h3 className="font-editorial text-3xl mb-10 text-center">EVENT HIGHLIGHTS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {details.gallery.map((img, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1 }}
                                key={img}
                                className="relative aspect-[4/3]"
                            >
                                <Image src={img} alt={`Highlight ${i}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
