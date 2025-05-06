import { useEffect, useState } from 'react';
// import FindMe from './FindMe';
import Radio from './ui/Radio';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';



const fromLeft: Variants = {
  hidden: { opacity: 0, y: 500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 4.2, ease: 'easeOut', delay: 2.3 }
  }
};

const fromRight: Variants = {
  hidden: { opacity: 0, x: 700 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 4.2, ease: 'easeOut', delay: 2.3 }
  }
};


const HeroSection = () => {
  const fullText = "Hey, my name is Murilo Moreno, also known as just Moreno";
  const fullSubText = "I'm a software developer, in other words just a nerd who builds stuff for the internet";

  const [text, setText] = useState('');
  const [subText, setSubText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);


  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(prev => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index]);
  
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
    <div className='min-h-screen flex flex-col justify-start items-center pt-12 px-6 md:px-12 overflow-hidden'>
      <div className="flex justify-center flex-col-reverse md:flex-row gap-10 md:gap-40 items-center w-full">
        
        {/* Texto */}
        <div className='flex flex-col items-center text-center gap-4 max-w-2xl'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-extrabold'>
            {text}
            <span className="animate-pulse ">|</span>
          </h1>
          <h2 className='text-2xl md:text-3xl text-purple-600 font-bold text-border'>
            {subText}
          </h2>
       
            <motion.div
  variants={fromLeft}
  initial="hidden"
  animate="visible"
>
  <Radio />
  
</motion.div>



    
        </div>
      </div>
    </div>
  );
};


export default HeroSection;