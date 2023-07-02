// REACT
import React, { useState } from "react";

// REACT ROUTER
import { useNavigate, Link } from "react-router-dom";

// FIREBASE
import { auth } from "../configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// CSS STYLES
import "../styles/login.scss";

export const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <section className="form-section">
      <div className="form-wrapper">
        <span className="title">Вход</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Почта" />
          <input type="password" placeholder="Пароль" />
          <button>Вход</button>
          {err && <span className="registerErrText">Что-то пошло не так</span>}
        </form>
        <p>
          Еще не с нами?{" "}
          <Link
            to="/register"
            style={{ color: "#054550", textDecoration: "inherit" }}
          >
            {" "}
            Зарегистрироваться
          </Link>
        </p>
      </div>
      <div className="bottom-line">&nbsp;</div>
    </section>
  );
};
