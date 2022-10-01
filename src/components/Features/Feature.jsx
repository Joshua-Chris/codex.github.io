import React from 'react';

const Feature = ({ header, textContent, imgUrl }) => {
  return (
    <div className="w-screen h-screen md:h-full text-white">
      <div className="w-screen flex flex-col md:flex-row justify-center items-center md:h-[62vh] px-5 md:px-0">
        <div className="basis-2/4">
          <h1 className="text-4xl lg:text-5xl font-bold md:max-w-3xl">
            {header}
          </h1>
          <h1 className="py-4 text-lg md:text-lg text-gray-400">
            {textContent}
          </h1>
        </div>
        <div className="basis-1/4">
          <img
            src={imgUrl}
            alt="Our features"
            className="w-[13rem] md:w-[20rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
