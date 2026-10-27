
import React, { useState } from 'react';
import EventCard from './EventCard';
import './Events.css';

function EventList() {
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

    setEvents(previousEvents => [...previousEvents, newEvent]);
  };

  const toggleRegistration = id => {
    setEvents(previousEvents =>
      previousEvents.map(event => {
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

  const toggleFavorite = id => {
    setEvents(previousEvents =>
      previousEvents.map(event =>
        event.id === id
          ? { ...event, isFavorite: !event.isFavorite }
          : event
      )
    );
  };

  const removeEvent = id => {
    setEvents(previousEvents =>
      previousEvents.filter(event => event.id !== id)
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
        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onToggleRegistration={toggleRegistration}
            onToggleFavorite={toggleFavorite}
            onRemove={removeEvent}
          />
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

export default EventList;
