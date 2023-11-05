import { Link, useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail';


const ItemDetailContainer = () => {
  const { id } = useParams();

  if (id === undefined) {
    return <Link to={'/'}></Link>
  }

  return (
    <div className="container mx-auto py-10 text-6xl">
      <div><ItemDetail itemId={id} /></div>
    </div>
  );
}


export { ItemDetailContainer }