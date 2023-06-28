// REACT
import React, { useState, useContext, useRef, useEffect } from "react";

// REACT ROUTER
import { useNavigate } from "react-router-dom";

// REACT CONTEXT API
import { AuthContext } from "../context/AuthContext";
import { PostsContext } from "../context/PostsContext";

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
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const { filterCurUserPostsFunc } = useContext(PostsContext);
  const navigate = useNavigate();

  // GET THE TARGET ELEMENT TO TOGGLE
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // HIDE SUBMENU ON ESC PRESS
  const hideOnEscape = (e) => {
    if (e.key === "Escape") setOpen(false);
  };

  // HIDE ON OUTSIDE CLICK
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) setOpen(false);
  };

  const onRegisterClick = () => {
    navigate("register");
    signOut(auth);
    setOpen(false);
  };

  const onLoginClick = () => {
    navigate("login");
    signOut(auth);
    setOpen(false);
  };

  const onLogoutClick = () => {
    signOut(auth);
    navigate("login");
    setOpen(false);
  };

  const onLogoClick = () => {
    navigate("/");
    setOpen(false);
  };

  const onSearchClick = () => {
    navigate("search-page");
    setOpen(false);
  };

  const onPublishClick = () => {
    if (currentUser) navigate("publish-page");
    if (!currentUser) console.log("You should register");
    setOpen(false);
  };

  const onUserProfileClick = () => {
    navigate("user-profile");
    filterCurUserPostsFunc();
    setOpen(false);
  };

  const onSubMenuClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <header className="header" ref={refOne}>
        <div className="logo" onClick={onLogoClick}>
          hamroh
        </div>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li className="main-nav-link" onClick={onSearchClick}>
              <div className="main-nav-icon">
                <SearchIcon color="inherit" fontSize="inherit" />
              </div>
              <span className="main-nav-link-text">Искать</span>
            </li>
            <li className="main-nav-link" onClick={onPublishClick}>
              <div className="main-nav-icon">
                <AddCircleOutlineIcon color="inherit" fontSize="inherit" />
              </div>
              <span className="main-nav-link-text">Опубликовать поездку</span>
            </li>
            <li className="main-nav-link" onClick={onSubMenuClick}>
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
                style={{ transform: `rotate(${open ? "180" : "0"}deg)` }}
              >
                <KeyboardArrowUpIcon color="inherit" fontSize="inherit" />
              </div>
            </li>
          </ul>
        </nav>
        {open && (
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
                <li className="sub-menu-link" onClick={onUserProfileClick}>
                  <div className="sub-menu-icon">
                    <AccountBoxIcon color="inherit" fontSize="inherit" />
                  </div>
                  <span className="cub-menu-link-text">Профиль</span>
                </li>
              )}
            </ul>
          </div>
        )}
      </header>
    </>
  );
};
