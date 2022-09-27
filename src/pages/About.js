import React from 'react';
import UnderConstruction from '../components/Construction/UnderConstruction';
import Footer from '../components/Footer/Footer';
import NavbarWhite from '../components/Navbar/NavbarWhite';

const About = () => {
  return (
    <div>
      <NavbarWhite />
      <UnderConstruction pageName={'About page'} />
      <Footer />
    </div>
  );
};

export default About;
