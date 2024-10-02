import React, { useState, useEffect } from 'react';
import CreditCard from './CreditCard';

function LikedCards() {
  const [likedCards, setLikedCards] = useState([]);

  useEffect(() => {
    fetchLikedCards();
  }, []);

  const fetchLikedCards = async () => {
    try {
      const response = await fetch('http://localhost:3000/creditCards');
      if (!response.ok) {
        throw new Error('Failed to fetch cards');
      }
      const data = await response.json();
      
      const onlyLikedCards = data.filter(card => card.isLiked === true);
      setLikedCards(onlyLikedCards);
    } catch (error) {
      console.error('Error fetching liked cards:', error);
    }
  };

  const handleUnlike = async (cardId) => {
    try {
      const response = await fetch(`http://localhost:3000/creditCards/${cardId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isLiked: false }),
      });

      if (!response.ok) {
        throw new Error('Failed to update card');
      }

      setLikedCards(prevCards => prevCards.filter(card => card.id !== cardId));
    } catch (error) {
      console.error('Error updating card:', error);
    }
  };

  return (
    <div className="liked-cards-list">
      {likedCards.length === 0 ? (
        <p>You haven't liked any cards yet.</p>
      ) : (
        likedCards.map(card => (
          <CreditCard key={card.id} card={card} onLike={handleUnlike} />
        ))
      )}
    </div>
  );
}

export default LikedCards;