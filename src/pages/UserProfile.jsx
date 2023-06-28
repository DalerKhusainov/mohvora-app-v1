// REACT
import React from "react";

// REACT ROUTER
import {
  Route,
  Routes,
  useMatch,
  useResolvedPath,
  Link,
} from "react-router-dom";

// REACT COMPONENTS
import { UserProfilePosts } from "./UserProfilePosts";
import { UserProfileFavorites } from "./UserProfileFavorites";
import { UserProfileInfo } from "./UserProfileInfo";

// CSS STYLES
import "../styles/user-profile.scss";

export const UserProfile = () => {
  return (
    <>
      <nav className="user-profile-nav">
        <ul className="panel-btn">
          <CustomLink to={"user-profile-info"}>Профиль</CustomLink>
          <CustomLink to={"user-profile-posts"}>Вашы поездки</CustomLink>
          <CustomLink to={"user-profile-favorites"}>Избранные</CustomLink>
        </ul>
      </nav>
      <div className="user-profile-posts">
        <Routes>
          <Route path="user-profile-posts" element={<UserProfilePosts />} />
          <Route
            path="user-profile-favorites"
            element={<UserProfileFavorites />}
          />
          <Route path="user-profile-info" element={<UserProfileInfo />} />
        </Routes>
      </div>
    </>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
