import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <div>
        <h1>CampusConnect</h1>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        
      </nav>
    </header>
  );
}

export default Header;
