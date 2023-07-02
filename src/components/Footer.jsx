// REACT
import React from "react";

// REACT ROUTER
import { useNavigate } from "react-router-dom";

// MATERIAL UI
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

// CSSS STYLES
import "../styles/footer.scss";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <nav className="nav-col">
        <p className="footer-heading">Все каталоги</p>
        <ul className="footer-nav">
          <li className="footer-link">Все автомаршруты</li>
          <li className="footer-link">Все автонаправление</li>
        </ul>
      </nav>
      <nav className="nav-col">
        <p className="footer-heading">Популярные маршруты совместных поездок</p>
        <ul className="footer-nav">
          <li className="footer-link">
            <span className="footer-link-city">Душанбе</span>
            <div className="footer-link-city-icon">
              <ArrowForwardIcon fontSize="inherit" color="inherit" />
            </div>
            <span className="footer-link-city">Худжанд</span>
          </li>
          <li className="footer-link">
            <span className="footer-link-city">Душанбе</span>
            <div className="footer-link-city-icon">
              <ArrowForwardIcon fontSize="inherit" color="inherit" />
            </div>
            <span className="footer-link-city">Истаравшан</span>
          </li>
          <li className="footer-link">
            <span className="footer-link-city">Душанбе</span>
            <div className="footer-link-city-icon">
              <ArrowForwardIcon fontSize="inherit" color="inherit" />
            </div>
            <span className="footer-link-city">Хорог</span>
          </li>
          <li className="footer-link">
            <span className="footer-link-city">Куляб</span>
            <div className="footer-link-city-icon">
              <ArrowForwardIcon fontSize="inherit" color="inherit" />
            </div>
            <span className="footer-link-city">Душанбе</span>
          </li>
          <li className="footer-link">
            <span className="footer-link-city">Душанбе</span>
            <div className="footer-link-city-icon">
              <ArrowForwardIcon fontSize="inherit" color="inherit" />
            </div>
            <span className="footer-link-city">Самарканд</span>
          </li>
        </ul>
      </nav>
      <nav className="nav-col">
        <p className="footer-heading">О нас</p>
        <ul className="footer-nav">
          <li className="footer-link" onClick={() => navigate("how-work")}>
            Как работает Taksim
          </li>
          <li className="footer-link">О нас</li>
          <li className="footer-link">Центр помощи</li>
          <li className="footer-link">Ищем сотрудников</li>
          <div className="footer-link-icons">
            <div className="footer-link-icon">
              <YouTubeIcon fontSize="large" />
            </div>
            <div className="footer-link-icon">
              <TwitterIcon fontSize="large" />
            </div>
            <div className="footer-link-icon">
              <TelegramIcon fontSize="large" />
            </div>
            <div className="footer-link-icon">
              <InstagramIcon fontSize="large" />
            </div>
            <div className="footer-link-icon">
              <FacebookIcon fontSize="large" />
            </div>
          </div>
        </ul>
      </nav>
    </footer>
  );
};
