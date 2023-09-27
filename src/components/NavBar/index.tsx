import React from 'react';
import './style.css';

const NavBar = () => {

  return(
    <nav className='w-full flex justify-between items-center p-5 bg-white shadow-xl'>
      <span>Bright Routes Organizer</span>
      <ul className='flex'>
        <li className='mx-2'><button>Entrar</button></li>
        <li className='mx-2'><a href=''>BRO Pro</a></li>
        <li className='mx-2'><a href=''>Como Funciona</a></li>
        <li className='mx-2'><a href=''>Quem somos</a></li>
      </ul>
    </nav>
  )
}

export { NavBar };