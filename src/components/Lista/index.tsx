import { memo, useEffect, useState } from "react";

interface IProps{
  title: string
}

// Caso a gente chame essa lista em alguma pagina e digamos que ela seja constante, usamos o MEMO
// EX: uma mudanca na lupa de busca nao interferir no que ta sendo exibido na tela antes de o botao de buscar ser ativado
const Lista = () => {
  const [listaTitulos, setlistaTitulos] = useState<IProps[]>([]);

  useEffect(() => {
    const onMount = async() => {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts');
      setlistaTitulos(result);
    }
    onMount();
  }, [])

  return(
    <div>
      {listaTitulos.map(item => (
        title={item.title}
      ))}
    </div>

    )
  }


export default memo(Lista);