import React from 'react';

function NavBar() {
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
      <button id="cart-button"><img src="cart.png" alt="Cart" /></button>
      <button id="user-button"><img src="user.webp" alt="User" /></button>
    </div>
  );
}

export default NavBar;