"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const models = [
    { id: 1, slug: 'ananya', name: 'ANANYA', loc: 'CHANDIGARH', img: '/images/10627.webp', ht: "5.9", b: '30"', w: '26"', h: '34.5"', hair: 'BLACK', eye: 'DARK BROWN', gender: 'WOMEN', classic: false },
    { id: 2, slug: 'kabeer', name: 'KABEER', loc: 'DELHI', img: '/images/110656.webp', ht: "6.2", b: '40"', w: '32"', h: '39"', hair: 'BLACK', eye: 'BROWN', gender: 'MEN', classic: true },
    { id: 3, slug: 'sia', name: 'SIA', loc: 'MUMBAI', img: '/images/1141026.webp', ht: "5.11", b: '32"', w: '24"', h: '34"', hair: 'BROWN', eye: 'HAZEL', gender: 'WOMEN', classic: true },
    { id: 4, slug: 'aryan', name: 'ARYAN', loc: 'PUNE', img: '/images/40847.webp', ht: "6.0", b: '38"', w: '30"', h: '38"', hair: 'LIGHT', eye: 'GREEN', gender: 'MEN', classic: false },
    { id: 5, slug: 'meera', name: 'MEERA', loc: 'BANGALORE', img: '/images/4101434.webp', ht: "5.8", b: '32"', w: '26"', h: '35"', hair: 'BLACK', eye: 'BROWN', gender: 'WOMEN', classic: false },
    { id: 6, slug: 'rohan', name: 'ROHAN', loc: 'DELHI', img: '/images/415506.webp', ht: "6.1", b: '39"', w: '31"', h: '38"', hair: 'DARK', eye: 'BROWN', gender: 'MEN', classic: true },
    { id: 7, slug: 'kaira', name: 'KAIRA', loc: 'MUMBAI', img: '/images/41818.webp', ht: "5.10", b: '34"', w: '25"', h: '36"', hair: 'BLACK', eye: 'BLACK', gender: 'WOMEN', classic: false },
    { id: 8, slug: 'vihaan', name: 'VIHAAN', loc: 'CHANDIGARH', img: '/images/437751.webp', ht: "6.1", b: '38"', w: '30"', h: '39"', hair: 'BROWN', eye: 'HAZEL', gender: 'MEN', classic: true },
    { id: 9, slug: 'zoya', name: 'ZOYA', loc: 'PUNE', img: '/images/50053.webp', ht: "5.9", b: '31"', w: '24"', h: '35"', hair: 'LIGHT', eye: 'BLUE', gender: 'WOMEN', classic: false },
    { id: 10, slug: 'samar', name: 'SAMAR', loc: 'DELHI', img: '/images/58190.webp', ht: "6.0", b: '40"', w: '32"', h: '40"', hair: 'BLACK', eye: 'DARK BROWN', gender: 'MEN', classic: true },
    { id: 11, slug: 'neha', name: 'NEHA', loc: 'BANGALORE', img: '/images/6575.webp', ht: "5.10", b: '33"', w: '26"', h: '36"', hair: 'BROWN', eye: 'BROWN', gender: 'WOMEN', classic: true },
    { id: 12, slug: 'yash', name: 'YASH', loc: 'MUMBAI', img: '/images/66830.webp', ht: "6.3", b: '42"', w: '34"', h: '42"', hair: 'BLACK', eye: 'BLACK', gender: 'MEN', classic: false },
    { id: 13, slug: 'tara', name: 'TARA', loc: 'DELHI', img: '/images/7209.webp', ht: "5.8", b: '32"', w: '25"', h: '35"', hair: 'BROWN', eye: 'BROWN', gender: 'WOMEN', classic: true },
    { id: 14, slug: 'ishaan', name: 'ISHAAN', loc: 'MUMBAI', img: '/images/754791.webp', ht: "6.2", b: '40"', w: '32"', h: '39"', hair: 'BLACK', eye: 'DARK BROWN', gender: 'MEN', classic: true },
    { id: 15, slug: 'diya', name: 'DIYA', loc: 'CHANDIGARH', img: '/images/87928.webp', ht: "5.9", b: '34"', w: '26"', h: '36"', hair: 'BLACK', eye: 'BROWN', gender: 'WOMEN', classic: false },
    { id: 16, slug: 'kabir', name: 'KABIR', loc: 'PUNE', img: '/images/9199.webp', ht: "6.1", b: '39"', w: '31"', h: '38"', hair: 'BROWN', eye: 'GREEN', gender: 'MEN', classic: false }
];

const locations = ['ALL', 'CHANDIGARH', 'DELHI', 'MUMBAI', 'PUNE', 'BANGALORE'];
const genders = ['ALL', 'WOMEN', 'MEN'];

