// REACT
import React from "react";

// REACT COMPONENTS
import { Features } from "../components/Features";

// REACT ROUTER
import { useNavigate } from "react-router-dom";

// FROM ASSETS
import driver from "../assets/jpg/driver.jpg";
import passenger from "../assets/jpg/passenger.jpg";

// CSS STYLES
import "../styles/how-work.scss";

export const HowWork = () => {
  const navigate = useNavigate();

  return (
    <section className="how-work-section">
      <h2 className="how-work-heading">Как это работает если вы...</h2>
      <div className="how-work-options-cols">
        <div className="passenger-col">
          <img src={passenger} alt="A women with a suitcase" />
          <button
            className="how-work-btn"
            onClick={() => navigate("how-passenger")}
          >
            {" "}
            Попутчик
          </button>
        </div>
        <div className="driver-col">
          <img src={driver} alt="A women in the car" />
          <button
            className="how-work-btn"
            onClick={() => navigate("how-driver")}
          >
            Водитель
          </button>
        </div>
      </div>
      <Features />
    </section>
  );
};
