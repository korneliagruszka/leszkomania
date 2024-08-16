import React from 'react';
import './products.scss';
import Pictures from '../../assets/pexels-steve-1509534.jpg';
import Handicraft from '../../assets/pexels-ono-kosuki-5973919.jpg';
import Renovations from '../../assets/pexels-pixabay-209235.jpg';

const Products: React.FC = () => {
  return (
    <>
      <h2>Poznaj moje prace</h2>
      <div className="products_container">
      <div className="product_item">
        <p>Obrazy
        <img src={Pictures} alt="Pictures" />
        </p>
      </div>
      <div className="product_item">
        <p>Rękodzieło
        <img src={Handicraft} alt="Handcraft" />
        </p>
      </div>
      <div className="product_item">
        <p>Renowacje
        <img src={Renovations} alt="Renovations" />
        </p>
      </div>
    </div>
    </>
  );
};

export default Products;