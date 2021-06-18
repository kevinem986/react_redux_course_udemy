import React, { useState, useEffect } from "react";
import Card from "./components/Elements/Card";
import Button from "./components/Elements/Button";
import "./assets/css/custom.css";
import { ThemeProvider } from "styled-components";
import axios from "axios";

const theme = {
  primary: "#4CAF50",
  mango: "yellow",
};

function App() {
  //Hooks
  const [cards, setCards] = useState([]);
  const [showCard, setShowCard] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setCards(res.data);
    });
  }, []);

  const toggleShowCard = () => setShowCard(!showCard);

  const deleteCardHandler = (cardIndex) => {
    const cardsCopy = [...cards];
    cardsCopy.splice(cardIndex, 1);
    setCards(cardsCopy);
  };

  const changeNameHandler = (event, id) => {
    // 1. Which card
    const cardIndex = cards.findIndex((card) => card.id === id);
    // 2. Make a copy of the cards
    const cardsCopy = [...cards];
    // 3. Change the name of the specific card
    cardsCopy[cardIndex].name = event.target.value;
    // 4. Set the cards with the latest version of card copy
    setCards(cardsCopy);
  };

  // Dynamic button style
  // const buttonStyle = {
  //   backgroundColor: null
  // }

  // if(cards.length < 3) buttonStyle.backgroundColor = 'lightpink';
  // if(cards.length < 2) buttonStyle.backgroundColor = 'red';

  const classes = ["button"];

  if (cards.length < 3) classes.push("pink");
  if (cards.length < 2) classes.push("red text");

  // Elements
  const cardsMarkup =
    showCard &&
    cards.map((card, index) => (
      <Card
        key={card.id}
        name={card.name}
        phone={card.phone}
        onDelete={() => deleteCardHandler(index)}
        onChangeName={(event) => changeNameHandler(event, card.id)}
      />
    ));

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color="mango" length={cards.length} onClick={toggleShowCard}>
          Toggle
        </Button>
        <button className={classes.join(" ")} onClick={toggleShowCard}>
          Toggle Show/Hide
        </button>
        {cardsMarkup}
      </div>
    </ThemeProvider>
  );
}

export default App;
