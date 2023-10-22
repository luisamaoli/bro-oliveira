import { useEffect, useState } from "react";
import { Counter } from "../Counter";
import { Link } from 'react-router-dom'
import items from '../Item';

interface Item {
  id: number;
  title: string;
  price: number;
  pictureUrl: string;
  stock: number;
}


const ItemList = () => {
  const [items_list, setItemsList] = useState<Item[]>([]);

  const hadleGetItem = (): Promise<Item[]>  => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
  };

  useEffect(() => {
    const onMount = async () => {
      try {
        const result = await hadleGetItem();
        setItemsList(result);
      } catch (error) {
        console.log(error);
      }
    };
    onMount();
  }, []);

  return (
    <div className="flex items-center space-x-4">
      {items_list.map((item) => (
        <div key={item.id} className="py-0.5 px-0.5 text-xs">
          <h1>{item.title}</h1>
          <img className='w-1/2 h-auto max-w-full' src={require(`.//img/${item.title}.png`)} alt={item.title} />
          <h1>Price: {item.price}</h1>
          <Counter stock={item.stock} initial={0}/>
          <Link to={`/item/1`}><button className="mt-2 py-0.5 px-0.5 rounded hover:bg-pink-600">Saiba Mais</button></Link>
        </div>
      ))}
    </div>
  );
}

export { ItemList }
