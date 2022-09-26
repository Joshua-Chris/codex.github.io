import React from 'react';
import { BiToggleRight } from 'react-icons/bi';

const Terminal = () => {
  return (
    <>
      <div className="w-screen py-10 flex justify-center items-center text-white">
        <div className="bg-gray-700 w-[90%] md:w-[65%] min-h-[70vh] rounded-lg relative">
          <div className="w-full h-[50px] shadow-md"></div>
          <ul className="flex w-full justify-around bg-gray-800">
            <li className="px-[8px] text-sm btn__T">
              <BiToggleRight className="mr-1" /> Docker
            </li>
            <li className="px-[8px] text-sm btn__T">
              <BiToggleRight className="mr-1" /> npm
            </li>
            <li className="px-[8px] text-sm btn__T">
              <BiToggleRight className="mr-1" /> Maven
            </li>
            <li className="hidden sm:flex px-[8px] text-sm btn__T">
              <BiToggleRight className="mr-1" /> NuGet
            </li>
          </ul>
          <div className="p-10">
            <p className="flex flex-col break-words" id="code1">
              <code>
                echo $PAT | docker login{' '}
                <span className="text-blue-500">
                  ghcr.io --username phanatic --password-stdin
                </span>
              </code>
              <code>
                docker tag{' '}
                <span className="text-blue-500">
                  app ghcr.io/phanatic/app:1.0.0
                </span>
              </code>
              <code>
                docker push{' '}
                <span className="text-blue-500">
                  ghcr.io/phanatic/app:1.0.0
                </span>
              </code>
              <code>
                echo $PAT | docker login{' '}
                <span className="text-blue-500">
                  ghcr.io --username phanatic --password-stdin
                </span>
              </code>
              <code>
                docker tag{' '}
                <span className="text-blue-500">
                  app ghcr.io/phanatic/app:1.0.0
                </span>
              </code>
              <code>
                docker push{' '}
                <span className="text-blue-500">
                  ghcr.io/phanatic/app:1.0.0
                </span>
              </code>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
