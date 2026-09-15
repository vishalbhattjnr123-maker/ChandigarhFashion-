"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const campaigns = [
    { id: 1, title: 'FASHION CAMPAIGNS', cat: 'High-end brand shoots', img: '/images/2151113096.webp' },
    { id: 2, title: 'COMMERCIAL ADS', cat: 'TVC and Print commercials', img: '/images/2151450630.webp' },
    { id: 3, title: 'PRODUCT CAMPAIGNS', cat: 'Jewelry & Accessories', img: '/images/25134.webp' },
    { id: 4, title: 'EDITORIAL SHOOTS', cat: 'Magazine covers', img: '/images/26897.webp' },
    { id: 5, title: 'SOCIAL MEDIA', cat: 'Digital marketing content', img: '/images/27403.webp' },
    { id: 6, title: 'BRAND PROMOTIONS', cat: 'Exclusive endorsements', img: '/images/28255.webp' }
];

export default function AdvertisementsPage() {
    const handleEnquire = (title: string) => {
        const text = encodeURIComponent(`Hello Chandigarh Fashion, I am interested in a brand campaign: ${title}.`);
        window.open(`https://wa.me/917018408855?text=${text}`, '_blank');
    };

    return (
        <main className="pt-24 min-h-screen bg-bg-primary pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-16 text-center max-w-2xl mx-auto mt-10">
                    <h1 className="font-editorial text-4xl md:text-6xl mb-6">YOUR BRAND. OUR TALENT. ONE VISION.</h1>
                    <p className="text-text-muted text-sm font-light">
                        We provide full-scale talent architecture for commercial, digital, and editorial advertising campaigns.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {campaigns.map((camp, i) => (
                        <motion.div
                            key={camp.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group  flex flex-col"
                            onClick={() => handleEnquire(camp.title)}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden mb-5">
                                <Image
                                    src={camp.img}
                                    alt={camp.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 text-white text-[10px] tracking-widest uppercase transition-opacity duration-300 border border-white px-4 py-2 hover:bg-white hover:text-black">
                                        View Campaign
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-editorial text-2xl text-text-primary group-hover:text-accent transition-colors">{camp.title}</h3>
                            <p className="text-[10px] uppercase tracking-widest text-text-muted mt-2">{camp.cat}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
