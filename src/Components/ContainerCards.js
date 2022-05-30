import { Card } from "./Card";
import { useState, useEffect } from "react";
import { TextArea } from "./textArea";
import { AddNewCard } from "./AddNewCard";
import { useCards } from "../Hooks/useCards";

export function ContainerCards() {
  const [arrCards, deleteAPost, updateAPost, addNewPost] = useCards();

  return (
    <div className="container">
      <AddNewCard addNewPost={addNewPost} />
      {arrCards.map((element, index) => (
        <Card
          httpMethods={{
            deleteAPost: () => {
              deleteAPost(element._id);
            },
            updateAPost: updateAPost,
            getId: () => element._id,
          }}
          key={index}
          text={element.text}
        />
      ))}
    </div>
  );
}
