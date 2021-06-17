import React, { Component } from "react";
import Card from "./components/Elements/Card";
import Button from "./components/Elements/Button";
import "./assets/css/custom.css";
import faker from "faker";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "#4CAF50",
  mango: "yellow",
};

class App extends Component {
  constructor(props) {
    console.log("App js constructor");
    super(props);

    this.state = {
      cards: [
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
      ],
      showCard: true,
    };
  }

  static getDerivedStateFromProps(props, state){
    console.log('App js getDerivedStateFromProps', props);
    return state;
  }

  toggleShowCard = () => this.setState({ showCard: !this.state.showCard });

  deleteCardHandler = (cardIndex) => {
    const cardsCopy = [...this.state.cards];
    cardsCopy.splice(cardIndex, 1);
    this.setState({ cards: cardsCopy });
  };

  changeNameHandler = (event, id) => {
    // 1. Which card
    const cardIndex = this.state.cards.findIndex((card) => card.id === id);
    // 2. Make a copy of the cards
    const cardsCopy = [...this.state.cards];
    // 3. Change the name of the specific card
    cardsCopy[cardIndex].name = event.target.value;
    // 4. Set the cards with the latest version of card copy    
    this.setState({ cards: cardsCopy });
  };

  componentDidMount() {
    console.log('App js componentDidMount');
  }

  render() {
    console.log('App js render');
    const classes = ["button"];
    if (this.state.cards.length < 3) classes.push("pink");
    if (this.state.cards.length < 2) classes.push("red text");

    // Elements
    const cardsMarkup =
      this.state.showCard &&
      this.state.cards.map((card, index) => (
        <Card
          key={card.id}
          avatar={card.avatar}
          name={card.name}
          title={card.title}
          onDelete={() => this.deleteCardHandler(index)}
          onChangeName={(event) => this.changeNameHandler(event, card.id)}
        />
      ));

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button color="mango" length={this.state.cards.length} onClick={this.toggleShowCard}>
            Toggle
          </Button>
          <button className={classes.join(" ")} onClick={this.toggleShowCard}>
            Toggle Show/Hide
          </button>
          {cardsMarkup}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
