import "./App.css";
import { Header } from "./Components/Header";
import { ContainerCards } from "./Components/ContainerCards";
import { useCards } from "./Hooks/useCards";
import { useAddNewTextArea } from "./Hooks/useAddNewTextArea";
import { useState, useEffect } from "react";

import React from "react";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <ContainerCards />
    </div>
  );
}

export default App;
