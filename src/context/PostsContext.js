import { createContext, useState, useEffect } from "react";
import { db } from "../configs/firebase";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

export const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState({});

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
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPostsList();
  }, []);
  return (
    <PostsContext.Provider value={{ posts, getPostsList }}>
      {children}
    </PostsContext.Provider>
  );
};
