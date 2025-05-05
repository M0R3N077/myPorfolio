import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import projectGame from "../assets/projects/romantismo-game.png";
import projectClass from "../assets/projects/class.png";
import projectPetShop from "../assets/projects/project-petShop.png";
import correctText from "../assets/projects/correct.png";
import freeFall from "../assets/projects/free_fall.png";
import express from "../assets/projects/express.png";


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
      title: 'Graduation Website',
      image: projectClass,
      tech: ['https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw',
          'https://imgs.search.brave.com/mer7TJf5AUZ6eObxi989K06gOrZ8l0AyfXPOfmmK5r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L1Nhc3NfTG9n/b19Db2xvci5zdmc',
          'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn',
        ],
      site: 'https://formatura-3e.netlify.app/',
      github: 'https://github.com/M0R3N077/prjSiteSala',
      description: 'Um portfólio moderno feito com React, TypeScript e TailwindCSS.',
    },
    {
      title: 'Petshop Website',
      image: projectPetShop,
      tech: ['https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw',
          'https://imgs.search.brave.com/mer7TJf5AUZ6eObxi989K06gOrZ8l0AyfXPOfmmK5r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L1Nhc3NfTG9n/b19Db2xvci5zdmc',
          'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn',
        'https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256'],
      site: 'https://pet-heave.netlify.app/',
      github: 'https://github.com/M0R3N077/prjPetshopWBack',
      description: 'Um portfólio moderno feito com React, TypeScript e TailwindCSS.',
    },
    {
      title: 'Gamified Website',
      image: projectGame,
      tech: ['https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw',
          'https://imgs.search.brave.com/mer7TJf5AUZ6eObxi989K06gOrZ8l0AyfXPOfmmK5r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L1Nhc3NfTG9n/b19Db2xvci5zdmc',
          'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn',],
      site: 'https://interativo-romantismo.netlify.app/',
      github: 'https://github.com/M0R3N077/romantismoProject',
      description: 'Um portfólio moderno feito com React, TypeScript e TailwindCSS.',
    },
    {
      title: 'Free Fall Website',
      image: freeFall,
      tech: ['https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw',
          'https://imgs.search.brave.com/mer7TJf5AUZ6eObxi989K06gOrZ8l0AyfXPOfmmK5r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L1Nhc3NfTG9n/b19Db2xvci5zdmc',
          'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn',],
      site: 'https://fisica-com-toledo-queda-livre.netlify.app/',
      github: 'https://github.com/M0R3N077/siteFisica',
      description: 'Um portfólio moderno feito com React, TypeScript e TailwindCSS.',
    },
    {
      title: 'Express.js Website',
      image: express,
      tech: ['https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw',
          'https://imgs.search.brave.com/kTKvDjFg8uSx56pZHmcFxgYwJRkOlbH6oHO9WSe8TFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0NTUzNfbG9n/by5zdmc',
          'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn',],
      site: 'https://express-em-node.netlify.app/',
      github: 'https://github.com/M0R3N077/siteExpress',
      description: 'Um portfólio moderno feito com React, TypeScript e TailwindCSS.',
    },
    // {
    //   title: 'Black Consciousness Website',
    //   image: express,
    //   tech: ['https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw',
    //       'https://imgs.search.brave.com/kTKvDjFg8uSx56pZHmcFxgYwJRkOlbH6oHO9WSe8TFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0NTUzNfbG9n/by5zdmc',
    //       'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn',],
    //   site: 'https://express-em-node.netlify.app/',
    //   github: 'https://github.com/M0R3N077/site_novembro',
    //   description: 'Um portfólio moderno feito com React, TypeScript e TailwindCSS.',
    // },
  ],
  Backend: [
    {
      title: 'Pet shop management system API',
      image: 'https://storage.needpix.com/rsynced_images/animals-2173635_1280.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw'],
      github: 'https://github.com/M0R3N077/prjMuriloMorenoSomativa1',
      description: 'Uma API REST para gerenciamento de tarefas utilizando Node.js, Express e banco de dados SQL.',
    },
    {
      title: 'Contributor API',
      image: 'https://blog.samisaude.com.br/wp-content/uploads/2022/03/feedback-e-saude-no-trabalho.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw'],
      github: 'https://github.com/M0R3N077/prjCadColaboradores',
      description: 'Uma API REST para gerenciamento de tarefas utilizando Node.js, Express e banco de dados SQL.',
    },
    {
      title: 'Vendor API',
      image: 'https://glpadvocacia.com.br/wp-content/uploads/2021/07/25-11.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw'],
      github: 'https://github.com/M0R3N077/prjVendorAPI',
      description: 'Uma API REST para gerenciamento de tarefas utilizando Node.js, Express e banco de dados SQL.',
    },
    {
      title: 'Drug API',
      image: 'https://ictq.com.br/images/Serializa%C3%A7%C3%A3o_de_medicamentos_exigir%C3%A1_mudan%C3%A7as_em_todo_o_setor_farmac%C3%AAutico.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw'],
      github: 'https://github.com/M0R3N077/prjFarmacia',
      description: 'Uma API REST para gerenciamento de tarefas utilizando Node.js, Express e banco de dados SQL.',
    },
    {
      title: 'Pharmacy API',
      image: 'https://live.staticflickr.com/5830/23468781025_6ef7687054_b.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw',
        'https://www.svgrepo.com/show/439233/mysql.svg',
      ],
      github: 'https://github.com/M0R3N077/prjSpringFarmacia',
      description: 'Uma API REST para gerenciamento de tarefas utilizando Node.js, Express e banco de dados SQL.',
    },
    {
      title: 'Company API',
      image: 'https://images.jota.info/wp-content/uploads/2022/07/o-que-e-cvm-e-como-funciona-scaled-1-scaled.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw',
        'https://www.svgrepo.com/show/439233/mysql.svg',
      ],
      github: 'https://github.com/M0R3N077/prjSpringEmpresa',
      description: 'Uma API REST para gerenciamento de tarefas utilizando Node.js, Express e banco de dados SQL.',
    },
    {
      title: 'School API',
      image: 'https://sintep.org.br/sintep/admin/uploads/noticias/16597107832022-08-05-site-chico-bezerra-jaboatao-guararapes.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw',
      ],
      github: 'https://github.com/M0R3N077/prjSchool',
      description: 'Uma API REST para gerenciamento de tarefas utilizando Node.js, Express e banco de dados SQL.',
    },
    {
      title: 'Employee API',
      image: 'https://imgs.search.brave.com/FXhoes30wtjgtKqtPHFKJC0cVgQJfi2TjQPeT2-xha0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzgwLzY2Lzk5/LzM2MF9GXzk4MDY2/OTkzMV9XeUV3Rlpx/M0NCTTcyb0duMEJN/cThidDFoZW5OUmhs/cS5qcGc',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw',
      ],
      github: 'https://github.com/M0R3N077/prjSondagem',
      description: 'Uma API REST para gerenciamento de tarefas utilizando Node.js, Express e banco de dados SQL.',
    },
  ],
  Fullstack: [
    {
      title: 'Corret Text',
      image: correctText,
      tech: ['https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n',
         'https://imgs.search.brave.com/3EeDSn_qoSVIvgjAoi3s6DN5NycGE2G8t4uSMTO2NIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2dl/dC1pY29uL2dldGlj/b24vbWFzdGVyL2lj/b25zL3RhaWx3aW5k/Y3NzLWljb24uc3Zn',
          'https://imgs.search.brave.com/b1mza9u8ePJdo9VHfx00bmjzGwVI_b7cLPA1ONSjIL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRjL1R5cGVzY3Jp/cHRfbG9nb18yMDIw/LnN2Zw',
        'https://imgs.search.brave.com/va692JH018MJaLTBGo1ElcX59bzFmJo7-DsH9B5TlfI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9weXRob24tNS5z/dmc',
      'https://imgs.search.brave.com/NVZxcNW8dtnRNm7DwJqdUceHPg1J4isHZFcDLq6uKZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9ub2RlLWpz/LWljb24tOTA5eDEw/MjQtaWc0Z205azcu/cG5n',
    'https://imgs.search.brave.com/xrlC1uXtSPUvNS04cqCkzQIpEovjb82W_vItjxceu4w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3VheWVyZC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDQvZXhwcmVzc2pz/LWxvZ28uc3Zn',
  'https://www.svgrepo.com/show/331488/mongodb.svg'],
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

<div className="flex flex-wrap justify-center items-center gap-2 mt-2">
  {project.tech.map((logo, idx) => (
    <img key={idx} src={logo} alt="Tech logo" className="w-6 h-6 sm:w-7 sm:h-7" />
  ))}
</div>

           

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
