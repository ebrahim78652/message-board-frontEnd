import { useState, useEffect } from "react";
import { useAddNewTextArea } from "../Hooks/useAddNewTextArea";
import { TextArea } from "./textArea";
import { useCards } from "../Hooks/useCards";

//this is a stateless component.

export const AddNewCard = ({ addNewPost }) => {
  const [
    isNewMessage,
    textArea,
    onTextAreaChange,
    toggleisNewMessage,
    onSaveButtonClicked,
  ] = useAddNewTextArea("", true);

  return (
    <>
      <div onClick={toggleisNewMessage} className="new">
        New Message
      </div>

      {isNewMessage && (
        <TextArea
          textArea={textArea}
          onTextAreaChange={onTextAreaChange}
          onSaveButtonClicked={() => {
            onSaveButtonClicked(() => {
              addNewPost(textArea);
            });
          }}
        />
      )}
    </>
  );
};
