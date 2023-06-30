// REACT
import React, { useContext, useEffect, useState } from "react";

// REACT COMPONENTS
import { ChatMessage } from "./ChatMessage";

// CSS STYLES
import "../styles/chat-messages.scss";

// FIREBASE
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../configs/firebase";

// REACT CONTEXT API
import { ChatContext } from "../context/ChatContext";

export const ChatMessages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="chat-messages">
      {messages.map((message) => (
        <ChatMessage message={message} key={message.id} />
      ))}
    </div>
  );
};
