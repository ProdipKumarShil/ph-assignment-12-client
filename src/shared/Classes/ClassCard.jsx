import React, { useContext } from 'react';
import useCardAnimation from '../../hooks/Aos';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const ClassCard = ({ singleClass }) => {
  const { img, classname, description, price, tutor_name } = singleClass
  
  

  useCardAnimation()
  return (
    <div data-aos="fade-zoom-out" className="card card-compact bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body rounded-b-2xl bg-primary text-black">
        <h2 className="card-title">{classname}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Trainer: {tutor_name}</p>
        <div className="card-actions justify-end">
          <Link to="classes" className="btn rounded-full btn-primary bg-primary border-black text-black hover:bg-gray-700 hover:text-black">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;