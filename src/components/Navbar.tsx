"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [menuOpen]);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'MODELS', path: '/models' },
        { name: 'ACTORS', path: '/models' },
        { name: 'INFLUENCER', path: '/models' },
        { name: 'KIDS', path: '/models' },
        { name: 'CHANDIGARH EDGE', path: '/services' },
        { name: 'FEATURED WORK', path: '/featured-work' },
        { name: 'CONTACT US', path: '/contact' },
        { name: 'GET SCOUTED', path: '/get-scouted' }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 h-20 flex items-center justify-between px-6 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent text-white mix-blend-difference'}`}>
                <button onClick={() => setMenuOpen(true)} className="p-2">
                    <Menu className={`w-7 h-7 ${scrolled ? 'text-black' : 'text-white'}`} />
                </button>

                <Link href="/" className={`font-sans tracking-[0.2em] flex flex-col items-center ${scrolled ? 'text-black' : 'text-white'}`}>
                    <span className="text-xl md:text-2xl font-light">CHANDIGARH</span>
                    <span className="text-[10px] md:text-xs font-light tracking-[0.4em]">FASHION</span>
                </Link>

                <button className="p-2">
                    <Search className={`w-5 h-5 ${scrolled ? 'text-black' : 'text-white'}`} />
                </button>
            </nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[100] bg-[#101010] flex flex-col lg:flex-row"
                    >
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-6 right-6 z-[110] w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="w-full lg:w-[45%] h-full flex flex-col justify-between px-10 lg:px-24 pt-28 pb-12 relative z-10">
                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                                    >
                                        <Link
                                            href={link.path}
                                            onClick={() => setMenuOpen(false)}
                                            className="font-sans text-white text-lg lg:text-[15px] tracking-[0.1em] lg:tracking-[0.2em] font-medium opacity-90 hover:opacity-100 transition-opacity block w-fit"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center justify-between text-white mt-12"
                            >
                                <button
                                    onClick={() => window.open('https://wa.me/917018408855', '_blank')}
                                    className="font-sans text-xs tracking-[0.2em] opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2"
                                >
                                    REQUEST CALL &gt;
                                </button>
                                <div className="flex items-center gap-6 opacity-80">
                                    <a href="#" className="hover:opacity-100 transition-opacity">IG</a>
                                    <a href="#" className="hover:opacity-100 transition-opacity">YT</a>
                                    <button className="hover:opacity-100 transition-opacity"><Search className="w-5 h-5" /></button>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="hidden lg:block w-[55%] h-full relative"
                        >
                            <Image
                                src="/images/2151450630.webp"
                                alt="Menu Model"
                                fill
                                className="object-cover opacity-60"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
