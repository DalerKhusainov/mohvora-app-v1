// REACT
import React, { useContext, useEffect, useState } from "react";

// CSS STYLES
import "../styles/chat-contacts.scss";

// REACT CONTEXT API
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

// FIREBASE
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../configs/firebase";

export const ChatContacts = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  // FETCHING CURRENT USER'S CHAT DATA FROM FIREBASE
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  // ON SELECT CONTACT FOR CHAT
  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chat-contacts-col">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="chat-contact"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="contact-info-col">
              <span className="contact-name">
                {chat[1].userInfo.displayName}
              </span>
              <p className="contact-last-message">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
