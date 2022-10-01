import React from 'react';

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen bg-transparent flex justify-center items-center p-4 pb-0"
      >
        <form
          method="POST"
          action="https://getform.io/f/e9a2c4a7-5310-4746-886b-b2bff36c75e4"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-extrabold inline border-b-4 border-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Subscribe to Newsletter
            </p>
            <p className="text-gray-500 py-4">
              Don't miss any new updates from us!
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] bg-opacity-30 border-none outline-none text-gray-800 font-bold p-2 rounded-lg"
            type="text"
            placeholder="Nickname"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6] bg-opacity-30 border-none outline-none text-gray-800 font-bold rounded-lg"
            type="email"
            placeholder="Email"
            name="email"
          />
          <button className="w-full text-white rounded-lg bg-gradient-to-r from-violet-600 to-pink-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-3 my-8 mx-auto flex items-center">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
