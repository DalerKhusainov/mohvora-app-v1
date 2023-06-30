// REACT
import React from "react";

// REACT COMPONENTS
import { ChatNavbar } from "./ChatNavbar";
import { ChatContacts } from "./ChatContacts";

// CSS STYLES
import "../styles/chat-sidebar.scss";

export const ChatSidebar = () => {
  return (
    <aside className="chat-sidebar">
      <ChatNavbar />
      <ChatContacts />
    </aside>
  );
};
