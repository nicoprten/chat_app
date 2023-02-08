import React from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {

    // testdasasddasdasda

  return (
    <div className='relative flex flex-col lg:flex-row lg:h-[400px] mx-auto w-[75%] xl:w-[50%] bg-black border-1 border-white2 rounded'>
        <div className='flex flex-col justify-between lg:w-4/6 py-4 px-8 xl:py-8 xl:px-16'>
            <h2 className='text-2xl font-bold text-white2'>Sign in to your account</h2>
            <form className='flex flex-col gap-4 mt-6'>
                <label className='flex flex-col gap-2'>
                    <span className='text-white2'>Email</span>
                    <input className='bg-transparent border-b-1 border-white2 focus:outline-none' type='text' name='email'/>
                </label>
                <label className='flex flex-col gap-2'>
                    <span className='text-white2'>Password</span>
                    <input className='bg-transparent border-b-1 border-white2 focus:outline-none' type='password' name='password'/>
                </label>
                <button className='p-2 bg-white2 text-black font-bold rounded hover:bg-black-light hover:text-white2 duration-200'>Login</button>
            </form>
            <p className='text-center mt-8 text-sm text-white2 leading-loose'>Dont have an account? Create your account <Link className='text-black bg-white2 font-bold p-1 rounded hover:bg-black-light hover:text-white2 duration-200' to='/register'>here.</Link></p>
        </div>
        <div className='h-[200px] lg:h-full lg:w-2/6'>
            <img className='h-full w-full object-cover' src='./images/img01.jpg' alt='logo chat app' />
        </div>
        <p className='bg-black text-white2 border-1 border-white2 font-bold p-2 rounded-r absolute bottom-[-25px] left-4'>Chat with random people!</p>
    </div>
  )
}
