
import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h6 className="hero-tagline">
          Your Campus. Your Community.
        </h6>

        <h1>
          Make Your Campus
          <span> Experience Count</span>
        </h1>

        <p>
          Discover exciting events, meet new people, and
          make the most of your college life.
        </p>

        <Link to="/events" className="hero-button">
          Explore Events →
        </Link>
      </div>
    </section>
  );
}

export default Hero;
