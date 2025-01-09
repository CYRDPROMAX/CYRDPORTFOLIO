import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Me</h1>
      <p style={styles.description}>
        I am <span style={styles.name}>Chiranjeevi Yeshwanth</span>, a Computer Science Engineering undergraduate at VIT with a strong foundation in technology and engineering. 
        I excel in collaborative environments and am passionate about learning and adapting to new challenges.
      </p>
      <p style={styles.description}>
        My technical expertise spans web development using the MERN stack, cloud computing with AWS, and programming in C, Java, and Python. I have a keen interest in IoT, machine learning, and creating innovative solutions.
      </p>
      <p style={styles.description}>
        With hands-on experience in multiple projects and certifications, I am committed to delivering impactful and efficient solutions in the field of technology.
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '105px',
    background: 'radial-gradient(circle, #1A1A1A, #0D0D0D)', // Subtle gradient
    color: '#DDA0DD', // Lavender purple
    height: '100vh',
  },
  heading: {
    fontSize: '3rem',
    color: '#E6E6FA', // Light purple
    textShadow: '3px 3px 8px #6A0DAD', // Purple shadow
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#DDA0DD', // Lavender purple
    marginBottom: '20px',
  },
  name: {
    color: '#BA55D3', // Deep purple
    fontWeight: 'bold',
  },
};

export default About;
