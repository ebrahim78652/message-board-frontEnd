import { useState, useEffect } from "react";
import React from "react";
import { InfoCard } from "../InfoCard";

export const useCards = () => {
  //will call the method to fetch the messages initially here!
  const [arrCards, setArrCards] = useState([InfoCard("starting text")]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch("http://localhost:3001/posts", {
        method: "GET",
        mode: "no-cors",
      });

      console.log(response);
      const body = await response.json();
      console.log(body);
    };

    fetchMessages();
  }, []);

  //i can also just export specific functions from this hook. form here the methods foe the put, get, post will be imported

  return [arrCards, setArrCards];
};
