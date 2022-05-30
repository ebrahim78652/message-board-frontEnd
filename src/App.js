import "./App.css";
import { Header } from "./Components/Header";
import { ContainerCards } from "./Components/ContainerCards";
import { useCards } from "./Hooks/useCards";
import { useAddNewTextArea } from "./Hooks/useAddNewTextArea";
import { useState, useEffect } from "react";

import React from "react";

function App() {
  const [arrCards, setArrCards, deleteAPost, updateAPost, addNewPost] =
    useCards();

  return (
    <div className="App">
      <Header></Header>

      <div className="new">New Message</div>

      <ContainerCards
        arrCards={arrCards}
        httpMethods={{ deleteAPost, updateAPost }}
      />
    </div>
  );
}

export default App;
