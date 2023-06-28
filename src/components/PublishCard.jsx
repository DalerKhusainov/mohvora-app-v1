// REACT
import React, { useContext } from "react";

// CSS STYLES
import "../styles/publish-card.scss";

// MATERIAL UI
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import PetsIcon from "@mui/icons-material/Pets";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import CallIcon from "@mui/icons-material/Call";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";

// FUNCTION
import { convertMonths } from "../functions/functions";

// REACT CONTEXT API
import { PostsContext } from "../context/PostsContext";

export const PublishCard = ({
  post,
  isSearchPage,
  isUserProfilePage,
  // setOpenModalEdit,
  // setPostId,
  onSelectedPostHandler,
}) => {
  const { onDeletePosts } = useContext(PostsContext);
  const {
    dirFrom,
    dirTo,
    date,
    isSmoking,
    isPets,
    isMusic,
    photoURL,
    userName,
    amountOfPassengers,
    tripPrice,
    userPhoneNum,
    userCar,
    id,
  } = post;

  return (
    <div className="publish-card">
      <div className="card-container card-container-1">
        <div className="card-directions-col">
          <p className="card-direction-text">{dirFrom}</p>
          <div className="location-dots-col">
            <div className="location-cycle location-cycle--1"></div>
            <div className="location-line"></div>
            <div className="location-cycle location-cycle--2"></div>
          </div>
          <p className="card-direction-text">{dirTo}</p>
        </div>
        <p className="card-date">{convertMonths(date)}</p>
        <div className="card-icons-col">
          {!isSmoking && (
            <div className="card-no-smoke-icon">
              <SmokeFreeIcon color="inherit" fontSize="inherit" />
            </div>
          )}
          {isSmoking && (
            <div className="card-smoke-icon">
              <SmokingRoomsIcon color="inherit" fontSize="inherit" />
            </div>
          )}
          {!isPets && (
            <div className="card-no-pets-icon">
              <PetsIcon color="inherit" fontSize="inherit" />
              <div className="line line-dark">&nbsp;</div>
              <div className="line line-light">&nbsp;</div>
            </div>
          )}
          {isPets && (
            <div className="card-pets-icon">
              <PetsIcon color="inherit" fontSize="inherit" />
            </div>
          )}
          {!isMusic && (
            <div className="card-no-music-icon">
              <MusicOffIcon color="inherit" fontSize="inherit" />
            </div>
          )}
          {isMusic && (
            <div className="card-music-icon">
              <MusicNoteIcon color="inherit" fontSize="inherit" />
            </div>
          )}
        </div>
      </div>

      <div className="card-container card-container-2">
        <div className="card-user-name-col">
          <img src={photoURL} alt="" />
          <div className="user-name-phone-number-col">
            <p className="user-name">{userName}</p>
            <div className="user-phone-number-col">
              <PhoneIphoneIcon color="inherit" fontSize="inherit" />
              <p className="user-phone-number-text">{userPhoneNum}</p>
            </div>
          </div>
        </div>
        <div className="card-passenger-amount-user-car-col">
          <div className="card-passenger-amaunt-col">
            <PersonIcon color="inherit" fontSize="inherit" />
            <p className="passenger-amaunt-text">{amountOfPassengers}</p>
          </div>
          <div className="card-user-car-col">
            <DirectionsCarIcon color="inherit" fontSize="inherit" />
            <p className="card-user-car-text">{userCar}</p>
          </div>
        </div>
        <div className="card-price-col">
          <p className="card-price-text">Цена:</p>
          <p className="card-price">{`${tripPrice}с`}</p>
        </div>
      </div>
      {isSearchPage && (
        <div className="publish-cta-col">
          <div className="publish-btn-col-1">
            <ChatIcon color="inherit" fontSize="inherit" />
            <p>Связаться</p>
          </div>
          <div className="publish-btn-col-2">
            <CallIcon color="inherit" fontSize="inherit" />
            <p>Позвонить</p>
          </div>
        </div>
      )}
      {isUserProfilePage && (
        <div className="publish-cta-col">
          <div
            className="publish-btn-col-1"
            onClick={() => {
              onSelectedPostHandler(id);
            }}
          >
            <EditNoteIcon color="inherit" fontSize="inherit" />
            <p>Изменить</p>
          </div>
          <div className="publish-btn-col-2" onClick={() => onDeletePosts(id)}>
            <DeleteIcon color="inherit" fontSize="inherit" />
            <p>Удалить</p>
          </div>
        </div>
      )}
      <div className="icon-is-pets-info">{`${
        isPets ? "Можно" : "Нельзя"
      } взять питомца`}</div>
    </div>
  );
};
