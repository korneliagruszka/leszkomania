/**
 * Header Component
 *
 * This component renders the navigation bar for the application.
 * It includes links to different sections of the website and a dropdown menu for product categories.
 */

import React, { useState, useEffect } from "react";
import "./header.scss";

const Header: React.FC = () => {
  const [currentView, setCurrentView] = useState("about_me");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const section = document.getElementById(currentView);
    section?.scrollIntoView({ behavior: "smooth" });
  }, [currentView]);

  return (
    <>
      <header className="header">
        <h1>
          <a href="/" className="header_text">
            Leszko<span>mania</span>
          </a>
        </h1>
        <nav>
          <ul className="navigation">
            <li>
              <a href="/" onClick={() => setCurrentView("about_me")}>
                O mnie
              </a>
            </li>
            <li
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <a href="#products" onClick={() => setCurrentView("products")}>
                Moje prace
              </a>
              {isDropdownOpen && (
                <ul className="dropdown_menu">
                  <li>
                    <a
                      href="/pictures"
                      onClick={() => setCurrentView("products")}
                    >
                      Obrazy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/handicraft"
                      onClick={() => setCurrentView("products")}
                    >
                      Rękodzieło
                    </a>
                  </li>
                  <li>
                    <a
                      href="/renovations"
                      onClick={() => setCurrentView("products")}
                    >
                      Renowacje
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#contact" onClick={() => setCurrentView("contact")}>
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
