import React, { useState, useEffect } from 'react';
import CreditCard from './CreditCard';

function CreditCardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch('http://localhost:3000/creditCards');
      if (!response.ok) {
        throw new Error('Failed to fetch cards');
      }
      const data = await response.json();
      const cardsWithLikeStatus = data.map(card => ({
        ...card,
        isLiked: card.isLiked || false
      }));
      setCards(cardsWithLikeStatus);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleLike = async (cardId) => {
    try {
      const cardToUpdate = cards.find(card => card.id === cardId);
      const updatedCard = { ...cardToUpdate, isLiked: !cardToUpdate.isLiked };
      
      const response = await fetch(`http://localhost:3000/creditCards/${cardId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isLiked: updatedCard.isLiked }),
      });

      if (!response.ok) {
        throw new Error('Failed to update card');
      }

      setCards(cards.map(card => card.id === cardId ? updatedCard : card));
    } catch (error) {
      console.error('Error updating card:', error);
    }
  };

  return (
    <div className="credit-card-list">
      {cards.map(card => (
        <CreditCard key={card.id} card={card} onLike={handleLike} />
      ))}
    </div>
  );
}

export default CreditCardList;