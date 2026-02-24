/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import Locations from './components/Locations';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <Navbar />
      <main>
        <Hero />
        <MenuHighlights />
        <Locations />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
