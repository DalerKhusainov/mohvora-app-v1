// REACT
import React, { useContext } from "react";

// REACT ROUTER
import { useNavigate } from "react-router-dom";

// REACT COMPONENTS
import { PublishForm } from "../components/PublishForm";

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
      <PublishForm
        onSubmitPublish={onSubmitPublish}
        isUserProfilePage={false}
      />
      <div className="bottom-line">&nbsp;</div>
    </div>
  );
};
