import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-quantum-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-quantum font-bold quantum-text">QUANTUMEME</span>
              <p className="text-quantum-light/60 mt-4">
                Simultaneamente Meme e Futuro
              </p>
              <p className="text-quantum-light/60 mt-2">
                © 2025 QUANTUMEME. Todos os direitos reservados.
              </p>
            </motion.div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-quantum-secondary font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-quantum-light/70 hover:text-quantum-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="text-quantum-light/70 hover:text-quantum-secondary transition-colors">O que é?</a></li>
              <li><a href="#tokenomics" className="text-quantum-light/70 hover:text-quantum-secondary transition-colors">Tokenomics</a></li>
              <li><a href="#roadmap" className="text-quantum-light/70 hover:text-quantum-secondary transition-colors">Roadmap</a></li>
              <li><a href="#buy" className="text-quantum-light/70 hover:text-quantum-secondary transition-colors">Como Comprar</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-quantum-secondary font-medium mb-4">Comunidade</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-quantum-light/70 hover:text-quantum-secondary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-quantum-light/70 hover:text-quantum-secondary transition-colors">Telegram</a></li>
              <li><a href="#" className="text-quantum-light/70 hover:text-quantum-secondary transition-colors">Discord</a></li>
              <li><a href="#" className="text-quantum-light/70 hover:text-quantum-secondary transition-colors">Medium</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-quantum-secondary font-medium mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-quantum-light/70 hover:text-quantum-secondary transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-quantum-light/70 hover:text-quantum-secondary transition-colors">Contrato</a></li>
              <li><a href="#" className="text-quantum-light/70 hover:text-quantum-secondary transition-colors">Auditoria</a></li>
              <li><a href="#faq" className="text-quantum-light/70 hover:text-quantum-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-quantum-primary/20 mt-8 pt-8 text-center">
          <p className="text-quantum-light/60 text-sm">
            QUANTUMEME ($QTMM) é um projeto experimental. Faça sua própria pesquisa antes de investir.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
