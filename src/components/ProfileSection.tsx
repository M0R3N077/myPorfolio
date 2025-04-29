import React from 'react';
import myImage from "../assets/minha_imagem.jpeg";
import me from "../assets/me.jpeg";

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen  font-sans pt-8">
      {/* Header */}
      <header className="flex items-start justify-start px-8 pt-6">
        {/* Menu Icon */}

        {/* Title */}
        <div className="text-start ml-4">
          <h2 className="text-6xl font-bold tracking-tight">ABOUT ME</h2>
          <h3 className="text-3xl tracking-widest mt-1">EFFORT + DEDICATION</h3>
        </div>

        {/* Espaço para equilibrar o header */}
        <div className="w-8"></div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-evenly px-8 md:px-16 py-8 gap-11">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img 
            src={myImage} 
            alt="Schael Marceus Portrait" 
            className="w-[500px] rounded-2xl ring-8 ring-white" 
          />
        </div>

        {/* Right Text */}
        <div className="max-w-2xl text-sm leading-7 text-gray-800">
          <p className="mb-6 text-lg text-white">
          My passion for <strong className='bg-purple-500 p-0.5 rounded-md'>technology</strong>  began early, when I realized how it can transform lives and create solutions for everyday challenges. Today, I am in my last year of high school at Sesi Sorocaba school, and at the same time I am studying "Technical Systems Development" at SENAI, where I had the honor of being invited to join the <strong className='bg-purple-500 p-0.5 rounded-md'>development team</strong> made up of outstanding students at the institution, thanks to my effort and dedication. This experience has been incredible and motivates me even more to grow in the field.
          </p>

          <p className="mb-6 text-lg text-white">
          I have always been very <strong className='bg-purple-500 p-0.5 rounded-md'>dedicated</strong> to my studies. For me, a 9.5 was never enough; I always aimed for a 10, not out of perfectionism, but because I believe that giving my best is the least I can do. This desire to learn and evolve has always been with me and helps me face any challenge with determination.
          </p>

          <p className="mb-6 text-lg text-white">
          I believe that the phrase <strong className='bg-purple-500 p-0.5 rounded-md'>"Rest at the end, not in the middle."</strong>  by Kobe Bryant sums up who I am as a person, and that says a lot about me.
          </p>
          
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
