import React from "react";
import { ButtonSave } from "./ButtonSave";

export function TextArea({ onTextAreaChange, textArea, onSaveButtonClicked }) {
  return (
    <div className="card">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={onTextAreaChange}
        value={textArea}
      ></textarea>
      <ButtonSave onSaveButtonClicked={onSaveButtonClicked} />
    </div>
  );
}
