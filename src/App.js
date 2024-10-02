import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreditCardList from './components/CreditCardList';
import CreditCardForm from './components/CreditCardForm';
import Header from './components/Header';
import NavBar from './components/NavBar';
import LikedCardsList from './components/LikedCards';

function App() {
  return (
    <div className="App">
     
        <Header />
        <NavBar />
      
      <Routes>
        <Route path="/" element={<CreditCardList />} />
        <Route path="/add-card" element={<CreditCardForm />} />
        <Route path="/liked-cards" element={<LikedCardsList />} />
      </Routes>
    </div>
  );
}

export default App;