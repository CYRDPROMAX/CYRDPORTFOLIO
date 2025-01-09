import React from 'react';

function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Me (Chiranjeevi Yeshwanth)</h1>
      <p style={styles.description}>I’d love to hear from you! Feel free to reach out for collaborations or inquiries.</p>

      <div style={styles.contactInfo}>
        <p style={styles.info}>
          <strong>Email:</strong>{' '}
          <a href="mailto:cyrdcyrd29@gmail.com" style={styles.link}>
            cyrdcyrd29@gmail.com
          </a>
        </p>
        <p style={styles.info}>
          <strong>Phone:</strong> +91 7760115246
        </p>
      </div>

      {/* Contact Form */}
      <div style={styles.formContainer}>
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} required />
          <input type="email" placeholder="Your Email" style={styles.input} required />
          <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '100px 50px', // Adjusted for navbar height
    background: 'radial-gradient(circle, #1A1A1A, #0D0D0D)', // Subtle gradient
    color: '#EDEDED',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '3rem',
    color: '#E6E6FA',
    marginBottom: '20px',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)', // Subtle shadow for depth
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#DDA0DD',
  },
  contactInfo: {
    marginBottom: '40px',
  },
  info: {
    fontSize: '1.2rem',
    color: '#DDA0DD',
    marginBottom: '10px',
  },
  link: {
    color: '#BA55D3',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#E6E6FA',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    maxWidth: '500px',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #6A0DAD',
    background: '#1A1A1A',
    color: '#EDEDED',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #6A0DAD',
    background: '#1A1A1A',
    color: '#EDEDED',
    fontSize: '1rem',
    minHeight: '100px',
  },
  button: {
    background: '#BA55D3',
    color: '#FFF',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.3s ease',
  },
  buttonHover: {
    background: '#6A0DAD',
  },
};

export default Contact;
