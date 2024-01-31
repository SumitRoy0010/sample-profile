// components/Contact.js
import React from 'react';

const Contact = () => {
  const contactStyle = {
    fontSize: '25px'
  };

  return (
    <section id="contact" style={contactStyle}>
      <h2>Contact Me</h2>
      <p>Email: example@example.com</p>
      <p>Phone: +1234567890</p>
      <p>
        You can also find me on social media:
        <br />
        <a href="https://www.linkedin.com/">LinkedIn</a>
        <br />
        <a href="https://twitter.com/">Twitter</a>
      </p>
    </section>
  );
}

export default Contact;
