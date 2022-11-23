import React from "react";
import bgLogo from "../assets/bg.jpg"

const Hero = () => {
  return (
    <div className="hero-baner" style={{ backgroundImage: `url(${bgLogo})` }}>

      <div className="container">
        <div className="hero-banner-content">
          <h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
          <p>Nie wierz nam na słowo - sprawdź</p>
          <a href="#services">Oferta</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;