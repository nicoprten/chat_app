import React from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {

    // testing brach work

  return (
    <div className='flex mx-auto w-9/12 border-1 border-black rounded'>
        <img className='w-2/4' src='./images/bg-login.png' alt='imgtest.jpg' />
        <div className='flex flex-col justify-center py-4 px-16 w-2/4'>
            <h2 className='text-2xl font-bold text-red-light'>Sign in to your account</h2>
            <form className='flex flex-col gap-4 mt-6'>
                <label className='flex flex-col gap-2'>
                    <span className='text-red-light'>Email</span>
                    <input className='border-b-1 border-red-light focus:outline-none' type='text' name='email'/>
                </label>
                <label className='flex flex-col gap-2'>
                    <span className='text-red-light'>Password</span>
                    <input className='border-b-1 border-red-light focus:outline-none' type='password' name='password'/>
                </label>
                <button className='p-2 bg-red border-2 border-red text-white font-bold rounded'>Login</button>
            </form>
            <p className='text-center mt-4 text-sm text-black-light'>Dont have an account? Create your account <Link className='text-red' to='/register'>here.</Link></p>
        </div>
    </div>
  )
}
