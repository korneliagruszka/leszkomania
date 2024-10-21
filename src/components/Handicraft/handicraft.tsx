// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import './handicraft.scss';
// import Plates from '../../assets/decorative_plates.jpg';
// import Plate_1 from '../../assets/decoratove_plate_1.jpg';
// import Plate_2 from '../../assets/decoratove_plate_2.jpg';
// import Plate_3 from '../../assets/decoratove_plate_3.jpg';

// const PreviousArrow = (props: any) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom_arrow_left`}
//       style={{ ...style, display: 'block' }}
//       onClick={onClick}
//     >
//       &#9664; 
//     </div>
//   );
// };

// const NextArrow = (props: any) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom_arrow_right`}
//       style={{ ...style, display: 'block' }}
//       onClick={onClick}
//     >
//       &#9654; 
//     </div>
//   );
// };

// const Handicraft: React.FC = () => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [selectedDescription, setSelectedDescription] = useState<string | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const images = [
//     { src: Plates, description: 'Talerze ozdobne' },
//     { src: Plate_1, description: 'Talerz ozdobny 1' },
//     { src: Plate_2, description: 'Talerz ozdobny 2' },
//     { src: Plate_3, description: 'Talerz ozdobny 3' }
//   ];

//   const settings = {
//     dots: true, 
//     infinite: true, 
//     speed: 500, 
//     slidesToShow: 1, 
//     slidesToScroll: 1, 
//     autoplay: true, 
//     autoplaySpeed: 3000, 
//     nextArrow: <NextArrow />, 
//     prevArrow: <PreviousArrow />
//   };

//   const openModal = (image: string, description: string) => {
//     setSelectedImage(image);
//     setSelectedDescription(description);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedImage(null);
//     setSelectedDescription(null);
//   };

//   return (
//     <div className='handicraft_container'>
//       <h2 className='handicraft_header'>Rękodzieło</h2>
//       <div className='handicraft_text'>
//         <p>W tej sekcji znajdziesz skomponowane przeze mnie talerze ozdobne oraz zegary. Wykonuję również zdobienia przedmiotów na specjalne zamówienie klienta. Oto moje prace:</p>
//       </div>
//       <div className='handicraft_portfolio'>
//         <Slider {...settings}>
//           {images.map((image, index) => (
//             <div key={index} onClick={() => openModal(image.src, image.description)}>
//               <img src={image.src} alt={`Talerz ${index + 1}`} />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal" onClick={closeModal}>
//           <div className="modal_content" onClick={(e) => e.stopPropagation()}>
//             <span className="modal_close" onClick={closeModal}>&times;</span>
//             <img src={selectedImage!} alt="Powiększony obraz" className="modal_image" />
//             <p className="modal_description">{selectedDescription}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Handicraft;

import React, { useState } from 'react';
import Slider from 'react-slick';
import './handicraft.scss';
import Plates from '../../assets/decorative_plates.jpg';
import Plate_1 from '../../assets/decoratove_plate_1.jpg';
import Plate_2 from '../../assets/decoratove_plate_2.jpg';
import Plate_3 from '../../assets/decoratove_plate_3.jpg';

const PreviousArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom_arrow_left`}
      style={{ ...style, display: 'block' }}
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
      className={`${className} custom_arrow_right`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      &#9654; 
    </div>
  );
};

const Handicraft: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: Plates, description: 'Talerze ozdobne' },
    { src: Plate_1, description: 'Talerz ozdobny 1' },
    { src: Plate_2, description: 'Talerz ozdobny 2' },
    { src: Plate_3, description: 'Talerz ozdobny 3' }
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
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length); // Przechodzenie w pętli
    }
  };

  return (
    <div className='handicraft_container'>
      <h2 className='handicraft_header'>Rękodzieło</h2>
      <div className='handicraft_text'>
        <p>W tej sekcji znajdziesz skomponowane przeze mnie talerze ozdobne oraz zegary. Wykonuję również zdobienia przedmiotów na specjalne zamówienie klienta. Oto moje prace:</p>
      </div>
      <div className='handicraft_portfolio'>
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

export default Handicraft;
