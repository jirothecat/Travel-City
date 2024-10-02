import React from 'react';

function CreditCard({ card, onLike }) {
  return (
    <div className="credit-card">
      <img src={card.image} alt={card.name} style={{ width: '200px', height: 'auto' }} />
      <h2>{card.name}</h2>
      <p>Annual Fee: {card.annual_fee}</p>
      <p>Rewards Details: {card.reward_details}</p>
      <p>Sign-up Bonus: {card.intro_offer}</p>
      <button onClick={() => onLike(card.id)}>
        {card.isLiked ? '❤️ Unlike' : '🤍 Like'}
      </button>
    </div>
  );
}

export default CreditCard;