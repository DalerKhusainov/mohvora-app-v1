// REACT
import React from "react";

// REACT ROUTER
import { useNavigate } from "react-router-dom";

// MATERIAL UI
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// CSS STYLES
import "../styles/success-publish-page.scss";

export const SuccessPublishPage = () => {
  const navigate = useNavigate();

  return (
    <section className="success-publish-section">
      <div className="success-publish-col">
        <p className="success-publish-text">
          Ваше объявление успешно опубликовано!
        </p>
        <div className="success-publish-icon">
          <CheckCircleIcon fontSize="inherit" color="inherit" />
        </div>
        <p className="success-publish-link" onClick={() => navigate("/")}>
          {" "}
          Перейти на главную страницу
        </p>
      </div>
    </section>
  );
};
