// REACT
import React from "react";

// CSS STYLES
import "../styles/publish-form.scss";

export const PublishForm = ({ onSubmitPublish }) => {
  return (
    <>
      <form className="publish-page-form" onSubmit={onSubmitPublish}>
        <p className="publish-page-text"> Опубликовать поездку</p>
        <div>
          <label>Откуда</label>
          <select className="selector-city-from">
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
            placeholder="(+992) 900000000"
          />
        </div>
        <div>
          <label>Марка вашего автомобиля</label>
          <select className="selector-user-car">
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
        <button> Публиковать</button>
      </form>
    </>
  );
};
