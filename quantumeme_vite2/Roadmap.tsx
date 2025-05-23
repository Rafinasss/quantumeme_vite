import React from 'react';
import { motion } from 'framer-motion';

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      phase: "Fase 1: Lançamento",
      period: "Q2 2025",
      items: [
        "Distribuição inicial conforme alocação definida",
        "Listagem em DEXs na Polygon",
        "Início do programa de staking quântico"
      ],
      icon: "🚀"
    },
    {
      phase: "Fase 2: Expansão",
      period: "Q3 2025",
      items: [
        "Primeiro evento de Colapso Quântico",
        "Implementação do Observatório de Memes com IA",
        "Listagem em exchanges centralizadas de médio porte"
      ],
      icon: "📈"
    },
    {
      phase: "Fase 3: Adoção",
      period: "Q4 2025",
      items: [
        "Primeira queima programada baseada em volume",
        "Lançamento do programa de Observadores Quânticos",
        "Expansão para outras blockchains via bridges"
      ],
      icon: "🌐"
    },
    {
      phase: "Fase 4: Maturidade",
      period: "Q1 2026",
      items: [
        "Implementação completa da governança comunitária",
        "Integração com principais plataformas DeFi",
        "Desenvolvimento de casos de uso adicionais"
      ],
      icon: "🏆"
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-quantum-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-quantum font-bold mb-4">
            <span className="quantum-text">Roadmap</span>
          </h2>
          <p className="text-quantum-light/70 max-w-2xl mx-auto">
            Nossa jornada quântica através do tempo e espaço
          </p>
          <div className="w-24 h-1 quantum-gradient mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-quantum-primary/30 rounded-full"></div>

          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Icon */}
              <div className="flex-none md:w-1/2 flex justify-center md:justify-end items-center">
                <div className={`relative z-10 w-16 h-16 flex items-center justify-center rounded-full quantum-gradient text-2xl ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}>
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-none md:w-1/2">
                <div className={`bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20 max-w-md ${
                  index % 2 === 0 ? 'md:ml-0' : 'md:mr-0 md:ml-auto'
                }`}>
                  <h3 className="text-xl font-quantum font-bold mb-1 quantum-text">{item.phase}</h3>
                  <p className="text-quantum-secondary text-sm mb-4">{item.period}</p>
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-quantum-secondary mr-3">•</div>
                        <p className="text-quantum-light/80">{listItem}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
