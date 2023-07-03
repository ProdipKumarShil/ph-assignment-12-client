import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const ClassesPageCard = ({ singleClass}) => {
  const {_id, img, classname, price, tutor_name, description, available_seat } = singleClass
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleAddToCart = item => {
    console.log(item)
    if (user && user.email) {
      const orderItem = {classItemId: _id, classname, img, price, email: user.email }
      fetch('https://server-side-two-black.vercel.app/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please login to order the food',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signin')
        }
      })

    }
  }
  return (
    
    <div data-aos="fade-zoom-out" className="card card-compact bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body rounded-b-2xl bg-primary text-black">
        <h2 className="card-title">{classname}</h2>
        <p>Price: ${price}</p>
        <p>Available Seat: {available_seat}</p>
        <p>Trainer: {tutor_name}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddToCart} className="btn rounded-full btn-primary bg-primary border-black text-black hover:bg-gray-700 hover:text-black">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ClassesPageCard;