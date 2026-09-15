"use client";

import { use } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services } from '@/components/Services';
import { motion } from 'framer-motion';

const serviceDetails = {
    'model-management': {
        desc: 'Comprehensive scouting, development, and management of fashion, editorial, and commercial models. We forge the careers of tomorrow’s elite talent.',
        benefits: ['International representation', 'Portfolio development', 'Career guidance', 'Brand endorsements'],
        process: 'We meticulously scout and develop new faces, providing them with world-class training and access to highly curated casting opportunities globally.',
        img: '/images/2151113096.webp',
    },
    'fashion-events': {
        desc: 'From concept to execution, we organize high-end runway shows, designer showcases, and exclusive fashion networking galas.',
        benefits: ['Full-scale event production', 'Backstage management', 'PR and media coverage', 'Guestlist curation'],
        process: 'Combining luxury aesthetics with precise logistics, we handle every detail—venue selection, lighting, model choreography, and VIP hospitality.',
        img: '/images/2151450630.webp',
    },
    'brand-promotions': {
        desc: 'Strategic brand alignments and promotional activities leveraging high-profile models and influencers.',
        benefits: ['Targeted audience reach', 'Luxury brand positioning', 'Influencer matching'],
        process: 'We connect fashion and luxury brands with the perfect faces to tell their story compellingly.',
        img: '/images/25134.webp',
    },
    'advertising-campaigns': {
        desc: 'End-to-end creative direction and casting for high-impact commercial and editorial advertising campaigns.',
        benefits: ['Creative direction', 'Location scouting', 'Talent casting'],
        process: 'From mood boards to the final shoot, our production team brings visionary advertising campaigns to life.',
        img: '/images/26897.webp',
    },
    'runway-shows': {
        desc: 'Producing breathtaking runway shows that seamlessly blend choreography, music, lighting, and cutting-edge fashion.',
        benefits: ['Expert choreography', 'Stage design', 'Model selection'],
        process: 'We work closely with designers to ensure their collection is showcased phenomenally on the main stage.',
        img: '/images/27403.webp',
    },
    'creative-collaborations': {
        desc: 'Fostering innovative collaborations between designers, brands, creators, and artists in the fashion space.',
        benefits: ['Unique styling', 'Avant-garde shoots', 'Art direction'],
        process: 'We break boundaries by networking disparate creative forces to produce genuinely distinct fashion art.',
        img: '/images/28255.webp',
    }
};

export default function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const serviceItem = services.find(s => s.slug === resolvedParams.slug);
    const details = serviceDetails[resolvedParams.slug as keyof typeof serviceDetails];

    if (!serviceItem || !details) return notFound();

    const handleEnquire = () => {
        const text = encodeURIComponent(`Hello Chandigarh Fashion, I would like to enquire about your ${serviceItem.title} services.`);
        window.open(`https://wa.me/917018408855?text=${text}`, '_blank');
    };

    return (
        <main className="min-h-screen bg-bg-primary pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col-reverse md:flex-row gap-12 items-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="md:w-1/2">
                    <span className="text-accent text-[10px] tracking-[0.2em] uppercase mb-4 block">Services</span>
                    <h1 className="font-editorial text-4xl md:text-5xl mb-6">{serviceItem.title}</h1>

                    <div className="w-12 h-[1px] bg-black/20 mb-8" />

                    <p className="text-text-primary font-medium text-sm leading-relaxed mb-6">
                        {details.desc}
                    </p>

                    <p className="text-text-secondary text-sm leading-relaxed mb-10">
                        <strong>The Process:</strong><br />
                        {details.process}
                    </p>

                    <div className="mb-10">
                        <h4 className="font-editorial text-xl mb-4">What We Offer</h4>
                        <ul className="text-xs tracking-widest uppercase text-text-muted space-y-2 list-inside list-disc">
                            {details.benefits.map(b => <li key={b}>{b}</li>)}
                        </ul>
                    </div>

                    <button
                        onClick={handleEnquire}
                        className="bg-black text-white px-8 py-4 text-[10px] tracking-widest uppercase hover:bg-accent transition-colors cursor-pointer"
                    >
                        Enquire On WhatsApp
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 w-full aspect-[4/5] relative"
                >
                    <Image src={details.img} alt={serviceItem.title} fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover" />
                </motion.div>
            </div>
        </main>
    );
}
