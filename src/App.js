import React, { useState } from 'react';
import './assets/css/custom.css';
import Card from './components/Card';
import faker from 'faker';

function App() {

  //Hooks
  const [cards, setCards] = useState([
    {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      title: `${faker.name.title()}`,
      avatar: `${faker.image.avatar()}`,
    },
    {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      title: `${faker.name.title()}`,
      avatar: `${faker.image.avatar()}`,
    },
    {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      title: `${faker.name.title()}`,
      avatar: `${faker.image.avatar()}`,
    }
  ]);
  const [showCard, setShowCard] = useState(true);

  const toggleShowCard = () => setShowCard(!showCard);

  // Elements
  const cardsMarkup = (
    showCard && (
      cards.map(card => 
        <Card 
          avatar={card.avatar}
          name={card.name} 
          title={card.title} 
        /> 
      )      
    )
  )

  return (
    <div className="App">
       <button className="button" onClick={toggleShowCard}>Toggle Show/Hide</button>       
       {cardsMarkup}       
    </div>
  );
}

export default App;
