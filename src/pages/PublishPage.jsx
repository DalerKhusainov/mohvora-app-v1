// REACT
import React, { useContext } from "react";

// REACT ROUTER
import { useNavigate } from "react-router-dom";

// CSS STYLES
import "../styles/publish-page.scss";

// FIREBASE
import { db } from "../configs/firebase";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

// REACT CONTEXT API
import { AuthContext } from "../context/AuthContext";
import { PostsContext } from "../context/PostsContext";

export const PublishPage = () => {
  const { currentUser } = useContext(AuthContext);
  const { getPostsList } = useContext(PostsContext);
  const navigate = useNavigate();

  // SPECIFYING REFERENCE TO COLLECTION
  const postsCollectionRef = collection(db, "posts");

  const onSubmitPublish = async (e) => {
    e.preventDefault();
    const dirFrom = e.target[0].value;
    const dirTo = e.target[1].value;
    const datePicked = e.target[2].value;
    const amountOfPassengers = +e.target[3].value;
    const tripPrice = +e.target[4].value;
    const userPhoneNum = +e.target[5].value;
    const userCar = e.target[6].value;
    const isMusic = e.target[7].value === "true" ? true : false;
    const isPets = e.target[8].value === "true" ? true : false;
    const isSmoking = e.target[9].value === "true" ? true : false;

    try {
      await addDoc(postsCollectionRef, {
        dirFrom: dirFrom,
        dirTo: dirTo,
        date: datePicked,
        amountOfPassengers: amountOfPassengers,
        tripPrice: tripPrice,
        userPhoneNum: userPhoneNum,
        userCar: userCar,
        isMusic: isMusic,
        isPets: isPets,
        isSmoking: isSmoking,
        userName: currentUser.displayName,
        photoURL: currentUser.photoURL,
        userId: currentUser.uid,
      });
      getPostsList();
      navigate("success-publish-page");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="publish-page">
      <form onSubmit={onSubmitPublish}>
        <p className="publish-page-text"> Опубликовать поездку</p>
        <div>
          <label>Откуда</label>
          <select className="selector-city-from">
            <option value={"Душанбе"}>Душанбе</option>
            <option value={"Худжанд"}>Худжанд</option>
            <option value={"Истаравшан"}>Истаравшан</option>
            <option value={"Самарканд"}>Самарканд</option>
          </select>
        </div>
        <div>
          <label>Куда</label>
          <select className="selector-city-to">
            <option value={"Душанбе"}>Душанбе</option>
            <option value={"Худжанд"}>Худжанд</option>
            <option value={"Истаравшан"}>Истаравшан</option>
            <option value={"Самарканд"}>Самарканд</option>
          </select>
        </div>
        <div>
          <label>Когда</label>
          <input className="date-picker" type="date" />
        </div>
        <div>
          <label>Количество Пассажиров</label>
          <select className="selector-passenger-amount">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
        <div>
          <label>Цена за 1-го пассажира</label>
          <input
            className="input-price"
            type="number"
            placeholder="Цена в сомони"
          />
        </div>
        <div>
          <label>Ваш номер телефона</label>
          <input
            className="input-telefon"
            type="number"
            placeholder="+992900000000"
          />
        </div>
        <div>
          <label>Марка вашего автомобиля</label>
          <select className="selector-user-car">
            <option value={"Mercedes-benz"}>Mercedes-benz</option>
            <option value={"Toyota"}>Toyota</option>
            <option value={"Opel"}>Opel</option>
            <option value={"BMW"}>BMW</option>
          </select>
        </div>
        <div>
          <label>Любите слушать музыку в поездке?</label>
          <select className="selector-is-music">
            <option value={true}>Да</option>
            <option value={false}>Нет</option>
          </select>
        </div>
        <div>
          <label>Домашние животные в поездке?</label>
          <select className="selector-is-pets">
            <option value={true}>Да</option>
            <option value={false}>Нет</option>
          </select>
        </div>
        <div>
          <label>Курение в поездке?</label>
          <select className="selector-is-smoking">
            <option value={true}>Да</option>
            <option value={false}>Нет</option>
          </select>
        </div>
        <button> Публиковать</button>
      </form>
      <div className="bottom-line">&nbsp;</div>
    </div>
  );
};
