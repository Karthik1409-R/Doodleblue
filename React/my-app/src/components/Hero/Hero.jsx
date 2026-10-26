
import React from 'react';
import './Hero.css';

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

        <button className="hero-button">
          Explore Events →
        </button>
      </div>
    </section>
  );
}

export default Hero;
