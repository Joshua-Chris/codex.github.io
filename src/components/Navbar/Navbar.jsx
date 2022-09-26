import React, { useState } from 'react';
import { HiMenu, HiMenuAlt1, HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navClick = () => setNav(!nav);
  return (
    <>
      <div className="z-10 fixed w-screen sticky top-0 h-[80px] flex text-sm items-center p-5 bg-gray-900 text-white drop-shadow-lg justify-between md:justify-start">
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
            Doc
          </Link>
          {/* <Link className="link" to="/versions">
            Versions
          </Link>
          <Link className="link" to="/extensions">
            Extensions
          </Link>
          <Link className="link" to="/codereview">
            Code review
          </Link> */}
          <Link className="link" to="/about">
            About
          </Link>
          <Link
            className="link border-red-600 border-l-4 hover:shadow-md"
            to="/join"
          >
            Join
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
              : 'absolute top-2 flex flex-col w-full h-screen justify-center items-center bg-gray-900 md:hidden'
          }
        >
          <li className="flex justify-center items-center group py-4 text-2xl">
            Doc{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </li>
          <li className="flex justify-center items-center group py-4 text-2xl">
            Versions{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </li>
          <li className="flex justify-center items-center group py-4 text-2xl">
            CodeX spaces{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </li>
          <li className="flex justify-center items-center group py-4 text-2xl">
            Extensions{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </li>
          <li className="flex justify-center items-center group py-4 text-2xl">
            Code review{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </li>
          <li className="flex justify-center items-center group py-4 text-2xl">
            About{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </li>
          <li className="flex justify-center items-center group py-4 text-2xl">
            Join{' '}
            <span className="invisible duration-75 group-hover:visible">
              <HiChevronRight size={25} className="pl-1 text-gray-400" />
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;