// REACT
import React, { useState } from "react";

// MATERIAL UI
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

// CSS STYLES
import "../styles/search-form.scss";

export const SearchForm = () => {
  // STATES FROM INPUTS
  const [date, setDate] = useState();
  const [fromWhere, setFromWhere] = useState("");

  return (
    <div className="search-form">
      <span className="search-form-text">Куда вы хотите поехать?</span>
      <div className="search-form-inputs">
        <input required type="text" placeholder="Откуда" />
        <input required type="text" placeholder="Куда" />
        <input
          required
          type="date"
          dateFormat="dd/MM/yyyy"
          onChange={(e) => setDate(e.target.value)}
        />
        <div className="search-form-counter">
          <span className="search-form-counter-text">Пассажиров</span>
          <div className="search-form-counter-action">
            <div className="search-form-counter-icon">
              <RemoveCircleOutlineIcon color="inherit" fontSize="large" />
            </div>
            <span className="search-form-counter-amount">1</span>
            <div className="search-form-counter-icon">
              <ControlPointIcon color="inherit" fontSize="large" />
            </div>
          </div>
        </div>
        <button className="search-form-btn"> Поиск</button>
      </div>
    </div>
  );
};
