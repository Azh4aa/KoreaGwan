import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1580651315530-69c8e0026377?q=80&w=2070&auto=format&fit=crop" 
          alt="Korean BBQ Table" 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block border border-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium">
              Authentic Korean Cuisine
            </span>
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-serif font-medium mb-8 leading-[0.85] tracking-tight">
            Korea <span className="text-korea-red italic">Gwan</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-light text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Serving the heart of Seoul in Kuwait since <span className="text-white font-normal">1983</span>. 
            Experience the tradition of authentic flavors.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#menu"
              className="group relative px-10 py-4 bg-white text-stone-900 rounded-full overflow-hidden w-48"
            >
              <span className="relative z-10 uppercase tracking-widest text-xs font-bold group-hover:text-white transition-colors duration-300">View Menu</span>
              <div className="absolute inset-0 bg-korea-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a 
              href="#locations"
              className="group px-10 py-4 border border-white/30 backdrop-blur-sm text-white rounded-full uppercase tracking-widest text-xs font-bold hover:bg-white/10 transition-colors w-48"
            >
              Locations
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} strokeWidth={1} />
        </div>
      </motion.div>
    </section>
  );
}
