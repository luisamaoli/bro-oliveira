import { useState } from "react";
import { Componenteaula02 } from "../Componenteaula02"
import { useCartt } from "../../contexts/CartContextAula";

const Componenteaula01 = () => {
  // receita de bolo do carrinhooooooo
  const [numero, setNumero] = useState(1)
  const {setTitle, title, teste} = useCartt();

  const hadleMudarNome = () => {
    teste(1);
    setTitle(title + numero.toString());
    setNumero(previous => previous + 1);
  }

  return(
    <>
      <Componenteaula02></Componenteaula02>
      <button onClick={hadleMudarNome}>Mudar o nome</button>
    </>
  )
}

export { Componenteaula01 }
