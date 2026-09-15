"use client";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const fd = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(fd.entries());
        const text = encodeURIComponent(`*New Enquiry*\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nInterest: ${data.interest}\nMessage: ${data.message}`);
        window.open(`https://wa.me/917018408855?text=${text}`, '_blank');
    };

    return (
        <section id="contact" className="py-20 px-6 lg:px-10 bg-bg-primary">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3">
                    <h2 className="font-editorial text-4xl mb-6">CHANDIGARH FASHION</h2>
                    <div className="space-y-6 text-sm text-text-secondary">
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Phone</p>
                            <a href="tel:+917018408855" className="hover:text-accent  transition-colors">+91 7018408855</a>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">WhatsApp</p>
                            <a href="https://wa.me/917018408855" target="_blank" rel="noopener noreferrer" className="hover:text-accent  transition-colors">+91 7018408855</a>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Email</p>
                            <a href="mailto:info@chandigarhfashion.com" className="hover:text-accent  transition-colors">info@chandigarhfashion.com</a>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Location</p>
                            <p>Chandigarh, India</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-2/3">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input name="name" required placeholder="Full Name" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />
                            <input name="email" type="email" required placeholder="Email Address" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input name="phone" type="tel" required placeholder="Phone Number" className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />
                            <select name="interest" required className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors text-text-muted ">
                                <option value="">Area of Interest</option>
                                <option value="Model Booking">Model Booking</option>
                                <option value="Brand Campaign">Brand Campaign</option>
                                <option value="Event Production">Event Production</option>
                                <option value="General Query">General Query</option>
                            </select>
                        </div>
                        <textarea name="message" rows={4} required placeholder="Your Message..." className="w-full bg-transparent border-b border-black/20 pb-2 text-sm focus:outline-none focus:border-black transition-colors " />
                        <button type="submit" className="bg-black text-white px-8 py-4 text-[10px] tracking-widest uppercase hover:bg-accent transition-colors w-fit  mt-4">
                            Send Enquiry
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
