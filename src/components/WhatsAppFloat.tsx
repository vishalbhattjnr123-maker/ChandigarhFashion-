"use client";

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
    const handleWhatsApp = () => {
        const text = encodeURIComponent("Hello Chandigarh Fashion, I would like to know more about your services.");
        window.open(`https://wa.me/917018408855?text=${text}`, '_blank');
    };

    return (
        <motion.button
            onClick={handleWhatsApp}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle size={28} />
        </motion.button>
    );
}
