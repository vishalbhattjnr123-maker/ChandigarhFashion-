"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export const services = [
    { id: '01', slug: 'model-management', title: 'MODEL MANAGEMENT', img: '/images/17011.webp' },
    { id: '02', slug: 'fashion-events', title: 'FASHION EVENTS', img: '/images/183436.webp' },
    { id: '03', slug: 'brand-promotions', title: 'BRAND PROMOTIONS', img: '/images/21141.webp' },
    { id: '04', slug: 'advertising-campaigns', title: 'ADVERTISEMENTS', img: '/images/2149488520.webp' },
    { id: '05', slug: 'runway-shows', title: 'RUNWAY SHOWS', img: '/images/2150976018.webp' },
    { id: '06', slug: 'creative-collaborations', title: 'CREATIVE COLLABS', img: '/images/23246.webp' }
];

export default function Services({ limit = false }: { limit?: boolean }) {
    const [hoveredIdx, setHoveredIdx] = useState(0);
    const displayServices = limit ? services.slice(0, 4) : services;

    return (
        <section id="services" className="relative w-full min-h-[90vh] bg-black flex items-center py-24 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={hoveredIdx}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${displayServices[hoveredIdx].img})` }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />

            <div className="relative z-10 w-full px-6 lg:px-20">
                <h2 className="font-editorial text-white text-4xl md:text-6xl opacity-20 absolute -top-4 md:-top-16 left-6 md:left-20 pointer-events-none">
                    SERVICES
                </h2>

                <div className="flex flex-col mt-10 md:mt-0 max-w-5xl mx-auto w-full">
                    {displayServices.map((srv, idx) => (
                        <Link
                            key={srv.id}
                            href={`/services/${srv.slug}`}
                            className="group flex flex-col md:flex-row md:items-center justify-between border-b border-white/20 py-6 relative "
                            onMouseEnter={() => setHoveredIdx(idx)}
                        >
                            <div className="flex items-start md:items-center gap-5">
                                <span className="text-accent text-xs tracking-widest font-light">{srv.id}</span>
                                <h3 className="font-editorial text-2xl md:text-4xl lg:text-5xl text-white/50 group-hover:text-white transition-colors duration-500 transform group-hover:translate-x-3">
                                    {srv.title}
                                </h3>
                            </div>
                            <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-3 group-hover:translate-x-0 text-[10px] tracking-widest uppercase text-white hover:text-accent ">
                                View Details
                            </span>
                        </Link>
                    ))}
                    {limit && (
                        <Link href="/services" className="mt-12 text-white text-[10px] tracking-widest uppercase border-b border-white/50 hover:border-white transition-colors w-fit ">
                            View All Services
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
