
import React from 'react';
import './Events.css';

function Events() {
  const events = [
    {
      id: 1,
      category: 'TECH',
      title: 'Campus Tech Fest 2026',
      description:
        'Explore technology, discover new ideas, and connect with fellow students.',
      date: 'November 5, 2026',
      venue: 'Main Auditorium',
    },
    {
      id: 2,
      category: 'CULTURE',
      title: 'Cultural Day',
      description:
        'Celebrate music, dance, art, and cultures from across campus.',
      date: 'November 12, 2026',
      venue: 'College Ground',
    },
    {
      id: 3,
      category: 'WORKSHOP',
      title: 'Web Development Workshop',
      description:
        'Learn modern web development and build exciting projects.',
      date: 'November 18, 2026',
      venue: 'Computer Lab',
    },
  ];

  return (
    <section className="events-section" id="events">
      <div className="events-header">
        <p className="events-subtitle">DISCOVER YOUR CAMPUS</p>
        <h2>Upcoming Events</h2>
        <p className="events-description">
          Find opportunities to learn, connect, and participate.
        </p>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <article className="event-card" key={event.id}>
            <div className="event-image">
              <span>{event.category}</span>
            </div>

            <div className="event-content">
              <span className="event-category">
                {event.category}
              </span>

              <h3>{event.title}</h3>

              <p className="event-description">
                {event.description}
              </p>

              <p className="event-info">
                <strong>Date:</strong> {event.date}
              </p>

              <p className="event-info">
                <strong>Venue:</strong> {event.venue}
              </p>

              <div className="event-actions">
                <button className="register-btn">
                  Register
                </button>

                <button className="favorite-btn">
                  Add Favorite
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Events;
