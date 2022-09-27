import React from 'react';
import UnderConstruction from '../components/Construction/UnderConstruction';
import Footer from '../components/Footer/Footer';
import NavbarWhite from '../components/Navbar/NavbarWhite';

const Extensions = () => {
  return (
    <div>
      <NavbarWhite />
      <UnderConstruction pageName={'Extensions page'} />
      <Footer />
    </div>
  );
};

export default Extensions;
