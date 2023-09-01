import React, {useState} from 'react';
import ImageGallery from './ImageGallery';
import CartItemControl from './CartItemControl';

function MainContent() {

  function handleCartClick() {
    setShowPopup(true);
  }
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div id="main">
      <ImageGallery />
      <div id="textbox">
        <h1>fett ballt snickersmärke</h1>
        <h2>coola snickers</h2>
        <p>Glid runt i stans fetaste dojjer, lämna myggjägarna och salmiakbalkarna hemma för nu blir fest!</p>
        <p id="price">$125.00</p>
        <p id="sum">$250.00</p>
        
        <CartItemControl onAddToCart={handleCartClick} showPopup={showPopup} onClose={() => setShowPopup(false)} />
        
      </div>
    </div>
  );
}

export default MainContent;
