import React from "react";
import { useState, useEffect } from "react";

import { ButtonsUpdateAndDelete } from "./ButtonsUpdateAndDelete";
import ReactDOM from "react-dom/client";
import { TextArea } from "./textArea";

import { useAddNewTextArea } from "../Hooks/useAddNewTextArea";

export const Card = ({ text, httpMethods }) => {
  const [isNewMessage, textArea, onTextAreaChange, toggleisNewMessage] =
    useAddNewTextArea(text);

  const onSaveButtonClicked = () => {
    console.log("On save button clicked");
    toggleisNewMessage();
    httpMethods.updateAPost(httpMethods.getId(), textArea);
    console.log(textArea);
  };

  return (
    <>
      {!isNewMessage && (
        <div className="card">
          <>
            <div className="message">{text}</div>
            <ButtonsUpdateAndDelete
              httpMethods={httpMethods}
              toggleEditMode={toggleisNewMessage}
            />
          </>
        </div>
      )}

      {isNewMessage && (
        <TextArea
          onTextAreaChange={onTextAreaChange}
          textArea={textArea}
          onSaveButtonClicked={onSaveButtonClicked}
        />
      )}
    </>
  );
};
