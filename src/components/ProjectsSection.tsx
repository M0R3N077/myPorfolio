import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import projectGame from "../assets/projects/romantismo-game.png";
import projectClass from "../assets/projects/class.png";
import projectPetShop from "../assets/projects/project-petShop.png";


interface Project {
  title: string;
  image: string;
  tech: string[];
  site?: string;
  github: string;
  description: string;
}

const categories = ['Frontend', 'Backend', 'Fullstack'];

const projects = {
  Frontend: [
    {
      title: 'Graduation website for class',
      image: projectClass,
      tech: ['/skills/react.svg', '/skills/tailwindcss.svg', '/skills/typescript.svg'],
      site: 'https://formatura-3e.netlify.app/',
      github: 'https://github.com/M0R3N077/prjSiteSala',
      description: 'Um portfólio moderno feito com React, TypeScript e TailwindCSS.',
    },
    {
      title: 'Petshop',
      image: projectPetShop,
      tech: ['/skills/react.svg', '/skills/tailwindcss.svg', '/skills/typescript.svg'],
      site: 'https://portfolio.com',
      github: 'https://github.com/M0R3N077/prjPetshopWBack',
      description: 'Um portfólio moderno feito com React, TypeScript e TailwindCSS.',
    },
    {
      title: 'Gamified website',
      image: projectGame,
      tech: ['/skills/react.svg', '/skills/tailwindcss.svg', '/skills/typescript.svg'],
      site: 'https://interativo-romantismo.netlify.app/',
      github: 'https://github.com/M0R3N077/romantismoProject',
      description: 'Um portfólio moderno feito com React, TypeScript e TailwindCSS.',
    },
  ],
  Backend: [
    {
      title: 'API de Tarefas',
      image: '/projects/api.png',
      tech: ['/skills/nodejs.svg', '/skills/express.svg', '/skills/sql.svg'],
      github: 'https://github.com/usuario/api-tarefas',
      description: 'Uma API REST para gerenciamento de tarefas utilizando Node.js, Express e banco de dados SQL.',
    },
  ],
  Fullstack: [
    {
      title: 'Sistema de Vendas',
      image: '/projects/sistema.png',
      tech: ['/skills/react.svg', '/skills/nodejs.svg', '/skills/sql.svg'],
      site: 'https://sistemadevendas.com',
      github: 'https://github.com/usuario/sistema-vendas',
      description: 'Um sistema de vendas completo, com frontend em React e backend em Node.js.',
    },
  ]
};

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('Frontend');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center" id='projects'>
      {/* Título */}
      <h2 className="text-6xl sm:text-5xl lg:text-6xl font-bold mb-12 text-center">PROJECTS</h2>

      {/* Botões de categoria */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-md sm:text-lg font-semibold transition-all
              ${activeCategory === category 
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg' 
                : 'bg-gray-800 hover:bg-gray-700'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl w-full">
        {projects[activeCategory as keyof typeof projects].map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col justify-between items-center gap-4 sm:gap-6 min-h-[400px] sm:min-h-[450px] w-full transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 sm:h-40 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-center">{project.title}</h3>
           

            {/* Botões */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full mt-auto">
              {'site' in project && project.site && (
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 px-4 sm:px-5 py-2 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full shadow-md hover:scale-105 transition-all text-sm sm:text-base"
                >
                  🌐 <span className="font-semibold">View Site</span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full shadow-md hover:scale-105 transition-all text-sm sm:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59..."/>
                  </svg>
                  <span className="font-semibold">GitHub</span>
                </a>
              )}

              <button
                onClick={() => setSelectedProject(project)}
                className="flex items-center gap-1 sm:gap-2 px-4 sm:px-5 py-2 bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 rounded-full shadow-md hover:scale-105 transition-all text-sm sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1..."/>
                </svg>
                <span className="font-semibold">Details</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de detalhes */}
      <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-0">
        <Dialog.Panel className="bg-gray-800 p-6 sm:p-8 rounded-3xl max-w-md w-full shadow-2xl text-white">
          {selectedProject && (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-gray-300">{selectedProject.description}</p>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 sm:px-6 py-2 bg-red-500 hover:bg-red-600 rounded-full text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </Dialog.Panel>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
