import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row px-10 sm:px-0 w-screen bg-gray-700 items-center justify-around pt-10 py-5 text-sm">
        <div className="flex flex-col gap-2 text-gray-50">
          <h1 className="font-bold text-3xl">
            <Link to="/">CodeX</Link>
          </h1>
          <p className="font-medium">Subscribe to newsletter</p>
          <p className="text-gray-300">
            Get product updates, company news, and more.
          </p>
          <button className="btn bg-transparent mx-0 hover:shadow-transparent font-bold hover:font-normal text-blue-400 border-gray-300 border-[1px]">
            <Link to="/apply">Subscribe</Link>
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-around gap-5">
          <ul className="flex flex-row sm:flex-col gap-3 text-gray-300">
            <Link to="/about">About CodeX</Link>
            <Link to="/join">Get Started</Link>
            <Link to="/documentation">Documentation</Link>
          </ul>
          <ul className="flex flex-row sm:flex-col gap-3 text-gray-300">
            <Link to="/codereview">Code Review</Link>
            <Link to="/codexspace">CodeX Space</Link>
            <Link to="/extensions">Extensions</Link>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-screen py-5 items-center justify-around bg-[#1B1F24] text-white text-sm">
        <ul className="flex">
          <li>© 2022 CodeX, Inc.</li>
          <li>
            <Link to="/documentation">Terms</Link>
          </li>
          <li>
            <Link to="/versions">Site Map</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-2">
          <a
            className="flex gap-2 justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/joshua-chris-ofurunna/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
          <a
            className="flex gap-2 justify-between items-center w-full text-gray-300"
            href="https://github.com/Joshua-Chris/codex.github.io"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <FaGithub size={30} />
          </a>
        </ul>
      </div>
    </>
  );
};

export default Footer;
