import React from "react";

export const ButtonSave = ({ onSaveButtonClicked }) => {
  return (
    <div className="buttons">
      <div onClick={onSaveButtonClicked} className="save">
        Save
      </div>
    </div>
  );
};
