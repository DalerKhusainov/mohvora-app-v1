// REACT
import React, { useContext, useState } from "react";

// REACT COMPONENTS
import { DateRangePickerComp } from "./DateRangePickerComp";

// CSS STYLES
import "../styles/search-form.scss";

// FORM REACT CONTEXT API
import { PostsContext } from "../context/PostsContext";

// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";

export const SearchForm = ({ isSearchPage, isHomePage }) => {
  // FROM CONTEXT API
  const { filterPostsFunc } = useContext(PostsContext);

  // REACT ROUTER HOOK
  const navigate = useNavigate();

  // STATES FROM INPUTS
  const [dirFrom, setDirFrom] = useState("");
  const [dirTo, setDirTo] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  return (
    <div className="search-form">
      <p className="search-form-text">Куда вы хотите поехать?</p>
      <div className="search-form-inputs">
        <div className="search-form-selectors-cities">
          <div className="inputs-label-col">
            <label>Откуда</label>
            <select
              className="selector-city-from"
              onChange={(e) => setDirFrom(e.target.value)}
            >
              <option value={"Выберите город"}>Выберите город</option>
              <option value={"Душанбе"}>Душанбе</option>
              <option value={"Худжанд"}>Худжанд</option>
              <option value={"Истаравшан"}>Истаравшан</option>
              <option value={"Хорог"}>Хорог</option>
              <option value={"Кулоб"}>Кулоб</option>
              <option value={"Исфара"}>Исфара</option>
              <option value={"Панджакент"}>Панджакент</option>
              <option value={"Айни"}>Айни</option>
              <option value={"Курган-тюбе"}>Курган-тюбе</option>
              <option value={"Канибадам"}>Канибадам</option>
              <option value={"Самарканд"}>Самарканд</option>
              <option value={"Бухоро"}>Бухоро</option>
              <option value={"Ташкент"}>Ташкент</option>
            </select>
          </div>
          <div className="inputs-label-col">
            <label>Куда</label>
            <select
              className="selector-city-to"
              onChange={(e) => setDirTo(e.target.value)}
            >
              <option value={"Выберите город"}>Выберите город</option>
              <option value={"Душанбе"}>Душанбе</option>
              <option value={"Худжанд"}>Худжанд</option>
              <option value={"Истаравшан"}>Истаравшан</option>
              <option value={"Хорог"}>Хорог</option>
              <option value={"Кулоб"}>Кулоб</option>
              <option value={"Исфара"}>Исфара</option>
              <option value={"Панджакент"}>Панджакент</option>
              <option value={"Айни"}>Айни</option>
              <option value={"Курган-тюбе"}>Курган-тюбе</option>
              <option value={"Канибадам"}>Канибадам</option>
              <option value={"Самарканд"}>Самарканд</option>
              <option value={"Бухоро"}>Бухоро</option>
              <option value={"Ташкент"}>Ташкент</option>
            </select>
          </div>
        </div>
        <div className="selector-date-col">
          <label>Когда</label>
          <DateRangePickerComp
            setDateStart={setDateStart}
            setDateEnd={setDateEnd}
          />
        </div>
        {isSearchPage && (
          <button
            className="search-form-btn"
            onClick={() => {
              filterPostsFunc(dirFrom, dirTo, dateStart, dateEnd);
            }}
          >
            Поиск
          </button>
        )}
        {isHomePage && (
          <button
            className="search-form-btn"
            onClick={() => {
              filterPostsFunc(dirFrom, dirTo, dateStart, dateEnd);
              setTimeout(() => {
                navigate("/search-page");
              }, 1000);
            }}
          >
            Поиск
          </button>
        )}
      </div>
    </div>
  );
};
