import React, { useState } from 'react';

function CartItemControl() {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  }

  function handleAddToCart() {
    console.log(`Added ${quantity} item(s) to the cart.`);
  }

  return (
    <div>
      <div id="quantity">
        <button onClick={decreaseQuantity}> - </button>
        <p>{quantity}</p>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

export default CartItemControl;
