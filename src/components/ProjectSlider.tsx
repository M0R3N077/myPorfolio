import React, { useEffect, useState } from "react";
import { Project } from "../types/project";
import projectGame from "../assets/projects/romantismo-game.png";
import projectClass from "../assets/projects/class.png";
import projectPetShop from "../assets/projects/project-petShop.png";


const projects: Project[] = [
  {
    title: "Gamified Website",
    image: projectGame,
    url: "https://github.com/seuusuario/projeto1",
  },
  {
    title: "Graduation Website",
    image: projectClass,
    url: "https://github.com/seuusuario/projeto2",
  },
  {
    title: "Petshop Website",
    image: projectPetShop,
    url: "https://github.com/seuusuario/projeto3",
  },
];

const ProjectSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div> 
    <div className="transform  w-[200px] bg-gray-900 pb-1 rounded-md shadow-lg z-50 ease-in-out hover:scale-105"  style={{boxShadow: '5px 6px 9px #9810fa'}}>
      <a
        href={projects[current].url}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition duration-400  "
      >
        <img
          src={projects[current].image}
          alt={projects[current].title}
          className="w-full h-full object-cover rounded"
        />
        <h3 className="text-white mt-1 text-center font-semibold text-1xl">
          {projects[current].title}
        </h3>
      </a>
    </div>
    </div>
  );
};

export default ProjectSlider;
