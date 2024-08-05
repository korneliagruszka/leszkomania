import React, { useState, useEffect } from 'react';
import './header.scss';
import AboutMe from '../AboutMe/aboutMe';
import Products from '../Products/products';
import Contact from '../Contact/contact';

const Header: React.FC = () => {
  const [currentView, setCurrentView] = useState('about_me');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (currentView !== 'products') {
      const section = document.getElementById(currentView);
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentView]);

  const renderView = () => {
    if (currentView === 'products') {
      return <Products />;
    }
    return null;
  };

  return (
    <>
      <header className="header">
        <h1>Leszko<span>mania</span></h1>
        <nav>
          <ul className="navigation">
            <li><a href="#about_me" onClick={() => setCurrentView('about_me')}>O mnie</a></li>
            <li
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <a href="#products" onClick={() => setCurrentView('products')}>Moje prace</a>
              {isDropdownOpen && (
                <ul className="dropdown_menu">
                  <li><a href="#images" onClick={() => setCurrentView('products')}>Obrazy</a></li>
                  <li><a href="#handicraft" onClick={() => setCurrentView('products')}>Rękodzieło</a></li>
                  <li><a href="#renovations" onClick={() => setCurrentView('products')}>Renowacje</a></li>
                </ul>
              )}
            </li>
            <li><a href="#contact" onClick={() => setCurrentView('contact')}>Kontakt</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {renderView()}
        <section id="about_me">
          <AboutMe />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Header;