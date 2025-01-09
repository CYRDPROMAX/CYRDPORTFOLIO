import React from 'react';

function Skills() {
  const skills = [
    { category: 'Programming Languages', items: ['C', 'C++', 'Java', 'Python'] },
    { category: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'MERN Full Stack'] },
    { category: 'Cloud', items: ['Cognito', 'EC2', 'Lambda', 'S3', 'RDS'] },
    { category: 'AI/ML', items: ['Machine Learning', 'Data Analysis'] },
  ];

  const certifications = [
    'MERN Stack Certification',
    'AWS Certified Cloud Practitioner',
    'Passed AWS Cloud Practitioner Exam',
    'Communications and Security Course at Saylor Academy',
    'Spoken Tutorial Certificate from IIT Bombay on Java',
    'Spoken Tutorial Certificate from IIT Bombay on PHP and MySQL',
    'Full Stack Certification',
    'Business Innovation and Entrepreneurship by NPTEL',
  ];
  

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Skills & Certifications</h1>
      
      {/* Skills Section */}
      <div style={styles.skillCategories}>
        {skills.map((skillGroup, index) => (
          <div key={index} style={styles.category}>
            <h2 style={styles.categoryHeading}>{skillGroup.category}</h2>
            <ul style={styles.skillList}>
              {skillGroup.items.map((skill, i) => (
                <li key={i} style={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div style={styles.certificationsSection}>
        <h2 style={styles.certificationsHeading}>Certifications</h2>
        <ul style={styles.certificationsList}>
          {certifications.map((cert, index) => (
            <li key={index} style={styles.certificationItem}>{cert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '100px 50px', // Adjust for navbar height
    background: 'linear-gradient(180deg, #3B0B3B, #0D0D0D)', // Purple to black gradient
    color: '#EDEDED',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '3rem',
    color: '#E6E6FA',
    textAlign: 'center',
    marginBottom: '40px',
  },
  skillCategories: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '40px',
    marginBottom: '50px',
  },
  category: {
    backgroundColor: '#1A1A1A',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
  },
  categoryHeading: {
    fontSize: '1.5rem',
    color: '#BA55D3',
    marginBottom: '15px',
  },
  skillList: {
    listStyle: 'none',
    padding: 0,
  },
  skillItem: {
    fontSize: '1.2rem',
    margin: '10px 0',
    backgroundColor: '#1F1F1F',
    color: '#DDA0DD',
    padding: '10px',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  },
  skillItemHover: {
    backgroundColor: '#BA55D3',
    color: '#FFF',
    transform: 'scale(1.1)', // Slight zoom on hover
  },
  certificationsSection: {
    textAlign: 'center',
    marginTop: '50px',
  },
  certificationsHeading: {
    fontSize: '2rem',
    color: '#BA55D3',
    marginBottom: '20px',
  },
  certificationsList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
  },
  certificationItem: {
    fontSize: '1.2rem',
    margin: '10px 15px',
    backgroundColor: '#1F1F1F',
    color: '#DDA0DD',
    padding: '10px 20px',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  },
};

export default Skills;
