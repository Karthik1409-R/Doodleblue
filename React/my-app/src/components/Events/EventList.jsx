
import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import './Events.css';
import { getAllEvents } from '../../services/eventService';

function EventList() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');



  useEffect(() => {
    fetchEvents();;
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

  // it is for search

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDebouncedSearch(search.trim().toLowerCase());
  //   }, 300);

  //   return () => clearTimeout(timer);
  // }, [search]);

  const filteredEvents = events.filter(event => {

    const query = debouncedSearch;

    return (
      event.title?.toLowerCase().includes(query)
    )
  });

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

      <div className="events-search">
        <input
          type="search"
          placeholder="Search events by title or venue"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search events"
        />

        <button type="button"
          onClick={() => setDebouncedSearch(search)}
        >
          Search
        </button>
      </div>

      {loading && <p className="empty-events">Loading events...</p>}
      {error && <p className="empty-events">{error}</p>}

      {!loading && !error && (
        <>
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <p className="empty-events">
              {events.length === 0
                ? 'No events available right now.'
                : 'No matching events found.'}
            </p>
          )}
        </>
      )}

    </section>
  );
}

export default EventList;
