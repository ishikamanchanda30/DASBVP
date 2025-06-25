import Faculty from '../Components/Faculty';
import React from 'react';
import Home from '../Components/Home';
import AboutCoreCarousel from '../Components/AboutCoreCarousel';

const AboutUs: React.FC = () => {
  return (
    <div className='bg-[#0d0d0d]'>
      <Home/>      
      <AboutCoreCarousel />
      <Faculty/>

    </div>
  );
};

export default AboutUs; 