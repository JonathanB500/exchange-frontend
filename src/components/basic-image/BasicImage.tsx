import * as React from 'react';
import './BasicImage.css'
type Image = {
    src: string,
    alt: string,
    
};

export default function BasicImage(image: Image) {
  return (
    <div className='image-container'>
        <img src={image.src} alt={image.alt} id='image'></img>
    </div>

  );
}
