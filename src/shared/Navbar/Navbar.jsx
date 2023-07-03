import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';


// const navLinks = <>
//   <li><a>Home</a></li>
//   <li><a>Our Classes</a></li>
//   <li><a>Our Trainer</a></li>
//   <li><a>Pricing</a></li>
//   <li><a>Contact</a></li>
//   <li><a>About Us</a></li>
// </>

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const userPhoto = user?.photoURL
  const navigate = useNavigate()

  const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/classes'>Our Classes</NavLink></li>
    <li><NavLink to='/trainer'>Our Trainer</NavLink></li>
    {
      user && <li><NavLink to='/dashboard/profile'>Dashboard</NavLink></li>
    }
    {
      !user && <li><NavLink to='/signup'>Sign Up</NavLink></li>
    }
  </>

  const handleLogout = () => {
    logOut()
      .then(result => {
        navigate('/')
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Sign Out',
          showConfirmButton: false,
          timer: 2000
        })
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl text-primary">Get Fit</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {
            user ? <><img className='w-11 h-11 rounded-full object-cover' src={userPhoto} alt="" /><button onClick={handleLogout} className="btn rounded-full bg-primary text-black hover:text-gray-500 ">SignOut</button></>
              :
              <Link to='signin' className="btn rounded-full bg-primary text-black hover:text-gray-500 ">SignIn</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;