import { Link } from "react-router-dom"
import { IProduct } from "../../interface/product.interface";
import { useCart } from "../../contexts/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

const CloseCarButton = () => {
  const [orderId, setOrderId] = useState(1);

  const onAdd = async () => {
    const order = {
      buyer: { name: "Luisa", email: "luisa@hotmail.com", phone:"3287892739273897"},
      items: [
        {
          name: "Rosca de Canela",
          price: 8.00,
        },
        {
          name: "Pao de Queijo",
          price: 3.00,
        },
      ],
      total: 11.00,
    }
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    const res = await addDoc(ordersCollection, order)
    setOrderId(parseInt(res.id, 10));
  }

  return(
    <div>
      {/* <Link to={}><button onClick={onAdd} className="mt-2 center rounded hover:bg-violet-600 text-base justify-center">Finalizar Compra</button></Link>
      <TelaCheckout id={orderId}/> */}
    </div>
  )
}

export { CloseCarButton }