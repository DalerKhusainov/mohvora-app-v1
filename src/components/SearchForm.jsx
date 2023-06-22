// REACT
import React, { useContext, useState } from "react";

// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";

// MATERIAL UI
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

// CSS STYLES
import "../styles/search-form.scss";

// FORM REACT CONTEXT API
import { PostsContext } from "../context/PostsContext";

export const SearchForm = (isHomePage) => {
  // STATES FROM INPUTS
  const [dirFrom, setDirFrom] = useState("");
  const [dirTo, setDirTo] = useState("");
  const [date, setDate] = useState();
  const [count, setCount] = useState(1);

  // FROM CONTEXT API
  const { filterPostsFunc } = useContext(PostsContext);

  // REACT ROUTER HOOKS
  const navigate = useNavigate();

  return (
    <div className="search-form">
      <span className="search-form-text">Куда вы хотите поехать?</span>
      <div className="search-form-inputs">
        <div className="inputs-label-col">
          <label>Откуда</label>
          <select
            className="selector-city-from"
            onChange={(e) => setDirFrom(e.target.value)}
          >
            <option value={""}>Выберите город</option>
            <option value={"Душанбе"}>Душанбе</option>
            <option value={"Худжанд"}>Худжанд</option>
            <option value={"Истаравшан"}>Истаравшан</option>
            <option value={"Самарканд"}>Самарканд</option>
          </select>
        </div>
        <div className="inputs-label-col">
          <label>Куда</label>
          <select
            className="selector-city-to"
            onChange={(e) => setDirTo(e.target.value)}
          >
            <option value={""}>Выберите город</option>
            <option value={"Душанбе"}>Душанбе</option>
            <option value={"Худжанд"}>Худжанд</option>
            <option value={"Истаравшан"}>Истаравшан</option>
            <option value={"Самарканд"}>Самарканд</option>
          </select>
        </div>
        <div className="inputs-label-col">
          <label>Когда</label>
          <input
            className="date-picker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="search-form-counter">
          <span className="search-form-counter-text">Пассажиров</span>
          <div className="search-form-counter-action">
            <div
              className="search-form-counter-icon"
              onClick={() => {
                if (count > 1) setCount(count - 1);
              }}
            >
              <RemoveCircleOutlineIcon color="inherit" fontSize="large" />
            </div>
            <span className="search-form-counter-amount">{count}</span>
            <div
              className="search-form-counter-icon"
              onClick={() => {
                if (count < 6) setCount(count + 1);
              }}
            >
              <ControlPointIcon color="inherit" fontSize="large" />
            </div>
          </div>
        </div>
        <button
          className="search-form-btn"
          onClick={() => {
            filterPostsFunc(dirFrom, dirTo, date, count);
            if (isHomePage) navigate("search-page");
          }}
        >
          Поиск
        </button>
      </div>
    </div>
  );
};
