import { Card } from "./Card";
import { useState, useEffect } from "react";
import { TextArea } from "./textArea";
export function ContainerCards({
  arrCards,
  httpMethods,
  isNewMessage,
  newMessageTextArea,
}) {
  return (
    <div className="container">
      {isNewMessage && (
        <TextArea
          textArea={newMessageTextArea.textArea}
          onTextAreaChange={newMessageTextArea.onTextAreaChange}
          onSaveButtonClicked={newMessageTextArea.onSaveButtonClicked}
        />
      )}
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
