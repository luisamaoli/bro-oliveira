import React, { useState } from 'react';
import './style.css';
import { CardWidget } from '../CardWidget';
import { HeaderImage } from '../HeaderImage';

// interface funciona como um contracts
interface IProps {
  nameCompany: string;
}

// Exemplo de componentes baseados em função
// const NavBar = (props: IProps) pode ser feito assim tambem, dai chamaria props.name
const NavBar = ({ nameCompany }: IProps) => {
  const [name, setName] = useState('0')
  return(
    <nav className='w-full flex justify-between items-center p-5 bg-white shadow-xl'>
      <span>{nameCompany}</span>
      <ul className='flex'>
        <HeaderImage />
        <li className='mx-2'>A Marca</li>
        <li className='mx-2'>Cano Curto</li>
        <li className='mx-2'>Cano Longo</li>
        <li className='mx-2'>Clássicas</li>
        <li className='mx-2'>Colecionáveis</li>
        <li className='mx-2'><button>Cadastrar/Login</button></li>
        <CardWidget />
      </ul>
      <span>{name}</span>
      <button onClick={()=> setName("1")}>Clicar Aqui</button>
    </nav>
  )
}

export { NavBar };