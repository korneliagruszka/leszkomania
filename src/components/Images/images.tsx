import React, { useState } from 'react';
import Slider from "react-slick";
import './images.scss';
import Abstraction from '../../assets/IMG_1060.jpg';
import Abstraction_2 from '../../assets/IMG_1062.jpg';
import Abstraction_3 from '../../assets/IMG_1074.jpg';
import Abstraction_4 from '../../assets/IMG_1075.jpg';
import Abstraction_5 from '../../assets/IMG_1069.jpg';
import Abstraction_6 from '../../assets/IMG_1063.jpg';
import Birds from '../../assets/IMG_1065.jpg';
import Birds_2 from '../../assets/IMG_1066.jpg';
import Face from '../../assets/IMG_1064.jpg';
import Flowers from '../../assets/IMG_1076.jpg';
import Green from '../../assets/IMG_1067.jpg';
import Red from '../../assets/IMG_1077.jpg';
import Gold from '../../assets/IMG_1071.jpg';

// Komponent strzałki lewej
const PreviousArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom_arrow custom_arrow_left`}
      onClick={onClick}
    >
      &#9664;  
    </div>
  );
};

// Komponent strzałki prawej
const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom_arrow custom_arrow_right`}
      onClick={onClick}
    >
      &#9654;  
    </div>
  );
};

const Images: React.FC = () => {

    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const images = [
      { src: Abstraction, description: 'Apokalipsa' },
      { src: Abstraction_2, description: 'Czerwie' },
      { src: Abstraction_3, description: 'Pustynia' },
      { src: Abstraction_4, description: 'Modernizm' },
      { src: Abstraction_5, description: 'Kwiaty' },
      { src: Abstraction_6, description: 'Drzewo' },
      { src: Birds, description: 'Pawie' },
      { src: Birds_2, description: 'Paw' },
      { src: Face, description: 'Twarz' },
      { src: Flowers, description: 'Kwiaty' },
      { src: Green, description: 'Wiosna' },
      { src: Red, description: 'Jesień' },
      { src: Gold, description: 'Promienie'},
    ];

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    nextArrow: <NextArrow />, 
    prevArrow: <PreviousArrow />
    //pauseOnHover: true,
  };

  // Funkcja otwierająca modal na danym indeksie obrazu
  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // Funkcja zamykająca modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  // Funkcja obsługująca przejście do następnego obrazu
  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  // Funkcja obsługująca przejście do poprzedniego obrazu
  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className='images_container'>
      <h2 className='images_header'>Autorskie obrazy</h2>
      <div className='images_text'>
        <p>Obrazy maluję w przypływie weny ale także na specjalne zamówienie klienta. Mogę stworzyć spersonalizowany obraz według Twoich preferencji. Oto moje prace: </p>
      </div>
      <div className='images_portfolio'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} onClick={() => openModal(index)}>
              <img src={image.src} alt={`Obraz ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      {isModalOpen && selectedImageIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <span className="modal_close" onClick={closeModal}>&times;</span>
            <div className="modal_navigation">
              <span className="modal_prev" onClick={handlePrev}>&#9664;</span>
              <img src={images[selectedImageIndex].src} alt="Powiększony obraz" className="modal_image" />
              <span className="modal_next" onClick={handleNext}>&#9654;</span>
            </div>
            <p className="modal_description">{images[selectedImageIndex].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;