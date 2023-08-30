import React from 'react';

function QuantitySelector({ quantity, increaseQuantity, decreaseQuantity }) {
  return (
    <div id="quantity">
      <button onClick={decreaseQuantity}> - </button>
      <p>{quantity}</p>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
}

export default QuantitySelector;
