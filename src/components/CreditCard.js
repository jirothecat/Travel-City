import React from 'react';

function CreditCard({ card }) {
  return (
    <div className="credit-card">
      <img src={card.image} alt={card.name} style={{ width: '200px', height: 'auto' }} />
      <h2>{card.name}</h2>
      <p>Annual Fee: {card.annual_fee}</p>
      <p>Rewards Details: {card.reward_details}</p>
      <p>Sign-up Bonus: {card.intro_offer}</p>
    </div>
  );
}

export default CreditCard;