// REACT
import { createContext, useState, useEffect, useContext } from "react";

// FIREBASE
import { db } from "../configs/firebase";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

// REACT CONTEXT API FILE
import { AuthContext } from "./AuthContext";

// CREATING CONTEXT API
export const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  // REACT STATES
  const [posts, setPosts] = useState({});
  const [filteredPosts, setFilteredPosts] = useState({});
  const [isTrue, setIsTrue] = useState(false);
  const [directionFrom, setDirectionFrom] = useState("");
  const [directionTo, setDirectionTo] = useState("");
  const [curUserPosts, setCurUserPosts] = useState({});

  // CONTEXT API
  const { currentUser } = useContext(AuthContext);

  // SPECIFYING REFERENCE TO COLLECTION
  const postsCollectionRef = collection(db, "posts");

  // GETTING ALL POSTS FROM FIREBASE
  const getPostsList = async () => {
    try {
      // READ THE DATA
      const data = await getDocs(postsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // SET THE POSTS LIST
      setPosts(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPostsList();
  }, []);

  // ON SEARCH POSTS HANDLER
  const filterPostsFunc = (dirFrom, dirTo, dateStart, dateEnd) => {
    const copyPosts = [...posts];
    const newFilteredPosts = copyPosts.filter(
      (post) =>
        post.dirFrom === dirFrom &&
        post.dirTo === dirTo &&
        post.date >= dateStart &&
        post.date <= dateEnd
    );
    setFilteredPosts(newFilteredPosts);
    setIsTrue(true);
    setDirectionFrom(dirFrom);
    setDirectionTo(dirTo);
  };

  // ON FILTER POSTS HANDLER BY PRICES AND DATES
  const sortedPostsFunc = (value) => {
    if (value === "") return;
    if (value === "Сначала дешевые") {
      const copyFilteredPosts = [...filteredPosts];
      const sortedDestripPrice = copyFilteredPosts.sort((a, b) =>
        a.tripPrice > b.tripPrice ? 1 : -1
      );
      setFilteredPosts(sortedDestripPrice);
    }
    if (value === "Сначала дорогие") {
      const copyFilteredPosts = [...filteredPosts];
      const sortedAsctripPrice = copyFilteredPosts.sort((a, b) =>
        a.tripPrice < b.tripPrice ? 1 : -1
      );
      setFilteredPosts(sortedAsctripPrice);
    }
    if (value === "Ближайшее время") {
      const copyFilteredPosts = [...filteredPosts];
      const sortedDesDate = copyFilteredPosts.sort((a, b) =>
        a.tripPrice > b.tripPrice ? 1 : -1
      );
      setFilteredPosts(sortedDesDate);
    }
    if (value === "Позднее время") {
      const copyFilteredPosts = [...filteredPosts];
      const sortedAscDate = copyFilteredPosts.sort((a, b) =>
        a.tripPrice < b.tripPrice ? 1 : -1
      );
      setFilteredPosts(sortedAscDate);
    }
  };

  useEffect(() => {
    sortedPostsFunc();
  }, []);

  // ON DELETE POSTS HANDLER. IT IS BEING USED IN THE USER PROFILE PAGE
  const onDeletePosts = async (postId) => {
    const post = doc(db, "posts", postId);
    await deleteDoc(post);
    getPostsList();
    const newCurUserPosts = curUserPosts.filter((post) => post.id !== postId);
    setCurUserPosts(newCurUserPosts);
  };

  // ON CURRENT USER'S POSTS HANDLER. IT IS BEING USED IN THE USER PROFILE PAGE
  const filterCurUserPostsFunc = () => {
    const newCurUserPosts = posts.filter(
      (post) => post.userId === currentUser.uid
    );
    setCurUserPosts(newCurUserPosts);
  };

  // ON CURRENT USER'S POST UPDATE HANDLER. IT IS BEING USED IN USER PROFILE PAGE
  const onUpdatePost = async (
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
  ) => {
    const post = doc(db, "posts", postId);
    await updateDoc(post, {
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
    });
    getPostsList();

    // THIS BLOCK OF CODE FOR UPDATING THE POSTS STATE
    const copyCurUserPostsForEdit = [...curUserPosts];
    const selectedPostForEdit = copyCurUserPostsForEdit.find(
      (post) => post.id === postId
    );
    selectedPostForEdit.dirFrom = dirFrom;
    selectedPostForEdit.dirTo = dirTo;
    selectedPostForEdit.date = datePicked;
    selectedPostForEdit.amountOfPassengers = amountOfPassengers;
    selectedPostForEdit.tripPrice = tripPrice;
    selectedPostForEdit.userPhoneNum = userPhoneNum;
    selectedPostForEdit.userCar = userCar;
    selectedPostForEdit.isMusic = isMusic;
    selectedPostForEdit.isPets = isPets;
    selectedPostForEdit.isSmoking = isSmoking;
    setCurUserPosts(copyCurUserPostsForEdit);
  };

  return (
    <PostsContext.Provider
      value={{
        getPostsList,
        filterPostsFunc,
        filteredPosts,
        isTrue,
        posts,
        directionFrom,
        directionTo,
        sortedPostsFunc,
        filterCurUserPostsFunc,
        curUserPosts,
        onDeletePosts,
        onUpdatePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
