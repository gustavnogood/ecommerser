import React, { useState } from 'react';
import { useCart } from './CartContext';
import { usePopup } from './PopupContext';
import CartPopup from './CartPopup';

function CartItemControl({ onAddToCart}) {
  const [quantity, setQuantity] = useState(1);
  const { cartItems, setCartItems, cartTotal, setCartTotal } = useCart();
  const { showPopup, setShowPopup } = usePopup();
  const itemPrice = 125; // Price of one item

  function increaseQuantity() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  }

  function handleAddToCartClick() {
    // Update cart items
    const updatedCart = [...cartItems, { quantity, price: itemPrice }];
    setCartItems(updatedCart);

    // Update cart total
    setCartTotal(cartTotal + (itemPrice * quantity));

    if (typeof onAddToCart === 'function') {
      onAddToCart();
    }

    setShowPopup(true);
  }

  return (
    <div className="action-buttons">
      <div className="quantity-control">
        <button className="quantity-btn decrease" onClick={decreaseQuantity}> - </button>
        <p className="quantity-value">{quantity}</p>
        <button className="quantity-btn increase" onClick={increaseQuantity}>+</button>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCartClick}>Add to cart</button>
      <CartPopup show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}

export default CartItemControl;
