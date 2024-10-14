import React from 'react';
import '../App.css';
import  Button  from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>CRAFTED PRECISION</h1>
      <p>FM Engineering Welding Fabrication</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SEND ENQUIRY
        </Button>
         
      </div>
    </div>
  );
}

export default HeroSection;