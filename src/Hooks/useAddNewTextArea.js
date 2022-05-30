import { useState, useEffect } from "react";

export const useAddNewTextArea = (
  defaultText,
  eraseTextAfterToggle = false
) => {
  const [isNewMessage, setIsNewMessage] = useState(false);
  const [textArea, setTextArea] = useState(defaultText || "");

  const toggleisNewMessage = () => {
    setIsNewMessage((prevIsNewMessage) => !prevIsNewMessage);

    if (eraseTextAfterToggle) {
      setTextArea("");
    }
  };

  const onTextAreaChange = (event) => {
    console.log(event.target.value);
    setTextArea(event.target.value);
  };

  /* basically we want to run this function with a callback as an argument when the button is clicked. */
  const onSaveButtonClicked = (cb) => {
    console.log("On save button clicked");
    toggleisNewMessage();
    //below method coming from useAddNewTextArea()
    console.log(textArea);
    cb();
  };

  return [
    isNewMessage,
    textArea,
    onTextAreaChange,
    toggleisNewMessage,
    onSaveButtonClicked,
  ];
};
