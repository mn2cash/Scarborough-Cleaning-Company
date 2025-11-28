import React from 'https://esm.sh/react@18.3.1?dev';
import htm from 'https://esm.sh/htm@3';
import { FiHome, FiLayers, FiBriefcase, FiWind, FiDroplet } from 'https://esm.sh/react-icons@5.2.1/fi?dev&deps=react@18.3.1';
import ServiceCard from '../components/ServiceCard.js';

const html = htm.bind(React.createElement);

const services = [
  {
    title: 'Home Cleaning',
    icon: FiHome,
    description:
      'Routine maintenance cleans that keep kitchens, bathrooms, bedrooms, and living areas tidy and hygienic.',
    details: 'Weekly, bi-weekly, or monthly schedules with the same trusted team.',
  },
  {
    title: 'Deep Cleaning',
    icon: FiLayers,
    description:
      'Detailed cleaning for move-ins, move-outs, renovations, or spring refreshes with extra focus on high-touch areas.',
    details: 'Includes baseboards, inside appliances, vents, grout detail, and more.',
  },
  {
    title: 'Office Cleaning',
    icon: FiBriefcase,
    description:
      'Discreet office cleaning that keeps boardrooms, desks, kitchens, and washrooms immaculate for staff and guests.',
    details: 'After-hours or early-morning schedules to match your operations.',
  },
  {
    title: 'Airbnb Turnover',
    icon: FiWind,
    description:
      'Fast turnovers with linen change, staging, and amenity restock to secure five-star guest reviews.',
    details: 'Photo-ready staging with checklist verification after every stay.',
  },
  {
    title: 'Carpet & Window',
    icon: FiDroplet,
    description:
      'Streak-free window cleaning and carpet refreshes that brighten interiors and extend material life.',
    details: 'Eco-safe solutions that protect finishes and indoor air quality.',
  },
];

const Services = () =>
  html`
    <div className="page">
      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Services</p>
          <h2>Precision cleaning for every space</h2>
          <p className="muted">
            Choose the level of clean you need today. We tailor each visit to your surfaces, schedule, and preferences.
          </p>
        </div>
        <div className="service-grid">
          ${services.map(({ title, icon, description }) => html`
            <${ServiceCard} key=${title} icon=${icon} title=${title} description=${description} />
          `)}
        </div>
        <div className="service-details">
          ${services.map(
            (service) => html`
              <div key=${service.title} className="detail-row">
                <div>
                  <h3>${service.title}</h3>
                  <p className="muted">${service.description}</p>
                </div>
                <p>${service.details}</p>
              </div>
            `
          )}
        </div>
      </section>
    </div>
  `;

export default Services;
