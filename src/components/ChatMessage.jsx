// REACT
import React, { useContext, useEffect, useRef } from "react";

// CSS STYLES
import "../styles/chat-message.scss";

// REACT CONTEXT API
import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";

export const ChatMessage = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="message-content">
        <p>{message.text}</p>
      </div>
    </div>
  );
};
