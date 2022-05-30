import "./App.css";
import { Header } from "./Components/Header";
import { ContainerCards } from "./Components/ContainerCards";
import { useCards } from "./Hooks/useCards";
import { useAddNewTextArea } from "./Hooks/useAddNewTextArea";
import { useState, useEffect } from "react";

import React from "react";

function App() {
  const [arrCards, deleteAPost, updateAPost, addNewPost] = useCards();

  const [
    isNewMessage,
    textArea,
    onTextAreaChange,
    toggleisNewMessage,
    onSaveButtonClicked,
  ] = useAddNewTextArea("", true);

  return (
    <div className="App">
      <Header></Header>
      <div onClick={toggleisNewMessage} className="new">
        New Message
      </div>
      <ContainerCards
        arrCards={arrCards}
        httpMethods={{ deleteAPost, updateAPost }}
        isNewMessage={isNewMessage}
        className="new"
        newMessageTextArea={{
          textArea,
          onTextAreaChange,
          onButtonClicked: () => {
            onSaveButtonClicked(() => {
              addNewPost(textArea);
            });
          },
        }}
      />
    </div>
  );
}

export default App;
