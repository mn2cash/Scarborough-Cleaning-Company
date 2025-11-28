import React, { useState } from 'https://esm.sh/react@18.3.1?dev';
import htm from 'https://esm.sh/htm@3';
import { FiPhone, FiMail, FiMapPin } from 'https://esm.sh/react-icons@5.2.1/fi?dev&deps=react@18.3.1';

const html = htm.bind(React.createElement);

const Contact = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact message:', message);
    setSubmitted(true);
    setMessage('');
  };

  return html`
    <div className="page">
      <section className="section split">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>We’re here to help</h2>
          <p className="muted">
            Reach out for quotes, scheduling, or special requests. We respond quickly during business hours.
          </p>
          <div className="contact-info">
            <span><${FiPhone} /> (647) 555-1188</span>
            <span><${FiMail} /> hello@scarboroughcleanco.com</span>
            <span><${FiMapPin} /> Scarborough, ON</span>
          </div>
        </div>
        <div className="form-card">
          <form className="form" onSubmit=${handleSubmit}>
            <label>
              Name
              <input type="text" required />
            </label>
            <label>
              Email
              <input type="email" required />
            </label>
            <label>
              Message
              <textarea
                rows="4"
                value=${message}
                onChange=${(e) => setMessage(e.target.value)}
                placeholder="Tell us about your space or your question..."
                required
              />
            </label>
            <button type="submit" className="btn btn-primary full">
              Send Message
            </button>
            ${submitted && html`<div className="success">Thanks! We’ll reply shortly.</div>`}
          </form>
        </div>
      </section>
    </div>
  `;
};

export default Contact;
