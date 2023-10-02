import './style.css';
import { HeaderImage } from '../HeaderImage';
import { Counter } from '../Counter';
import { CardWidget } from '../CardWidget';

// interface funciona como um contracts
interface IProps {
  nameCompany: string;
}

// Exemplo de componentes baseados em função
// const NavBar = (props: IProps) pode ser feito assim tambem, dai chamaria props.name
const NavBar = ({ nameCompany }: IProps) => {
  return(
    <nav className='w-full h-20 flex justify-between items-center p-5 bg-white shadow-xl'>
      <div className='flex items-center'>
        <HeaderImage/>
        <span className="ml-2 text-sm">{nameCompany}</span>
      </div>
      <ul className='flex items-center'>
        <li className='mx-2'>A Marca</li>
        <li className='mx-2'>Cano Curto</li>
        <li className='mx-2'>Cano Longo</li>
        <li className='mx-2'>Clássicas</li>
        <li className='mx-2'>Colecionáveis</li>
        <li className='mx-2'><button>Cadastrar/Login</button></li>
        <div>
          <CardWidget />
        </div>
      </ul>
    </nav>
  )
}

export { NavBar };