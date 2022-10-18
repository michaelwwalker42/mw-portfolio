import React from 'react'

import rocks from '../assets/project-images/rocks-ropes-upstairs.png';
import song from '../assets/project-images/song-starter.png'
import tech from '../assets/project-images/tech-blog.png'
import weather from '../assets/project-images/weather-dashboard-demo.gif'
import employee from '../assets/project-images/employee-tracker-demo.gif'

const projects = [
  {
    id: 1,
    image: weather,
    repo: 'https://github.com/michaelwwalker42/weather-dashboard',
    demo: 'https://michaelwwalker42.github.io/weather-dashboard/',
    description: 'A weather dashboard that uses the OpenWeather One Call API to retrieve weather data and features dynamically updated HTML and CSS using vanilla JavaScript.'
  },
  {
    id: 2,
    image: rocks,
    repo: 'https://github.com/dmknapp2385/rocks-and-ropes',
    demo: 'https://rocks-and-ropes.herokuapp.com/',
    description: 'Rocks and Ropes is an application designed to help rock gym members and visitors train, workout, and navigate the rock gym. Technologies: React, Express, MongoDb, GraphQL, React Router'
  },
  {
    id: 3,
    image: tech,
    repo: 'https://github.com/michaelwwalker42/tech-blog',
    demo: 'https://walker-tech-blog.herokuapp.com/',
    description: 'A CMS-style blog site , where developers can publish their blog posts and comment on other developers’ posts as well. The app uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.'
  },
  {
    id: 4,
    image: song,
    repo: 'https://github.com/michaelwwalker42/Song-Starter-3000',
    demo: 'https://song-starter-3000.herokuapp.com/',
    description: 'This application is a song writing tool that creates chord progressions, will play samples of the chords, and allows users to save their favorite progressions. Technologies: Handlebars, Express, MySQL2, Sequelize, Bulma, Tone.js, Tonal.js'
  },
  {
    id: 5,
    image: employee,
    repo: 'https://github.com/michaelwwalker42/employee-tracker',
    demo: 'https://drive.google.com/file/d/1hvM58v_DSKzGdMf5rnexe2q42OnI2uEw/view',
    description: "A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL."
  }
]

const Work = () => {
  return (
    <div name='Work' className='w-full md:h-screen text-gray-300'>
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
              className={`shadow-lg shadow-[#050D19] group container rounded-md flex justify-center items-center mx-auto content-div`} key={project.id} >

              {/* Hover effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <p className='text-sm text-shadow p-1 tracking-wider'>
                  {project.description}
                </p>
                <div className='pt-8 text-center'>
                  <a href={project.demo}>
                    <button className='w-[64px] shadow-sm shadow-[#050D19] hover:scale-110 duration-200 text-center rounded-lg  py-2 m-2 bg-[#e5dcc5] text-[#0d1d34] font-bold'>
                      Demo
                    </button>
                  </a>
                  <a href={project.repo}>
                    <button className='w-[64px] shadow-sm shadow-[#050D19] hover:scale-110 duration-200 text-center rounded-lg  py-2 m-2 bg-[#e5dcc5] text-[#0d1d34] font-bold'>
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