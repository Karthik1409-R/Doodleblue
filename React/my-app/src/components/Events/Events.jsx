
import React, { useState } from 'react';
import './Events.css';

function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      category: 'TECH',
      title: 'Campus Tech Fest 2026',
      description:
        'Explore technology, discover new ideas, and connect with fellow students.',
      date: 'November 5, 2026',
      venue: 'Main Auditorium',
      registrations: 0,
      isRegistered: false,
      isFavorite: false,
    },
    {
      id: 2,
      category: 'CULTURE',
      title: 'Cultural Day',
      description:
        'Celebrate music, dance, art, and cultures from across campus.',
      date: 'November 12, 2026',
      venue: 'Open Air Theatre',
      registrations: 0,
      isRegistered: false,
      isFavorite: false,
    },
    {
      id: 3,
      category: 'SPORTS',
      title: 'Annual Sports Meet',
      description:
        'Participate in exciting sports activities and compete with fellow students.',
      date: 'November 20, 2026',
      venue: 'College Ground',
      registrations: 0,
      isRegistered: false,
      isFavorite: false,
    },
  ]);

  // Add a sample event
  const addSampleEvent = () => {
    const newEvent = {
      id: Date.now(),
      category: 'WORKSHOP',
      title: 'Web Development Workshop',
      description:
        'Learn modern web development and build exciting projects.',
      date: 'November 25, 2026',
      venue: 'Computer Lab',
      registrations: 0,
      isRegistered: false,
      isFavorite: false,
    };

    setEvents((previousEvents) => [...previousEvents, newEvent]);
  };

  // Register or cancel registration
  const toggleRegistration = (id) => {
    setEvents((previousEvents) =>
      previousEvents.map((event) => {
        if (event.id !== id) return event;

        const isRegistering = !event.isRegistered;

        return {
          ...event,
          isRegistered: isRegistering,
          registrations:
            event.registrations + (isRegistering ? 1 : -1),
        };
      })
    );
  };

  // Add or remove a favorite
  const toggleFavorite = (id) => {
    setEvents((previousEvents) =>
      previousEvents.map((event) =>
        event.id === id
          ? { ...event, isFavorite: !event.isFavorite }
          : event
      )
    );
  };

  // Remove an event
  const removeEvent = (id) => {
    setEvents((previousEvents) =>
      previousEvents.filter((event) => event.id !== id)
    );
  };

  return (
    <section className="events-section" id="events">
      <div className="events-top">
        <div className="events-header">
          <p className="events-subtitle">DISCOVER YOUR CAMPUS</p>
          <h2>Upcoming Events</h2>
          <p className="events-description">
            Find opportunities to learn, connect, and participate.
          </p>
        </div>

        <button className="add-event-btn" onClick={addSampleEvent}>
          + Add Sample Event
        </button>
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

              <p className="event-info">
                <strong>Registrations:</strong> {event.registrations}
              </p>

              <div className="event-actions">
                <button
                  className="register-btn"
                  onClick={() => toggleRegistration(event.id)}
                >
                  {event.isRegistered ? 'Cancel Registration' : 'Register'}
                </button>

                <button
                  className={`favorite-btn ${
                    event.isFavorite ? 'is-favorite' : ''
                  }`}
                  onClick={() => toggleFavorite(event.id)}
                >
                  {event.isFavorite ? '★ Favorited' : 'Add Favorite'}
                </button>

                <button
                  className="remove-btn"
                  onClick={() => removeEvent(event.id)}
                >
                  Remove Event
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {events.length === 0 && (
        <p className="empty-events">
          No events available. Add a sample event to get started.
        </p>
      )}
    </section>
  );
}

export default Events;
