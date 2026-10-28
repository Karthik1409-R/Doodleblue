
import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import './Events.css';
import { getAllEvents } from '../../services/eventService';

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      setLoading(true);
      setError('');
      const data = await getAllEvents();
      setEvents(data);
    } catch (error) {
      setError('Could not fetch events. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

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

      </div>

      {loading && <p className="empty-events">Loading events...</p>}
      {error && <p className="empty-events">{error}</p>}

      {!loading && !error && (
        <div className="events-grid">
          {events.map(event => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      )}

      {!loading && !error && events.length === 0 && (
        <p className="empty-events">No events available right now.</p>
      )}

    </section>
  );
}

export default EventList;
