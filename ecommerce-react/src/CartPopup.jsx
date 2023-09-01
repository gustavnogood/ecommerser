import React from 'react';
import { useCart } from './CartContext';

function CartPopup({ show, onClose }) {
  const { cartItems, cartTotal } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (!show) return null;

  return (
    <>
      <div className="popup-backdrop" onClick={onClose}></div>
      <div className="popup">
        <button onClick={onClose}>Close</button>
        <img src="/Rectangle Copy 3.png" alt="Product" />
        <p>Items in cart: {totalItems}</p>
        <p>Total: ${cartTotal}</p>
      </div>
    </>
  );
}

export default CartPopup;