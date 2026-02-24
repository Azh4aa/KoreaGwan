import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';

export default function Locations() {
  const locations = [
    {
      name: "Carlton Tower Hotel",
      area: "Kuwait City",
      phones: ["22280908 ext 224", "97214482"],
      hours: "12:00 PM - 11:00 PM",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
      mapUrl: "https://www.google.com/maps/place/Korea+Gwan(%EA%B3%A0%EB%A0%A4%EA%B4%80%2FCarlton+Tower+Hotel)/@29.3669247,47.9632998,17z/data=!3m1!4b1!4m6!3m5!1s0x3fcf84e0aae4ca15:0xd6327ee41cbd41eb!8m2!3d29.36692!4d47.9658801!16s%2Fg%2F11c45vh4dx?authuser=2&coh=277533&entry=tts&g_ep=EgoyMDI1MTIwOS4wIPu8ASoKLDEwMDc5MjA2OUgBUAM%3D&skid=4c67b262-cda1-43a0-9337-61083725ea76"
    },
    {
      name: "Al-Tijaria Tower",
      area: "Al-Sharq",
      phones: ["22460273", "96098644"],
      hours: "12:00 PM - 11:00 PM",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop",
      mapUrl: "https://www.google.com/maps/place/Korea+Gwan(%EA%B3%A0%EB%A0%A4%EA%B4%80%2FAl+Tijaria+Tower)/@29.3703445,47.9924145,17z/data=!4m6!3m5!1s0x3fcf852b227db361:0x51c6e59c0763e0d3!8m2!3d29.3703445!4d47.9924145!16s%2Fg%2F11y90sp4lb?authuser=2&entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <section id="locations" className="py-32 px-6 bg-stone-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-stone-900" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-stone-900" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-korea-red uppercase tracking-widest text-xs font-bold bg-korea-red/10 px-4 py-2 rounded-full">Visit Us</span>
          <h2 className="text-5xl md:text-6xl font-serif mt-8 mb-6">Our Locations</h2>
          <p className="text-stone-500 max-w-xl mx-auto text-lg font-light">
            Two convenient locations in the heart of Kuwait, serving authentic Korean dishes prepared with passion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {locations.map((loc, index) => (
            <motion.a 
              href={loc.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={loc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="uppercase tracking-wider text-xs font-bold mb-1 opacity-80">{loc.area}</p>
                  <h3 className="text-3xl font-serif">{loc.name}</h3>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-900 group-hover:bg-korea-red group-hover:text-white transition-colors duration-300 shadow-lg">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              
              {/* Details Section */}
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-korea-red group-hover/item:bg-korea-red group-hover/item:text-white transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Contact</p>
                      <div className="flex flex-col font-medium text-stone-700">
                        {loc.phones.map(phone => (
                          <span key={phone}>{phone}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-korea-red group-hover/item:bg-korea-red group-hover/item:text-white transition-colors">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Opening Hours</p>
                      <p className="font-medium text-stone-700">{loc.hours}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between text-korea-red font-medium">
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Get Directions on Google Maps</span>
                  <MapPin size={18} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
