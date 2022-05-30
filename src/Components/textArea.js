import React from "react";
import { ButtonSave } from "./ButtonSave";

export function TextArea({ onTextAreaChange, textArea, onsaveButtonClicked }) {
  return (
    <>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={onTextAreaChange}
        value={textArea}
      ></textarea>
      <ButtonSave OnsaveButtonClicked={onsaveButtonClicked} />
    </>
  );
}
