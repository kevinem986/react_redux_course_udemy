import React, { useState, useEffect } from "react";
import Card from "./components/Elements/Card";
import "./assets/css/custom.css";
import { ThemeProvider } from "styled-components";
import axios from "axios";

const theme = {
  primary: "#4CAF50",
  mango: "yellow",
};

function App() {
  //Hooks
  const [card, setCard] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setCard(res.data);
      });
  }, [id]);

  const changeNameHandler = (event, id) => {
    // 1. Make a copy of the cards
    const cardCopy = { ...card };
    // 2. Change the name of the specific card
    cardCopy.name = event.target.value;
    // 3. Set the cards with the latest version of card copy
    setCard(cardCopy);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <Card
          key={card.id}
          name={card.name}
          phone={card.phone}
          onChangeName={(event) => changeNameHandler(event, card.id)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
