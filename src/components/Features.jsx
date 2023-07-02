// REACT
import React from "react";

// MATERIAL UI
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FlashOnIcon from "@mui/icons-material/FlashOn";

// CSS STYLES
import "../styles/features.scss";

export const Features = () => {
  return (
    <section className="features-section">
      <div className="feature">
        <div className="feature-icon">
          <SavingsIcon fontSize="inherit" color="inherit" />
        </div>
        <p className="feature-title">Ваша поездка по низкой цене</p>
        <p className="feature-description">
          Куда бы вы ни собирались, с попутчиками, вы сможете найти свою
          идеальную поездку среди множества маршрутов и доехать по самой низкой
          цене.
        </p>
      </div>
      <div className="feature">
        <div className="feature-icon">
          <AccountBoxIcon fontSize="inherit" color="inherit" />
        </div>
        <p className="feature-title">Доверяйте своим попутчикам</p>
        <p className="feature-description">
          Мы стараемся узнать ваших будущих попутчиков как можно лучше. Мы
          проверяем отзывы, профили попутчиков, чтобы вы знали, с кем едете.
        </p>
      </div>
      <div className="feature">
        <div className="feature-icon">
          <FlashOnIcon fontSize="inherit" color="inherit" />
        </div>
        <p className="feature-title">В дорогу за пару кликов!</p>
        <p className="feature-description">
          Забронировать поездку проще простого. В нашем приложении легко
          разобраться: мощный алгоритм за пару минут найдет водителя поблизости,
          и вам останется нажать пару кнопок для брони.
        </p>
      </div>
    </section>
  );
};
