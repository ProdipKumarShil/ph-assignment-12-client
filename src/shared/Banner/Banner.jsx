import React from 'react';
import video from '/intro.mp4'

const Banner = () => {
  return (
    <div className='relative h-[100vh]'> 
      <video className='w-full h-full object-cover' src={video} autoPlay loop muted></video>
      <div className="flex flex-col justify-center items-center h-full absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)]">
        <p className='text-6xl font-bold text-primary'>Elevate your fitness Embrace</p>
        <p className='text-6xl font-bold text-primary'>the grind</p>
        <p className='md:w-[60%] text-white mt-4 text-center'>Rise to the challenge, ignite your fire, and embrace the transformative power of our inclusive gym culture, where strength meets determination and dreams become reality.</p>
        <button className="btn rounded-full mt-4 bg-primary text-black hover:text-gray-500 ">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;