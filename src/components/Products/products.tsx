import React from 'react';
import './products.scss';
import { useNavigate } from 'react-router-dom';
import Pictures from '../../assets/pexels-steve-1509534.jpg';
import Handicraft from '../../assets/pexels-ono-kosuki-5973919.jpg';
import Renovations from '../../assets/pexels-pixabay-209235.jpg';

const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="products_header">Poznaj moje prace</h2>
      <div className="products_container">
        <div className="product_item">
          <img src={Pictures} alt="Obrazy" />
          <p>Obrazy</p>
          <button onClick={() => navigate('/pictures')}>
            <i className="fa-solid fa-palette"></i>
          </button>
        </div>
        <div className="product_item">
          <img src={Handicraft} alt="Rękodzieło" />
          <p>Rękodzieło</p>
          <button onClick={() => navigate('/handicraft')}>
            <i className="fa-solid fa-hand-sparkles"></i>
          </button>
        </div>
        <div className="product_item">
          <img src={Renovations} alt="Renowacje" />
          <p>Renowacje</p>
          <button onClick={() => navigate('/renovations')}>
            <i className="fa-solid fa-hammer"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;