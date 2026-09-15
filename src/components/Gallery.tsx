"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

const galleryItems = [
    { id: 1, img: '/images/2867bd242175425.69679c8382688.webp', span: 'col-span-1 row-span-1' },
    { id: 2, img: '/images/29686.webp', span: 'col-span-1 row-span-2' },
    { id: 3, img: '/images/30492.webp', span: 'col-span-2 row-span-1' },
    { id: 4, img: '/images/34420.webp', span: 'col-span-1 row-span-1' },
    { id: 5, img: '/images/347460.webp', span: 'col-span-1 row-span-1' },
    { id: 6, img: '/images/35766.webp', span: 'col-span-2 row-span-2' }
];

export default function Gallery({ limit = false }: { limit?: boolean }) {
    const [lightbox, setLightbox] = useState<string | null>(null);

    if (typeof document !== 'undefined') {
        document.body.style.overflow = lightbox ? 'hidden' : '';
    }

    const displayGallery = limit ? galleryItems.slice(0, 4) : galleryItems;

    return (
        <section id="gallery" className="py-20 px-6 lg:px-10 bg-bg-tertiary">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-editorial text-4xl md:text-5xl text-text-primary mb-10 text-center md:text-left">GALLERY</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-none gap-3 auto-rows-[150px] md:auto-rows-[250px]">
                    {displayGallery.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            className={`relative overflow-hidden  group ${!limit ? item.span : 'col-span-1 row-span-1'}`}
                            onClick={() => setLightbox(item.img)}
                        >
                            <Image
                                src={item.img}
                                alt="Gallery content"
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 text-[10px] tracking-[0.2em] uppercase transition-opacity duration-500 font-medium drop-shadow-md">
                                    View
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center "
                        onClick={() => setLightbox(null)}
                    >
                        <button className="absolute top-8 right-8 text-white flex items-center gap-2 group ">
                            <span className="text-[10px] uppercase tracking-widest mt-0.5">Close</span>
                            <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
                        </button>
                        <motion.img
                            src={lightbox}
                            initial={{ scale: 0.98 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.98 }}
                            className="max-w-[90vw] max-h-[90vh] object-contain "
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
