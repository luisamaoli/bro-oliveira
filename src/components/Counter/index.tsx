import { useState } from "react"

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

  return(
    <div>
      {/* usando a arrow function dentro de SetCount para que o valor esteja sempre atualizado */}
      <section className='flex'>
        <h1 className="mt-2 py-0.5 px-1.5 rounded hover:bg-pink-600 text-sm">{count}</h1>
        <button onClick={handleClick} className="mt-2 py-0.5 px-3.5 rounded hover:bg-pink-600 text-sm">Adicionar ao carrinho</button>
      </section>
    </div>
  )
}

export { Counter }