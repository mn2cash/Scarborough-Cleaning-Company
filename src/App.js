import React, { useEffect } from 'https://esm.sh/react@18.3.1?dev';
import { Routes, Route, useLocation } from 'https://esm.sh/react-router-dom@6.22.3?dev&deps=react@18.3.1,react-dom@18.3.1';
import { AnimatePresence, motion } from 'https://esm.sh/framer-motion@10.18.0?dev&deps=react@18.3.1,react-dom@18.3.1';
import htm from 'https://esm.sh/htm@3';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import MobileDock from './components/MobileDock.jsx';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Services from './pages/Services.js';
import Booking from './pages/Booking.js';
import Contact from './pages/Contact.js';

const html = htm.bind(React.createElement);

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const App = () => {
  const location = useLocation();

  return html`
    <${React.Fragment}>
      <${ScrollToTop} />
      <${Navbar} />
      <main className="page-shell">
        <${AnimatePresence} mode="wait">
          <${motion.div}
            key=${location.pathname}
            variants=${pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition=${{ duration: 0.3, ease: 'easeInOut' }}
            className="page-wrapper"
          >
            <${Routes} location=${location}>
              <${Route} path="/" element=${html`<${Home} />`} />
              <${Route} path="/about" element=${html`<${About} />`} />
              <${Route} path="/services" element=${html`<${Services} />`} />
              <${Route} path="/booking" element=${html`<${Booking} />`} />
              <${Route} path="/contact" element=${html`<${Contact} />`} />
            <//>
          <//>
        <//>
      </main>
      <${MobileDock} />
      <${Footer} />
    <//>
  `;
};

export default App;
