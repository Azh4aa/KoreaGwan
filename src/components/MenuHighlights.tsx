import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function MenuHighlights() {
  const items = [
    {
      name: "Kimchi Mandu Guk",
      desc: "Hand-crafted kimchi dumplings in a rich, savory beef broth.",
      image: "https://images.unsplash.com/photo-1553163147-621957516919?q=80&w=800&auto=format&fit=crop",
      tag: "Signature"
    },
    {
      name: "Korean BBQ",
      desc: "Premium cuts of marinated beef and pork grilled at your table.",
      image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=800&auto=format&fit=crop",
      tag: "Popular"
    },
    {
      name: "Fried K-Chicken",
      desc: "Double-fried for extra crunch, glazed in sweet & spicy sauce.",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
      tag: "Must Try"
    },
    {
      name: "Bibimbap",
      desc: "Hot stone bowl rice with assorted vegetables and egg.",
      image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=800&auto=format&fit=crop",
      tag: "Classic"
    }
  ];

  return (
    <section id="menu" className="py-32 px-6 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-korea-red uppercase tracking-widest text-xs font-bold mb-4 block">Taste of Korea</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-6">Menu Highlights</h2>
            <p className="text-stone-500 text-lg font-light">
              Our menu is a journey through the authentic flavors of Korea, from comforting stews to sizzling BBQ.
            </p>
          </div>
          <a href="#" className="group flex items-center gap-2 text-stone-900 border-b border-stone-900 pb-1 hover:text-korea-red hover:border-korea-red transition-colors">
            <span className="uppercase tracking-widest text-xs font-bold">View Full Menu</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-4 left-4">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-3xl font-serif mb-3 leading-none">{item.name}</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-korea-red text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span>Order Now</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
