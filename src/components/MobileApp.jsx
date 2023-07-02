// REACT
import React from "react";

// FROM ASSETS
import mobileApp from "../assets/svg/mobile_application.svg";
import appstore from "../assets/png/appstore_icon.png";
import playmarket from "../assets/png/googleplay_icon.png";

// CSS STYLES
import "../styles/mobile-app.scss";

export const MobileApp = () => {
  return (
    <section className="mobile-app">
      <div className="mobile-app-img">
        <img src={mobileApp} alt="Mobile App" />
      </div>
      <div className="mobile-app-info">
        <h2>Путешествовать удобнее с приложением Taksim</h2>
        <p>
          Все поездки в одном месте, самая последняя информация и специальные
          функции для смартфонов.
        </p>
        <div className="mobile-app-buttons">
          <div className="mobile-app-button-appstore">
            <img src={appstore} alt="App store icon" />
            <span>App Store</span>
          </div>
          <div className="mobile-app-button-playmarket">
            <img src={playmarket} alt="Play store icon" />
            <span>Play Market</span>
          </div>
        </div>
      </div>
    </section>
  );
};
