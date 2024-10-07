import React from 'react';
import Slider from "react-slick";
import './images.scss';
import Abstraction from '../../assets/image_abstration.jpg';
import Abstraction_2 from '../../assets/image_abstraction_2.jpg';
import Abstraction_3 from '../../assets/image_abstraction_3.jpg';
import Abstraction_4 from '../../assets/image_abstraction_4.jpg';
import Abstraction_5 from '../../assets/image_abstraction_5.jpg';
import Abstraction_6 from '../../assets/image_abstraction_6.jpg';
import Birds from '../../assets/image_birds.jpg';
import Birds_2 from '../../assets/image_birds_2.jpg'
import Face from '../../assets/image_face.jpg';
import Flowers from '../../assets/image_flowers.jpg';
import Green from '../../assets/image_green.jpg';
import Red from '../../assets/image_red.jpg';


const Images: React.FC = () => {

  const settings = {
    dots: true, // Punkty nawigacyjne
    infinite: true, // Nieskończone przewijanie
    speed: 500, // Szybkość animacji
    slidesToShow: 1, // Liczba widocznych slajdów
    slidesToScroll: 1, // Liczba przesuwanych slajdów
    autoplay: true, // Automatyczne przesuwanie
    autoplaySpeed: 3000, // Prędkość automatycznego przesuwania
  };

  return (
    <div className='images_container'>
      <h2 className='images_header'>Autorskie obrazy</h2>
      <div className='images_text'>
        <p>Obrazy maluję w przypływie weny ale także na specjalne zamówienie klienta. Mogę stworzyć spersonalizowany obraz według Twoich preferencji. Oto moje prace: </p>
      </div>
      <div className='images_portfolio'>
        <Slider {...settings}>
          <div>
            <img src={Abstraction} alt="Abstraction" />
          </div>
          <div>
            <img src={Abstraction_2} alt="Abstraction 2" />
          </div>
          <div>
            <img src={Abstraction_3} alt="Abstraction 3" />
          </div>
          <div>
            <img src={Abstraction_4} alt="Abstraction 4" />
          </div>
          <div>
            <img src={Abstraction_5} alt="Abstraction 5" />
          </div>
          <div>
            <img src={Abstraction_6} alt="Abstraction 6" />
          </div>
          <div>
            <img src={Birds} alt="Birds" />
          </div>
          <div>
            <img src={Birds_2} alt="Birds_2" />
          </div>
          <div>
            <img src={Face} alt="Face" />
          </div>
          <div>
            <img src={Flowers} alt="Flowers" />
          </div>
          <div>
            <img src={Green} alt="Green" />
          </div>
          <div>
            <img src={Red} alt="Red" />
          </div>
        </Slider>
      </div>
    </div>
  );
  };
  
  export default Images;