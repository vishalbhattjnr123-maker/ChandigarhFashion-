"use client";

import { use } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { models } from '@/components/ModelGrid';
import { motion } from 'framer-motion';

// Mock expanded data for models
const modelDetails = {
    ananya: { bio: 'Ananya brings a refined editorial edge to every booking...', ht: "5'9\"", b: "34", w: "24", h: "35", s: "8", hair: "Dark", eye: "Brown", port: ['/images/11933.webp', '/images/12015.webp', '/images/12024.webp'] },
    kabeer: { bio: 'Kabeer has extensive commercial experience...', ht: "6'2\"", b: "40", w: "32", h: "39", s: "11", hair: "Black", eye: "Brown", port: ['/images/12937.webp', '/images/132651.webp', '/images/13614.webp'] },
    sia: { bio: 'Sia is known for her iconic walk...', ht: "5'11\"", b: "32", w: "24", h: "34", s: "9", hair: "Brown", eye: "Hazel", port: ['/images/13801.webp', '/images/13988.webp', '/images/14118.webp'] },
    aryan: { bio: 'A fresh perspective for modern campaigns...', ht: "6'0\"", b: "38", w: "30", h: "38", s: "10", hair: "Light", eye: "Green", port: ['/images/1423.webp', '/images/14252.webp', '/images/148779.webp'] }
};

export default function ModelProfile({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const model = models.find(m => m.slug === resolvedParams.slug);
    const details = modelDetails[resolvedParams.slug as keyof typeof modelDetails];

    if (!model || !details) return notFound();

    const handleBooking = () => {
        const text = encodeURIComponent(`Hello Chandigarh Fashion, I would like to enquire about booking ${model.name}. Please share availability and details.`);
        window.open(`https://wa.me/917018408855?text=${text}`, '_blank');
    };

    return (
        <main className="min-h-screen bg-bg-primary pt-24">
            <div className="flex flex-col md:flex-row">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:w-1/2 h-[60vh] md:h-[80vh] relative"
                >
                    <Image src={model.img} alt={model.name} fill sizes="50vw" priority className="object-cover" />
                </motion.div>
                <div className="md:w-1/2 p-10 md:p-20 flex flex-col justify-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                        <h1 className="font-editorial text-5xl md:text-6xl mb-3">{model.name}</h1>
                        <div className="flex gap-3 mb-6 text-[10px] tracking-widest uppercase text-text-muted">
                            <span>{model.cat}</span> • <span>{model.loc}</span>
                        </div>

                        <p className="text-text-secondary text-sm leading-relaxed mb-10 max-w-md">
                            {details.bio}
                        </p>

                        <div className="mb-10">
                            <h4 className="text-[10px] tracking-[0.2em] uppercase text-text-muted mb-4">Measurements</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2">
                                <div><span className="block text-[9px] tracking-widest text-text-muted uppercase mb-1">Height</span><span className="text-sm font-medium">{details.ht}</span></div>
                                <div><span className="block text-[9px] tracking-widest text-text-muted uppercase mb-1">Bust/Chest</span><span className="text-sm font-medium">{details.b}"</span></div>
                                <div><span className="block text-[9px] tracking-widest text-text-muted uppercase mb-1">Waist</span><span className="text-sm font-medium">{details.w}"</span></div>
                                <div><span className="block text-[9px] tracking-widest text-text-muted uppercase mb-1">Hips</span><span className="text-sm font-medium">{details.h}"</span></div>
                                <div><span className="block text-[9px] tracking-widest text-text-muted uppercase mb-1">Shoe</span><span className="text-sm font-medium">{details.s}</span></div>
                                <div><span className="block text-[9px] tracking-widest text-text-muted uppercase mb-1">Hair</span><span className="text-sm font-medium">{details.hair}</span></div>
                                <div><span className="block text-[9px] tracking-widest text-text-muted uppercase mb-1">Eyes</span><span className="text-sm font-medium">{details.eye}</span></div>
                            </div>
                        </div>

                        <button
                            onClick={handleBooking}
                            className="bg-black text-white px-6 py-3 text-[10px] tracking-widest uppercase hover:bg-accent transition-colors w-fit cursor-pointer"
                        >
                            Book This Model
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Portfolio Masonry */}
            <div className="py-20 px-6 md:px-12 bg-white">
                <h3 className="font-editorial text-3xl mb-10 text-center">PORTFOLIO</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {details.port.map((img, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            key={img}
                            className="relative aspect-[3/4]"
                        >
                            <Image src={img} alt={`Portfolio ${i}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
