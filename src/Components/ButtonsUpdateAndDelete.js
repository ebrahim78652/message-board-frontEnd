import React from "react";

export const ButtonsUpdateAndDelete = ({ httpMethods, toggleEditMode }) => {
  return (
    <div className="buttons">
      <div onClick={httpMethods.deleteAPost} className="delete">
        Delete
      </div>
      <div onClick={toggleEditMode} className="Edit">
        Edit
      </div>
    </div>
  );
};
