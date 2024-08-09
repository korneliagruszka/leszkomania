import React from 'react';
import './aboutMe.scss';
import aboutMePhoto from '../../assets/about_me_photo.jpg';

const AboutMe: React.FC = () => {
  return (
    <div className="about_me_container">
      <div className="about_me_left_side">
          <p>Witaj w świecie mojej twórczości. Jestem Leszek tworzę obrazy, rękodzieło a czasem również zdarza mi się nadać przedmiotom całkiem nowe życie. W swoją twórczość wkładam całe serce i wolny czas, pomysłów mam wiele i skrupulatnie je realizuję. Zapraszam Cię do poznania moich prac.</p>
          <button>Moje prace</button>
          <h2>Leszko<span>mania</span></h2>
      </div>
      <div className="about_me_image">
          <img src={aboutMePhoto} alt="About Me" />
      </div>
    </div>
    
  );
};

export default AboutMe;