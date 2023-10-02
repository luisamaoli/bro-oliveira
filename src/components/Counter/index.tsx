import { useEffect, useState } from "react"
import { CardWidget } from '../CardWidget';

interface IProps {
  stock: number;
  initial: number;
}

const Counter = (props: IProps) => {
  const { stock, initial } = props;
  const [count, setCount] = useState<number>(initial);


  const handleClick = () => {
    if (count < stock){
      setCount((value) => value + 1)
    }
  }

  // useEffect(()=>{
  //   return () => {
  //     console.log('Saiu')
  //   }
  // }, [])

  return(
    <div>
      {/* usando a arrow function dentro de SetCount para que o valor esteja sempre atualizado */}
      <button onClick={handleClick} className="mt-2 py-0.5 px-0.5 rounded hover:bg-pink-600 text-xs">Comprar</button>
      <h1 className="mt-2 py-0.5 px-0.5 rounded hover:bg-pink-600 text-xs">{count}</h1>
    </div>
  )
}

export { Counter }