// REACT
import React, { useContext, useState } from "react";

// CSS STYLES
import "../styles/chat-messages-input.scss";

// MATERIAL UI
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";

// REACT CONTEXT API
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

//FIREBASE
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../configs/firebase";

// RANDOM ID GENERATOR
import { v4 as uuid } from "uuid";

export const ChatMessagesInput = () => {
  // REACT STATES
  const [text, setText] = useState("");

  // REACT CONTEXT HOOK API
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleMessage = async () => {
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setText("");
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleMessage();
  };

  return (
    <div className="chat-messages-input">
      <div className="chat-input-form">
        <div className="chat-input">
          <input
            type="text"
            placeholder="Написать сообщение"
            required
            onKeyDown={handleKey}
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="chat-button">
          <IconButton aria-label="send" onClick={handleMessage}>
            <SendIcon color="inherit" fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
