import React, { useState } from 'react';
import { HiMenu, HiMenuAlt1, HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const NavbarWhite = () => {
  const [nav, setNav] = useState(false);
  const navClick = () => setNav(!nav);

  // change Nav color on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <>
      <div
        className={
          color
            ? 'z-10 sticky top-0 w-screen h-[80px] flex text-sm items-center p-5 bg-white drop-shadow-lg justify-between md:justify-start'
            : 'z-10 sticky top-0 w-screen h-[80px] flex text-sm items-center p-5 bg-transparent drop-shadow-lg justify-between md:justify-start'
        }
      >
        <div className="flex z-10">
          <Link
            to="/"
            className="link font-bold text-2xl hover:text-blue-400 cursor-pointer"
          >
            CodeX
          </Link>
        </div>
        <ul className="hidden md:flex pl-7">
          <Link className="link" to="/documentation">
            Documentation
          </Link>
          <Link
            className="link border-red-600 border-l-4 hover:shadow-md"
            to="/apply"
          >
            Get Started
          </Link>
        </ul>
        {/* Hamburger menu */}
        <div onClick={navClick} className="md:hidden z-10">
          {!nav ? <HiMenu size={37} /> : <HiMenuAlt1 size={37} />}
        </div>
        {/* MOBILE MENU */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-2 flex flex-col w-full h-screen justify-center items-center bg-gradient-to-b from-violet-600 to-pink-500 md:hidden'
          }
        >
          <Link
            to="/documentation"
            className="flex justify-center items-center group py-4 text-2xl text-white"
          >
            Documentation{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </Link>
          <Link
            to="join"
            className="flex justify-center items-center group py-4 text-2xl text-white"
          >
            Get Started{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavbarWhite;
