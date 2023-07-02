// REACT
import React from "react";

// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";

// FROM ASSETS
import map from "../assets/svg/map.svg";
import calendar from "../assets/svg/online_calendar.svg";
import findDriver from "../assets/svg/filter.svg";
import chat from "../assets/svg/chatting.svg";
import confirmOrder from "../assets/svg/order_confirmed.svg";
import travelers from "../assets/svg/travelers.svg";

// CSS STYLES
import "../styles/how-passenger.scss";

export const HowPassenger = () => {
  // REACT ROUTER HOOK
  const navigate = useNavigate();

  return (
    <section className="how-driver-section">
      <h2 className="how-driver-heading">Как это работает если вы попутчик</h2>
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
            <img src={findDriver} alt="Telephone and a man" />
            <p>Найдите водителя</p>
          </div>
        </div>
        <div className="how-driver-col-right">
          <div className="how-driver-col">
            <img src={chat} alt="A man holds a credit card" />
            <p>Напишите водителю или позвоните</p>
          </div>
          <div className="how-driver-col">
            <img src={confirmOrder} alt="A girl and a diagram" />
            <p>Договоритесь о поездке</p>
          </div>
          <div className="how-driver-col">
            <img src={travelers} alt="A man confirms an order" />
            <p>Подойдите к месту встречи</p>
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
