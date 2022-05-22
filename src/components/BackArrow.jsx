import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowUp } from 'react-icons/hi';

const BackArrow = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(true)
    }
    else if (scrolled <= 600) {
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div>
      <Link to='Home' smooth={true} duration={500}>
        <button className={!visible ? 'hidden' : 'cursor-pointer fixed bottom-5 right-5 text-[#e5dcc5] transparent-blue rounded-full p-1' }>
        <HiArrowNarrowUp size={25} />
      </button>
    </Link>
    </div >
  )
}

export default BackArrow