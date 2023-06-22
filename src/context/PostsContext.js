import { createContext, useState, useEffect } from "react";
import { db } from "../configs/firebase";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

export const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState({});
  const [filteredPosts, setFilteredPosts] = useState({});
  const [isTrue, setIsTrue] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [cityFrom, setCityFrom] = useState("");
  const [cityTo, setCityTo] = useState("");

  // SPECIFYING REFERENCE TO COLLECTION
  const postsCollectionRef = collection(db, "posts");

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
      console.log(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPostsList();
  }, []);

  const filterPostsFunc = (dirFrom, dirTo, date, amountOfPassengers) => {
    const newFilteredPosts = posts.filter(
      (post) =>
        post.dirFrom === dirFrom &&
        post.dirTo === dirTo &&
        post.date === date &&
        post.amountOfPassengers === amountOfPassengers
    );
    setFilteredPosts(newFilteredPosts);
    setIsTrue(true);
    setSelectedDate(date);
    setCityFrom(dirFrom);
    setCityTo(dirTo);
  };

  return (
    <PostsContext.Provider
      value={{
        getPostsList,
        filterPostsFunc,
        filteredPosts,
        isTrue,
        selectedDate,
        cityFrom,
        cityTo,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
