import React from 'react';
import { Login } from './components/Login.js';

import 'tailwindcss/tailwind.css';

export const App = () => {
  return (
    <>
        <div className='text-3xl'>Chat app</div>
        <Login />
    </>
  )
}
