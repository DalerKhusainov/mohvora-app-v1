// REACT
import React from "react";

// CSS STYLES
import "../styles/popup-message.scss";

// MATERIAL UI
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const PopupMessage = () => {
  return (
    <div className="popup-message">
      <div className="popup-message-col">
        <div className="popup-message-icon">
          <CheckCircleIcon color="inherit" fontSize="inherit" />
        </div>
        <span className="popup-message-text">Popup Text</span>
      </div>
    </div>
  );
};
