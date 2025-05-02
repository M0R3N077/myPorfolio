import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../assets/minha_imagem.jpeg';

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen pt-8 px-4 md:px-20 " id="about-me">
      
      {/* Title */}
      <div className="text-start ml-4 mb-12">
        <h2 className="text-5xl md:text-6xl font-bold text-white">ABOUT ME</h2>
        <h3 className="text-2xl md:text-3xl tracking-widest mt-2 text-purple-400">EFFORT + DEDICATION</h3>
        <hr className="border-purple-600 mt-6 w-1/4" />
      </div>

      {/* Content */}
      <main className="flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-md"
        >
          <img
            src={myImage}
            alt="Murilo Moreno Portrait"
            className="rounded-2xl ring-8 ring-white"
            style={{ boxShadow: '4px 6px 20px #9810fa' }}
          />
        </motion.div>

        {/* Text with animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl text-white text-lg leading-relaxed space-y-6"
        >
          <p>
            My passion for <span className="bg-purple-600 px-1 rounded">technology</span> began early, when I realized how it can transform lives and solve everyday problems. Today, I am in my last year of high school at Sesi Sorocaba, and also studying <span className="bg-purple-600 px-1 rounded">Systems Development</span> at SENAI. I was honored to join the development team of outstanding students — a rewarding experience that motivates me daily.
          </p>

          <p>
            I'm <span className="bg-purple-600 px-1 rounded">committed</span> to excellence. A grade of 9.5 was never enough — not out of perfectionism, but because I believe in always giving my best. This mindset fuels my growth and resilience in the face of any challenge.
          </p>

          <p>
            I live by the quote <span className="bg-purple-600 px-1 rounded">"Rest at the end, not in the middle."</span> — Kobe Bryant. It defines who I am.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default ProfilePage;
