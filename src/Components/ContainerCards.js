import { Card } from "./Card";
import { useState, useEffect } from "react";
import { TextArea } from "./textArea";
export function ContainerCards({ arrCards, httpMethods }) {
  return (
    <div className="container">
      {arrCards.map((element, index) => (
        <Card
          httpMethods={{
            deleteAPost: () => {
              httpMethods.deleteAPost(element._id);
            },
            updateAPost: httpMethods.updateAPost,
            getId: () => element._id,
          }}
          key={index}
          text={element.text}
        />
      ))}
    </div>
  );
}
