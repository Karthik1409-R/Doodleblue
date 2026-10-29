
import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {


  return (
    <article className="event-card">
      <div className="event-image">
        <span>{event.category}</span>
      </div>

      <div className="event-content">
        <span className="event-category">{event.category}</span>

        <h3>{event.title}</h3>

        <p className="event-description">{event.description}</p>

        <p className="event-info">
          <strong>Date:</strong> {event.date}
        </p>

        <p className="event-info">
          <strong>Venue:</strong> {event.venue}
        </p>

        <p className="event-info">
          <strong>Registrations:</strong> {event.registrations ?? 0}
        </p>

        <div className="event-actions">
          <Link to="/form">
            <button className="register-btn">
              Register
            </button>
          </Link>

          <button
            className={`favorite-btn ${
              event.isFavorite ? 'is-favorite' : ''
            }`}
          >
            {event.isFavorite ? '★ Favorited' : 'Add Favorite'}
          </button>

          <button
            className="remove-btn"
          >
            Remove Event
          </button>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
