import { useState } from "react";
import { useCart } from "../../contexts/CartContext"
import { Componente02 } from "../Componente02"

const Componente01 = () => {
  // receita de bolo do carrinhooooooo
  // const [numero, setNumero] = useState(1)
  // const {setTitle, title, teste} = useCart();

  // const hadleMudarNome = () => {
  //   teste(1);
  //   setTitle(title + numero.toString());
  //   setNumero(previous => previous + 1);
  // }

  return(
    <>
      <h1>Componente01</h1>
      {/* <Componente02></Componente02>
      <button onClick={hadleMudarNome}>Mudar o nome</button> */}
    </>
  )
}

export { Componente01 }


// antes de implementar context
// const Componente01 = () => {
//   return(
//     <>
//       <h1>Componente01</h1>
//       <Componente02 title={'oi'}></Componente02>
//     </>
//   )
// }

// export { Componente01 }