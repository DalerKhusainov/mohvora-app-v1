// REACT
import React from "react";

// REACT COMPONENTS
import { ChatSidebar } from "../components/ChatSidebar";
import { ChatMessagesSide } from "../components/ChatMessagesSide";

// CSS STYLES
import "../styles/chat.scss";

export const Chat = () => {
  return (
    <section className="chat-section">
      <ChatSidebar />
      <ChatMessagesSide />
    </section>
  );
};
