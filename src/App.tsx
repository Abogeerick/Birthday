import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Wishes from './components/Wishes';
import Footer from './components/Footer';
import Confetti from './components/Confetti';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-purple-100 to-indigo-100">
      <Confetti />
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-16 relative z-10">
        <Hero />
        <Gallery />
        <Timeline />
        <Wishes />
      </main>
      <Footer />
    </div>
  );
}

export default App;