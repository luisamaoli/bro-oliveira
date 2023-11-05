import { IProduct } from "../../interface/product.interface";
import { useCart } from "../../contexts/CartContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps{
  item: IProduct;
}

const TrashButton = ({item}: IProps) => {
  const {removeItem} = useCart();

  const RemoveCartItem = () => {
    removeItem(item, 1);
  }

  return(
    <div>
      <button onClick={RemoveCartItem} className="flex items-center justify-center rounded hover:bg-red-600 text-base">
        <FontAwesomeIcon icon={faTrash} className="mr-2" />
        Remover
      </button>
    </div>
  )
}

export { TrashButton }