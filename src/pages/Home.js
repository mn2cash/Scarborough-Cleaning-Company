import React from 'https://esm.sh/react@18.3.1?dev';
import htm from 'https://esm.sh/htm@3';
import { motion } from 'https://esm.sh/framer-motion@10.18.0?dev&deps=react@18.3.1,react-dom@18.3.1';
import { Link } from 'https://esm.sh/react-router-dom@6.22.3?dev&deps=react@18.3.1,react-dom@18.3.1';
import { FiHome, FiWind, FiBriefcase, FiLayers, FiDroplet } from 'https://esm.sh/react-icons@5.2.1/fi?dev&deps=react@18.3.1';
import ServiceCard from '../components/ServiceCard.js';

const services = [
  { title: 'Home Cleaning', icon: FiHome, description: 'Scheduled or one-off home cleaning with meticulous detail and care.' },
  { title: 'Deep Cleaning', icon: FiLayers, description: 'Top-to-bottom deep cleans for moves, renovations, and seasonal refreshes.' },
  { title: 'Office Cleaning', icon: FiBriefcase, description: 'Discreet, reliable office cleaning that keeps workspaces pristine.' },
  { title: 'Airbnb Turnover', icon: FiWind, description: 'Fast, five-star turnovers with linen service for short-term rentals.' },
  { title: 'Carpet & Window', icon: FiDroplet, description: 'Crystal-clear windows and refreshed carpets with eco-safe products.' },
];

const html = htm.bind(React.createElement);

const Home = () =>
  html`
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <${motion.p}
            className="eyebrow"
            initial=${{ opacity: 0, y: 10 }}
            animate=${{ opacity: 1, y: 0 }}
            transition=${{ delay: 0.1 }}
          >
            Scarborough CleanCo
          <//>
          <${motion.h1}
            initial=${{ opacity: 0, y: 14 }}
            animate=${{ opacity: 1, y: 0 }}
            transition=${{ delay: 0.15 }}
          >
            Premium Cleaning Services in Scarborough
          <//>
          <${motion.p}
            className="lede"
            initial=${{ opacity: 0, y: 16 }}
            animate=${{ opacity: 1, y: 0 }}
            transition=${{ delay: 0.2 }}
          >
            Reliable, affordable, and spotless cleaning for homes & businesses. Trusted local experts delivering a sleek, healthy space every visit.
          <//>
          <${motion.div}
            className="hero-actions"
            initial=${{ opacity: 0, y: 18 }}
            animate=${{ opacity: 1, y: 0 }}
            transition=${{ delay: 0.25 }}
          >
            <${Link} to="/booking" className="btn btn-primary full-mobile">
              Book a Cleaning
            <//>
            <${Link} to="/services" className="btn btn-ghost full-mobile">
              View Services
            <//>
          <//>
          <div className="hero-stats">
            <div>
              <strong>10+ years</strong>
              <span>Experience in GTA East</span>
            </div>
            <div>
              <strong>2500+</strong>
              <span>Cleanings completed</span>
            </div>
            <div>
              <strong>4.9 ★</strong>
              <span>Client satisfaction</span>
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="glass-card">
            <p className="muted">Trusted by families & businesses</p>
            <div className="tags">
              <span>Fully insured</span>
              <span>Background checked</span>
              <span>Eco-friendly options</span>
            </div>
            <div className="panel-highlight">
              <h3>Next-day availability</h3>
              <p>Book today and we can be on-site as early as tomorrow morning.</p>
              <${Link} to="/booking" className="link">
                Schedule now →
              <//>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Services</p>
          <h2>Cleaning that fits your space</h2>
          <p className="muted">
            From spotless condos to gleaming offices, we tailor every clean to your schedule, surfaces, and standards.
          </p>
        </div>
        <div className="service-grid">
          ${services.map((service) => html`<${ServiceCard} key=${service.title} ...${service} />`)}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Why Choose Us</p>
          <h2>Precise, professional, and local</h2>
          <ul className="feature-list">
            <li>
              <span className="feature-dot" />
              Bonded, insured, and WSIB-compliant cleaners for peace of mind.
            </li>
            <li>
              <span className="feature-dot" />
              Consistent teams, clear checklists, and quality control every visit.
            </li>
            <li>
              <span className="feature-dot" />
              Quiet, low-scent products with eco-friendly options on request.
            </li>
            <li>
              <span className="feature-dot" />
              Flexible schedules for homes, offices, and short-term rentals.
            </li>
          </ul>
        </div>
        <div className="cta-card">
          <h3>Ready for a spotless space?</h3>
          <p className="muted">
            Share your space details and preferences—we’ll tailor a plan and confirm quickly.
          </p>
          <${Link} to="/booking" className="btn btn-primary full">
            Start Booking
          <//>
          <div className="cta-note">
            <strong>Need same-day?</strong>
            <span>Call (647) 555-1188 and we’ll prioritize your request.</span>
          </div>
        </div>
      </section>
    </div>
  `;

export default Home;
