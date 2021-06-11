import React, { useState } from "react";
import "./assets/css/custom.css";
import Card from "./components/Card";
import faker from "faker";
import styled, { ThemeProvider, css } from "styled-components";

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

// const Button = styled.button`
//   background-color: ${props => props.length > 2 ? '#4CAF50' : props.length < 2 ? 'red' : 'pink'};
//   border: none;
//   color: ${props => props.length <= 1 ? 'black' : 'white'};
//   font-weight: ${props => props.length <= 1 ? 'bold' : 'normal'};
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin: 4px 2px;
//   cursor: pointer;
// `

const Button = styled.button`
  border: none;
  ${(props) =>
    props.color &&
    css`
      background-color: ${(props) =>
        props.length > 2 ? props.theme[props.color] : props.length < 2 ? "red" : "pink"};
      color: ${(props) => (props.length <= 1 ? "white" : "black")};
    `}
  font-weight: ${(props) => (props.length <= 1 ? "bold" : "normal")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

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

  // Dynamic button style
  // const buttonStyle = {
  //   backgroundColor: null
  // }

  // if(cards.length < 3) buttonStyle.backgroundColor = 'lightpink';
  // if(cards.length < 2) buttonStyle.backgroundColor = 'red';

  const classes = ['button'];

  if(cards.length < 3) classes.push('pink');
  if(cards.length < 2) classes.push('red text');

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
    // <div className="App">
    //   {/* <button className="button" style={buttonStyle} onClick={toggleShowCard}>
    //     Toggle Show/Hide
    //   </button> */}
    //   <Button length={cards.length}>Toggle</Button>
    //   <button className={classes.join(' ')} onClick={toggleShowCard}>
    //     Toggle Show/Hide
    //   </button>
    //   {cardsMarkup}
    // </div>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color='mango' length={cards.length}>Toggle</Button>
        <button className={classes.join(' ')} onClick={toggleShowCard}>
          Toggle Show/Hide
        </button>
        {cardsMarkup}
      </div>
    </ThemeProvider>
  );
}

export default App;
