// REACT
import React from "react";

// REACT ROUTER
import { useNavigate } from "react-router-dom";

// ASSETS
import map from "../assets/svg/map.svg";
import calendar from "../assets/svg/online_calendar.svg";
import addFriend from "../assets/svg/add_friends.svg";
import payment from "../assets/svg/online_payments.svg";
import checkoutUser from "../assets/svg/server_status.svg";
import verifyOrder from "../assets/svg/join.svg";

// CSS STYLES
import "../styles/how-driver.scss";

export const HowDriver = () => {
  // REACT ROUTER HOOK
  const navigate = useNavigate();

  return (
    <section className="how-driver-section">
      <h2 className="how-driver-heading">Как это работает если вы водитель</h2>
      <div className="how-driver-cols">
        <div className="how-driver-col-left">
          <div className="how-driver-col">
            <img src={map} alt="Man points on a map" />
            <p>Выберите направление</p>
          </div>
          <div className="how-driver-col">
            <img src={calendar} alt="Calendat and a girl" />
            <p>Выберите дату</p>
          </div>
          <div className="how-driver-col">
            <img src={addFriend} alt="Telephone and a man" />
            <p>Добавьте количество попутчиков</p>
          </div>
        </div>
        <div className="how-driver-col-right">
          <div className="how-driver-col">
            <img src={payment} alt="A man holds a credit card" />
            <p>Добавьте стоимость поездки</p>
          </div>
          <div className="how-driver-col">
            <img src={checkoutUser} alt="A girl and a diagram" />
            <p>Попутчики находят вас</p>
          </div>
          <div className="how-driver-col">
            <img src={verifyOrder} alt="A man confirms an order" />
            <p>Вы подтверждаете заявку</p>
          </div>
        </div>
      </div>
      <button className="how-btn" onClick={() => navigate("/how-work")}>
        Назад
      </button>
      <div className="bottom-line">&nbsp;</div>
    </section>
  );
};
