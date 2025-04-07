/**
 * Handicraft Component
 *
 * This component showcases handcrafted items created by the artist.
 * It includes a carousel slider for displaying images and a modal for viewing images in detail.
 */

import React, { useState } from "react";
import Slider from "react-slick";
import "./handicraft.scss";
import Dagger from "../../assets/IMG_1078.jpg";
import Dagger_2 from "../../assets/IMG_1079.jpg";
import Plate_2 from "../../assets/IMG_1072.jpg";
import Plate_3 from "../../assets/IMG_1073.jpg";

const PreviousArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom_arrow_left_handicraft`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      &#9664;
    </div>
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom_arrow_right_handicraft`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      &#9654;
    </div>
  );
};

const Handicraft: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: Dagger, description: "Sztylet przód" },
    { src: Dagger_2, description: "Sztylet tył" },
    { src: Plate_2, description: "Talerz zegar" },
    { src: Plate_3, description: "Talerz złoty" },
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
    prevArrow: <PreviousArrow />,
  };

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length); // Przechodzenie w pętli
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length
      ); // Przechodzenie w pętli
    }
  };

  return (
    <div className="handicraft_container">
      <h2 className="handicraft_header">Rękodzieło</h2>
      <div className="handicraft_text">
        <p>
          W tej sekcji znajdziesz skomponowane przeze mnie talerze ozdobne oraz
          zegary. Wykonuję również zdobienia przedmiotów na specjalne zamówienie
          klienta. Oto moje prace:
        </p>
      </div>
      <div className="handicraft_portfolio">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} onClick={() => openModal(index)}>
              <img src={image.src} alt={`Talerz ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      {isModalOpen && selectedImageIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <span className="modal_close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal_navigation">
              <span className="modal_prev" onClick={handlePrev}>
                &#9664;
              </span>
              <img
                src={images[selectedImageIndex].src}
                alt="Powiększony obraz"
                className="modal_image"
              />
              <span className="modal_next" onClick={handleNext}>
                &#9654;
              </span>
            </div>
            <p className="modal_description">
              {images[selectedImageIndex].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Handicraft;
