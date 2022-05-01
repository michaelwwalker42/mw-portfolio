import React from 'react'

import rocks from '../assets/project-images/rocks-ropes.png';
import song from '../assets/project-images/song-starter.png'
import tech from '../assets/project-images/tech-blog.png'
import weather from '../assets/project-images/weather-dashboard.png'

const projects = [
  {
    id: 1,
    image: rocks,
    repo: 'https://github.com/dmknapp2385/rocks-and-ropes',
    deployment: 'https://rocks-and-ropes.herokuapp.com/',
    description: 'MERN Stack Landing Page'
  },
  {
    id: 2,
    image: song,
    repo: 'https://github.com/michaelwwalker42/Song-Starter-3000',
    deployment: 'https://song-starter-3000.herokuapp.com/',
    description: 'Chord Progression Generator (Full Stack)'

  },
  {
    id: 3,
    image: tech,
    repo: 'https://github.com/michaelwwalker42/tech-blog',
    deployment: 'https://walker-tech-blog.herokuapp.com/',
    description: 'CMS Style Blog'
  },

  {
    id: 4,
    image: weather,
    repo: 'https://github.com/michaelwwalker42/weather-dashboard',
    deployment: 'https://michaelwwalker42.github.io/weather-dashboard/',
    description: 'Weather App'
  }
]

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0d1d34]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#e5dcc5]'>Work</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project Cards */}
          {projects.map(project => (
            <div
              style={{ backgroundImage: `url(${project.image})` }}
              className='shadow-lg shadow-[#050D19] group container rounded-md flex justify-center items-center mx-auto content-div' key={project.id} >

              {/* Hover effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-xl font-bold text-shadow tracking-wider'>
                  {project.description}
                </span>
                <div className='pt-8 text-center'>
                  <a href={project.deployment}>
                    <button className='w-[64px] shadow-sm shadow-[#050D19] hover:scale-110 duration-200 text-center rounded-lg  py-2 m-2 bg-[#e5dcc5] text-[#0d1d34]'>
                      Demo
                    </button>
                  </a>
                  <a href={project.repo}>
                    <button className='w-[64px] shadow-sm shadow-[#050D19] hover:scale-110 duration-200 text-center rounded-lg  py-2 m-2 bg-[#e5dcc5] text-[#0d1d34]'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Work;