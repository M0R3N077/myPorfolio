"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Award {
  title: string;
  description: string;
  image: string;
}

const awards: Award[] = [
  {
    title: "Certificate of Excellence 2nd Semester - Senai Technical Course",
    description: "Due to my excellent academic performance during the second semester of the Senai Systems Development course, I was rewarded with a certificate of excellence.",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQEUy9JNARWZyw/feedshare-shrink_2048_1536/B4EZU_Zxr_HgAo-/0/1740525477390?e=1749081600&v=beta&t=NdbgSYLmexRNLK7QdEQPfGuvExRKpBjd36xDJVXf3Ok",
  },
  {
    title: "Certificate of Excellence 1st Semester - Senai Technical Course",
    description: "Due to my excellent academic performance and full attendance during the first semester of the Senai Systems Development course, I was rewarded with a certificate of excellence.",
    image: "/awards/hackathon-champion.png",
  },
  {
    title: "Top Student in Technical Systems Development",
    description: "Graduated at the top of the class with excellence in technical knowledge and project execution.",
    image: "/awards/top-student.png",
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
    <section className="min-h-[75vh] py-24 px-6 flex flex-col items-center text-white relative">
      <h2 className="text-5xl font-bold mb-20 text-center">My Awards</h2>

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
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
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
