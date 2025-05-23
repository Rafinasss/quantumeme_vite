import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-quantum-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl font-quantum font-bold quantum-text">QUANTUMEME</span>
              </motion.div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium text-quantum-light hover:text-quantum-secondary transition-colors">Home</a>
                <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-quantum-light hover:text-quantum-secondary transition-colors">O que é?</a>
                <a href="#tokenomics" className="px-3 py-2 rounded-md text-sm font-medium text-quantum-light hover:text-quantum-secondary transition-colors">Tokenomics</a>
                <a href="#roadmap" className="px-3 py-2 rounded-md text-sm font-medium text-quantum-light hover:text-quantum-secondary transition-colors">Roadmap</a>
                <a href="#buy" className="px-3 py-2 rounded-md text-sm font-medium text-quantum-light hover:text-quantum-secondary transition-colors">Como Comprar</a>
                <a href="#community" className="px-3 py-2 rounded-md text-sm font-medium text-quantum-light hover:text-quantum-secondary transition-colors">Comunidade</a>
                <a href="#faq" className="px-3 py-2 rounded-md text-sm font-medium text-quantum-light hover:text-quantum-secondary transition-colors">FAQ</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="quantum-gradient px-4 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
              Comprar $QTMM
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-quantum-light hover:text-quantum-secondary focus:outline-none"
            >
              <span className="sr-only">Abrir menu principal</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-quantum-dark/90 backdrop-blur-md">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-quantum-light hover:text-quantum-secondary">Home</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-quantum-light hover:text-quantum-secondary">O que é?</a>
            <a href="#tokenomics" className="block px-3 py-2 rounded-md text-base font-medium text-quantum-light hover:text-quantum-secondary">Tokenomics</a>
            <a href="#roadmap" className="block px-3 py-2 rounded-md text-base font-medium text-quantum-light hover:text-quantum-secondary">Roadmap</a>
            <a href="#buy" className="block px-3 py-2 rounded-md text-base font-medium text-quantum-light hover:text-quantum-secondary">Como Comprar</a>
            <a href="#community" className="block px-3 py-2 rounded-md text-base font-medium text-quantum-light hover:text-quantum-secondary">Comunidade</a>
            <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-quantum-light hover:text-quantum-secondary">FAQ</a>
            <button className="mt-4 w-full quantum-gradient px-4 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
              Comprar $QTMM
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
