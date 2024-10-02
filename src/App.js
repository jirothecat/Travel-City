import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreditCardList from './components/CreditCardList';
import CreditCardForm from './components/CreditCardForm';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
     
        <Header />
        <NavBar />
      
      <Routes>
        <Route path="/" element={<CreditCardList />} />
        <Route path="/add-card" element={<CreditCardForm />} />
      </Routes>
    </div>
  );
}

export default App;