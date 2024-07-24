// import React from 'react';
// import './header.scss';

// const Header: React.FC = () => {
//   return (
//     <header className="header">
//       <h1>Leszko<span>mania</span></h1>
//       <nav>
//         <ul className="navigation">
//           <li><a href="#about_me">O mnie</a></li>
//           <li><a href="#products">Moje prace</a></li>
//           <li><a href="#contact">Kontakt</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import './header.scss';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <h1>Leszko<span>mania</span></h1>
      <nav>
        <ul className="navigation">
          <li><a href="#about_me">O mnie</a></li>
          <li 
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <a href="#products">Moje prace</a>
            {isDropdownOpen && (
              <ul className="dropdown_menu">
                <li><a href="#images">Obrazy</a></li>
                <li><a href="#handicraft">Rękodzieło</a></li>
                <li><a href="#renovations">Renowacje</a></li>
              </ul>
            )}
          </li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
