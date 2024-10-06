import React from 'react';
import './images.scss';
import Abstraction from '../../assets/image_abstration.jpg';

const Images: React.FC = () => {
    return (
      <div className='images_container'>
        <h2 className='images_header'>Autorskie obrazy</h2>
        <div className='images_text'>
        <p>Obrazy maluję w przypływie weny ale także na specjalne zamówienie klienta. Mogę stworzyć spersonalizowany obraz według Twoich preferencji. Oto moje prace: </p></div>
        <div className='images_portfolio'>
          <img src={Abstraction} alt="Abstraction" />
        </div>
      </div>
    );
  };
  
  export default Images;