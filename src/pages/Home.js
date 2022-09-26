import React from 'react';
import HeroCenter from '../components/Hero/HeroCenter';
import NavbarWhite from '../components/Navbar/NavbarWhite';
import Terminal from '../components/Terminal/Terminal';

const App = () => {
  return (
    <>
      <NavbarWhite />
      <HeroCenter />
      <Terminal />
      <div className="w-screen text-2xl text-gray-700 flex justify-center items-center">
        Under Construction {':)'}
      </div>
    </>
  );
};

export default App;
