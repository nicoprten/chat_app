import React from 'react';
import { Login } from './components/Login.js';


import 'tailwindcss/tailwind.css';

export const App = () => {

  return (
    // <div className='h-screen bg-no-repeat bg-cover bg-center' style={{backgroundImage: "url(" + "./images/lol.png" + ")"}}>
    <div className='bg-black pt-[200px] h-screen bg-no-repeat bg-cover bg-center'>
        <div className='hidden'>Chat app</div>
        <Login />
    </div>
  )
}
