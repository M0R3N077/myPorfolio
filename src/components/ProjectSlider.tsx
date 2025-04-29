import React, { useEffect, useState } from "react";
import { Project } from "../types/project";
import projectGame from "../assets/projects/romantismo-game.png";
import projectClass from "../assets/projects/class.png";
import projectPetShop from "../assets/projects/project-petShop.png";


const projects: Project[] = [
  {
    title: "Gamified website",
    image: projectGame,
    url: "https://github.com/seuusuario/projeto1",
  },
  {
    title: "Graduation website for class",
    image: projectClass,
    url: "https://github.com/seuusuario/projeto2",
  },
  {
    title: "Petshop",
    image: projectPetShop,
    url: "https://github.com/seuusuario/projeto3",
  },
];

const ProjectSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000); // 3 segundos por slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bottom-0 right-0 transform  w-[250px] bg-gray-900 pb-3 rounded-r-md shadow-lg z-50 ease-in-out hover:scale-105">
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
        <h3 className="text-white mt-2 text-center font-semibold text-1xl">
          {projects[current].title}
        </h3>
      </a>
    </div>
  );
};

export default ProjectSlider;
