import React from 'react';
import { useState } from 'react';
import { FiChevronRight, FiArrowRight } from 'react-icons/fi';
import bgImg from '../../assets/abstract-bg.jpg';

const HeroCenter = () => {
  const [icon, setIcon] = useState(false);
  const changeIcon = () => setIcon(!icon);
  return (
    <>
      <div
        className="w-screen flex flex-col items-center justify-center h-[85vh] bg-no-repeat bg-right-bottom"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h2 className="text-2xl md:text-4xl font-bold">CodeX Packages</h2>
        <h1 className="text-4xl md:text-6xl font-extrabold">Your packages, </h1>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
          at home with their code
        </h1>
        <p className="text-md md:text-lg max-w-md md:max-w-lg leading-7">
          With CodeX Packages, you can safely publish and consume packages
          within your organization or with the entire world.
        </p>
        <div className="flex">
          <button onClick={changeIcon} className="btn bg-blue-800">
            Get started{' '}
            {!icon ? (
              <FiChevronRight className="text-2xl" />
            ) : (
              <FiArrowRight className="text-2xl" />
            )}
          </button>
          <button className="btn bg-gray-100 text-blue-800 border-gray-300 border-[1px]">
            See pricing
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroCenter;
