import React from 'react'

import JavaScript from '../assets/logos/javascript.png';
import ExpressImg from '../assets/logos/express.png';
import GitHub from '../assets/logos/github.png';
import MongoDB from '../assets/logos/mongo.png';
import HTML from '../assets/logos/html.png';
import CSS from '../assets/logos/css.png';
import ReactImg from '../assets/logos/react.png';
import Node from '../assets/logos/node.png';
import resume from '../assets/documents/Resume.pdf';
import { BsDownload } from "react-icons/bs";

const Skills = () => {
  const skills = [
    {
      id: '1',
      description: 'HTML',
      image: HTML,
      alt: 'HTML icon',
      imageStyle: 'w-20 mx-auto'
    },
    {
      id: '2',
      description: 'CSS',
      image: CSS,
      alt: 'CSS icon',
      imageStyle: 'w-20 mx-auto'
    },
    {
      id: '3',
      description: 'JavaScript',
      image: JavaScript,
      alt: 'JavaScript icon',
      imageStyle: 'w-20 mx-auto'
    },
    {
      id: '4',
      description: 'GitHub',
      image: GitHub,
      alt: 'GitHub icon',
      imageStyle: 'w-20 mx-auto'
    },
    {
      id: '5',
      description: 'MongoDB',
      image: MongoDB,
      alt: 'MongoDB icon',
      imageStyle: 'w-20 mx-auto'
    },
    {
      id: '6',
      description: 'Express',
      image: ExpressImg,
      alt: 'Express icon',
      imageStyle: 'w-[149px] mx-auto'
    },
    {
      id: '7',
      description: 'React',
      image: ReactImg,
      alt: 'React icon',
      imageStyle: 'w-20 mx-auto'
    },
    {
      id: '8',
      description: 'Node Js',
      image: Node,
      alt: 'Node icon',
      imageStyle: 'w-20 mx-auto'
    }
  ]

  return (
    <div name='Skills' className='w-full h-screen  text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#e5dcc5] '>Skills</p>

        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

          {/* Skills */}
          {skills.map(skill => (
            <div className='shadow-md shadow-[#050D19] hover:scale-110 duration-500'
              key={skill.id}>
              <img className={skill.imageStyle} src={skill.image} alt={skill.alt} />
              <p className='my-4'>{skill.description}</p>
            </div>
          ))}

          {/* Resume */}
          <button className='rounded-sm w-[160px] text-white font-bold group border-2 px-6 py-2 my-2 flex  items-center hover:bg-[#e5dcc5] hover:border-[#e5dcc5] hover:text-[#0a192f]'>
            Resume
            <span className='px-3 cursor-pointer hover:text-[#0a192f]'>
              <a href={resume} download>
                <BsDownload size={35} />
              </a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills