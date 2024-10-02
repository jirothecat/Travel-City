import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add-card">Add New Card</NavLink></li>
        <li><NavLink to="/liked-cards">Your Liked Cards</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;