import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          &copy; 2025 CYRD. A portfolio to showcase my journey in technology.
        </p>
        <div style={styles.links}>
          <a href="https://github.com/CYRDPROMAX?tab=repositories" style={styles.link} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/cyrd/" style={styles.link} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:cyrdcyrd29@gmail.com" style={styles.link}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'linear-gradient(90deg, #1A1A1A, #3B0B3B)', // Black to deep purple gradient
    padding: '20px 0',
    color: '#EDEDED',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
    textAlign: 'center',
    fontSize: '0.9rem',
    boxShadow: '0 -2px 6px rgba(0, 0, 0, 0.5)', // Subtle shadow
    width: '100%',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  text: {
    margin: '0',
    fontSize: '1rem', // Clean, readable font size
    fontWeight: '400', // Medium weight for clarity
    color: '#CFCFCF', // Soft silver text
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '10px',
  },
  link: {
    color: '#DDA0DD', // Lavender purple
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500', // Slightly bolder for emphasis
    transition: 'color 0.3s ease, transform 0.2s ease',
  },
  linkHover: {
    color: '#BA55D3', // Deep purple on hover
  },
};

export default Footer;
