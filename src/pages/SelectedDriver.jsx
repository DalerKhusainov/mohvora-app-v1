// REACT
import React from "react";

// FROM ASSETS
import user_2 from "../assets/jpg/user-2.jpg";

// CSS STYLES
import "../styles/selected-driver.scss";

// MATERIAL UI
import TelegramIcon from "@mui/icons-material/Telegram";
import CallIcon from "@mui/icons-material/Call";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import PetsIcon from "@mui/icons-material/Pets";
import MusicOffIcon from "@mui/icons-material/MusicOff";

export const SelectedDriver = () => {
  return (
    <>
      <section className="selected-driver-section">
        <h2 className="publish-date">15 июль</h2>
        <div className="publish-direction-col">
          <p className="publish-direction-city">Душанбе</p>
          <div className="location-dots-col">
            <div className="location-cycle location-cycle--1"></div>
            <div className="location-line"></div>
            <div className="location-cycle location-cycle--2"></div>
          </div>
          <p className="publish-direction-city">Худжанд</p>
        </div>
        <p className="publish-time">09:00</p>
        <div className="passenger-total-col">
          <p className="passenger-total-text">Итого за 1 пассажира</p>
          <p className="total-price">80c</p>
        </div>
        <div className="publisher-info-col">
          <div className="publisher-name-rate-col">
            <p className="publisher-name-text">Гулноза</p>
            <p className="publisher-age-text">25 лет</p>
          </div>
          <img src={user_2} alt="" />
        </div>
        <div className="publish-cta-col">
          <div className="publish-chat-col">
            <TelegramIcon color="inherit" fontSize="inherit" />
            <p>Связаться с Гулноза</p>
          </div>
          <div className="publish-call-col">
            <CallIcon color="inherit" fontSize="inherit" />
            <p>Позвонить Гулноза</p>
          </div>
        </div>
        <div className="travel-options-col">
          <div className="option-col">
            <SmokeFreeIcon color="inherit" fontSize="inherit" />
            <p>Не люблю, когда попутчики курят</p>
          </div>
          <div className="option-col">
            <PetsIcon color="inherit" fontSize="inherit" />
            <p>Животные - это не мое</p>
          </div>
          <div className="option-col">
            <MusicOffIcon color="inherit" fontSize="inherit" />
            <p>Музыка - это не мое</p>
          </div>
        </div>
      </section>
      <div className="bottom-line">&nbsp;</div>
    </>
  );
};
