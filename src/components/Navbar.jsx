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
            <li>Actions</li>
            <li>Packages</li>
            <li>Code spaces</li>
            <li>Copilot</li>
            <li>Code review</li>
            <li>Issues</li>
            <li>Discussions</li>
        </ul>
        {/* Hamburger menu */}
        <div onClick={navClick} className='md:hidden z-10'>
            {!nav ? <HiMenu size={37}/> : <HiMenuAlt1 size={37}/>}
        </div>
        {/* MOBILE MENU */}
        <ul className={!nav ? 'hidden' : 'absolute top-2 flex flex-col w-full h-screen justify-center items-center bg-gray-900 md:hidden'}>
            <li className='flex justify-center items-center group py-4 text-2xl'>Actions <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
            <li className='flex justify-center items-center group py-4 text-2xl'>Packages <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
            <li className='flex justify-center items-center group py-4 text-2xl'>Code spaces <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
            <li className='flex justify-center items-center group py-4 text-2xl'>Copilot <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
            <li className='flex justify-center items-center group py-4 text-2xl'>Code review <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
            <li className='flex justify-center items-center group py-4 text-2xl'>Issues <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
            <li className='flex justify-center items-center group py-4 text-2xl'>Discussions <span className='invisible duration-75 group-hover:visible'><HiChevronRight size={25}  className='pl-1 text-gray-400' /></span></li>
        </ul>

    </div>
  )
}

export default Navbar