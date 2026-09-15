"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const events = [
    { id: 1, slug: 'chandigarh-fashion-week', img: '/images/152442.webp', title: 'CHANDIGARH FASHION WEEK', date: 'DEC 2026', loc: 'TAJ CHANDIGARH', cat: 'FASHION WEEKS' },
    { id: 2, slug: 'national-model-hunt', img: '/images/16386.webp', title: 'NATIONAL MODEL HUNT', date: 'JAN 2027', loc: 'ELANTE LOUNGE', cat: 'MODEL AUDITIONS' }
];

export default function Events({ limit = false }: { limit?: boolean }) {
    const displayEvents = limit ? events.slice(0, 2) : events;

    return (
        <section id="events" className="py-20 px-6 lg:px-10 bg-bg-secondary">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="font-editorial text-4xl md:text-5xl text-text-primary">EVENTS</h2>
                    {limit && (
                        <Link href="/events" className="text-[10px] tracking-[0.2em] uppercase border-b border-text-primary pb-0.5 hover:text-accent hover:border-accent transition-colors ">
                            View All Events
                        </Link>
                    )}
                </div>

                <div className="flex flex-col gap-10">
                    {displayEvents.map((ev, i) => (
                        <motion.div
                            key={ev.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="flex flex-col md:flex-row gap-6 group "
                        >
                            <Link href={`/events/${ev.slug}`} className="md:w-1/2 h-[250px] md:h-[350px] relative overflow-hidden block">
                                <Image src={ev.img} alt={ev.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                            </Link>
                            <div className="md:w-1/2 flex flex-col justify-center">
                                <span className="text-accent text-[9px] tracking-[0.2em] uppercase mb-3">{ev.cat}</span>
                                <Link href={`/events/${ev.slug}`}>
                                    <h3 className="font-editorial text-2xl md:text-4xl mb-3 text-text-primary group-hover:text-accent transition-colors ">{ev.title}</h3>
                                </Link>
                                <div className="flex gap-3 text-[10px] tracking-widest uppercase text-text-muted mb-6">
                                    <span>{ev.date}</span> • <span>{ev.loc}</span>
                                </div>
                                <Link href={`/events/${ev.slug}`} className="text-[10px] uppercase tracking-widest text-text-primary border-b border-text-primary pb-1 w-fit group-hover:border-accent group-hover:text-accent transition-colors ">
                                    View Event
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
