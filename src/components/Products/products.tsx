import React from 'react';
import './products.scss';
import { useNavigate } from 'react-router-dom';
import Pictures from '../../assets/pexels-steve-1509534.jpg';
import Handicraft from '../../assets/pexels-ono-kosuki-5973919.jpg';
import Renovations from '../../assets/pexels-pixabay-209235.jpg';

const Products: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };  

  return (
    <div>
      <h2 className="products_header">Poznaj moje prace</h2>
      <div className="products_container">
        <div className="product_item" onClick={() => handleNavigation('/pictures')}>
          <img src={Pictures} alt="Obrazy" />
          <p>Obrazy</p>
          <button onClick={(e) => {e.stopPropagation(); handleNavigation('/pictures');}}>
            <i className="fa-solid fa-palette"></i>
          </button>
        </div>

        <div className="product_item" onClick={() => handleNavigation('/handicraft')}>
          <img src={Handicraft} alt="Rękodzieło" />
          <p>Rękodzieło</p>
          <button onClick={(e) => {e.stopPropagation(); handleNavigation('/handicraft')}}>
            <i className="fa-solid fa-hand-sparkles"></i>
          </button>
        </div>

        <div className="product_item" onClick={() => handleNavigation('/renovations')}>
          <img src={Renovations} alt="Renowacje" />
          <p>Renowacje</p>
          <button onClick={(e) => {e.stopPropagation(); handleNavigation('/renovations')}}>
            <i className="fa-solid fa-hammer"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;