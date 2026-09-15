"use client";

import { motion } from 'framer-motion';

export default function Editorial() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-bg-primary flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl"
            >
                <h2 className="font-editorial text-3xl md:text-4xl lg:text-5xl leading-tight text-text-primary mb-8">
                    FASHION IS NOT JUST WHAT YOU WEAR.<br className="hidden md:block" /> IT IS HOW YOU ARE SEEN.
                </h2>
                <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
                    Chandigarh Fashion connects models, brands, designers, creators, and events through a professional fashion ecosystem built for modern campaigns and experiences.
                </p>
            </motion.div>
        </section>
    );
}
