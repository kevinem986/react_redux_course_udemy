import React, { useState } from "react";
import "./assets/css/custom.css";
import Card from "./components/Card";
import faker from "faker";

function App() {
  //Hooks
  const [cards, setCards] = useState([
    {
      id: "card-01",
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      title: `${faker.name.title()}`,
      avatar: `${faker.image.avatar()}`,
    },
    {
      id: "card-02",
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      title: `${faker.name.title()}`,
      avatar: `${faker.image.avatar()}`,
    },
    {
      id: "card-03",
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      title: `${faker.name.title()}`,
      avatar: `${faker.image.avatar()}`,
    },
  ]);
  const [showCard, setShowCard] = useState(true);

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

  // Elements
  const cardsMarkup =
    showCard &&
    cards.map((card, index) => (
      <Card
        key={card.id}
        avatar={card.avatar}
        name={card.name}
        title={card.title}
        onDelete={() => deleteCardHandler(index)}
        onChangeName={(event) => changeNameHandler(event, card.id)}
      />
    ));

  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>
        Toggle Show/Hide
      </button>
      {cardsMarkup}
    </div>
  );
}

export default App;
