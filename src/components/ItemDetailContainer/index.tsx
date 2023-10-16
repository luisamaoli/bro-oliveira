import React, { useEffect, useState } from 'react';

// interface funciona como um contracts
interface IProps {
  item: Array<{
    id: number;
    title: string;
    price: number;
    pictureUrl: string;
  }>;
}


const ItemDetailContainer = ({ item }: IProps) => {
  const [item_delayed, setItem] = useState<IProps["item"]>([]);

  const hadleGetItem = (): Promise<IProps["item"]>  => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(item);
      }, 2000);
    });
  };

  useEffect(() => {
    const onMount = async () => {
      try {
        const result = await hadleGetItem();
        setItem(result);
      } catch (error) {
        console.log(error);
      }
    };
    onMount();
  }, []);

  return (
    <div>
      {item_delayed.map((item) => (
      <div key={item.id}>
        <p>ID: {item.id}</p>
        <p>Title: {item.title}</p>
        <p>Price: {item.price}</p>
        <img src={item.pictureUrl} alt={item.title} />
      </div>
    ))}
    </div>
  );
}


export { ItemDetailContainer }