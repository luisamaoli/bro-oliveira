import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const CardWidget = () => {
  const { items } = useCart();
  return (
    <div>
      {items.length === 0 ? (
        <></>
      ) : (
      <Link to="/cart" className="text-2xl pl-1.5 block text-center">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="text-sm">{items.length}</span>
        </div>
      </Link>
      )}
    </div>
  );
}

export { CardWidget }