import logo from "../assets/moreno_logo .png";

const Header = () => {
  return (
    <header className="fixed bg-transparent w-full h-30">
        <ul className='  flex w-full justify-between text-white text-[25px] h-30 items-center mx-1'>
            <li className='cursor-pointer hover:bg-purple-800  px-10 h-10  rounded-2xl hover:scale-105 transition-transform'>About Me</li>
            <li className='cursor-pointer hover:bg-purple-800 px-10 h-10  rounded-2xl hover:scale-105 transition-transform'>Skills</li>
            <li className='cursor-pointer hover:bg-purple-800 px-10 h-10  rounded-2xl hover:scale-105 transition-transform'>Experience</li>
            <li><img className="w-40 mt-14" src={logo} alt="" /></li>
            <li className='cursor-pointer hover:bg-purple-800 px-10 h-10  rounded-2xl hover:scale-105 transition-transform'>Academic</li>
            <li className='cursor-pointer hover:bg-purple-800 px-10 h-10  rounded-2xl hover:scale-105 transition-transform'>Certificates</li>
            <li className='cursor-pointer hover:bg-purple-800 px-10 h-10  rounded-2xl hover:scale-105 transition-transform'>Awards</li>
        </ul>
    </header>
  )
}

export default Header