import React from 'react';

const AccountRequest = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center w-screen h-screen bg-gradient-to-b from-[#4a148c] via-[#1B1F24] to-[#1B1F24]">
        <div className="basis-3/6 bg-slate-700">
          <h1>Codex API Portal</h1>
        </div>
        <div
          name="contact"
          className="w-full h-screen flex basis-2/6 justify-center items-center p-4 pb-0"
        >
          <form
            method="POST"
            action="https://getform.io/f/e9a2c4a7-5310-4746-886b-b2bff36c75e4"
            className="flex flex-col max-w-[600px] w-full"
          >
            <div className="pb-1">
              <p className="text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300">
                CodeX Api Access
              </p>
              <p className="text-gray-300 py-4">
                Submit Application - Get an account
              </p>
            </div>
            <label
              htmlFor="name"
              className="text-gray-300 text-lg mb-2 mt-3 border-gray-300 border-t-4 w-fit"
            >
              Full Name
            </label>
            <input
              className="bg-gray-50 text-black font-bold p-2 rounded-lg"
              type="text"
              placeholder="Name"
              name="name"
              id="name"
            />
            <label
              htmlFor="email"
              className="text-gray-300 text-lg mb-2 mt-3 border-gray-300 border-t-4 w-fit"
            >
              Email Address
            </label>
            <input
              className="p-2 bg-gray-50 text-black font-bold rounded-lg"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
            <label
              htmlFor="message"
              className="text-gray-300 text-lg mb-2 mt-3 border-gray-300 border-t-4 w-fit"
            >
              Full Name
            </label>
            <textarea
              className="bg-gray-50 text-black font-bold p-2 rounded-lg"
              name="message"
              rows="3"
              placeholder="Message"
              id="message"
            ></textarea>
            <button className="w-full text-white rounded-lg border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center">
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountRequest;
