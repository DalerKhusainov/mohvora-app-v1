// REACT
import React, { useContext, useEffect, useRef, useState } from "react";

// REACT COMPONENTS
import { ModalAlertMeesage } from "./ModalAlertMeesage";

// REACT ROUTER
import { useNavigate } from "react-router-dom";

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

// FIREBASE
import { db } from "../configs/firebase";
import {
  getDoc,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

// FUNCTION
import { convertMonths } from "../functions/functions";

// REACT CONTEXT API
import { PostsContext } from "../context/PostsContext";
import { AuthContext } from "../context/AuthContext";

export const PublishCard = ({
  post,
  isSearchPage,
  isUserProfilePage,
  // setOpenModalEdit,
  // setPostId,
  onSelectedPostHandler,
}) => {
  // REACT STATES
  const [openModalAlert, setOpenModalAlert] = useState(false);
  const [errorText, setErrorText] = useState("");

  // REACT CONTEXT API
  const { onDeletePosts } = useContext(PostsContext);
  const { currentUser } = useContext(AuthContext);

  // REACT ROUTER HOOK
  const navigate = useNavigate();

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
    userId,
  } = post;

  const handleSelect = async (userId, userName, userPhoto) => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > userId
        ? currentUser.uid + userId
        : userId + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: userId,
            displayName: userName,
            photoURL: userPhoto,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", userId), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
  };

  // GET THE TARGET ELEMENT TO TOGGLE
  const refOne = useRef(null);
  // console.log(refOne);

  useEffect(() => {
    document.addEventListener("keydown", hideModalAlertOnEscape, true);
    document.addEventListener("click", hideModalAlertOnClickOutside, true);
  }, []);

  // HIDE EDIT MODAL ON ESC PRESS
  const hideModalAlertOnEscape = (e) => {
    if (e.key === "Escape") setOpenModalAlert(false);
  };

  // HIDE EDIT MODAL ON OUTSIDE CLICK
  const hideModalAlertOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target))
      setOpenModalAlert(false);
  };

  return (
    <>
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
              <div className="card-smoking-icon">
                <SmokeFreeIcon color="inherit" fontSize="inherit" />
                <div className="icon-smoking-tip">{`${
                  isSmoking ? "Можно" : "Нельзя"
                } курить`}</div>
              </div>
            )}
            {isSmoking && (
              <div className="card-smoking-icon">
                <SmokingRoomsIcon color="inherit" fontSize="inherit" />
                <div className="icon-smoking-tip">{`${
                  isSmoking ? "Можно" : "Нельзя"
                } курить`}</div>
              </div>
            )}
            {!isPets && (
              <div className="card-no-pets-icon">
                <PetsIcon color="inherit" fontSize="inherit" />
                <div className="line line-dark">&nbsp;</div>
                <div className="line line-light">&nbsp;</div>
                <div className="icon-is-pets-tip">{`${
                  isPets ? "Можно" : "Нельзя"
                } брать питомца`}</div>
              </div>
            )}
            {isPets && (
              <div className="card-pets-icon">
                <PetsIcon color="inherit" fontSize="inherit" />
                <div className="icon-is-pets-tip">{`${
                  isPets ? "Можно" : "Нельзя"
                } брать питомца`}</div>
              </div>
            )}
            {!isMusic && (
              <div className="card-music-icon">
                <MusicOffIcon color="inherit" fontSize="inherit" />
                <div className="icon-music-tip">{`${
                  isMusic ? "Люблю" : "Не люблю"
                } музыку`}</div>
              </div>
            )}
            {isMusic && (
              <div className="card-music-icon">
                <MusicNoteIcon color="inherit" fontSize="inherit" />
                <div className="icon-music-tip">{`${
                  isMusic ? "Люблю" : "Не люблю"
                } музыку`}</div>
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
              <div className="card-passenger-icon">
                <PersonIcon color="inherit" fontSize="inherit" />
                <div className="icon-passenger-tip">Количество попутчиков</div>
              </div>
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
            <div
              className="publish-btn-col-1"
              onClick={() => {
                if (!currentUser) {
                  setErrorText(
                    "Извините за неудобство, но для начала чата вам необходимо авторизоваться в своем аккаунте. Пожалуйста, войдите в свой аккаунт, чтобы продолжить."
                  );
                  setOpenModalAlert(true);
                  return;
                } else if (currentUser.uid !== userId) {
                  handleSelect(userId, userName, photoURL);
                  setTimeout(() => {
                    navigate("/chat");
                  }, 1000);
                } else if (currentUser.uid === userId) {
                  setErrorText(
                    "Извините, но не представляется возможным начать чат самому с собой!"
                  );
                  setOpenModalAlert(true);
                }
              }}
            >
              <ChatIcon color="inherit" fontSize="inherit" />
              <p>Связаться</p>
            </div>
            <a href={`tel:${userPhoneNum}`} className="publish-btn-col-2">
              <CallIcon color="inherit" fontSize="inherit" />
              <p>Позвонить</p>
            </a>
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
            <div
              className="publish-btn-delete"
              onClick={() => onDeletePosts(id)}
            >
              <DeleteIcon color="inherit" fontSize="inherit" />
              <p>Удалить</p>
            </div>
          </div>
        )}
      </div>
      {openModalAlert && (
        <ModalAlertMeesage
          isError={true}
          refOne={refOne}
          setOpenModalAlert={setOpenModalAlert}
          errorText={errorText}
        />
      )}
    </>
  );
};
