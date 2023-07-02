// REACT
import React from "react";

// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";

// CSS STYLES
import "../styles/error-page.scss";

// FROM ASSETS
import pageNotFoundSVG from "../assets/svg/page_not_found.svg";

export const ErrorPage = () => {
  // REACT ROUTER HOOK
  const navigate = useNavigate();

  return (
    <>
      <div className="error-page">
        <p className="error-page-text">
          Извините, страница, которую вы ищете, не была найдена
        </p>
        <img src={pageNotFoundSVG} alt="404 error. Page was not found" />
        <p className="success-publish-link" onClick={() => navigate("/")}>
          {" "}
          Перейти на главную страницу
        </p>
      </div>
      <div className="bottom-line">&nbsp;</div>
    </>
  );
};
