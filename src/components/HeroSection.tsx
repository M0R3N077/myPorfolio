import { useEffect, useState } from 'react';
import FindMe from './FindMe';
import Radio from './ui/Radio';

const HeroSection = () => {
  const fullText = "Hey, my name is Murilo Moreno, also known as just Moreno";
  const fullSubText = "I'm a software developer, in other words just a nerd who builds stuff for the internet";

  const [text, setText] = useState('');
  const [subText, setSubText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  // Efeito para o título principal
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(prev => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Efeito para o subtítulo (só começa após o título estar completo)
  useEffect(() => {
    if (index === fullText.length && subIndex < fullSubText.length) {
      const timeout = setTimeout(() => {
        setSubText(prev => prev + fullSubText.charAt(subIndex));
        setSubIndex(prev => prev + 1);
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index]);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-10 px-6 md:px-12 '>
      <div className="flex justify-center flex-col-reverse md:flex-row gap-10 md:gap-40 items-center w-full">
        
        {/* Texto */}
        <div className='flex flex-col items-start text-left gap-4 max-w-2xl'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-extrabold'>
            {text}
            <span className="animate-pulse ">|</span>
          </h1>
          <h2 className='text-2xl md:text-3xl text-purple-800 font-bold text-border'>
            {subText}
          </h2>
          <Radio />
        </div>

        {/* FindMe */}
        <FindMe />
        
      </div>
    </div>
  );
};

export default HeroSection;
