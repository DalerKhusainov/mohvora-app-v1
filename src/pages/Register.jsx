// REACT
import React, { useState } from "react";

// REACT ROUTER
import { useNavigate, Link } from "react-router-dom";

// MATERIAL UI
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

// CSS STYLES
import "../styles/register.scss";

// FIREBASE
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../configs/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <section className="form-section">
      <div className="form-wrapper">
        <span className="title">Регистрация</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Имя" />
          <input required type="email" placeholder="Почта" />
          <input required type="password" placeholder="Пароль" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <AddPhotoAlternateIcon fontSize="inherit" />
            <span>Добавить фото</span>
          </label>
          <button>Создать</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span className="registerErrText">Something went wrong</span>}
        </form>
        <p>
          Уже зарегистрированы?{" "}
          <Link
            to={"/login"}
            style={{ color: "#054550", textDecoration: "inherit" }}
          >
            {" "}
            Вход
          </Link>
        </p>
      </div>
      <div className="bottom-line">&nbsp;</div>
    </section>
  );
};
