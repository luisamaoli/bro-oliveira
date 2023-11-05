import { collection, getDocs, getFirestore } from "firebase/firestore";
import { IProduct } from "../../interface/product.interface";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemsList = () => {
  const [items, setItems] = useState<IProduct[]>([]);

  useEffect(() => {
    const onMount = async () => {
      const db = getFirestore();
      const itemsRefCollection = collection(db, "items");
      const resp = await getDocs(itemsRefCollection)
      const itemsData: IProduct[] = resp.docs.map((doc) => {
        const data = doc.data() as IProduct;
        return {
          id: doc.id,
          title: data.title,
          description: data.description,
          price: data.price,
          picturetitle: data.picturetitle,
          pictureId: data.pictureId,
          stock: data.stock,
          isConfigurable: data.isConfigurable,
          categoryId: data.categoryId,
        };
      });

      setItems(itemsData);
    }
    onMount();
  }, [])

  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.id} className="py-0.5 px-0.5 text-xs">
          <h1>{item.title}</h1>
          <img className='w-full h-auto max-w-full rounded-lg' src={item.pictureId} alt={item.title} />
          <Link to={`/item/${item.id}`}><button className="mt-2 py-0.5 px-0.5 rounded hover:bg-pink-600">Saiba Mais</button></Link>
        </div>
      ))}
    </div>
  )
}

export { ItemsList }