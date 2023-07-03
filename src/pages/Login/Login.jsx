import React, { useContext, useState } from 'react';
import Header from '../../shared/Header/Header';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

	const [type, setType] = useState(true)
	const {register, handleSubmit, formState: {errors}} = useForm()
	const { setUser, emailPasswordSignIn, googleSignUp } = useContext(AuthContext)
	const navigate = useNavigate()
	
	const onSubmit = data => {
		console.log(data)
		emailPasswordSignIn(data.email, data.password)
			.then(result => {
				setUser(result.user)
				navigate('/')

				// login alert
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Successfully Logged In!!!',
					showConfirmButton: false,
					timer: 2000
				})
			})
			.then(err => {
				console.log(err)
			})
	}
	
	const handleType = () => {
		setType(!type)
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

	return (
		<div className='max-w-screen-xl mx-auto p-8'>
			<Header subtitle={'Please'} title={'sign in'}></Header>

			<form onSubmit={handleSubmit(onSubmit)} className='w-1/2 mx-auto flex flex-col gap-4' >
				<input {...register('email', {required: true})} name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
				{errors.email && <span className='text-red-600 text-sm mb-4'>This field is require</span>}
				{/* password field */}
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
				<p className='text-sm'>Not have an account? <Link className='text-primary' to='/signup'>Signup</Link></p>
				{/* button */}
				<button className='btn bg-primary text-black hover:text-white'>Sign in</button>
			</form>

			{/* social login */}
			<div className="flex mx-auto w-1/2 justify-around gap-4 mt-4">
				<div onClick={handleGoogleLogin} className="bg-white justify-center cursor-pointer rounded-lg flex p-2 w-full items-center ">
					<FcGoogle className='text-4xl' />
					<p className='pl-4'>Sign In with GOOGLE</p>
				</div>
				{/* TODO: github and facebook login will add here */}
				{/* <div className="bg-white flex p-2 w-full items-center ">
					<AiOutlineGithub className='text-4xl' />
					<p className='pl-4'>Sign In with GITHUB</p>
				</div> */}
			</div>
		</div>
	);
};

export default Login;