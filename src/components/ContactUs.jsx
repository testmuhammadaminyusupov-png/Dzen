import React, { useState } from 'react';
import './ContactUs.css';

export const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="contact-wrapper">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <span className="heading">Get in touch</span>

          {isSubmitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been sent.
            </div>
          )}

          <div className="field-group">
            <input
              placeholder="Name"
              type="text"
              className={`input ${errors.name ? 'input-error' : ''}`}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="field-group">
            <input
              placeholder="Email"
              id="mail"
              type="email"
              className={`input ${errors.email ? 'input-error' : ''}`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="field-group">
            <textarea
              placeholder="Say Hello"
              rows="5"
              id="message"
              name="message"
              className={`textarea ${errors.message ? 'input-error' : ''}`}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          <div className="button-container">
            <button type="submit" className="send-button">
              Send
            </button>
            <div className="reset-button-container">
              <button
                type="button"
                id="reset-btn"
                className="reset-button"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};