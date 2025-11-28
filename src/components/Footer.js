import React from 'https://esm.sh/react@18.3.1?dev';
import htm from 'https://esm.sh/htm@3';
import { Link } from 'https://esm.sh/react-router-dom@6.22.3?dev&deps=react@18.3.1,react-dom@18.3.1';
import { FiFacebook, FiInstagram, FiLinkedin, FiPhone, FiMail } from 'https://esm.sh/react-icons@5.2.1/fi?dev&deps=react@18.3.1';

const html = htm.bind(React.createElement);

const Footer = () =>
  html`
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-name">Scarborough CleanCo</div>
          <p className="muted">
            Premium cleaning services tailored to homes, offices, and short-term stays across Scarborough.
          </p>
          <div className="footer-contact">
            <span><${FiPhone} /> (647) 555-1188</span>
            <span><${FiMail} /> hello@scarboroughcleanco.com</span>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <${Link} to="/about">About<//>
          <${Link} to="/services">Services<//>
          <${Link} to="/booking">Book a Cleaning<//>
          <${Link} to="/contact">Contact<//>
        </div>
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <${FiFacebook} />
            </a>
            <a href="#" aria-label="Instagram">
              <${FiInstagram} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <${FiLinkedin} />
            </a>
          </div>
          <p className="muted">© ${new Date().getFullYear()} Scarborough CleanCo</p>
        </div>
      </div>
    </footer>
  `;

export default Footer;
