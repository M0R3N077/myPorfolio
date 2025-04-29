import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2014",
    title: "Started at SESI School",
    description: "I began my academic journey at SESI, building the foundation for my future in technology and innovation.",
  },
  {
    year: "2023",
    title: "Technical Course in Systems Development - SENAI",
    description: "I enrolled in the technical course at SENAI to deepen my programming and software development skills.",
  },
  {
    year: "2024",
    title: "SESI/SENAI Development Team",
    description: "Selected to join the SESI/SENAI Development Team, where I work as a developer on real-world projects.",
  },
  
];

const Experience: React.FC = () => {
  return (
    <section className="relative  py-20 px-6 text-white flex flex-col items-center" id="experience">
      <h2 className="text-6xl font-bold mb-16 text-center"> JOURNEY</h2>
      <div className="relative max-w-5xl w-full">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500"></div>

        <div className="flex flex-col gap-16">
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-3xl shadow-xl max-w-md w-full">
                <span className="text-sm text-purple-400">{item.year}</span>
                <h3 className="text-2xl font-bold my-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
