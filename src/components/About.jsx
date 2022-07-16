import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#e5dcc5]'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold '>
            <p>Hi. I'm Michael, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I am an outcome-driven web development specialist with a Full Stack Web Developer Certificate from the University of Arizona. I live in Arizona, and previously lived in northern Utah. I have a passion for learning new technologies and turning ideas into creations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About