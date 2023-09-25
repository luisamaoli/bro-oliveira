import React from 'react';
import './style.css';

const NavBar = () => {

  return(
    <nav className='navbar'>
      <span>Bright Routes Organizer</span>
      <ul style={{ display: 'flex' }}>
        <li><button>Entrar</button></li>
        <li><a href=''>BRO Pro</a></li>
        <li><a href=''>Como Funciona</a></li>
        <li><a href=''>Quem somos</a></li>
      </ul>
    </nav>
  )
}

export { NavBar };