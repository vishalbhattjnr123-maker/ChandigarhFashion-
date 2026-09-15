"use client";

import { useState } from 'react';

export default function Registration() {
    const [formData, setFormData] = useState({
        name: '', age: '', gender: '', city: '', phone: '', email: '', instagram: '', height: '', category: '', experience: '', portfolio: '', message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = encodeURIComponent(`*New Talent Registration*\nName: ${formData.name}\nAge: ${formData.age}\nGender: ${formData.gender}\nCity: ${formData.city}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInstagram: ${formData.instagram}\nHeight: ${formData.height}\nCategory: ${formData.category}\nExperience: ${formData.experience}\nPortfolio: ${formData.portfolio}\nMessage: ${formData.message}`);
        window.open(`https://wa.me/917018408855?text=${text}`, '_blank');
    };

    return (
        <section className="py-20 px-6 lg:px-10 bg-white">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                    <h2 className="font-editorial text-4xl md:text-5xl text-text-primary mb-5">GET SCOUTED</h2>
                    <p className="text-text-secondary text-sm leading-relaxed font-light mb-6">
                        Are you ready to take your place in fashion? Submit your profile to be considered for our premium roster of talent.
                    </p>
                    <button
                        onClick={() => window.open('https://wa.me/917018408855?text=Hello%20Chandigarh%20Fashion,%20I%20would%20like%20to%20apply%20as%20a%20model.', '_blank')}
                        className="text-[10px] uppercase tracking-widest text-accent border-b border-accent pb-0.5  hover:text-black hover:border-black transition-colors"
                    >
                        Or Chat on WhatsApp
                    </button>
                </div>

                <div className="md:w-2/3">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input name="name" onChange={handleChange} required placeholder="Full Name" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />
                            <input name="age" type="number" onChange={handleChange} required placeholder="Age" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <select name="gender" onChange={handleChange} required className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors text-text-muted ">
                                <option value="">Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Other">Other</option>
                            </select>
                            <input name="city" onChange={handleChange} required placeholder="City" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input name="phone" type="tel" onChange={handleChange} required placeholder="Phone Number" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />
                            <input name="email" type="email" onChange={handleChange} required placeholder="Email Address" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input name="instagram" onChange={handleChange} placeholder="Instagram Handle" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />
                            <input name="height" onChange={handleChange} required placeholder="Height (e.g. 5'9&quot;)" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <select name="category" onChange={handleChange} required className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors text-text-muted ">
                                <option value="">Category</option>
                                <option value="Fashion">Fashion / Editorial</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Runway">Runway</option>
                                <option value="New Face">New Face</option>
                            </select>
                            <input name="experience" onChange={handleChange} placeholder="Experience (Years)" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />
                        </div>

                        <input name="portfolio" onChange={handleChange} placeholder="Portfolio Link (Instagram / Drive)" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />

                        <textarea name="message" onChange={handleChange} rows={3} placeholder="Tell us about yourself..." className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />

                        <button type="submit" className="bg-black text-white px-8 py-4 text-[10px] tracking-widest uppercase hover:bg-accent transition-colors w-full  mt-2">
                            Submit Profile
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
