import React from 'react';

const UnderConstruction = ({ pageName }) => {
  return (
    <div className="w-screen h-[40vh] flex flex-col gap-3 px-10">
      <h1 className="text-2xl sm:text-4xl text-gray-300">{pageName}</h1>
      <p className="text-2xl sm:text-4xl text-gray-300">
        {'//'} Under Construction {':)'}
      </p>
    </div>
  );
};

export default UnderConstruction;
