import React from 'react';
import { useCart } from './CartContext';
import { usePopup } from './PopupContext';

function NavBar({onCartClick}) {
  const { cartItems, cartTotal } = useCart();
  const { setShowPopup } = usePopup(); 

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div id="nav">
      <div id="logo">sneakers</div>
      <div className="nav-buttons">
        <button>Collections</button>
        <button>Men</button>
        <button>Women</button>
        <button>About</button>
        <button>Contact</button>
      </div>
      <button id="cart-button" onClick={() => setShowPopup(true)}>
        <img src="cart.png" alt="Cart" />
        <p>{totalItems}</p>
        </button>
      <button id="user-button"><img src="user.webp" alt="User" /></button>
    </div>
  );
}

export default NavBar;