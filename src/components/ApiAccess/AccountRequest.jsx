import React from 'react';
import label from '../../assets/label.webp';

const AccountRequest = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-around items-center w-screen h-screen bg-transparent">
        <div className="w-screen basis-3/6 flex justify-center items-center hidden md:block">
          <img
            src={label}
            alt="CodeX label"
            className="w-10/12 h-full sm:w-full"
          />
        </div>
        <div
          name="contact"
          className="w-fit h-screen basis-2/6 flex justify-center items-center px-7 pb-0 shadow-[#0000004b] shadow-lg"
        >
          <form
            method="POST"
            action="https://getform.io/f/e9a2c4a7-5310-4746-886b-b2bff36c75e4"
            className="flex flex-col max-w-[600px] w-full"
          >
            <div className="pb-8">
              <p className="text-4xl md:text-[42px] font-extrabold inline border-b-4 border-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                CodeX Developers
              </p>
              <p className="text-gray-200 py-4">
                CodeX account application for developers
              </p>
            </div>
            <input
              className="bg-[#ccd6f6] bg-opacity-20 border-none outline-none text-white font-bold p-2 rounded-lg"
              type="text"
              placeholder="Nickname"
              name="name"
            />
            <input
              className="my-4 p-2 bg-[#ccd6f6] bg-opacity-20 border-none outline-none text-white font-bold rounded-lg"
              type="email"
              placeholder="Email"
              name="email"
            />
            <button className="w-full text-white rounded-lg bg-gradient-to-r from-violet-600 to-pink-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-3 my-8 mx-auto flex items-center">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountRequest;
