import React from 'react';
import './style.css';

// interface funciona como um contracts
interface IProps {
  name: string;
}

// Exemplo de componentes baseados em função
const NavBar = (props: IProps) => {
  return(
    <nav className='w-full flex justify-between items-center p-5 bg-white shadow-xl'>
      <span>{props.name}</span>
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