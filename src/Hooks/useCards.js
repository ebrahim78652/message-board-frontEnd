import { useState, useEffect } from "react";
import React from "react";
import { InfoCard } from "../InfoCard";

export const useCards = () => {
  //will call the method to fetch the messages initially here!
  const [arrCards, setArrCards] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch("http://localhost:3001/posts", {
        method: "GET",
        mode: "cors",
      });

      console.log(response);
      const body = await response.json();
      console.log(body);
      const arr = body.map((element) => InfoCard(element.text, element._id));
      console.log(arr);
      setArrCards(arr);
    };

    fetchMessages();
  }, []);

  const deleteAPost = async (_id) => {
    console.log(`delete called with _id ${_id}`);

    const response = await fetch(`http://localhost:3001/posts/${_id}`, {
      method: "DELETE",
      mode: "cors",
    });

    console.log(response);
    const body = await response.json();
    console.log(body);
    setArrCards(arrCards.filter((card) => card._id !== body[0]._id));
  };

  const updateAPost = async (_id, text) => {
    console.log(`update called with id: ${_id}`);
    console.log(`the updated text is  ${text}`);

    const response = await fetch(`http://localhost:3001/posts/${_id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: _id,
        updated: text,
      }),
    });

    console.log(response);
    const body = await response.json();
    console.log(body);
    setArrCards(
      arrCards.filter((card) => {
        if (card._id !== body[0]._id) {
          return card;
        }
        card.text = body[0].text;
        return card;
      })
    );
  };

  const addNewPost = async (text) => {
    console.log("adding new post ");
    console.log("the text is: " + text);

    const response = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    });

    console.log(response);
    const body = await response.json();
    console.log(body);
    setArrCards([...arrCards, InfoCard(body[0].text, body[0]._id)]);
  };

  return [arrCards, setArrCards, deleteAPost, updateAPost, addNewPost];
};
