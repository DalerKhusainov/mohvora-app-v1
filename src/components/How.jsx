// REACT
import React from "react";

// REACT ROUTER
import { useNavigate } from "react-router-dom";

// FROM ASSETS
import driverWithPassengers from "../assets/png/driver_with_passengers.png";

// CSS STYLES
import "../styles/how.scss";

export const How = () => {
  const navigate = useNavigate();

  return (
    <section className="how-section">
      <div className="how-info">
        <h2>Экономьте, когда вы за рулем</h2>
        <p>
          Зарегистрируйте профиль водителя, берите попутчиков и экономьте на
          бензине. Чтобы опубликовать первую поездку, нужно всего пару минут.
          Готовы ехать?
        </p>
        <button onClick={() => navigate("how-work")}>
          {" "}
          Узнать как это работает
        </button>
      </div>
      <div className="how-img">
        <img src={driverWithPassengers} alt="People are in the car" />
      </div>
    </section>
  );
};
