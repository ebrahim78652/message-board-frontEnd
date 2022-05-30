import React from "react";

export const ButtonSave = ({ OnsaveButtonClicked }) => {
  return (
    <div className="buttons">
      <div onClick={OnsaveButtonClicked} className="save">
        Save
      </div>
    </div>
  );
};
