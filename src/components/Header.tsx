import logo from "../assets/moreno_logo .png";

const Header = () => {
  return (
    <header className="fixed z-50 top-0 left-0 w-screen bg-transparent h-32 flex items-center">
      <div className="flex w-full justify-between items-center px-6">
        {/* Logo sempre visível */}
        <div className="flex justify-center w-full md:w-auto">
          <img className="w-32 md:w-40 mt-6" src={logo} alt="Moreno Logo" />
        </div>

        {/* Menu só aparece a partir do md */}
        <ul className="hidden md:flex gap-6 text-white text-[20px] items-center">
          <a href="#about-me"><li className="cursor-pointer hover:bg-purple-800 px-6 py-2 rounded-2xl hover:scale-105 transition-transform">About Me</li></a>
          <a href="#skills"><li className="cursor-pointer hover:bg-purple-800 px-6 py-2 rounded-2xl hover:scale-105 transition-transform">Skills</li></a>
          <a href="#projects"><li className="cursor-pointer hover:bg-purple-800 px-6 py-2 rounded-2xl hover:scale-105 transition-transform">Projects</li></a>
          <a href="#experience"><li className="cursor-pointer hover:bg-purple-800 px-6 py-2 rounded-2xl hover:scale-105 transition-transform">Experience</li></a>
          <a href="#certifications"><li className="cursor-pointer hover:bg-purple-800 px-6 py-2 rounded-2xl hover:scale-105 transition-transform">Certificates</li></a>
          <a href="#awards"><li className="cursor-pointer hover:bg-purple-800 px-6 py-2 rounded-2xl hover:scale-105 transition-transform">Awards</li></a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
