import React, { useState } from 'https://esm.sh/react@18.3.1?dev';
import htm from 'https://esm.sh/htm@3';

const html = htm.bind(React.createElement);

const initialForm = {
  name: '',
  email: '',
  phone: '',
  address: '',
  service: '',
  date: '',
  time: '',
  notes: '',
};

const Booking = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setSubmitted(true);
    setFormData(initialForm);
  };

  return html`
    <div className="page">
      <section className="section split">
        <div>
          <p className="eyebrow">Booking</p>
          <h2>Book a cleaning in minutes</h2>
          <p className="muted">
            Tell us about your space, schedule, and preferences. We will confirm your appointment and share a tailored plan.
          </p>
          <div className="cta-note">
            <strong>Need urgent service?</strong>
            <span>Call (647) 555-1188 and we will prioritize your slot.</span>
          </div>
        </div>
        <div className="form-card">
          <form className="form" onSubmit=${handleSubmit}>
            <div className="form-row">
              <label>
                Name
                <input name="name" type="text" required value=${formData.name} onChange=${handleChange} />
              </label>
              <label>
                Email
                <input name="email" type="email" required value=${formData.email} onChange=${handleChange} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Phone
                <input name="phone" type="tel" required value=${formData.phone} onChange=${handleChange} />
              </label>
              <label>
                Address
                <input name="address" type="text" required value=${formData.address} onChange=${handleChange} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Type of Cleaning
                <select name="service" required value=${formData.service} onChange=${handleChange}>
                  <option value="">Select a service</option>
                  <option>Home Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Airbnb Turnover</option>
                  <option>Carpet & Window</option>
                </select>
              </label>
              <label>
                Preferred Date
                <input name="date" type="date" required value=${formData.date} onChange=${handleChange} />
              </label>
              <label>
                Preferred Time
                <input name="time" type="time" required value=${formData.time} onChange=${handleChange} />
              </label>
            </div>
            <label>
              Additional Notes
              <textarea
                name="notes"
                rows="3"
                placeholder="Access details, parking notes, surfaces to prioritize..."
                value=${formData.notes}
                onChange=${handleChange}
              />
            </label>
            <button type="submit" className="btn btn-primary full">
              Submit Booking
            </button>
            ${submitted &&
            html`<div className="success">
              Thank you! We received your request and will confirm shortly.
            </div>`}
          </form>
        </div>
      </section>
    </div>
  `;
};

export default Booking;
