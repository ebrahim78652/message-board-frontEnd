import React from "react";
import { useState, useEffect } from "react";

import { ButtonsUpdateAndDelete } from "./ButtonsUpdateAndDelete";
import ReactDOM from "react-dom/client";
import { TextArea } from "./textArea";

import { useAddNewTextArea } from "../Hooks/useAddNewTextArea";

export const Card = ({ text, httpMethods }) => {
  const [
    isNewMessage,
    textArea,
    onTextAreaChange,
    toggleisNewMessage,
    onSaveButtonClicked,
  ] = useAddNewTextArea(text);

  const onButtonClicked = () => {
    onSaveButtonClicked(() => {
      httpMethods.updateAPost(httpMethods.getId(), textArea);
    });
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
          onSaveButtonClicked={onButtonClicked}
        />
      )}
    </>
  );
};
