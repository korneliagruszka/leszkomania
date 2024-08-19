import React from 'react';
import './products.scss';
import Pictures from '../../assets/pexels-steve-1509534.jpg';
import Handicraft from '../../assets/pexels-ono-kosuki-5973919.jpg';
import Renovations from '../../assets/pexels-pixabay-209235.jpg';

const Products: React.FC = () => {
  return (
    <>
      <h2 className="products_header">Poznaj moje prace</h2>
      <div className="products_container">
      <div className="product_item">
        <p>Obrazy
        <img src={Pictures} alt="Pictures" />
        <button>
          <i className="fa-solid fa-palette"></i>
        </button>
        </p>
      </div>
      <div className="product_item">
        <p>Rękodzieło
        <img src={Handicraft} alt="Handcraft" />
        <button>
        <i className="fa-solid fa-hand-sparkles"></i>
        </button>
        </p>
      </div>
      <div className="product_item">
        <p>Renowacje
        <img src={Renovations} alt="Renovations" />
        <button>
        <i className="fa-solid fa-hammer"></i>
        </button>
        </p>
      </div>
    </div>
    </>
  );
};

export default Products;