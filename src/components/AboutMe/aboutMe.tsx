/**
 * AboutMe Component
 *
 * This component displays an introduction about the artist and their work.
 * It includes a button to scroll smoothly to the "Products" section.
 */

import React from "react";
import "./aboutMe.scss";

const AboutMe: React.FC = () => {
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="about_me_container">
      <div className="about_me_left_side">
        <p>
          Witaj w świecie mojej twórczości. Jestem Leszek, tworzę obrazy,
          rękodzieło, a czasem również zdarza mi się nadać przedmiotom całkiem
          nowe życie. W swoją twórczość wkładam całe serce i wolny czas.
          Pomysłów mam wiele i skrupulatnie je realizuję. Zapraszam Cię do
          poznania moich prac.
        </p>
        <button onClick={scrollToProducts}>Moje prace</button>
        <h2>
          Leszko<span>mania</span>
        </h2>
      </div>
    </div>
  );
};

export default AboutMe;
