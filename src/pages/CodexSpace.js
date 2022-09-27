import React from 'react';
import UnderConstruction from '../components/Construction/UnderConstruction';
import Footer from '../components/Footer/Footer';
import NavbarWhite from '../components/Navbar/NavbarWhite';

const CodexSpace = () => {
  return (
    <div>
      <NavbarWhite />
      <UnderConstruction pageName={'CodeX Space'} />
      <Footer />
    </div>
  );
};

export default CodexSpace;
