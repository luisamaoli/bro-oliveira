import { Link } from "react-router-dom"
import { IProduct } from "../../interface/product.interface";
import { useCart } from "../../contexts/CartContext";

interface IProps{
  item: IProduct;
}

const BuyerButton = ({item}: IProps) => {
  const {addItem} = useCart();

  const AddCartItem = () => {
    addItem(item, 1);
  }

  return(
    <div>
      <Link to={`/cart`}><button onClick={AddCartItem} className="mt-2 center rounded hover:bg-violet-600 text-base justify-center">Comprar</button></Link>
    </div>
  )
}

export { BuyerButton }