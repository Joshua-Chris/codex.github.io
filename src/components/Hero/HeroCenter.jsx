import React from 'react';
import { useState } from 'react';
import { FiChevronRight, FiArrowRight } from 'react-icons/fi';

const HeroCenter = () => {
  const [icon, setIcon] = useState(false);
  const changeIcon = () => setIcon(!icon);
  return (
    <>
      <div className="w-screen flex flex-col items-center justify-center h-[85vh] bg-no-repeat bg-right-bottom">
        <h2 className="text-2xl text-center md:text-4xl font-bold text-violet-600 shadow-black drop-shadow-lg">
          CodeX Packages
        </h2>
        <h1 className="text-3xl py-1 text-center md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 drop-shadow-lg">
          Your packages,{' '}
        </h1>
        <h1 className="text-3xl text-center md:text-6xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 drop-shadow-lg">
          at home with their code
        </h1>
        <p className="text-md text-center mx-5 md:text-lg max-w-md md:max-w-lg leading-7">
          With CodeX Packages, you can safely publish and consume packages
          within your organization or with the entire world.
        </p>
        <div className="flex flex-col sm:flex-row">
          <button
            onMouseEnter={changeIcon}
            onMouseLeave={changeIcon}
            className="btn bg-gradient-to-r from-violet-600 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
          >
            Get started{' '}
            {!icon ? (
              <FiChevronRight className="text-2xl" />
            ) : (
              <FiArrowRight className="text-2xl" />
            )}
          </button>
          <button className="btn bg-transparent text-blue-800 border-gray-300 border-[1px]">
            See pricing
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroCenter;
