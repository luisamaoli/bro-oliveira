import { useCount } from "../../contexts/CountContext";

interface IProps {
  stock: number;
}

const Counter = (props: IProps) => {
  const {resultCount, addCount, deductCount} = useCount();
  const { stock } = props;


  const handleClickAdd = () => {
    const count = resultCount();
    if (stock > count) {
      addCount(1);
    }
  }

  const handleClickDeduct = () => {
    const count = resultCount();
    if (count > 0){
      deductCount(1);
    }
  }

  return(
    <div>
      {/* usando a arrow function dentro de SetCount para que o valor esteja sempre atualizado */}
      <section className='flex items-center'>
        <button onClick={handleClickDeduct} className="mt-2 py-0.5 px-3.5 rounded hover:bg-pink-600 text-sm">-</button>
        <h1 className="mt-2 py-0.5 px-1.5 rounded hover:bg-pink-600 text-sm">{resultCount()}</h1>
        <button onClick={handleClickAdd} className="mt-2 py-0.5 px-3.5 rounded hover:bg-pink-600 text-sm">+</button>
      </section>
    </div>
  )
}

export { Counter }