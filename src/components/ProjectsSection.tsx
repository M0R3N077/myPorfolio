import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import projectGame from "../assets/projects/romantismo-game.png";
import projectClass from "../assets/projects/class.png";
import projectPetShop from "../assets/projects/project-petShop.png";
import correctText from "../assets/projects/correct.png";
import freeFall from "../assets/projects/free_fall.png";
import express from "../assets/projects/express.png";
import black from "../assets/projects/black.png";
import tasks from "../assets/projects/to-do.png";



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
      title: '🎓 Graduation Website',
      image: projectClass,
      tech: ['https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw',
          'https://imgs.search.brave.com/mer7TJf5AUZ6eObxi989K06gOrZ8l0AyfXPOfmmK5r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L1Nhc3NfTG9n/b19Db2xvci5zdmc',
          'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn',
        ],
      site: 'https://formatura-3e.netlify.app/',
      github: 'https://github.com/M0R3N077/prjSiteSala',
      description: 'This project is a modern and stylish website created for our graduating class. Built using HTML, JavaScript, and Sass, it features a dynamic photo slider, elegant animations, and a gradient overlay that evokes a cinematic feel. It serves both as a digital memory book and a presentation of our class identity.',
    },
    {
      title: '🐾 Petshop Website',
      image: projectPetShop,
      tech: ['https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw',
          'https://imgs.search.brave.com/mer7TJf5AUZ6eObxi989K06gOrZ8l0AyfXPOfmmK5r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L1Nhc3NfTG9n/b19Db2xvci5zdmc',
          'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn',
        'https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256'],
      site: 'https://pet-heave.netlify.app/',
      github: 'https://github.com/M0R3N077/prjPetshopWBack',
      description: 'A complete frontend project for a fictional petshop. It was designed with HTML and styled using Sass to provide a clean and intuitive user interface. The site showcases pet services and customer testimonials.',
    },
    {
      title: '📚 Gamified Website',
      image: projectGame,
      tech: ['https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw',
          'https://imgs.search.brave.com/mer7TJf5AUZ6eObxi989K06gOrZ8l0AyfXPOfmmK5r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L1Nhc3NfTG9n/b19Db2xvci5zdmc',
          'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn',],
      site: 'https://interativo-romantismo.netlify.app/',
      github: 'https://github.com/M0R3N077/romantismoProject',
      description: 'An educational and interactive website designed to teach students about Brazilian Romanticism. The site uses a gamified approach similar to "As Dusk Falls", allowing users to make narrative choices and discover different literary paths (Indianist, Urban, Regionalist, or Historical). It’s a creative way to blend storytelling and learning.',
    },
    {
      title: '🧪 Free Fall Website',
      image: freeFall,
      tech: ['https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw',
          'https://imgs.search.brave.com/mer7TJf5AUZ6eObxi989K06gOrZ8l0AyfXPOfmmK5r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L1Nhc3NfTG9n/b19Db2xvci5zdmc',
          'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn',],
      site: 'https://fisica-com-toledo-queda-livre.netlify.app/',
      github: 'https://github.com/M0R3N077/siteFisica',
      description: 'A physics-themed website developed for an educational project about free fall. It offers animated visualizations, formulas, and interactive content to engage high school students in learning physics in a simple and appealing way. Built with HTML and styled to maintain clarity and accessibility.',
    },
    {
      title: '⚡ Express.js Website',
      image: express,
      tech: ['https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw',
          'https://imgs.search.brave.com/kTKvDjFg8uSx56pZHmcFxgYwJRkOlbH6oHO9WSe8TFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0NTUzNfbG9n/by5zdmc',
          'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn',],
      site: 'https://express-em-node.netlify.app/',
      github: 'https://github.com/M0R3N077/siteExpress',
      description: 'A demonstration project built to explain Express.js fundamentals in a student podcast. This website uses server-side JavaScript with Express to serve pages and simulate backend logic. It was developed to help classmates understand how routing, middleware, and server responses work in Node environments.',
    },
    {
      title: '✊🏿 Black Consciousness Website',
      image: black,
      tech: ['https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw',
          'https://imgs.search.brave.com/kTKvDjFg8uSx56pZHmcFxgYwJRkOlbH6oHO9WSe8TFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0NTUzNfbG9n/by5zdmc',
          'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn',],
      site: 'https://novembro-preto.netlify.app/',
      github: 'https://github.com/M0R3N077/prjConscienciaNegraSite',
      description: 'This website was created to celebrate and raise awareness of Black Consciousness Day in Brazil. It includes historical content, tributes to important Afro-Brazilian figures, and social reflections. The design uses a bold aesthetic with dark tones and elegant contrast, conveying both strength and respect for the culture. Built using HTML, JavaScript, and CSS, it’s a modern tribute to a vital cause.',
    },
    {
      title: '✅ To Do list Website',
      image: tasks,
      tech: ['https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw',
          'https://imgs.search.brave.com/kTKvDjFg8uSx56pZHmcFxgYwJRkOlbH6oHO9WSe8TFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0NTUzNfbG9n/by5zdmc',
          'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn',],
      site: 'https://listadetare.netlify.app/',
      github: 'https://github.com/M0R3N077/to-do-list-Desenvolvedor-Site',
      description: 'This is a simple yet effective to-do list application developed with HTML, JavaScript, and CSS. Users can add, complete, and delete tasks in an intuitive interface. It demonstrates core frontend concepts such as state management, component structuring, and dynamic rendering.',
    }, 
  ],
  Backend: [
    {
      title: '🐾 Pet shop API',
      image: 'https://storage.needpix.com/rsynced_images/animals-2173635_1280.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw'],
      github: 'https://github.com/M0R3N077/prjMuriloMorenoSomativa1',
      description: 'A RESTful API built with Spring Boot and H2 to manage a pet shop’s operations. It includes basic CRUD functionalities for pets and services, allowing quick testing and development without the need for external databases. Ideal for learning and demonstrating backend fundamentals.',
    },
    {
      title: '👥 Contributor API',
      image: 'https://blog.samisaude.com.br/wp-content/uploads/2022/03/feedback-e-saude-no-trabalho.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw'],
      github: 'https://github.com/M0R3N077/prjCadColaboradores',
      description: "This API, developed using Spring Boot and the H2 in-memory database, allows management of employee or contributor records. With endpoints for creating, updating, listing, and deleting contributors, it's a lightweight and efficient system for internal team administration and HR simulations.",
    },
    {
      title: '🛒 Vendor API',
      image: 'https://glpadvocacia.com.br/wp-content/uploads/2021/07/25-11.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw'],
      github: 'https://github.com/M0R3N077/prjVendorAPI',
      description: 'A simple backend system created with Spring Boot and H2 that handles vendor registration and management. It supports essential operations such as adding, editing, or removing vendors and is designed for small-scale use or testing environments.',
    },
    {
      title: '💊 Drug API',
      image: 'https://ictq.com.br/images/Serializa%C3%A7%C3%A3o_de_medicamentos_exigir%C3%A1_mudan%C3%A7as_em_todo_o_setor_farmac%C3%AAutico.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw'],
      github: 'https://github.com/M0R3N077/prjFarmacia',
      description: 'A Spring Boot application that uses H2 to simulate a pharmaceutical inventory system. It provides endpoints to register, update, and manage drug information and stock, useful for modeling systems for small pharmacies or internal training projects.',
    },
    {
      title: '🧪 Pharmacy API',
      image: 'https://live.staticflickr.com/5830/23468781025_6ef7687054_b.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw',
        'https://www.svgrepo.com/show/439233/mysql.svg',
      ],
      github: 'https://github.com/M0R3N077/prjSpringFarmacia',
      description: 'A fully functional backend API for managing pharmacy operations using Spring Boot and MySQL. It supports persistent storage of medicines, categories, pricing, and stock control. Ideal for simulating real-world pharmacy data management with secure and scalable database integration.',
    },
    {
      title: '🏢 Company API',
      image: 'https://images.jota.info/wp-content/uploads/2022/07/o-que-e-cvm-e-como-funciona-scaled-1-scaled.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw',
        'https://www.svgrepo.com/show/439233/mysql.svg',
      ],
      github: 'https://github.com/M0R3N077/prjSpringEmpresa',
      description: 'This REST API was built with Spring Boot and MySQL to manage company data, including departments, employees, and business units. It enables advanced data persistence and is structured to reflect real enterprise systems, making it ideal for corporate backend demonstrations.',
    },
    {
      title: '🎓 School API',
      image: 'https://sintep.org.br/sintep/admin/uploads/noticias/16597107832022-08-05-site-chico-bezerra-jaboatao-guararapes.jpg',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw',
      ],
      github: 'https://github.com/M0R3N077/prjSchool',
      description: "Built with Spring Boot and H2, this API simulates a school management system, focusing on CRUD operations for students, teachers, and academic structures. It's a solid base for educational environments or testing Java backend knowledge.",
    },
    {
      title: '🧑‍💼 Employee API',
      image: 'https://imgs.search.brave.com/FXhoes30wtjgtKqtPHFKJC0cVgQJfi2TjQPeT2-xha0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzgwLzY2Lzk5/LzM2MF9GXzk4MDY2/OTkzMV9XeUV3Rlpx/M0NCTTcyb0duMEJN/cThidDFoZW5OUmhs/cS5qcGc',
      tech: ['https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw',
      ],
      github: 'https://github.com/M0R3N077/prjSondagem',
      description: 'An employee management REST API created using Spring Boot and H2. It allows the management of personal data, roles, and employment status, and is suitable for academic or internal HR tool prototypes.',
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
                : 'bg-gray-800 hover:bg-gray-700 hover:cursor-pointer'
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
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
                  <span className="font-semibold">GitHub</span>
                </a>
              )}

              <button
                onClick={() => setSelectedProject(project)}
                className="flex items-center gap-1 sm:gap-2 px-4 sm:px-5 py-2 bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 rounded-full shadow-md hover:scale-105 transition-all text-sm sm:text-base hover:cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
                <span className="font-semibold">Details</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    {/* Modal de detalhes */}
<Dialog
  open={!!selectedProject}
  onClose={() => setSelectedProject(null)}
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" 
>
  <Dialog.Panel className="animate-fadeInUp relative bg-gray-900/80 backdrop-blur-md border border-gray-700 shadow-[0_0_30px_#4f46e5] rounded-3xl p-8 max-w-lg w-full transition-all duration-300">
    {selectedProject && (
      <>
        {/* Glow Ring Decoration (opcional) */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 blur-md opacity-70" />
        
        <h2 className="text-3xl font-bold text-purple-400 mb-4 tracking-wide">
          {selectedProject.title}
        </h2>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          {selectedProject.description}
        </p>

        <div className="flex justify-end mt-6">
          <button
            onClick={() => setSelectedProject(null)}
            className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-lg hover:from-pink-600 hover:to-yellow-600 transition duration-300 hover:cursor-pointer"
          >
            Fechar
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
