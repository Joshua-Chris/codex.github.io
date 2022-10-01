import React from 'react';
// images
import BgWhite from '../assets/abstract-bg.jpg';

import Footer from '../components/Footer/Footer';
import HeroCenter from '../components/Hero/HeroCenter';
import NavbarWhite from '../components/Navbar/NavbarWhite';
import Terminal from '../components/Terminal/Terminal';
import Contact from '../components/Contact/Contact';

const App = () => {
  return (
    <>
      <div
        className="w-screen bg-no-repeat bg-cover bg-right"
        style={{ backgroundImage: `url(${BgWhite})` }}
      >
        <div className="w-screen">
          <NavbarWhite />
          <HeroCenter />
          <Terminal />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
