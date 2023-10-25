import { useCart } from "../../contexts/CartContext"

const Componente03 = () => {
    const {title} = useCart();
    return(
        <h1>Componente03 {title}</h1>
    )
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