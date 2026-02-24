import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function Gallery() {
  // Simulating the Instagram grid content from the user's image
  const images = [
    "https://images.unsplash.com/photo-1580651315530-69c8e0026377?q=80&w=600&auto=format&fit=crop", // BBQ
    "https://images.unsplash.com/photo-1553163147-621957516919?q=80&w=600&auto=format&fit=crop", // Soup
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600&auto=format&fit=crop", // Fried Chicken
    "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=600&auto=format&fit=crop", // Meat
    "https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=600&auto=format&fit=crop", // Bibimbap
    "https://images.unsplash.com/photo-1606214587425-c603957b9418?q=80&w=600&auto=format&fit=crop", // Drinks
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-900 mb-6"
          >
            <Instagram size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">@koreagwan_kuwait</h2>
          <p className="text-stone-500 text-sm uppercase tracking-widest mb-8">Follow our journey on Instagram</p>
          <a 
            href="https://instagram.com/koreagwan_kuwait" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-3 border border-stone-200 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors"
          >
            Follow Us
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((src, index) => (
            <motion.a
              href="https://instagram.com/koreagwan_kuwait"
              target="_blank"
              rel="noreferrer"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={src} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                <Instagram className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
