import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-black text-white w-full flex flex-col sm:flex-row justify-between items-center px-3 py-3 sm:h-20'>

        <ul className=' flex gap-3 sm:gap-6 md:gap-10 font-bold text-xs sm:text-sm md:text-[20px] flex-wrap justify-center '>
        <li><a href="/">Home</a></li>
         <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
           <li><a href="/service">Service</a></li>
        </ul>
        <button className='bg-lime-500 sm:px-3 md:px-5 text-xs sm:text-sm md:text-lg py-1 p-2 mr-3 rounded-lg font-bold hover:font-extrabold hover:bg-lime-400'>
        <a href="/LogIn">Login</a>
        </button>
      </nav>
    </div>
  )
}

export default Navbar