export default function ModelGrid({ limit = false }: { limit?: boolean }) {
    const [locFilter, setLocFilter] = useState('ALL');
    const [genderFilter, setGenderFilter] = useState('ALL');
    const [classicOnly, setClassicOnly] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState<'loc' | 'gender' | null>(null);

    // Filter Logic
    const filteredModels = models.filter(m => {
        if (locFilter !== 'ALL' && m.loc !== locFilter) return false;
        if (genderFilter !== 'ALL' && m.gender !== genderFilter) return false;
        if (classicOnly && !m.classic) return false;
        return true;
    });

    const displayModels = limit ? models.slice(0, 8) : filteredModels;

    return (
        <section id="models" className="w-full bg-white pt-20 relative">
            {!limit && (
                <div className="flex border-b border-gray-200 justify-center items-center py-4 bg-white text-xs text-gray-700 tracking-wide font-medium gap-8 sticky top-20 z-40">

                    {/* Location Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(dropdownOpen === 'loc' ? null : 'loc')}
                            className={`hover:text-black transition-colors ${locFilter !== 'ALL' ? 'text-black font-bold' : ''}`}
                        >
                            Location {locFilter !== 'ALL' ? `(${locFilter})` : ''} ▾
                        </button>
                        <AnimatePresence>
                            {dropdownOpen === 'loc' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
                                    className="absolute top-8 left-1/2 -translate-x-1/2 bg-white shadow-xl border border-gray-100 py-2 w-40 flex flex-col items-center gap-1 z-50"
                                >
                                    {locations.map(l => (
                                        <button key={l} onClick={() => { setLocFilter(l); setDropdownOpen(null); }} className={`w-full py-2 hover:bg-gray-50 uppercase text-[10px] tracking-widest ${locFilter === l ? 'font-bold text-black' : 'text-gray-500'}`}>
                                            {l}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Gender Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(dropdownOpen === 'gender' ? null : 'gender')}
                            className={`hover:text-black transition-colors ${genderFilter !== 'ALL' ? 'text-black font-bold' : ''}`}
                        >
                            Gender {genderFilter !== 'ALL' ? `(${genderFilter})` : ''} ▾
                        </button>
                        <AnimatePresence>
                            {dropdownOpen === 'gender' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
                                    className="absolute top-8 left-1/2 -translate-x-1/2 bg-white shadow-xl border border-gray-100 py-2 w-32 flex flex-col items-center gap-1 z-50"
                                >
                                    {genders.map(g => (
                                        <button key={g} onClick={() => { setGenderFilter(g); setDropdownOpen(null); }} className={`w-full py-2 hover:bg-gray-50 uppercase text-[10px] tracking-widest ${genderFilter === g ? 'font-bold text-black' : 'text-gray-500'}`}>
                                            {g}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Classic Toggle */}
                    <button
                        onClick={() => { setClassicOnly(!classicOnly); setDropdownOpen(null); }}
                        className={`hover:text-black transition-colors ${classicOnly ? 'text-black font-bold border-b border-black' : ''}`}
                    >
                        Classic Faces
                    </button>
                </div>
            )}

            {/* Grid */}
            <motion.div layout className="w-full grid grid-cols-2 lg:grid-cols-4 gap-1 p-1 bg-white min-h-[50vh]">
                <AnimatePresence>
                    {displayModels.map((model) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            key={model.id}
                        >
                            <Link href={`/models/${model.slug}`} className="relative group block aspect-[4/5] overflow-hidden bg-gray-100 h-full">
                                <Image
                                    src={model.img}
                                    alt={model.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    quality={85}
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-3 right-3 w-6 h-6 border border-white/50 rounded-full flex items-center justify-center text-white text-lg bg-black/20 font-light opacity-80 group-hover:opacity-100">+</div>

                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white text-center">
                                    <div className="flex flex-col gap-2 text-[10px] font-bold tracking-widest leading-relaxed">
                                        <p>HEIGHT {model.ht}</p>
                                        <p>BUST {model.b}</p>
                                        <p>WAIST {model.w}</p>
                                        <p>HIPS {model.h}</p>
                                        <p>HAIR - {model.hair} | EYES - {model.eye.toUpperCase()}</p>
                                    </div>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-center">
                                    <h3 className="font-editorial text-lg text-white font-semibold tracking-wide drop-shadow-lg opacity-90">{model.name}</h3>
                                    <p className="text-[10px] tracking-widest text-white/80 font-medium drop-shadow-sm">{model.loc}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {displayModels.length === 0 && (
                    <div className="col-span-full flex items-center justify-center py-20 text-sm tracking-widest uppercase text-gray-400">
                        No models found matching criteria.
                    </div>
                )}
            </motion.div>

            {limit && (
                <div className="flex justify-center py-10 bg-white">
                    <Link href="/models" className="border border-black px-8 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
                        View All Models
                    </Link>
                </div>
            )}
        </section>
    );
}
