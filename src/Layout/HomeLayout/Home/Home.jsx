import React from 'react';
import { Outlet } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Navbar from '../../../shared/Navbar/Navbar';
import Footer from '../../../shared/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;