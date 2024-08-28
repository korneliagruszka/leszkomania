import React from 'react';
import './contact.scss';

const Contact: React.FC = () => {
  return (
    <div className="contact_container">
      <h2>Leszko<span>mania</span></h2>
      <p>Jeśli zainteresował Cię jakiś produkt, skontaktuj się ze mną.
        <br />
        <i className="fa-duotone fa-solid fa-phone"></i> 508 173 845
        <br />
        <i className="fa-sharp fa-solid fa-envelope"></i> leszek.gruszka@gmail.com
      </p>
    </div>
  );
};

export default Contact;