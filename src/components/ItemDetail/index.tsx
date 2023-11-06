import { doc, getDoc, getFirestore } from "firebase/firestore";
import { IProduct } from "../../interface/product.interface";
import { useEffect, useState } from "react";
import { Counter } from "../Counter";
import { Loading } from "../Loading";
import { BuyerButton } from "../BuyerButton";

interface IProps{
  itemId: string;
}


const ItemDetail = ({itemId}: IProps) => {
  const [item, setItem] = useState<IProduct>();

  useEffect(() => {
    const onMount = async () => {
      const db = getFirestore();
      const itemRefCollection = doc(db, "items", itemId);
      const resp = await getDoc(itemRefCollection)
      const itemData = resp.data() as IProduct;
      setItem(itemData);
    }
    onMount();
  }, [itemId])

  return(
    <div className="">
      <h1 className="text-base">Conheca mais sobre o produto:</h1>
      {item ? (
        <div className="flex">
          <section className="w-1/3">
            <img className='w-full rounded-lg' src={item.pictureId} alt={item.title} />
          </section>
          <section className="w-2/3 flex items-center">
            <div className="text-center pl-6">
              <p className="text-sm">{item.title}</p>
              <p className="text-xs">{item.description}</p>
              <p className="text-sm">Price: R${item.price}</p>
              <div className="flex items-center justify-center">
                <div className="text-center pl-3">
                  <Counter stock={item.stock} />
                </div>
              </div>
                  <BuyerButton item={item} />
            </div>
          </section>
        </div>
      ) : (
        <Loading/>
      )}
    </div>
  );
};

export { ItemDetail }