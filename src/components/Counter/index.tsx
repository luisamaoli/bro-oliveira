import { useEffect, useState } from "react"
import { CardWidget } from '../CardWidget';

const Counter = () => {
  const [count, setCount] = useState<number>(0);


  const handleClick = () => {
    if (count < 4){
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