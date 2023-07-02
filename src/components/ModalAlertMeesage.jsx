// REACT
import React from "react";

// CSS STYLES
import "../styles/modal-alert-message.scss";

// MATERIAL UI
import ErrorIcon from "@mui/icons-material/Error";

export const ModalAlertMeesage = ({
  isError,
  refOne,
  setOpenModalAlert,
  errorText,
}) => {
  return (
    <div className="modal-alert-message">
      {isError && (
        <div className="modal-alert-message-col" ref={refOne}>
          <div className="modal-alert-message-icon">
            <ErrorIcon color="inherit" fontSize="inherit" />
          </div>
          <span className="modal-alert-message-text">{errorText}</span>
          <button
            className="modal-alert-message-btn"
            onClick={() => setOpenModalAlert(false)}
          >
            Понятно
          </button>
        </div>
      )}
    </div>
  );
};
