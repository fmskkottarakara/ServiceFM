import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Destination from '../Destination';
function Home() {
  return (
    <>
      <HeroSection />
      <Destination />
      <Cards />
    </>
  );
}

export default Home;