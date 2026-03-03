import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Menu, 
  X, 
  Instagram, 
  Twitter, 
  Linkedin,
  Award,
  Zap,
  Hammer,
  Globe
} from 'lucide-react';

// --- Constants & Data ---

const COLLECTIONS = [
  { id: 1, name: 'Cardio Elite', image: '/images/cardio_elite.png' },
  { id: 2, name: 'Strength Sculpt', image: '/images/strength.png' },
  { id: 3, name: 'Recovery Studio', image: '/images/recovery_studio.png' },
  { id: 4, name: 'Bespoke Series', image: '/images/bespoke_series.png' },
];

const PRODUCTS = [
  { 
    id: 1, 
    name: 'Aura™ Performance Bench', 
    price: '$4,200', 
    desc: 'Hand-stitched leather and aerospace-grade aluminum.',
    image: '/images/performance_bench.png' 
  },
  { 
    id: 2, 
    name: 'Zenith™ Rower', 
    price: '$12,500', 
    desc: 'Sustainable walnut wood with fluid resistance technology.',
    image: '/images/z_rower.png' 
  },
  { 
    id: 3, 
    name: 'Titan™ Dumbbell Set', 
    price: '$8,900', 
    desc: 'Precision-milled steel with custom grip textures.',
    image: '/images/titan_dumbbell.png' 
  },
];

const LIFESTYLE_GALLERY = [
  '/images/lifestyle_0.png',
  '/images/lifestyle_1.png',
  '/images/lifestyle_2.png',
  '/images/lifestyle_3.png',
];

const VALUES = [
  { icon: Award, title: 'Design Excellence', desc: 'Winner of multiple architectural and product design awards.' },
  { icon: Zap, title: 'Performance', desc: 'Engineered for elite athletes who demand uncompromising quality.' },
  { icon: Hammer, title: 'Craftsmanship', desc: 'Every piece is hand-finished by master artisans in our atelier.' },
  { icon: Globe, title: 'Innovation', desc: 'Pioneering the future of fitness through advanced materials.' },
];

