import { useCart } from "../../contexts/CartContext"
import { IProduct } from "../../interface/product.interface";

const Componente03 = () => {
  const { items } = useCart();

  return (
    <div>
      <h1>Cart Items:</h1>
      <ul>
        {items.map((item: IProduct) => (
          <li key={item.id}>
            {item.title} - Price: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
  }

  export { Componente03 }

// antes de implementar context
// interface IProps{
//     title: string;
// }


// const Componente03 = ({title}: IProps) => {
//     return(
//       <>
//         <h1>Componente03 {title}</h1>
//       </>
//     )
//   }

//   export { Componente03 }