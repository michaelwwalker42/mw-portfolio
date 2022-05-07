import React from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Contact = () => {
  const contactLinks = [
    {
      id: 1,
      name: 'Email',
      link: 'mailto:michaelwwalker42@gmail.com'
    },
    {
      id: 2,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/michael-walker-67971b221/'
    },
    {
      id: 3,
      name: 'GitHub',
      link: 'https://github.com/michaelwwalker42'
    }
  ]

  return (
    <div name='Contact' className='w-full h-screen background-blue flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/fe4ee176-7f9c-4c7f-ba1c-b712a9805f15" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <h2
            className='text-4xl font-bold inline border-b-4 border-[#e5dcc5] text-gray-300'>
            Contact
          </h2>
          {/* Contact Links */}
          <ul className='list-disc p-4 text-lg'>
            {contactLinks.map(contact => (
              <li className='cursor-pointer text-[#e5dcc5] hover:underline hover:font-bold mt-1' key={contact.id}>
                <a href={contact.link}>
                  {contact.name}
                </a>
              </li>
            ))}
          </ul>

          <p className='text-lg text-gray-300'>
            Or send me a message with the form below:
          </p>
        </div>
        <input className='rounded-sm bg-[#dbe3fc] p-2' type="text" placeholder='Name' name='name' />
        <input className='rounded-sm my-4 p-2 bg-[#dbe3fc]' type="email" placeholder='Email' name='email' />
        <textarea className='rounded-sm bg-[#dbe3fc] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='rounded-full font-bold text-white border-2 hover:bg-[#e5dcc5] hover:border-[#e5dcc5] px-4 py-3 my-8 mx-auto flex items-center hover:text-[#0a192f]'>Message Me</button>
      </form>

      {/* back arrow  */}
      <Link to='Home' smooth={true} duration={500}>
        <span className='cursor-pointer hover:rotate-90 duration-300 fixed bottom-5 right-5 text-[#e5dcc5] '>
          <HiArrowNarrowLeft size={25} />
        </span>
      </Link>

    </div>
  )
}

export default Contact