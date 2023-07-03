import React from 'react';
import gym from '/public/gymLottie.json'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div className="">
      <p className='text-3xl font-semibold text-primary text-center'>Page Not Found!!!</p>
      <Lottie className='h-[70vh]' animationData={gym}></Lottie>
        <div className="text-center">
        <Link to='/' className="btn rounded-full  bg-primary text-black hover:text-gray-500 ">Home</Link>

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;