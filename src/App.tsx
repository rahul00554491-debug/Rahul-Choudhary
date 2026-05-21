/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Exhibitions from './components/Exhibitions';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] font-sans antialiased selection:bg-[#F3AF24] selection:text-black">
      {/* Dynamic Navigation Header */}
      <Header />

      {/* Main Page Modules */}
      <main>
        {/* Hero Section with Golden Interactive Elements */}
        <Hero />
        
        {/* Immersive About Segment with Viewfinder lines and Rotating Rods */}
        <About />
        
        {/* Interactive Categories and Grid Portfolio Visuals */}
        <Portfolio />
        
        {/* Exhibitions Scheduling & Simulated Ticketing Checkout */}
        <Exhibitions />
        
        {/* Sleek Contact Validation Form */}
        <Contact />
      </main>

      {/* Visual Closure Footer & Back-to-Top trigger */}
      <Footer />
    </div>
  );
}

