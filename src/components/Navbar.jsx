// REACT
import React, { useState, useContext } from "react";

// REACT ROUTER
import { useNavigate } from "react-router-dom";

// REACT CONTEXT API
import { AuthContext } from "../context/AuthContext";

// FIREBASE
import { signOut } from "firebase/auth";
import { auth } from "../configs/firebase";

// CSS STYLES
import "../styles/navbar.scss";

// MATERIAL UI ICONS
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const Navbar = () => {
  // OPEN AND CLOSE THE SUB MENU
  const [subMenu, setSubMenu] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onRegisterClick = () => {
    navigate("register");
    signOut(auth);
    setSubMenu(false);
  };

  const onLoginClick = () => {
    navigate("login");
    signOut(auth);
    setSubMenu(false);
  };

  const onLogoutClick = () => {
    signOut(auth);
    navigate("login");
    setSubMenu(false);
  };

  const onLogoClick = () => {
    navigate("/");
    setSubMenu(false);
  };

  return (
    <header className="header">
      <div className="logo" onClick={onLogoClick}>
        hamroh
      </div>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li className="main-nav-link" onClick={() => navigate("search-page")}>
            <div className="main-nav-icon">
              <SearchIcon color="inherit" fontSize="inherit" />
            </div>
            <span className="main-nav-link-text">Искать</span>
          </li>
          <li
            className="main-nav-link"
            onClick={() => {
              if (currentUser) navigate("publish-page");
              if (!currentUser) console.log("You should register");
            }}
          >
            <div className="main-nav-icon">
              <AddCircleOutlineIcon color="inherit" fontSize="inherit" />
            </div>
            <span className="main-nav-link-text">Опубликовать поездку</span>
          </li>
          <li
            className="main-nav-link"
            onClick={() => (subMenu ? setSubMenu(false) : setSubMenu(true))}
          >
            <div className="main-nav__account-icon">
              {!currentUser && (
                <AccountCircleIcon color="inherit" fontSize="inherit" />
              )}
              {currentUser && (
                <img src={currentUser.photoURL} alt="Current user" />
              )}
            </div>
            <div
              className="main-nav__arrow-icon"
              style={{ transform: `rotate(${subMenu ? "180" : "0"}deg)` }}
            >
              <KeyboardArrowUpIcon color="inherit" fontSize="inherit" />
            </div>
          </li>
        </ul>
      </nav>
      {subMenu && (
        <div
          className="main-nav-sub-menu"
          style={{ bottom: `${currentUser ? "-17.1" : "-10"}rem` }}
        >
          <ul className="sub-menu-links">
            <li className="sub-menu-link" onClick={onLoginClick}>
              <div className="sub-menu-icon">
                <LoginIcon color="inherit" fontSize="inherit" />
              </div>
              <span className="cub-menu-link-text">Вход</span>
            </li>
            <li className="sub-menu-link" onClick={onRegisterClick}>
              <div className="sub-menu-icon">
                <AppRegistrationIcon color="inherit" fontSize="inherit" />
              </div>
              <span className="cub-menu-link-text">Регистрация</span>
            </li>
            {currentUser && (
              <li className="sub-menu-link">
                <div className="sub-menu-icon">
                  <LogoutIcon color="inherit" fontSize="inherit" />
                </div>
                <span className="cub-menu-link-text" onClick={onLogoutClick}>
                  Выход
                </span>
              </li>
            )}
            {currentUser && (
              <li className="sub-menu-link">
                <div className="sub-menu-icon">
                  <AccountBoxIcon color="inherit" fontSize="inherit" />
                </div>
                <span className="cub-menu-link-text" onClick={onLogoutClick}>
                  Профиль
                </span>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};
