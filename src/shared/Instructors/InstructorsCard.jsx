import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import useCardAnimation from '../../hooks/Aos';

const InstructorsCard = ({ trainer }) => {
  const {image, name} = trainer
  // useEffect(() => {
  //   AOS.init({ duration: 500 })
  // }, [])
  useCardAnimation()
  return (
    <div data-aos="fade-up" className="card  rounded-none bg-primary card-compact  shadow-xl">
      <figure><img className='h-[450px] w-full object-cover' src={image} alt={name} /></figure>
      <div className="card-body">
        <h2 className="card-title text-black">{name}</h2>
        <p className='text-black'>{''}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-primary rounded-full text-black hover:bg-gray-700">Contract With Me</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;