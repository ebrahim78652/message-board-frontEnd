import React from "react";
import { useState, useEffect } from "react";

import { ButtonsUpdateAndDelete } from "./ButtonsUpdateAndDelete";
import ReactDOM from "react-dom/client";
import { TextArea } from "./textArea";

export const Card = ({ text, httpMethods }) => {
  const [editMode, setEditMode] = useState(false);
  const [textArea, setTextArea] = useState(text);

  const onTextAreaChange = (event) => {
    console.log(event.target.value);
    setTextArea(event.target.value);
  };

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const onSaveButtonClicked = () => {
    console.log("On save button clicked");
    toggleEditMode();
    httpMethods.updateAPost(httpMethods.getId(), textArea);
    console.log(textArea);
  };

  return (
    <>
      {!editMode && (
        <div className="card">
          {/*  <textarea name="" id="" cols="30" rows="10"></textarea> */}

          <>
            <div className="message">{text}</div>
            <ButtonsUpdateAndDelete
              httpMethods={httpMethods}
              toggleEditMode={toggleEditMode}
            />
          </>
        </div>
      )}

      {editMode && (
        <TextArea
          onTextAreaChange={onTextAreaChange}
          textArea={textArea}
          onSaveButtonClicked={onSaveButtonClicked}
        />
      )}
    </>
  );
};
