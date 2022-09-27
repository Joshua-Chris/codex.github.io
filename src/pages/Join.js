import React from 'react';
import UnderConstruction from '../components/Construction/UnderConstruction';
import Footer from '../components/Footer/Footer';
import NavbarWhite from '../components/Navbar/NavbarWhite';

const Join = () => {
  return (
    <div>
      <NavbarWhite />
      <UnderConstruction pageName={'Sign up page'} />
      <Footer />
    </div>
  );
};

export default Join;
