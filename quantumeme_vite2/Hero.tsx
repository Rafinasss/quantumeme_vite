import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background particles/stars effect */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-quantum-secondary/30"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-quantum font-bold mb-4">
            <span className="quantum-text">QUANTUM</span>
            <span className="text-quantum-accent">EME</span>
          </h1>
          <p className="text-xl md:text-2xl text-quantum-light/80 max-w-2xl mx-auto">
            Simultaneamente Meme e Futuro
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-quantum-light/70 max-w-3xl mx-auto">
            A primeira moeda meme com tecnologia quântica, onde seu valor existe em superposição.
            Nem vivo, nem morto - apenas $QTMM.
          </p>
        </motion.div>

        {/* Cat in quantum superposition - placeholder for actual image */}
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-12"
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut" 
          }}
        >
          <div className="absolute inset-0 rounded-full bg-quantum-primary/20 animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">🐱</div> {/* Placeholder for actual cat image */}
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-50 blur-sm">
            <div className="text-6xl">🐱</div> {/* Placeholder for ghost/superposition effect */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <button className="quantum-gradient px-8 py-3 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity">
            Comprar $QTMM
          </button>
          <button className="border-2 border-quantum-secondary px-8 py-3 rounded-full text-quantum-secondary font-bold text-lg hover:bg-quantum-secondary/10 transition-colors">
            Whitepaper
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <div className="flex flex-col items-center">
            <div className="text-quantum-secondary font-quantum text-xl font-bold">42B</div>
            <div className="text-quantum-light/60 text-sm">Suprimento Total</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-quantum-secondary font-quantum text-xl font-bold">137%</div>
            <div className="text-quantum-light/60 text-sm">APY Máximo</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-quantum-secondary font-quantum text-xl font-bold">Polygon</div>
            <div className="text-quantum-light/60 text-sm">Blockchain</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      >
        <svg className="w-6 h-6 text-quantum-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
