import React, { useState } from 'react'
import {HiMenu, HiMenuAlt1, HiChevronRight} from 'react-icons/hi'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const navClick = () => setNav(!nav)
  return (
    <div className='z-10 fixed w-full h-[80px] flex text-sm items-center p-5 bg-gray-900 text-white drop-shadow-lg justify-between md:justify-start'>
        <div className='flex z-10'>
            <h1 className='font-bold text-2xl hover:text-blue-400 cursor-pointer'>CodeX</h1>
        </div>
        <ul className='hidden md:flex pl-7'>
            <li>Doc</li>
            <li>Versions</li>
            <li>CodeX spaces</li>
            <li>Extensions</li>
            <li>Code review</li>
            <li>About</li>
            <li>Join</li>
        </ul>
        {/* Hamburger menu */}
        <div onClick={navClick} className='md:hidden z-10'>
            {!nav ? <HiMenu size={37}/> : <HiMenuAlt1 size={37}/>}
        </div>
        {/* MOBILE MENU */}
        <ul className={!nav ? 'hidden' : 'absolute top-2 flex flex-col w-full h-screen justify-center items-center bg-gray-900 md:hidden'}>
            <li className='flex justify-center items-center group py-4 text-2xl'>Doc <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
            <li className='flex justify-center items-center group py-4 text-2xl'>Versions <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
            <li className='flex justify-center items-center group py-4 text-2xl'>CodeX spaces <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
            <li className='flex justify-center items-center group py-4 text-2xl'>Extensions <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
            <li className='flex justify-center items-center group py-4 text-2xl'>Code review <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
            <li className='flex justify-center items-center group py-4 text-2xl'>About <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
            <li className='flex justify-center items-center group py-4 text-2xl'>Join <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
        </ul>

    </div>
  )
}

export default Navbar