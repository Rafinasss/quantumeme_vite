import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import HowToBuy from './components/HowToBuy';
import Community from './components/Community';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
      <Community />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
