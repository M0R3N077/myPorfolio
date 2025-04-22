import React from 'react';
import minhaImagem from '../assets/minha_imagem.png';
import animationProgrammer from "../assets/animationProgrammer.png";
import ProjectSlider from './ProjectSlider';

const FindMe = () => {
  return (
    <>
      <div className='text-center flex flex-col items-center gap-10 mt-15 '>
        <img className='rounded-full w-80 ring-7 ring-white' src={animationProgrammer} alt="Descrição da imagem" />
        <ProjectSlider />
      </div>
    </>
  );
}

export default FindMe;
