import React from 'react';
import { motion } from 'framer-motion';

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-20 bg-quantum-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-quantum font-bold mb-4">
            <span className="quantum-text">Tokenomics</span>
          </h2>
          <p className="text-quantum-light/70 max-w-2xl mx-auto">
            O QUANTUMEME foi projetado com um modelo econômico cuidadosamente estruturado para garantir sustentabilidade a longo prazo, incentivos à comunidade e crescimento orgânico.
          </p>
          <div className="w-24 h-1 quantum-gradient mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-quantum font-bold mb-6 quantum-text">Suprimento Total</h3>
            <div className="bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-quantum-light/80">Suprimento Total:</span>
                <span className="text-quantum-secondary font-quantum font-bold">42.000.000.000</span>
              </div>
              <p className="text-quantum-light/70 text-sm">
                Este número foi escolhido como referência à "Resposta para a Vida, o Universo e Tudo Mais" do livro "O Guia do Mochileiro das Galáxias", alinhando-se ao tema quântico e científico do projeto.
              </p>
            </div>

            <h3 className="text-2xl font-quantum font-bold mb-6 quantum-text">Mecanismo de Staking Quântico</h3>
            <div className="bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-quantum-secondary mr-3">•</div>
                  <div>
                    <span className="text-quantum-light/80 font-medium">APY Dinâmico em Superposição:</span>
                    <p className="text-quantum-light/70 text-sm mt-1">
                      Taxa de recompensa anual (APY) que flutua entre 42% e 137%, determinada por um "fator de superposição" único gerado no momento do staking.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-quantum-secondary mr-3">•</div>
                  <div>
                    <span className="text-quantum-light/80 font-medium">Períodos de Bloqueio:</span>
                    <p className="text-quantum-light/70 text-sm mt-1">
                      Mínimo: 7 dias, Máximo: 365 dias, com bônus de 20% para staking de longo prazo (mais de 180 dias).
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-quantum-secondary mr-3">•</div>
                  <div>
                    <span className="text-quantum-light/80 font-medium">Eventos de Colapso Quântico:</span>
                    <p className="text-quantum-light/70 text-sm mt-1">
                      Eventos periódicos onde recompensas adicionais são distribuídas aleatoriamente para "Observadores Quânticos" (embaixadores ativos).
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-quantum font-bold mb-6 quantum-text">Distribuição Inicial</h3>
            <div className="bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-quantum-light/80">Desenvolvimento e Operações</span>
                    <span className="text-quantum-secondary font-medium">30%</span>
                  </div>
                  <div className="w-full bg-quantum-dark/50 rounded-full h-2.5">
                    <div className="quantum-gradient h-2.5 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-quantum-light/80">Recompensas da Comunidade</span>
                    <span className="text-quantum-secondary font-medium">25%</span>
                  </div>
                  <div className="w-full bg-quantum-dark/50 rounded-full h-2.5">
                    <div className="quantum-gradient h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-quantum-light/80">Marketing e Parcerias</span>
                    <span className="text-quantum-secondary font-medium">20%</span>
                  </div>
                  <div className="w-full bg-quantum-dark/50 rounded-full h-2.5">
                    <div className="quantum-gradient h-2.5 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-quantum-light/80">Pool de Staking</span>
                    <span className="text-quantum-secondary font-medium">15%</span>
                  </div>
                  <div className="w-full bg-quantum-dark/50 rounded-full h-2.5">
                    <div className="quantum-gradient h-2.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-quantum-light/80">Liquidez Inicial</span>
                    <span className="text-quantum-secondary font-medium">10%</span>
                  </div>
                  <div className="w-full bg-quantum-dark/50 rounded-full h-2.5">
                    <div className="quantum-gradient h-2.5 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-quantum font-bold mb-6 mt-8 quantum-text">Mecanismos de Queima</h3>
            <div className="bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-quantum-secondary mr-3">•</div>
                  <div>
                    <span className="text-quantum-light/80 font-medium">Queima Periódica:</span>
                    <p className="text-quantum-light/70 text-sm mt-1">
                      Eventos trimestrais de queima baseados no volume de transações, com 1% das taxas automaticamente queimadas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-quantum-secondary mr-3">•</div>
                  <div>
                    <span className="text-quantum-light/80 font-medium">Queima por Marcos:</span>
                    <p className="text-quantum-light/70 text-sm mt-1">
                      Queima de tokens ao atingir marcos específicos de adoção e desenvolvimento.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <button className="quantum-gradient px-8 py-3 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity">
            Ver Tokenomics Completo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
