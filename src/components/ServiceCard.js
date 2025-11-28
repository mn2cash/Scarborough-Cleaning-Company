import React from 'https://esm.sh/react@18.3.1?dev';
import htm from 'https://esm.sh/htm@3';
import { motion } from 'https://esm.sh/framer-motion@10.18.0?dev&deps=react@18.3.1,react-dom@18.3.1';

const html = htm.bind(React.createElement);

const ServiceCard = ({ icon: Icon, title, description }) =>
  html`
    <${motion.div}
      className="service-card"
      whileHover=${{ y: -6, boxShadow: '0 18px 40px rgba(15, 30, 60, 0.12)' }}
      transition=${{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      <div className="service-icon">
        <${Icon} />
      </div>
      <h3>${title}</h3>
      <p>${description}</p>
    <//>
  `;

export default ServiceCard;
