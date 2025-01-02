import React, { useState } from 'react';
import Slider from "react-slick";
import './images.scss';
import Abstraction from '../../assets/image_abstration.jpg';
import Abstraction_2 from '../../assets/image_abstraction_2.jpg';
import Abstraction_3 from '../../assets/image_abstraction_3.jpg';
import Abstraction_4 from '../../assets/image_abstraction_4.jpg';
import Abstraction_5 from '../../assets/image_abstraction_5.jpg';
import Abstraction_6 from '../../assets/image_abstraction_6.jpg';
import Birds from '../../assets/image_birds.jpg';
import Birds_2 from '../../assets/image_birds_2.jpg';
import Face from '../../assets/image_face.jpg';
import Flowers from '../../assets/image_flowers.jpg';
import Green from '../../assets/image_green.jpg';
import Red from '../../assets/image_red.jpg';

// Komponent strzałki lewej
const PreviousArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom_arrow_left slick-prev`} 
      style={{ ...style, display: "block" }}      
      onClick={onClick}
    >
      &#9664;  
    </div>
  );
};

// Komponent strzałki prawej
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom_arrow_right`}  
      style={{ ...style, display: "block" }}       
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
      { src: Abstraction, description: 'Opis dla obrazu 1' },
      { src: Abstraction_2, description: 'Opis dla obrazu 2' },
      { src: Abstraction_3, description: 'Opis dla obrazu 3' },
      { src: Abstraction_4, description: 'Opis dla obrazu 4' },
      { src: Abstraction_5, description: 'Opis dla obrazu 5' },
      { src: Abstraction_6, description: 'Opis dla obrazu 6' },
      { src: Birds, description: 'Opis dla obrazu 7' },
      { src: Birds_2, description: 'Opis dla obrazu 8' },
      { src: Face, description: 'Opis dla obrazu 9' },
      { src: Flowers, description: 'Opis dla obrazu 10' },
      { src: Green, description: 'Opis dla obrazu 11' },
      { src: Red, description: 'Opis dla obrazu 12' }
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