const PROJECTS = [
  { title: 'The Penthouse, Dubai', image: '/images/the_penthouse.png' },
  { title: 'Aman Residences, NYC', image: '/images/nyc.jpg' },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-black py-4 text-white shadow-lg`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <a href="#" className="text-2xl font-display font-bold tracking-widest uppercase text-white">STING</a>
          <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-white/70">
            <a href="#" className="hover:text-white transition-colors">Collections</a>
            <a href="#" className="hover:text-white transition-colors">Atelier</a>
            <a href="#" className="hover:text-white transition-colors">Projects</a>
            <a href="#" className="hover:text-white transition-colors">Journal</a>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/70">
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <button className="border border-white/30 px-6 py-2 hover:bg-white hover:text-black transition-all">Shop Online</button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-luxury-gray p-8 flex flex-col gap-6 md:hidden"
          >
            <a href="#" className="text-lg font-medium uppercase tracking-widest">Collections</a>
            <a href="#" className="text-lg font-medium uppercase tracking-widest">Atelier</a>
            <a href="#" className="text-lg font-medium uppercase tracking-widest">Projects</a>
            <a href="#" className="text-lg font-medium uppercase tracking-widest">Journal</a>
            <button className="w-full border border-luxury-dark px-6 py-4 hover:bg-luxury-dark hover:text-white transition-all uppercase tracking-widest text-sm">Shop Online</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="/images/lifestyle_0.png" 
        alt="Luxury Gym" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
    </div>
    
    <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start text-white pt-24">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xs font-medium uppercase tracking-[0.3em] mb-6 text-white/60"
      >
        Est. 2026 — The Pinnacle of Performance
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl md:text-7xl font-serif leading-tight mb-8 max-w-4xl"
      >
        Luxury Fitness Equipment <br />
        <span className="italic">Designed for Performance.</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-lg md:text-xl text-white/80 max-w-xl mb-12 font-light leading-relaxed"
      >
        Elevating training through design, craftsmanship, and innovation. Experience the intersection of art and athleticism.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <button className="group flex items-center gap-4 bg-white text-luxury-dark px-10 py-5 text-sm font-medium uppercase tracking-widest hover:bg-luxury-cream transition-all">
          Explore Collection
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </motion.div>
    </div>

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/50">
      <span className="text-[10px] uppercase tracking-[0.5em] rotate-90 mb-8">Scroll</span>
      <div className="w-px h-12 bg-white/20 relative overflow-hidden">
        <motion.div 
          animate={{ y: [0, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-1/2 bg-white"
        />
      </div>
    </div>
  </section>
);

const BrandStory = () => (
  <section className="py-32 px-6 bg-luxury-cream">
    <div className="max-w-7xl mx-auto grid md:grid-template-columns md:grid-cols-2 gap-24 items-center">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src="/images/rack.png" 
          alt="Craftsmanship" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-8 -right-8 bg-white p-12 hidden lg:block">
          <p className="text-4xl font-serif italic text-luxury-dark">"Precision is our only standard."</p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-luxury-dark/40">Our Philosophy</span>
        <h2 className="text-4xl md:text-6xl font-serif leading-tight">The World's Only Truly Independent Luxury Fitness Manufacturer</h2>
        <p className="text-lg text-luxury-dark/70 leading-relaxed font-light">
          At Sting, we don't outsource excellence — we handcraft it. We are the only luxury fitness brand in the world that fully designs and manufactures every product in-house, without relying on third-party suppliers. 
        </p>
        <p className="text-lg text-luxury-dark/70 leading-relaxed font-light">
          Every single piece is meticulously created by our artisans, using premium materials such as stainless steel, natural leather, and hand-selected wood — all crafted in our own state-of-the-art facility.
        </p>
        <button className="w-fit border-b border-luxury-dark pb-2 text-sm font-medium uppercase tracking-widest hover:opacity-50 transition-opacity flex items-center gap-2">
          Learn More <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
);

const FeaturedCollection = () => (
  <section className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-luxury-dark/40 mb-4 block">Collections</span>
          <h2 className="text-4xl md:text-6xl font-serif">Signature Pieces</h2>
        </div>
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest border-b border-luxury-gray pb-4">
          <button className="hover:opacity-50 transition-opacity">Cardio</button>
          <button className="hover:opacity-50 transition-opacity">Strength</button>
          <button className="hover:opacity-50 transition-opacity">Recovery</button>
          <button className="hover:opacity-50 transition-opacity">Accessories</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {COLLECTIONS.map((col) => (
          <motion.div 
            key={col.id}
            whileHover={{ y: -10 }}
            className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
          >
            <img 
              src={col.image} 
              alt={col.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
              <h3 className="text-2xl font-serif mb-2">{col.name}</h3>
              <p className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Collection</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProductShowcase = () => (
  <section className="py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-square bg-luxury-cream overflow-hidden mb-8">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-serif">{product.name}</h3>
              <span className="text-sm font-medium">{product.price}</span>
            </div>
            <p className="text-sm text-luxury-dark/60 font-light mb-6">{product.desc}</p>
            <button className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-luxury-dark pb-1 hover:opacity-50 transition-opacity">
              Configure & Shop
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DesignPhilosophy = () => (
  <section className="relative py-48 px-6 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="/images/design_philosophy_bg.png" 
        alt="Detail" 
        className="w-full h-full object-cover opacity-20"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <span className="text-xs font-semibold uppercase tracking-widest text-luxury-dark/40 mb-8 block">Design Philosophy</span>
      <h2 className="text-4xl md:text-7xl font-serif leading-tight mb-12">
        Where Strength <br />
        <span className="italic">Meets Stillness.</span>
      </h2>
      <p className="text-xl text-luxury-dark/70 font-light leading-relaxed mb-12">
        We believe that fitness equipment should be as beautiful as the spaces they inhabit. Our design language is one of restraint, using only the finest natural materials to create objects that inspire movement and complement the modern architectural home.
      </p>
      <div className="flex justify-center gap-12">
        <div className="text-center">
          <p className="text-3xl font-display font-bold mb-2">01</p>
          <p className="text-[10px] uppercase tracking-widest font-semibold">Materiality</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-display font-bold mb-2">02</p>
          <p className="text-[10px] uppercase tracking-widest font-semibold">Ergonomics</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-display font-bold mb-2">03</p>
          <p className="text-[10px] uppercase tracking-widest font-semibold">Longevity</p>
        </div>
      </div>
    </div>
  </section>
);

const LifestyleGallery = () => (
  <section className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-luxury-dark/40 mb-4 block">Environments</span>
        <h2 className="text-4xl md:text-6xl font-serif">The Art of Integration</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="aspect-[16/9] overflow-hidden">
            <img src={LIFESTYLE_GALLERY[0]} alt="Gym" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square overflow-hidden">
              <img src={LIFESTYLE_GALLERY[1]} alt="Gym" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src={LIFESTYLE_GALLERY[2]} alt="Gym" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
        <div className="aspect-square md:aspect-auto overflow-hidden">
          <img src={LIFESTYLE_GALLERY[3]} alt="Gym" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  </section>
);

const BrandValues = () => (
  <section className="py-32 px-6 bg-luxury-dark text-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {VALUES.map((val, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            <val.icon className="w-8 h-8 text-white/40" />
            <h3 className="text-xl font-serif">{val.title}</h3>
            <p className="text-sm text-white/60 font-light leading-relaxed">{val.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProjects = () => (
  <section className="py-32 px-6 bg-luxury-cream">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl md:text-6xl font-serif">Global Presence</h2>
        <button className="text-xs font-medium uppercase tracking-widest border-b border-luxury-dark pb-1">View All Projects</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden mb-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-2xl font-serif">{project.title}</h3>
            <p className="text-xs uppercase tracking-widest text-luxury-dark/40 mt-2">Luxury Installation</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-32 pb-12 px-6 border-t border-luxury-gray">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-1">
          <a href="#" className="text-3xl font-display font-bold tracking-widest uppercase mb-8 block">STING</a>
          <p className="text-sm text-luxury-dark/60 font-light leading-relaxed mb-8">
            The pinnacle of luxury fitness equipment. Designed for performance, crafted for elegance.
          </p>
          <div className="flex gap-6">
            <Instagram className="w-5 h-5 hover:opacity-50 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:opacity-50 cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:opacity-50 cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8">Collections</h4>
          <ul className="flex flex-col gap-4 text-sm text-luxury-dark/60 font-light">
            <li><a href="#" className="hover:text-luxury-dark transition-colors">Cardio Elite</a></li>
            <li><a href="#" className="hover:text-luxury-dark transition-colors">Strength Sculpt</a></li>
            <li><a href="#" className="hover:text-luxury-dark transition-colors">Recovery Studio</a></li>
            <li><a href="#" className="hover:text-luxury-dark transition-colors">Bespoke Series</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8">Company</h4>
          <ul className="flex flex-col gap-4 text-sm text-luxury-dark/60 font-light">
            <li><a href="#" className="hover:text-luxury-dark transition-colors">Our Atelier</a></li>
            <li><a href="#" className="hover:text-luxury-dark transition-colors">Design Philosophy</a></li>
            <li><a href="#" className="hover:text-luxury-dark transition-colors">Global Projects</a></li>
            <li><a href="#" className="hover:text-luxury-dark transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8">Newsletter</h4>
          <p className="text-sm text-luxury-dark/60 font-light mb-6">Join our inner circle for exclusive updates and design insights.</p>
          <div className="flex border-b border-luxury-dark pb-2">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent w-full text-sm outline-none font-light"
            />
            <button className="text-xs font-bold uppercase tracking-widest">Join</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-luxury-gray gap-8">
        <p className="text-[10px] uppercase tracking-widest text-luxury-dark/40">© 2026 Sting Fitness Equipment. All Rights Reserved.</p>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-luxury-dark/40">
          <a href="#" className="hover:text-luxury-dark">Privacy Policy</a>
          <a href="#" className="hover:text-luxury-dark">Terms of Service</a>
          <a href="#" className="hover:text-luxury-dark">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandStory />
      <FeaturedCollection />
      <ProductShowcase />
      <DesignPhilosophy />
      <LifestyleGallery />
      <BrandValues />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}
