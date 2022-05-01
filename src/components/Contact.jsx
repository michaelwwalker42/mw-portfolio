import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0d1d34] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/fe4ee176-7f9c-4c7f-ba1c-b712a9805f15" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#e5dcc5] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or email me at michaelwwalker42@gmail.com</p>
        </div>
        <input className='rounded-sm bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='rounded-sm my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea  className='rounded-sm bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='rounded-full font-bold text-white border-2 hover:bg-[#e5dcc5] hover:border-[#e5dcc5] px-4 py-3 my-8 mx-auto flex items-center hover:text-[#0a192f]'>Message Me</button>
      </form>
    </div>
  )
}

export default Contact