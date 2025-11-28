import React from 'https://esm.sh/react@18.3.1?dev';
import htm from 'https://esm.sh/htm@3';
import { motion } from 'https://esm.sh/framer-motion@10.18.0?dev&deps=react@18.3.1,react-dom@18.3.1';

const html = htm.bind(React.createElement);

const About = () =>
  html`
    <div className="page">
      <section className="section">
        <div className="section-header">
          <p className="eyebrow">About Scarborough CleanCo</p>
          <h2>Trusted cleaning experts with 10+ years of experience</h2>
          <p className="muted">
            We are a locally-owned cleaning company serving Scarborough and the eastern GTA. Our seasoned team is fully insured, background checked, and trained to deliver consistent, meticulous results.
          </p>
        </div>
        <div className="about-grid">
          <${motion.div}
            className="about-card"
            initial=${{ opacity: 0, y: 10 }}
            animate=${{ opacity: 1, y: 0 }}
            transition=${{ delay: 0.1 }}
          >
            <h3>Professional cleaners</h3>
            <p>
              Every specialist on our team follows detailed checklists, arrives with premium supplies, and respects your space and schedule.
            </p>
          <//>
          <${motion.div}
            className="about-card"
            initial=${{ opacity: 0, y: 10 }}
            animate=${{ opacity: 1, y: 0 }}
            transition=${{ delay: 0.15 }}
          >
            <h3>Trusted by locals</h3>
            <p>
              We maintain long-term relationships with homeowners, property managers, and office directors across Scarborough and the Beaches.
            </p>
          <//>
          <${motion.div}
            className="about-card"
            initial=${{ opacity: 0, y: 10 }}
            animate=${{ opacity: 1, y: 0 }}
            transition=${{ delay: 0.2 }}
          >
            <h3>Reliable systems</h3>
            <p>
              Clear communication, reminders, and post-clean quality checks keep every visit predictable, spotless, and on time.
            </p>
          <//>
        </div>
      </section>
    </div>
  `;

export default About;
