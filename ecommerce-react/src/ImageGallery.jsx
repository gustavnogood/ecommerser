import React, { useState } from 'react';

function ImageGallery() {
  const [mainImageSrc, setMainImageSrc] = useState("Rectangle.png");

  function handleImageHover(newSrc) {
    setMainImageSrc(newSrc);
  }

  return (
    <div id="pictures" onMouseLeave={() => setMainImageSrc("Rectangle.png")}>
      <img src={mainImageSrc} alt="mainProductimg" />

      <img 
        src="rectangle copy 5.png" 
        alt="pickedImage" 
        onMouseEnter={() => handleImageHover("rectangle copy 5.png")} 
      />
      <img 
        src="Rectangle Copy 2.png" 
        alt="smallImage3" 
        onMouseEnter={() => handleImageHover("Rectangle Copy 2.png")} 
      />
      <img 
        src="Rectangle Copy 4.png" 
        alt="smallImage1" 
        onMouseEnter={() => handleImageHover("Rectangle Copy 4.png")} 
      />
      <img 
        src="Rectangle Copy 3.png" 
        alt="smallImage2" 
        onMouseEnter={() => handleImageHover("Rectangle Copy 3.png")} 
      />
    </div>
  );
}

export default ImageGallery;
