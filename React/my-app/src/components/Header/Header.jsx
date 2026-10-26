import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div>
        <h1>CampusConnect</h1>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#events">Events</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

export default Header;
