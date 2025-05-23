import React from 'react';
import { motion } from 'framer-motion';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "O que é QUANTUMEME?",
      answer: "QUANTUMEME ($QTMM) é uma moeda meme inovadora que combina o humor da cultura de internet com tecnologia blockchain avançada. Inspirada na física quântica, apresenta um gato em estado de superposição quântica como mascote, simbolizando a dualidade entre meme divertido e tecnologia séria."
    },
    {
      question: "Em qual blockchain o QUANTUMEME está disponível?",
      answer: "O QUANTUMEME está disponível na blockchain Polygon (MATIC), escolhida por suas taxas ultrabaixas, alta velocidade de transação e compatibilidade com soluções Layer-2."
    },
    {
      question: "O que é o Staking Quântico?",
      answer: "O Staking Quântico é nosso mecanismo único de staking que oferece APY dinâmico entre 42% e 137%, determinado por um 'fator de superposição' gerado no momento do staking. O usuário só descobre o APY exato quando finaliza seu staking, similar ao experimento de Schrödinger."
    },
    {
      question: "O que são os eventos de Colapso Quântico?",
      answer: "Eventos de Colapso Quântico são distribuições periódicas de recompensas que ocorrem a cada 30 dias, onde 5 'Observadores Quânticos' (embaixadores ativos) são selecionados aleatoriamente para receber tokens extras do pool de staking."
    },
    {
      question: "Como posso me tornar um Observador Quântico?",
      answer: "Para se tornar um Observador Quântico, você precisa ter no mínimo 100.000 $QTMM em staking, contribuir ativamente para a comunidade e ser aprovado pelos membros existentes. Observadores recebem recompensas exclusivas e acesso antecipado a novos recursos."
    },
    {
      question: "Qual é o suprimento total do QUANTUMEME?",
      answer: "O suprimento total do QUANTUMEME é de 42 bilhões de tokens (42.000.000.000 $QTMM), uma referência à 'Resposta para a Vida, o Universo e Tudo Mais' do livro 'O Guia do Mochileiro das Galáxias'."
    },
    {
      question: "O que é o Observatório de Memes com IA?",
      answer: "O Observatório de Memes com IA é um dashboard alimentado por inteligência artificial que analisa tendências de memes e criptomoedas em tempo real, fornecendo insights valiosos sobre movimentos de mercado para os detentores de $QTMM."
    },
    {
      question: "O QUANTUMEME tem alguma utilidade além de ser uma moeda meme?",
      answer: "Sim! Além do aspecto de moeda meme, o $QTMM oferece acesso ao Observatório de Memes com IA, participação em governança, recompensas para criadores de conteúdo e taxas reduzidas para detentores de longo prazo."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-quantum-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-quantum font-bold mb-4">
            <span className="quantum-text">Perguntas Frequentes</span>
          </h2>
          <p className="text-quantum-light/70 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre o QUANTUMEME e o universo quântico dos memes
          </p>
          <div className="w-24 h-1 quantum-gradient mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <div className="bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20">
                <h3 className="text-xl font-quantum font-bold mb-3 quantum-text">
                  {faq.question}
                </h3>
                <p className="text-quantum-light/80">
                  {faq.answer}
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
            <h3 className="text-xl font-quantum font-bold mb-4 quantum-text">Ainda tem dúvidas?</h3>
            <p className="text-quantum-light/80 mb-6">
              Entre em contato com nossa comunidade no Telegram ou Discord para obter respostas para todas as suas perguntas sobre o universo QUANTUMEME.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="quantum-gradient px-6 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
                Telegram
              </button>
              <button className="border-2 border-quantum-secondary px-6 py-2 rounded-full text-quantum-secondary font-medium hover:bg-quantum-secondary/10 transition-colors">
                Discord
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
