import React, { useState } from 'react';
import { HiChevronRight, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
// import HeroBg from '../../assets/drawing-tablet.png';
import HeroImg from '../../assets/hero-img.PNG';

const Hero = () => {
  const [btnAngle, setBtnAngle] = useState(false);
  const mouseOver = () => setBtnAngle(!btnAngle);
  return (
    <div className="w-screen text-white">
      <div className="w-full h-[90vh] p-5 flex flex-col justify-center items-center">
        <h1 className="text-5xl lg:text-7xl text-center font-extrabold max-w-3xl md:max-w-5xl">
          A Torrent of fast cloud developer environments
        </h1>
        <h1 className="py-8 text-lg md:text-xl text-center text-gray-400 max-w-sm md:max-w-2xl">
          CodeX brings to light blazing fast cloud developer environments.
        </h1>
        <button onMouseOver={mouseOver} onMouseOut={mouseOver}>
          <Link to="/apply">Get Started</Link>
          {!btnAngle ? (
            <HiChevronRight size={25} className="pl-1" />
          ) : (
            <HiArrowRight size={22} className="pl-1" />
          )}
        </button>
      </div>
      <div className="w-screen h-full flex flex-col justify-center items-center pb-20 bg-no-repeat bg-center bg-contain md:bg-cover">
        <div className="w-[90%] md:w-[70%] mx-auto">
          <img
            src={HeroImg}
            alt="Hero code"
            className="rounded-xl shadow-2xl shadow-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
