import './style.css';
import { HeaderImage } from '../HeaderImage';
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
        <li className='mx-2'>A Historia</li>
        <li className='mx-2'>Todos</li>
        <li className='mx-2'>Sem Gluten</li>
        <li className='mx-2'>Sem Lactose</li>
        <div>
          <CardWidget />
        </div>
      </ul>
    </nav>
  )
}

export { NavBar };