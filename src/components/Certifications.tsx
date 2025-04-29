import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // Ícone da seta (usando Lucide, mas pode ser outro)
import jsFree from "../assets/certifications-imgs/js-freeCode.png";
import Responsive from "../assets/certifications-imgs/responsive.png";
import competencia from "../assets/certifications-imgs/competencia.png";
import economia from "../assets/certifications-imgs/economia.png";
import cincog from "../assets/certifications-imgs/5g.png";
import lgpd from "../assets/certifications-imgs/lgpd.png";


interface Certificate {
  title: string;
  image: string;
  pdf: string;
}

const certificates: Certificate[] = [
  {
    title: "JavaScript Algorithms and Data Structures - freeCodeCamp",
    image: jsFree,
    pdf: "file:///C:/Users/Murilo%20Moreno/Downloads/freeCode_certificado_js.pdf",
  },
  {
    title: "Responsive Web Design - freeCodeCamp",
    image: Responsive,
    pdf: "/certificates/typescript.pdf",
  },
  {
    title: "COMPETÊNCIA TRANSVERSAL - SEGURANÇA NO TRABALHO - Senai São Paulo",
    image: competencia,
    pdf: "/certificates/node.pdf",
  },
  {
    title: "ECONOMIA CIRCULAR - Senai São Paulo",
    image: economia,
    pdf: "/certificates/frontend.pdf",
  },
  {
    title: "DESVENDANDO O 5G - Senai São Paulo",
    image: cincog,
    pdf: "/certificates/database.pdf",
  },
  {
    title: "PRIVACIDADE E PROTEÇÃO DE DADOS (LGPD) - Senai São Paulo",
    image: lgpd,
    pdf: "/certificates/api.pdf",
  },
];

const Certifications: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section className="relative py-20 px-8 text-white flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-16 text-center">My Certifications</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full">
        {certificates.slice(0, visibleCount).map((cert, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-2xl flex flex-col items-center text-center"
          >
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="w-full h-48 object-contain rounded-2xl mb-6"
            />
            <h3 className="text-xl font-bold mb-4">{cert.title}</h3>
            <a 
              href={cert.pdf} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full hover:scale-105 transition-transform"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>

      {/* Botão para visualizar mais */}
      {visibleCount < certificates.length && (
        <motion.button 
          onClick={handleLoadMore}
          whileHover={{ scale: 1.1 }}
          className="mt-12 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full text-lg font-semibold transition-all"
        >
          Load More
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      )}
    </section>
  );
};

export default Certifications;
