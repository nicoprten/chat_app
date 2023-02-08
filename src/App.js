import React from 'react';
import { Login } from './components/Login.js';


import 'tailwindcss/tailwind.css';

export const App = () => {

  return (
    // <div className='h-screen bg-no-repeat bg-cover bg-center' style={{backgroundImage: "url(" + "./images/lol.png" + ")"}}>
    <div className='bg-black h-screen bg-no-repeat bg-cover bg-center'>
        <img className='w-2/4' src='./images/bg-01.png' alt='imgtest.jpg' />
        <div className='text-3xl'>Chat app</div>
        <Login />
    </div>
  )
}
