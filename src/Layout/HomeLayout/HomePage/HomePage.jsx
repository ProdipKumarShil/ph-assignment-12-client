import React from 'react';
import Banner from '../../../shared/Banner/Banner';
import Header from '../../../shared/Header/Header';
import Classes from '../../../shared/Classes/Classes';
import Instructors from '../../../shared/Instructors/Instructors';
import Slider from '../../../shared/Slider/Slider';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      {/* TODO: Popular Classes Section */}
      <Classes></Classes>
      {/* TODO: Popular Instructors Section */}
      <Instructors></Instructors>
      {/* TODO: Top Slider Section */}
      <Slider></Slider>
      {/* TODO: Extra Section */}
    </div>
  );
};

export default HomePage;