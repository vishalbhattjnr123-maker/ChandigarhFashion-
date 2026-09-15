"use client";

import { motion } from 'framer-motion';
import { VolumeX, Volume2 } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
    const [muted, setMuted] = useState(true);

    return (
        <section className="relative w-full h-[100svh] overflow-hidden bg-black flex items-center justify-center">

            <video
                autoPlay
                muted={muted}
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_30%] opacity-60 pointer-events-none"
            >
                <source src="/images/hero_video.mp4" type="video/mp4" />
            </video>

            {/* Mute toggle bottom left like screenshot 3 */}
            <button
                onClick={() => setMuted(!muted)}
                className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-30 w-10 h-10 border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
                {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Premium Hero Typography */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 text-center flex flex-col items-center justify-center w-full h-full pointer-events-none mt-10 md:mt-20 px-4"
            >
                <h1 className="font-editorial text-5xl sm:text-6xl md:text-8xl lg:text-[9vw] text-white font-medium tracking-[-0.02em] drop-shadow-2xl leading-[0.9] flex flex-col items-center">
                    <span>CHANDIGARH</span>
                    <span className="text-3xl sm:text-4xl md:text-6xl lg:text-[5vw] tracking-[0.2em] font-light text-white/90 mt-2 md:mt-6 md:-ml-4">FASHION</span>
                </h1>

                <div className="flex flex-wrap justify-center gap-3 md:gap-8 mt-8 md:mt-16 text-[8px] md:text-[11px] tracking-[0.3em] uppercase text-white/70 font-sans font-light">
                    <span>Global</span>
                    <span className="opacity-50">/</span>
                    <span>Editorial</span>
                    <span className="opacity-50">/</span>
                    <span>Talent</span>
                </div>
            </motion.div>
        </section>
    );
}
