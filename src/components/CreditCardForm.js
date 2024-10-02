import React, { useState } from 'react';

function CreditCardForm() {
  const [formData, setFormData] = useState({
    name: '',
    annual_fee: '',
    reward_details: '',
    intro_offer: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/creditCards', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    })
    setFormData({
      name: '',
      annual_fee: '',
      reward_details: '',
      intro_offer: '',
      image: ''
    });
  };

  return (
    <div className="credit-card-form">
      <h2>Didn't see one you liked? Add a new one!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Card Name"
          required
        />
        <input
          type="text"
          name="annual_fee"
          value={formData.annual_fee}
          onChange={handleChange}
          placeholder="Annual Fee"
          required
        />
        <input
          type="text"
          name="reward_details"
          value={formData.reward_details}
          onChange={handleChange}
          placeholder="Rewards Details"
          required
        />
        <input
          type="text"
          name="intro_offer"
          value={formData.intro_offer}
          onChange={handleChange}
          placeholder="Sign-up Bonus"
          required
        />
        <input
         type="text"
         name="image"
         value={formData.image}
         onChange={handleChange}
         placeholder="Image"
         required
        />
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}

export default CreditCardForm;