import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='Home' className='w-full h-screen'>
      {/* container  */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#e5dcc5]'>Hi, name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Michael Walker</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        <div>
          {/* button  */}
          <button className='rounded-sm text-white font-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e5dcc5] hover:border-[#e5dcc5] hover:text-[#0a192f]'>
            <Link to='Work' smooth={true} duration={500}>
              View Work
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;