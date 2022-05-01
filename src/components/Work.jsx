import React from 'react'
import rocks from '../assets/project-images/rocks-ropes.png';
import song from '../assets/project-images/song-starter.png'
import tech from '../assets/project-images/tech-blog.png'
import weather from '../assets/project-images/weather-dashboard.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0d1d34]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#e5dcc5]'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          <div
            style={{ backgroundImage: `url(${rocks})` }}
            className='shadow-lg shadow-[#050D19] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-shadow tracking-wider'>
                MERN Stack Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://rocks-and-ropes.herokuapp.com/">
                  <button className='w-[64px] shadow-sm shadow-[#050D19] hover:scale-110 duration-200 text-center rounded-lg  py-2 m-2 bg-[#e5dcc5] text-[#0d1d34]'>
                    Demo
                    </button>
                </a>
                <a href="https://github.com/dmknapp2385/rocks-and-ropes">
                  <button className='w-[64px] shadow-sm shadow-[#050D19] hover:scale-110 duration-200 text-center rounded-lg  py-2 m-2 bg-[#e5dcc5] text-[#0d1d34]'>
                    Code
                    </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;