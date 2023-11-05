import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { IProduct } from "../../interface/product.interface";
import { TrashButton } from "../TrashButton";

const Cart = () => {
  const { items } = useCart();

  const total = items.reduce((acc: number, item: IProduct) => {
    return acc + item.price;
  }, 0);

  return (
    <div className="container mx-auto">
      {total === 0 ? (
        <Link to={'/'}><button className="mt-2 py-0.5 px-0.5 rounded hover:bg-pink-600">Nao ha itens no carrinho clique aqui para voltar na Home</button></Link>
      ) : (
        <div>
          <div className="mb-4">
            <h1>Cart Items:</h1>
            <ul>
              {items.map((item: IProduct) => (
                <li key={item.id}>{item.title} - Price: ${item.price}
                  <TrashButton item={item}/>
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="mt-4">
            <h1>Total: ${total.toFixed(2)}</h1>
            <Link to={'/'}><button className="mt-2 py-0.5 px-0.5 rounded hover:bg-pink-600">Continuar Comprando</button></Link>
            <Link to={'/checkout'}><button className="mt-2 py-0.5 px-0.5 rounded hover:bg-pink-600">Finalizar Compra</button></Link>
          </div>
        </div>
      )}
    </div>
  );
}


export { Cart }