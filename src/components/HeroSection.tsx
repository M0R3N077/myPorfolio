import React, { useEffect, useState } from 'react';

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
    <div className='bg-main min-h-screen flex justify-center items-start flex-col'>
      <div className='flex justify-center items-center flex-col mb-5 max-w-2xl text-left gap-1.5 ml-14'>
        <h1 className='text-6xl text-white font-extrabold'>{text}<span className="animate-pulse">|</span></h1>
        <h2 className='text-3xl text-purple-500 font-bold'>{subText}</h2>
      </div>
    </div>
  );
};

export default HeroSection;
