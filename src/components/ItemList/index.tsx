import { useEffect, useState } from "react";

interface IProps {
  items: Array<{
    id: number;
    title: string;
    price: number;
    pictureUrl: string;
  }>;
}

const ItemList = ({ items }: IProps) => {
  const [items_list, setItemsList] = useState<IProps["items"]>([]);

  const hadleGetItems = (): Promise<IProps["items"]>  => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
  };

  useEffect(() => {
    const onMount = async () => {
      try {
        const result = await hadleGetItems();
        setItemsList(result);
      } catch (error) {
        console.log(error);
      }
    };
    onMount();
  }, []);

  return (
    <div>
      {items_list.map((item) => (
        <div key={item.id} className="mt-2 py-0.5 px-0.5 text-xs">
          <h1>ID: {item.id}</h1>
          <h1>Title: {item.title}</h1>
          <h1>Price: {item.price}</h1>
          <img src={item.pictureUrl} alt={item.title} />
        </div>
      ))}
    </div>
  );
}

export { ItemList }
