import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Locations', href: '#locations' },
    { name: 'Story', href: '#story' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F8F6]/90 backdrop-blur-md border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Area */}
          <a href="#" className="flex flex-col items-center leading-none group">
            {/* Custom SVG Logo mimicking the house icon */}
            <svg width="40" height="40" viewBox="0 0 100 100" className="mb-1 text-stone-900 group-hover:text-korea-red transition-colors" fill="none" stroke="currentColor" strokeWidth="3">
              {/* Roof */}
              <path d="M10 40 L50 10 L90 40" strokeLinecap="round" strokeLinejoin="round"/>
              {/* House Body */}
              <path d="M20 40 V90 H80 V40" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Korean Character-like shapes inside (abstracted) */}
              <path d="M35 55 H65" strokeWidth="2"/>
              <path d="M50 55 V75" strokeWidth="2"/>
              <path d="M35 75 H65" strokeWidth="2"/>
            </svg>
            <span className="font-serif text-xl font-bold tracking-wider group-hover:text-korea-red transition-colors">KOREA GWAN</span>
            <span className="text-[9px] uppercase tracking-[0.2em] opacity-60">Since 1983</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm uppercase tracking-widest hover:text-korea-red transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#locations"
              className="bg-stone-900 text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest hover:bg-korea-red transition-colors"
            >
              Book Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F9F8F6] border-b border-stone-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {links.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-serif italic"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
