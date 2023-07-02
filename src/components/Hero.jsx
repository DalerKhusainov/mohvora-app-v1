// REACT
import React from "react";

// REACT COMPONENTS
import { SearchForm } from "./SearchForm";

// FROM ASSETS
import hero from "../assets/svg/hero.svg";

// STYLES
import "../styles/hero.scss";

export const Hero = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-heading">
        Поездки на ваш выбор по самым низким ценам
      </h1>
      <div className="hero">
        <SearchForm isSearchPage={false} isHomePage={true} />
        <div className="hero-img">
          <img
            className="hero-svg"
            src={hero}
            alt="Two people travel by the car"
          />
        </div>
      </div>
    </section>
  );
};
