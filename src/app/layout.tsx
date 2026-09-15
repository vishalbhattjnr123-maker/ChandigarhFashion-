import type { Metadata } from 'next';
import { Inter, Marcellus } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const marcellus = Marcellus({ weight: '400', subsets: ['latin'], variable: '--font-editorial' });

export const metadata: Metadata = {
  title: 'Chandigarh Fashion | Premium Model & Fashion Agency',
  description: 'A premium international fashion agency connecting models, brands, designers, creators, and events through a professional fashion ecosystem in Chandigarh, India.',
  keywords: ['Chandigarh Fashion', 'Modeling Agency', 'Fashion Events', 'advertising', 'Runway', 'Models in India', 'Creative Direction'],
  openGraph: {
    title: 'Chandigarh Fashion | Premium Model & Fashion Agency',
    description: 'Models, Events, Advertising, Creative Direction. A premium fashion agency based in Chandigarh.',
    url: 'https://chandigarhfashion.com',
    siteName: 'Chandigarh Fashion',
    images: [{
      url: '/og-image.jpg', // Placeholder
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${marcellus.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col selection:bg-accent selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
