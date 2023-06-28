// REACT
import React, { useContext } from "react";

// MATERIAL UI
import CloseIcon from "@mui/icons-material/Close";

// CSS STYLES
import "../styles/modal-edit-card.scss";

// REACT CONTEXT API
import { PostsContext } from "../context/PostsContext";

export const ModalEditCard = ({
  setOpenModalEdit,
  refOne,
  defaultValuePostDirFrom,
  defaultValuePostDirTo,
  defaultValuePostDate,
  defaultValuePostAmountOfPassengers,
  defaultValuePostTripPrice,
  defaultValuePostUserPhoneNum,
  defaultValuePostUserCar,
  postId,
}) => {
  const { onUpdatePost } = useContext(PostsContext);

  // ON SUBMIT EDIT POST HANDLER
  const onEditPostSubmit = (e) => {
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

    onUpdatePost(
      postId,
      dirFrom,
      dirTo,
      datePicked,
      amountOfPassengers,
      tripPrice,
      userPhoneNum,
      userCar,
      isMusic,
      isPets,
      isSmoking
    );
    setOpenModalEdit(false);
  };

  return (
    <div className="modal-edit-card-overlay">
      <div className="modal-edit-card-field" ref={refOne}>
        <div
          className="modal-edit-close-icon"
          onClick={() => setOpenModalEdit(false)}
        >
          <CloseIcon color="inherit" fontSize="inherit" />
        </div>
        <form className="modal-edit-form" onSubmit={onEditPostSubmit}>
          <div>
            <label>Откуда</label>
            <select className="selector-city-from">
              <option defaultValue={defaultValuePostDirFrom}>
                {defaultValuePostDirFrom}
              </option>
              <option value={"Душанбе"}>Душанбе</option>
              <option value={"Худжанд"}>Худжанд</option>
              <option value={"Истаравшан"}>Истаравшан</option>
              <option value={"Хорог"}>Хорог</option>
              <option value={"Кулоб"}>Кулоб</option>
              <option value={"Исфара"}>Исфара</option>
              <option value={"Панджакент"}>Панджакент</option>
              <option value={"Айни"}>Айни</option>
              <option value={"Курган-тюбе"}>Курган-тюбе</option>
              <option value={"Канибадам"}>Канибадам</option>
              <option value={"Самарканд"}>Самарканд</option>
              <option value={"Бухоро"}>Бухоро</option>
              <option value={"Ташкент"}>Ташкент</option>
            </select>
          </div>
          <div>
            <label>Куда</label>
            <select className="selector-city-to">
              <option defaultValue={defaultValuePostDirTo}>
                {defaultValuePostDirTo}
              </option>
              <option value={"Худжанд"}>Худжанд</option>
              <option value={"Душанбе"}>Душанбе</option>
              <option value={"Истаравшан"}>Истаравшан</option>
              <option value={"Хорог"}>Хорог</option>
              <option value={"Кулоб"}>Кулоб</option>
              <option value={"Исфара"}>Исфара</option>
              <option value={"Панджакент"}>Панджакент</option>
              <option value={"Айни"}>Айни</option>
              <option value={"Курган-тюбе"}>Курган-тюбе</option>
              <option value={"Канибадам"}>Канибадам</option>
              <option value={"Самарканд"}>Самарканд</option>
              <option value={"Бухоро"}>Бухоро</option>
              <option value={"Ташкент"}>Ташкент</option>
            </select>
          </div>
          <div>
            <label>Когда</label>
            <input
              defaultValue={defaultValuePostDate}
              className="date-picker"
              type="date"
            />
          </div>
          <div>
            <label>Количество Пассажиров</label>
            <select className="selector-passenger-amount">
              <option defaultValue={defaultValuePostAmountOfPassengers}>
                {defaultValuePostAmountOfPassengers}
              </option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </div>
          <div>
            <label>Цена 1-го пассажира</label>
            <input
              className="input-price"
              type="number"
              placeholder="Цена в сомони"
              defaultValue={defaultValuePostTripPrice}
            />
          </div>
          <div>
            <label>Ваш номер телефона</label>
            <input
              className="input-telefon"
              type="number"
              placeholder="+992900000000"
              defaultValue={defaultValuePostUserPhoneNum}
            />
          </div>
          <div>
            <label>Марка вашего автомобиля</label>
            <select className="selector-user-car">
              <option defaultValue={defaultValuePostUserCar}>
                {defaultValuePostUserCar}
              </option>
              <option value={"Mercedes"}>Mercedes</option>
              <option value={"Toyota"}>Toyota</option>
              <option value={"Opel"}>Opel</option>
              <option value={"BMW"}>BMW</option>
              <option value={"Audi"}>Audi</option>
              <option value={"Honda"}>Honda</option>
              <option value={"Hyundai"}>Hyundai</option>
              <option value={"Volkswagen"}>Volkswagen</option>
              <option value={"Mazda"}>Mazda</option>
              <option value={"Kia"}>Kia</option>
              <option value={"Daewoo"}>Daewoo</option>
              <option value={"Chrysler"}>Chrysler</option>
              <option value={"Lexus"}>Lexus</option>
              <option value={"Mitsubishi"}>Mitsubishi</option>
              <option value={"Nissan"}>Nissan</option>
              <option value={"Skoda"}>Skoda</option>
              <option value={"Volvo"}>Volvo</option>
              <option value={"Range Rover"}>Range Rover</option>
              <option value={"Porsche"}>Porsche</option>
              <option value={"Ravon"}>Ravon</option>
              <option value={"Ssang Yong"}>Ssang Yong</option>
              <option value={"Ford "}>Ford</option>
              <option value={"Другое"}>Другое</option>
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
          <button> Изменить</button>
        </form>
      </div>
    </div>
  );
};
