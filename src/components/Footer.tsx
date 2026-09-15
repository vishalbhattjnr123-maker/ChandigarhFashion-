export default function Footer() {
    return (
        <footer className="bg-text-primary text-white py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-2">
                    <h3 className="font-editorial text-2xl tracking-widest mb-4">CHANDIGARH FASHION</h3>
                    <p className="text-white/60 mb-6 text-sm uppercase tracking-wide leading-relaxed">
                        Models <span className="mx-2">•</span>
                        Events <span className="mx-2">•</span>
                        Advertising <br />
                        Brand Promotions <span className="mx-2">•</span>
                        Creative Collaborations
                    </p>
                    <div className="flex gap-4">
                        {['Instagram', 'Facebook', 'YouTube', 'LinkedIn'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-white/40 hover:text-white text-sm uppercase tracking-wider transition-colors "
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-white/80 uppercase tracking-widest text-xs mb-6">Navigation</h4>
                    <ul className="space-y-3">
                        {['Home', 'Models', 'Events', 'Services', 'Featured Work', 'About', 'Gallery', 'Contact'].map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-white transition-colors  text-sm">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white/80 uppercase tracking-widest text-xs mb-6">Contact</h4>
                    <ul className="space-y-4">
                        <li className="text-white/60 text-sm">
                            <a href="tel:+917018408855" className="hover:text-white transition-colors ">
                                +91 7018408855
                            </a>
                        </li>
                        <li className="text-white/60 text-sm">
                            info@chandigarhfashion.com
                        </li>
                        <li className="text-white/60 text-sm leading-relaxed">
                            Chandigarh,<br />
                            India
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                <p>© 2026 Chandigarh Fashion. All Rights Reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors ">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors ">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
