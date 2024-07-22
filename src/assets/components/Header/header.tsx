import React from 'react';
import './header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Leszko<span>mania</span></h1>
      <nav>
        <ul>
          <li><a href="#about_me">O mnie</a></li>
          <li><a href="#products">Moje prace</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;