import React, { useState } from 'react';
import { HiMenu, HiMenuAlt1, HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Mobile Nav
  const [nav, setNav] = useState(false);
  const navClick = () => setNav(!nav);

  // Change nav color onScroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 400) {
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
            ? 'z-10 fixed w-screen sticky top-0 h-[80px] flex text-sm items-center p-5 bg-[#1B1F24] text-white drop-shadow-lg justify-between md:justify-start'
            : 'z-10 fixed w-screen sticky top-0 h-[80px] flex text-sm items-center p-5 bg-[#4a148c] text-white drop-shadow-lg justify-between md:justify-start'
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
              : 'absolute top-2 flex flex-col w-full h-screen justify-center items-center bg-[#1B1F24] text-white md:hidden'
          }
        >
          <Link
            to="documentation"
            className="flex justify-center items-center group py-4 text-2xl"
          >
            Doc{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </Link>
          <Link
            to="versions"
            className="flex justify-center items-center group py-4 text-2xl"
          >
            Versions{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </Link>
          <Link
            to="codexspace"
            className="flex justify-center items-center group py-4 text-2xl"
          >
            CodeX spaces{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </Link>
          <Link
            to="extensions"
            className="flex justify-center items-center group py-4 text-2xl"
          >
            Extensions{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </Link>
          <Link
            to="codereview"
            className="flex justify-center items-center group py-4 text-2xl"
          >
            Code review{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </Link>
          <Link
            to="about"
            className="flex justify-center items-center group py-4 text-2xl"
          >
            About{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </Link>
          <Link
            to="join"
            className="flex justify-center items-center group py-4 text-2xl"
          >
            Join{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
