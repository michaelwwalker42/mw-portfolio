import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen linear-grade'>
      {/* container  */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#e5dcc5]'>Hi, name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Michael Walker</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am an outcome-driven web development specialist & graduate of a Full Stack Web Developer Bootcamp at the University of Arizona.
          I am based in Arizona and previously lived in northern Utah.
          I maintained a 4.0 GPA and am gaining experience in front end web development, server-side and database architectures, and more.
        </p>
        <div>
          {/* button  */}
          <button className='text-white font-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e5dcc5] hover:border-[#e5dcc5] hover:text-[#0a192f]'>
            View Work
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