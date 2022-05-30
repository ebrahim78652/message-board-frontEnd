import { useState, useEffect } from "react";

export const useAddNewTextArea = () => {
  const [isNewMessage, setIsNewMessage] = useState(false);

  const toggleisNewMessage = () => {
    setIsNewMessage((prevIsNewMessage) => !prevIsNewMessage);
  };

  const [textArea, setTextArea] = useState("");

  const onTextAreaChange = (event) => {
    console.log(event.target.value);
    setTextArea(event.target.value);
  };

  //implement this method in the app.js now
  //and delete it after implementation
  const onSaveButtonClicked = () => {
    console.log("On save button clicked");
    toggleisNewMessage();
    console.log(textArea);
    //add the method to do the actual post!
    //parametrise the function to be called for future use.
  };

  return [isNewMessage, textArea, onTextAreaChange, toggleisNewMessage];
};
