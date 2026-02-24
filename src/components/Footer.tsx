import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-white text-3xl font-serif mb-6">Korea Gwan</h2>
            <p className="max-w-sm font-light leading-relaxed mb-8">
              Authentic Korean cuisine in Kuwait since 1983. We bring the rich traditions and flavors of Korea to your table.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/koreagwan_kuwait" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Locations</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-white">Carlton Tower:</span>
                <span>22280908</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">Al-Tijaria:</span>
                <span>22460273</span>
              </li>
              <li className="pt-4">
                <a href="mailto:info@koreagwan.com" className="hover:text-white transition-colors">info@koreagwan.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Korea Gwan. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
