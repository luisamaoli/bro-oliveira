import { HeaderImage } from '../HeaderImage';
import { CardWidget } from '../CardWidget';
import { Link } from 'react-router-dom';

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
        <Link to={`/`}><button className="ml-2 mt-2 mr-4 center rounded hover:bg-yellow-50 text-base justify-center">{nameCompany}</button></Link>
      </div>
      <ul className='flex items-center'>
        <Link to={`/historia`}><button className="mt-2 mr-4 center rounded hover:bg-yellow-50 text-base justify-center">A Historia</button></Link>
        <Link to={`/catalogo`}><button className="mt-2 mr-4 center rounded hover:bg-yellow-50 text-base justify-center">Todos os Produtos</button></Link>
        <div>
          <CardWidget />
        </div>
      </ul>
    </nav>
  )
}

export { NavBar };