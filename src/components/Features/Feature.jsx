import React from 'react';

const Feature = ({ header, textContent, imgUrl }) => {
  return (
    <div className="w-screen h-screen md:h-full text-white">
      <div className="w-screen md:h-[62vh] flex justify-center items-center">
        <div className="basis-2/4">
          <h1 className="text-4xl lg:text-5xl font-bold md:max-w-3xl">
            {header}
          </h1>
          <h1 className="py-4 text-md md:text-lg text-gray-400">
            {textContent}
          </h1>
        </div>
        <div className="basis-1/4">
          <img src={imgUrl} alt="Our features" className="w-30 md:w-[20rem]" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
