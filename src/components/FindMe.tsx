
import animationProgrammer from "../assets/animationProgrammer.png";
import ProjectSlider from './ProjectSlider';

const FindMe = () => {
  return (
    <>
      <div className='text-center flex flex-col items-center gap-12  '>
        <img className='rounded-full w-90 ring-7 ring-white shadow-inner mt-2' src={animationProgrammer} alt="Descrição da imagem"  />
        <ProjectSlider />
      </div>
    </>
  );
}

export default FindMe;6
