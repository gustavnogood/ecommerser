import React, { useState } from 'react';
import NavBar from './NavBar.jsx';
import MainContent from './MainContent.jsx';
import './App.css';
import { CartProvider } from './CartContext';
import { PopupProvider } from './PopupContext.jsx';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  function handleCartClick() {
    setShowPopup(true);
  }

  return (
    <CartProvider>
      <PopupProvider>
      <div className="App">
        <NavBar onCartClick={handleCartClick} />
        <MainContent />
      </div>
      </PopupProvider>
    </CartProvider>
  );
}

export default App;
