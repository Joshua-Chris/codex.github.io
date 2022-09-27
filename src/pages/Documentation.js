import React from 'react';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Feature from '../components/Features/Feature';
import { featureItems } from '../components/Features/featureItems';
import Footer from '../components/Footer/Footer';

const Documentation = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        {featureItems.map((featureItem) => (
          <Feature
            header={featureItem.header}
            textContent={featureItem.textContent}
            imgUrl={featureItem.imgUrl}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Documentation;
