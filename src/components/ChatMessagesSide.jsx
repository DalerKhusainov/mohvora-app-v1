// REACT
import React, { useContext } from "react";

// REACT COMPONENTS
import { ChatMessages } from "./ChatMessages";
import { ChatMessagesInput } from "./ChatMessagesInput";

// CSS STYLES
import "../styles/chat-messages-side.scss";

// REACT CONTEXT API
import { ChatContext } from "../context/ChatContext";

export const ChatMessagesSide = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat-messages-col">
      {data.user.photoURL && (
        <div className="chat-messages-title-col">
          <img src={data.user?.photoURL} alt="" />
          <span>{data.user?.displayName}</span>
        </div>
      )}
      {!data.user.photoURL && (
        <div className="chat-messages-title-col">
          <img style={{ display: "none" }} src={data.user?.photoURL} alt="" />
          <span>Выберите контакт чтобы начать чат</span>
        </div>
      )}
      <ChatMessages />
      <ChatMessagesInput />
    </div>
  );
};
