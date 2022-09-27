import React from 'react';
import UnderConstruction from '../components/Construction/UnderConstruction';
import Footer from '../components/Footer/Footer';
import NavbarWhite from '../components/Navbar/NavbarWhite';

const CodeReview = () => {
  return (
    <div>
      <NavbarWhite />
      <UnderConstruction pageName={'Code Review Page'} />
      <Footer />
    </div>
  );
};

export default CodeReview;
