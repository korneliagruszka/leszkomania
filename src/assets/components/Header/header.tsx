import React from 'react';
import './header.scss';

//przykładowy nagłówek

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Leszkomania</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
