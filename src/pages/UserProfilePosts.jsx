// REACT
import React, { useContext, useEffect, useRef, useState } from "react";

// REACT COMPONENTS
import { PublishCard } from "../components/PublishCard";
import { ModalEditCard } from "../components/ModalEditCard";

// REACT CONTEXT API
import { PostsContext } from "../context/PostsContext";

// CSS STYLES
import "../styles/user-profile-posts.scss";

export const UserProfilePosts = () => {
  // REACT STATES
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [postId, setPostId] = useState("");
  const [defaultValuePostDirFrom, setDefaultValuePostDirFrom] = useState("");
  const [defaultValuePostDirTo, setDefaultValuePostDirTo] = useState("");
  const [defaultValuePostDate, setDefaultValuePostDate] = useState("");
  const [defaultValuePostTripPrice, setDefaultValuePostTripPrice] =
    useState("");
  const [
    defaultValuePostAmountOfPassengers,
    setDefaultValuePostAmountOfPassengers,
  ] = useState("");
  const [defaultValuePostUserPhoneNum, setDefaultValuePostUserPhoneNum] =
    useState("");
  const [defaultValuePostUserCar, setDefaultValuePostUserCar] = useState("");

  // REACT CONTEXT API
  const { curUserPosts } = useContext(PostsContext);

  // GET THE TARGET ELEMENT TO TOGGLE
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideModalOnEscape, true);
    document.addEventListener("click", hideModalOnClickOutside, true);
  }, []);

  // HIDE EDIT MODAL ON ESC PRESS
  const hideModalOnEscape = (e) => {
    if (e.key === "Escape") setOpenModalEdit(false);
  };

  // HIDE EDIT MODAL ON OUTSIDE CLICK
  const hideModalOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target))
      setOpenModalEdit(false);
  };

  // ON EDIT SELECTED POST BUTTON
  const onSelectedPostHandler = (postId) => {
    setOpenModalEdit(true);
    const copyPosts = [...curUserPosts];
    const selectedPost = copyPosts.find((post) => post.id === postId);
    setDefaultValuePostDirFrom(selectedPost.dirFrom);
    setDefaultValuePostDirTo(selectedPost.dirTo);
    setDefaultValuePostDate(selectedPost.date);
    setDefaultValuePostTripPrice(selectedPost.tripPrice);
    setDefaultValuePostAmountOfPassengers(selectedPost.amountOfPassengers);
    setDefaultValuePostUserPhoneNum(selectedPost.userPhoneNum);
    setDefaultValuePostUserCar(selectedPost.userCar);
    setPostId(postId);
  };

  return (
    <>
      {curUserPosts.map((post) => (
        <PublishCard
          key={post.id}
          post={post}
          isSearchPage={false}
          isUserProfilePage={true}
          onSelectedPostHandler={onSelectedPostHandler}
        />
      ))}
      {openModalEdit && (
        <ModalEditCard
          setOpenModalEdit={setOpenModalEdit}
          refOne={refOne}
          defaultValuePostDirFrom={defaultValuePostDirFrom}
          defaultValuePostDirTo={defaultValuePostDirTo}
          defaultValuePostDate={defaultValuePostDate}
          defaultValuePostAmountOfPassengers={
            defaultValuePostAmountOfPassengers
          }
          defaultValuePostTripPrice={defaultValuePostTripPrice}
          defaultValuePostUserPhoneNum={defaultValuePostUserPhoneNum}
          defaultValuePostUserCar={defaultValuePostUserCar}
          postId={postId}
        />
      )}
    </>
  );
};
