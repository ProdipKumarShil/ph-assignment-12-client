import React from 'react';
import useCardAnimation from '../../hooks/Aos';

const TrainerCard = ({trainer}) => {
  const { image, name, number_of_classes, email } = trainer
  console.log(trainer)
  useCardAnimation()
  return (
    <div data-aos="fade-up" className="card  rounded-none bg-primary card-compact  shadow-xl">
      <figure><img className='h-[450px] w-full object-cover' src={image} alt={name} /></figure>
      <div className="card-body">
        <h2 className="card-title text-black">{name}</h2>
        <p className='text-black'>Email: {email}</p>
        <p className='text-black'>Total Class: {number_of_classes}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-primary rounded-full text-black hover:bg-gray-700">Contact With Me</button>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;