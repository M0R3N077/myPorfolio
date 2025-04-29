"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import second from "../assets/awards/2-semester.jpg";

interface Award {
  title: string;
  description: string;
  image: string;
}

const awards: Award[] = [
  {
    title: "Certificate of Excellence 2nd Semester - Senai Technical Course",
    description: "Due to my excellent academic performance during the second semester of the Senai Systems Development course, I was rewarded with a certificate of excellence.",
    image: second,
  },
  {
    title: "Certificate of Excellence 1st Semester - Senai Technical Course",
    description: "Due to my excellent academic performance and full attendance during the first semester of the Senai Systems Development course, I was rewarded with a certificate of excellence.",
    image: "https://www.oanhanguera.com.br/arquivos_personalizados/uploads/noticias/fotos/Fachada_Senai_60e70f7b90d7a.JPG",
  },
  {
    title: "Silver Medal - National Open Olympiad in Brazilian History (ONHB-A)",
    description: "In 2022, during the Open National Brazilian History Olympiad, my group and I managed, with all the support of the teaching staff at SESI Sorocaba school, to win the ONHB silver medal.",
    image: "https://cdn.prod.website-files.com/60ff690cd7b0537edb99a29a/62fbf8886bda347e864eb60a_declarac%CC%A7a%CC%83o%20de%20independecia%20do%20Brasil.jpg",
  },
  {
    title: "Best Writing",
    description: "In 2023, the SESI Sorocaba school required students to write an argumentative essay on the theme T'he stigma associated with mental illness in Brazilian society'. On this occasion, I was awarded the trophy for best essay.",
    image: "https://jornaldacidadegv.com.br/wp-content/uploads/2025/01/Folha-de-Redacao-Enem-2-scaled-1.webp",
  }, {
    title: "Gloria Maria Award - Best Report",
    description: "In 2023, together with my group from the SESI Sorocaba school, we won the award for best report written, our theme in question was 'Environmental Racism', and I performed the role of reporter.",
    image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/56d2/live/bc7f94d0-a312-11ed-8f65-71bfa0525ce3.jpg.webp",
  },
  // Add more awards here
];

const Awards: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % awards.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[75vh] py-24 px-6 flex flex-col items-center text-white relative" id="awards">
      <h2 className="text-6xl font-bold mb-20 text-center">AWARDS</h2>

      <div className="max-w-7xl w-full flex  flex-col md:flex-row items-center justify-center gap-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={awards[current].title}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={awards[current].image}
              alt={awards[current].title}
              className="rounded-3xl shadow-2xl w-[400px] h-[400px] max-w-md object-cover"
            />
          </motion.div>

          <motion.div
            key={awards[current].description}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col items-start justify-center text-left px-4"
          >
            <h3 className="text-3xl font-bold mb-6">{awards[current].title}</h3>
            <p className="text-lg text-gray-300">{awards[current].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
};

export default Awards;
