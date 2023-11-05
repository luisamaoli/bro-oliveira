import { Link } from "react-router-dom"
import { IProduct } from "../../interface/product.interface";
import { useCart } from "../../contexts/CartContext";
import { useCount } from "../../contexts/CountContext";

interface IProps{
  item: IProduct;
}

const BuyerButton = ({item}: IProps) => {
  const {addItem} = useCart();
  const {resultCount, resetCount} = useCount();

  const AddCartItem = () => {
    const count = resultCount();
    addItem(item, count);
    resetCount();
  }

  return(
    <div>
      <Link to={`/cart`}><button onClick={AddCartItem} className="mt-2 center rounded hover:bg-violet-600 text-base justify-center">Comprar</button></Link>
    </div>
  )
}

export { BuyerButton }