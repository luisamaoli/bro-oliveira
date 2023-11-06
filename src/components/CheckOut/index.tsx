import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { firebase_app } from "../..";
import { Link } from 'react-router-dom';

const CheckOut = () => {
  const { items } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [orderId, setOrderId] = useState<string | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.price, 0);
  };

  const onAdd = async () => {
    const order = {
      buyer: { name, email, phone },
      items_list: items.map((item) => ({
        name: item.title,
        price: item.price,
      }))
    };

    try {
      const db = getFirestore(firebase_app);
      const orderCollection = collection(db, 'orders');

      const docRef = await addDoc(orderCollection, order);
      setOrderId(docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </label>
      </div>
      {items.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <h1>R${item.price}</h1>
        </div>
      ))}
      <p>Total: R${calculateTotal()}</p>
      <button onClick={onAdd} className="mt-2 py-0.5 px-0.5 rounded hover:bg-pink-600">Submit Order</button>
      {orderId && (
        <div>
          <p>Seu pedido foi confirmado, acompanhe ele por esse numero de rastreio: {orderId}</p>
          <Link to={'/sucesso_compra'} className="mt-2 py-0.5 px-0.5 rounded hover:bg-yellow-600">Confirme seu pedido</Link>
        </div>
      )}
    </div>
  );
};

export { CheckOut };
