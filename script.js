document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '64px';
      navLinks.style.right = '16px';
      navLinks.style.background = '#fff';
      navLinks.style.border = '1px solid #e5e9f2';
      navLinks.style.borderRadius = '12px';
      navLinks.style.padding = '12px';
      navLinks.style.boxShadow = '0 1rem 2rem rgba(15,30,60,0.08)';
      navLinks.style.zIndex = '30';
    });
  }

  const bookingForm = document.getElementById('booking-form');
  const bookingSuccess = document.getElementById('booking-success');
  if (bookingForm && bookingSuccess) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      bookingSuccess.hidden = false;
      bookingForm.reset();
    });
  }

  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');
  if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactSuccess.hidden = false;
      contactForm.reset();
    });
  }
});
