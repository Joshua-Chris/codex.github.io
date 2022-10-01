import React from 'react';

// images
import Bg1 from '../assets/vector-bg-1.jpg';

import AccountRequest from '../components/ApiAccess/AccountRequest';
// import UnderConstruction from '../components/Construction/UnderConstruction';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
// import NavbarWhite from '../components/Navbar/NavbarWhite';

const Apply = () => {
  return (
    <>
      <div
        className="w-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${Bg1})` }}
      >
        <div className="w-screen bg-gradient-to-b from-[#4a148c6f] via-[#1b1f24f5] to-[#1B1F24]">
          <Navbar />
          <AccountRequest />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Apply;
