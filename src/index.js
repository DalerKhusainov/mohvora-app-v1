import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { PostsContextProvider } from "./context/PostsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <PostsContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PostsContextProvider>
  </AuthContextProvider>
);
