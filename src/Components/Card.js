import React from "react";
import { ButtonsUpdateAndDelete } from "./ButtonsUpdateAndDelete";
import ReactDOM from "react-dom/client";

export const Card = ({ text }) => {
  return (
    <div className="card">
      {/*  <textarea name="" id="" cols="30" rows="10"></textarea> */}
      <div className="message">{text}</div>
      <ButtonsUpdateAndDelete />
    </div>
  );
};
