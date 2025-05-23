import React from 'react';
import { motion } from 'framer-motion';

const HowToBuy: React.FC = () => {
  const steps = [
    {
      title: "Configurar uma Carteira",
      description: "Baixe e configure uma carteira compatível com Polygon, como MetaMask ou Trust Wallet.",
      icon: "👛"
    },
    {
      title: "Adquirir MATIC",
      description: "Compre MATIC (token nativo da Polygon) em uma exchange como Binance, Coinbase ou KuCoin.",
      icon: "💰"
    },
    {
      title: "Transferir para sua Carteira",
      description: "Envie o MATIC para sua carteira pessoal. Certifique-se de usar a rede Polygon.",
      icon: "📤"
    },
    {
      title: "Conectar ao DEX",
      description: "Acesse QuickSwap ou outro DEX na Polygon e conecte sua carteira.",
      icon: "🔄"
    },
    {
      title: "Trocar MATIC por QTMM",
      description: "Busque por QUANTUMEME ($QTMM) e faça o swap do seu MATIC pelo token.",
      icon: "✨"
    }
  ];

  return (
    <section id="buy" className="py-20 bg-quantum-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-quantum font-bold mb-4">
            <span className="quantum-text">Como Comprar</span>
          </h2>
          <p className="text-quantum-light/70 max-w-2xl mx-auto">
            Siga estes passos simples para adquirir seus tokens QUANTUMEME
          </p>
          <div className="w-24 h-1 quantum-gradient mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start mb-12"
            >
              <div className="flex-none mr-6">
                <div className="w-12 h-12 rounded-full quantum-gradient flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-quantum-primary/30 mx-auto mt-2"></div>
                )}
              </div>
              <div className="bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20 flex-grow">
                <h3 className="text-xl font-quantum font-bold mb-2 quantum-text">
                  Passo {index + 1}: {step.title}
                </h3>
                <p className="text-quantum-light/80">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-quantum font-bold mb-4 quantum-text">Endereço do Contrato</h3>
            <div className="bg-quantum-dark p-4 rounded-lg flex items-center justify-between mb-4">
              <code className="text-quantum-secondary text-sm break-all">0x42c0de137A1e9D8F17CbB0b21F0858E079219b37</code>
              <button className="ml-2 text-quantum-light/70 hover:text-quantum-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              </button>
            </div>
            <p className="text-quantum-light/70 text-sm">
              Sempre verifique o endereço do contrato antes de fazer qualquer transação. 
              O token QUANTUMEME ($QTMM) está disponível apenas na rede Polygon.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToBuy;
