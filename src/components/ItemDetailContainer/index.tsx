import React, { useEffect, useState } from 'react';
import items_details from '../ItemDetail';
import { useParams } from 'react-router-dom';

interface Item_Detail {
  id: number;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
  isConfigurable: boolean;
}

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item_delayed, setItem] = useState<Item_Detail[]>([]);

  const hadleGetItem = (): Promise<Item_Detail[]>  => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items_details);
      }, 2000);
    });
  };

  useEffect(() => {
    const onMount = async () => {
      try {
        if (id === undefined) {
          return <div>ID do produto não fornecido.</div>;
        }
        const productId = parseInt(id, 10);
        const result = await hadleGetItem();
        const selectedItem = result.find((item) => item.id === productId);
        setItem(selectedItem ? [selectedItem] : []);
      } catch (error) {
        console.log(error);
      }
    };
    onMount();
  }, [id]);

  return (
    <div className="flex items-center justify-center">
      <h1>Conheca mais sobre o produto:</h1>
      {item_delayed.map((item) => (
      <div key={item.id}>
        <img className='w-1/2' src={require(`.//img/${item.title}.png`)} alt="" />
        <p>Title: {item.title}</p>
        <p>Price: {item.price}</p>
      </div>
    ))}
    </div>
  );
}


export { ItemDetailContainer }