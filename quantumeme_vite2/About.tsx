import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-quantum-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-quantum font-bold mb-4">
            <span className="quantum-text">O que é </span>
            <span className="text-quantum-accent">QUANTUMEME?</span>
          </h2>
          <div className="w-24 h-1 quantum-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20">
              <h3 className="text-2xl font-quantum font-bold mb-4 quantum-text">Conceito Quântico</h3>
              <p className="text-quantum-light/80 mb-4">
                QUANTUMEME ($QTMM) é uma moeda meme inovadora que combina o humor da cultura de internet com tecnologia blockchain avançada. Inspirada na fascinação atual por física quântica, inteligência artificial e memes de gatos, QUANTUMEME apresenta um conceito único: um gato em estado de superposição quântica.
              </p>
              <p className="text-quantum-light/80">
                Assim como o famoso experimento mental de Schrödinger, onde um gato está simultaneamente vivo e morto, o valor do $QTMM existe em múltiplos estados até ser observado. Esta dualidade representa perfeitamente nossa proposta: por um lado, um meme divertido e viral; por outro, uma tecnologia séria e inovadora.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            {/* Placeholder for Schrödinger cat image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-quantum-secondary/20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl">🐱</div> {/* Placeholder for actual cat image */}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-50 blur-sm">
                <div className="text-8xl">🐱</div> {/* Placeholder for ghost/superposition effect */}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20"
          >
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-quantum font-bold mb-2 quantum-text">Tecnologia QuantumAI Layer-2</h3>
            <p className="text-quantum-light/70">
              Nossa solução Layer-2 aprimorada por IA processa transações fora da cadeia principal, utilizando algoritmos de IA para otimizar o agrupamento e reduzir taxas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20"
          >
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-quantum font-bold mb-2 quantum-text">Staking Quântico</h3>
            <p className="text-quantum-light/70">
              Nosso mecanismo de staking único oferece APY dinâmico que flutua entre 42% e 137%, com recompensas que existem em "superposição" até serem reclamadas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20"
          >
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-quantum font-bold mb-2 quantum-text">Observatório de Memes com IA</h3>
            <p className="text-quantum-light/70">
              Um dashboard alimentado por IA que analisa tendências de memes e criptomoedas em tempo real, fornecendo insights sobre movimentos de mercado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
