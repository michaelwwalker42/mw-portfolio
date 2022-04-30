import React from 'react'

import JavaScript from '../assets/javascript.png';
import ExpressImg from '../assets/express.png';
import GitHub from '../assets/github.png';
import MongoDB from '../assets/mongo.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0d1d34] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#e5dcc5] '>Skills</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#050D19] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#050D19] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#050D19] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#050D19] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#050D19] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={MongoDB} alt="MongoDb icon" />
            <p className='my-4'>MONGO DB</p>
          </div>
          <div className='shadow-md shadow-[#050D19] hover:scale-110 duration-500'>
            <img className='w-[149px] mx-auto' src={ExpressImg} alt="Express icon" />
            <p className='my-4'>EXPRESS</p>
          </div>
          <div className='shadow-md shadow-[#050D19] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#050D19] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
            <p className='my-4'>NODE JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills