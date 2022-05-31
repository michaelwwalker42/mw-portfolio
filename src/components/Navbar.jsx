import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import resume from '../assets/documents/Resume.pdf';
import Logo from '../assets/logos/mw-logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const menuItems = ['Home', 'About', 'Skills', 'Work', 'Contact'];

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 background-blue'>
      <div className='cursor-pointer'>
        <Link to='Home' smooth={true} duration={500}>
          <img src={Logo} alt='MW Logo' style={{ width: '80px' }} />
        </Link>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        {menuItems.map((item, index) => (
          <li className='hover:scale-105 hover:text-[#e5dcc5]' key={index}>
            <Link to={item} smooth={true} duration={500}>
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu  */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen transparent-blue flex flex-col justify-center items-center'}>
        {menuItems.map((item, index) => (
          <li className='text-4xl py-6 hover:scale-105 hover:text-[#e5dcc5]' key={index}>
            <Link onClick={handleClick} to={item} smooth={true} duration={500}>
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons  */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='rounded-sm w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/michael-walker-67971b221/' >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='rounded-sm w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/michaelwwalker42' >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='rounded-sm w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fb2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:michaelwwalker@gmail.com' >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='rounded-sm w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={resume} download>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Navbar