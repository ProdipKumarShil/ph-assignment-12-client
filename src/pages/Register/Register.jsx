// TODO: Added a recaptcha form
import React, { useContext, useState } from 'react';
import Header from '../../shared/Header/Header';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const [type, setType] = useState(true)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { googleSignUp, updateUser, setUser, emailPasswordSignUp } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = data => {
    console.log(data)
    emailPasswordSignUp(data.email, data.password)
      .then(result => {
        const userInfo = {
          displayName: data.name,
          photoURL: data.photo_url,
        }
        updateUser(userInfo)
          .then(() => {
            const saveUser = { name: data.name, email: data.email, role: 'student', image: data.photo_url }
            fetch('https://server-side-two-black.vercel.app/', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data)
                if (data) {
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Created Successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  })

                  setUser(result.user)
                  navigate('/')
                }
              })
          })
          .catch(err => console.log(first))
          

        // setUser(result.user)
        // navigate('/')
      })
      .catch(err => {
        console.log(err)
      })

  }

  const handleGoogleLogin = () => {
    googleSignUp()
      .then(result => {
        setUser(result.user)
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  const handleType = () => {
    setType(!type)
  }
  return (
    <div className='max-w-screen-xl mx-auto p-8'>
      <Header subtitle={'Please'} title={'Sign up'}></Header>
      <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 mx-auto flex flex-col gap-4' >

        <input {...register('name', { required: true })} name='name' type="text" placeholder="Name" className="input input-bordered w-full" />
        {errors.name && <span className='text-red-600 text-sm mb-4'>This field is require</span>}
        <input {...register('photo_url', { required: true })} name='photo_url' type="text" placeholder="Photo Url" className="input input-bordered w-full" />
        {errors.photo_url && <span className='text-red-600 text-sm mb-4'>This field is require</span>}
        <input {...register('email', { required: true })} name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
        {errors.email && <span className='text-red-600 text-sm mb-4'>This field is require</span>}

        <div className="relative">
          <label htmlFor="" onClick={handleType} className='absolute cursor-pointer right-4 top-3 active:scale-90'>
            {
              type ? <AiOutlineEyeInvisible className='text-2xl' /> : <AiOutlineEye className='text-2xl' />
            }
          </label>
          <input {...register('password', {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9a-z]).{6,}$/,
              message:
                "Password must have at least 6 characters, one uppercase letter, and one special character",
            },
          })} name='password' type={type ? 'password' : 'text'} placeholder="Password" className="input input-bordered w-full" />
          {errors.password && <span className='text-red-600 text-sm mb-4'>{errors.password.message}</span>}
        </div>

        <p className='text-sm'>Already have an account? <Link className='text-primary' to='/signin'>Signin</Link></p>
        <button className='btn bg-primary text-black hover:text-white'>Sign Up</button>
      </form>

      {/* social Sign Up */}
      <div className="flex mx-auto w-1/2 justify-around gap-4 mt-4">
        <div onClick={handleGoogleLogin} className="bg-white rounded-lg flex justify-center cursor-pointer p-2 w-full items-center ">
          <FcGoogle className='text-4xl' />
          <p className='pl-4'>Sign Up with GOOGLE</p>
        </div>
        {/* TODO: github and facebook login will add here */}
        {/* <div className="bg-white cursor-pointer flex p-2 w-full items-center ">
          <AiOutlineGithub className='text-4xl' />
          <p className='pl-4'>Sign Up with GITHUB</p>
        </div> */}
      </div>
    </div>
  );
};

export default Register;