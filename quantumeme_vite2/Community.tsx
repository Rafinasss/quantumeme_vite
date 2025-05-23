import React from 'react';
import { motion } from 'framer-motion';

const Community: React.FC = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: "🐦",
      url: "#",
      color: "bg-blue-500"
    },
    {
      name: "Telegram",
      icon: "📱",
      url: "#",
      color: "bg-blue-400"
    },
    {
      name: "Discord",
      icon: "💬",
      url: "#",
      color: "bg-indigo-600"
    },
    {
      name: "Medium",
      icon: "📝",
      url: "#",
      color: "bg-green-600"
    }
  ];

  return (
    <section id="community" className="py-20 bg-quantum-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-quantum font-bold mb-4">
            <span className="quantum-text">Comunidade</span>
          </h2>
          <p className="text-quantum-light/70 max-w-2xl mx-auto">
            Junte-se aos Observadores Quânticos e faça parte da nossa comunidade interdimensional
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
            <h3 className="text-2xl font-quantum font-bold mb-6 quantum-text">Observadores Quânticos</h3>
            <div className="bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20">
              <p className="text-quantum-light/80 mb-4">
                Os Observadores Quânticos são membros ativos da comunidade que promovem o QUANTUMEME e contribuem para seu crescimento. Como um Observador Quântico, você terá acesso a:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-quantum-secondary mr-3">•</div>
                  <p className="text-quantum-light/80">Recompensas exclusivas durante eventos de Colapso Quântico</p>
                </li>
                <li className="flex items-start">
                  <div className="text-quantum-secondary mr-3">•</div>
                  <p className="text-quantum-light/80">Acesso antecipado a novos recursos e atualizações</p>
                </li>
                <li className="flex items-start">
                  <div className="text-quantum-secondary mr-3">•</div>
                  <p className="text-quantum-light/80">Badges exclusivos e reconhecimento na comunidade</p>
                </li>
                <li className="flex items-start">
                  <div className="text-quantum-secondary mr-3">•</div>
                  <p className="text-quantum-light/80">Participação direta nas decisões de governança</p>
                </li>
              </ul>
              <div className="mt-6">
                <button className="quantum-gradient px-6 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
                  Tornar-se um Observador
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-quantum font-bold mb-6 quantum-text">Nossas Redes</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20 flex flex-col items-center hover:border-quantum-secondary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-4xl mb-3">{link.icon}</div>
                  <span className="text-quantum-light font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>
            <div className="mt-8 bg-quantum-dark/80 p-6 rounded-2xl border border-quantum-primary/20">
              <h4 className="text-xl font-quantum font-bold mb-4 quantum-text">Calendário de Eventos</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-quantum-secondary mr-3">📅</div>
                  <div>
                    <p className="text-quantum-light/80 font-medium">AMA Semanal</p>
                    <p className="text-quantum-light/60 text-sm">Toda sexta-feira às 18h UTC</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-quantum-secondary mr-3">📅</div>
                  <div>
                    <p className="text-quantum-light/80 font-medium">Colapso Quântico</p>
                    <p className="text-quantum-light/60 text-sm">Último dia de cada mês</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-quantum-secondary mr-3">📅</div>
                  <div>
                    <p className="text-quantum-light/80 font-medium">Concurso de Memes</p>
                    <p className="text-quantum-light/60 text-sm">Todo domingo</p>
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
          className="bg-quantum-dark/80 p-8 rounded-2xl border border-quantum-primary/20 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-quantum font-bold mb-4 quantum-text">Junte-se à Comunidade</h3>
          <p className="text-quantum-light/80 mb-6 max-w-2xl mx-auto">
            Faça parte da revolução quântica! Nossa comunidade está crescendo rapidamente e estamos sempre procurando mentes brilhantes para contribuir com ideias, memes e energia positiva.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="quantum-gradient px-6 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity flex items-center">
              <span className="mr-2">📱</span> Entrar no Telegram
            </button>
            <button className="border-2 border-quantum-secondary px-6 py-3 rounded-full text-quantum-secondary font-medium hover:bg-quantum-secondary/10 transition-colors flex items-center">
              <span className="mr-2">💬</span> Entrar no Discord
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
