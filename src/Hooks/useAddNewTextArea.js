//this hook will have the state of the Button presesd to add a new message!

//will contain the method that will run when the new button is pressed!
import { TextArea } from "../Components/textArea";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import React from "react";

export const useAddNewTextArea = () => {
  const [textArea, setTextArea] = useState("");

  const onTextAreaChange = (event) => {
    console.log(event.target.value);
    setTextArea(event.target.value);
  };

  const OnsaveButtonClicked = () => {
    console.log("On save button clicked");
    //will call the http update method somehow, no just import the post method
  };

  const constructNewTextArea = () => {
    console.log("constructing new text area");
    const temp = React.createElement(
      TextArea,
      { onTextAreaChange, textArea, OnsaveButtonClicked },
      null
    );
    console.log(temp);
    ReactDOM.render(temp, document.querySelector(".container"));
  };

  const onNewClicked = () => {
    console.log("new button clicked");
    constructNewTextArea();
    //make a new card with default edit mode= true, and insert it into a specific position.
  };

  return { onNewClicked };
};
