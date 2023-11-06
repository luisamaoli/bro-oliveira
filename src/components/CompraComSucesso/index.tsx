import { useEffect } from 'react';
import { useCart } from "../../contexts/CartContext";

const CompraComSucesso = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div>
      <h1>Compra concluída com sucesso</h1>
    </div>
  );
}

export { CompraComSucesso };