import React, { useState, useEffect } from 'react';
import CreditCard from './CreditCard';

function CreditCardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/creditCards')
      .then(response => response.json())
      .then(data => setCards(data));
  }, []);

  return (
    <div className="credit-card-list">
      <h1>Travel Credit Cards</h1>
      {cards.map(card => (
        <CreditCard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CreditCardList;