
import React, { useState } from 'react';
import './Form.css';

const initialForm = {
  studentName: '',
  email: '',
  department: '',
  yearOfStudy: '',
  password: '',
  attendanceType: 'In Person',
  needAccessibility: false,
  eventId: '',
  message: '',
};

function Form({ event }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [registration, setRegistration] = useState(null);

  const events = event
    ? Array.isArray(event) ? event : [event]
    : [
        { id: '1', name: 'Technical Symposium' },
        { id: '2', name: 'Web Development Workshop' },
        { id: '3', name: 'Coding Competition' },
        { id: '4', name: 'Cyber Security Seminar' },
      ];

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setErrors(prev => ({
      ...prev,
      [name]: '',
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.department) {
      newErrors.department = 'Please select your department';
    }

    if (
      !formData.yearOfStudy ||
      Number(formData.yearOfStudy) < 1 ||
      Number(formData.yearOfStudy) > 6
    ) {
      newErrors.yearOfStudy = 'Enter a valid year of study';
    }

    if (!formData.eventId) {
      newErrors.eventId = 'Please select an event';
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setRegistration(null);
      return;
    }

    setRegistration({
      ...formData,
      eventName:
        events.find(item => String(item.id) === formData.eventId)?.name ||
        formData.eventId,
    });
  }

  function handleReset() {
    setFormData(initialForm);
    setErrors({});
    setRegistration(null);
  }

  return (
    <div className="registration-page">
      <form className="registration-form" onSubmit={handleSubmit} noValidate>
        <p className="eyebrow">SAVE YOUR SEAT</p>
        <h1>Student Event Registration</h1>
        <p className="subtitle">
          Complete the required fields to register for a campus event.
        </p>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="studentName">Student name *</label>
            <input
              id="studentName"
              name="studentName"
              type="text"
              placeholder="Enter your full name"
              value={formData.studentName}
              onChange={handleChange}
            />
            {errors.studentName && (
              <span className="error">{errors.studentName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="student@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="error">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="department">Department *</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">Select your department</option>
              <option value="CSE">Computer Science and Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="ECE">Electronics and Communication</option>
              <option value="EEE">Electrical and Electronics</option>
              <option value="MECH">Mechanical Engineering</option>
              <option value="CIVIL">Civil Engineering</option>
              <option value="AIDS">Artificial Intelligence and Data Science</option>
              <option value="CYBER">Cyber Security</option>
            </select>
            {errors.department && (
              <span className="error">{errors.department}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="yearOfStudy">Year of study *</label>
            <select
              id="yearOfStudy"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
            >
              <option value="">Select your year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
              <option value="5">5th Year</option>
              <option value="6">6th Year</option>
            </select>
            {errors.yearOfStudy && (
              <span className="error">{errors.yearOfStudy}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Create a demo password (optional)</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password input example"
              value={formData.password}
              onChange={handleChange}
            />
            <small>This is a teaching example only; no password is saved or sent.</small>
          </div>

          <div className="form-group attendance-group">
            <label>How will you attend?</label>
            <label className="radio-option">
              <input
                type="radio"
                name="attendanceType"
                value="In Person"
                checked={formData.attendanceType === 'In Person'}
                onChange={handleChange}
              />
              In person
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="attendanceType"
                value="Online"
                checked={formData.attendanceType === 'Online'}
                onChange={handleChange}
              />
              Online
            </label>
          </div>

          <div className="form-group full-width">
            <label htmlFor="eventId">Choose an event *</label>
            <select
              id="eventId"
              name="eventId"
              value={formData.eventId}
              onChange={handleChange}
            >
              <option value="">Select a campus event</option>
              {events.map(item => (
                <option key={item.id} value={String(item.id)}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.eventId && (
              <span className="error">{errors.eventId}</span>
            )}
          </div>

          <div className="form-group full-width accessibility-option">
            <label>
              <input
                type="checkbox"
                name="needAccessibility"
                checked={formData.needAccessibility}
                onChange={handleChange}
              />
              I would like the team to contact me about accessibility support.
            </label>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Message (optional)</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Any questions or notes for the event team?"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Submit Registration
          </button>
          <button
            type="button"
            className="reset-button"
            onClick={handleReset}
          >
            Reset Form
          </button>
        </div>

        {registration && (
          <div className="success-message" role="status">
            <h3>Registration successful!</h3>
            <p>Thank you, {registration.studentName}.</p>
            <p>Event: {registration.eventName}</p>
            <p>Email: {registration.email}</p>
            <p>Attendance: {registration.attendanceType}</p>
            <p>This is a demo. Your registration has not been saved to a server.</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
