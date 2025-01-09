import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'Evntory',
      description: `A MERN stack event management system integrating APIs for maps and other features. 
        This project focuses on efficient event scheduling, secure ticketing, and personalized recommendations.`,
      link: 'https://evntory-app.onrender.com',
    },
    {
      name: 'Dynamic Photo Gallery',
      description: `An AWS cloud-hosted solution implemented using AWS Lambda, EC2, S3, Cognito, and an RDS database. 
        Includes a photo resizing feature within the AWS environment.`,
    },
    {
      name: 'Secure Communication via Image Steganography',
      description: `Implemented using Rubik's Cube Algorithm and PVD for storing information securely. 
        Data was further scrambled using the Rubik's Cube Algorithm on top of steganography.`,
    },
    {
      name: 'IoT Traffic System (Q-Learning-Based Traffic Control)',
      description: `Developed a Q-learning model with an edge device to find optimal paths using UXSim simulation. 
        Enhanced gamma was used for Q-state allocation, focusing on adaptive traffic management.`,
    },
    {
      name: 'Question Consolidation and Reducing Redundancy',
      description: `Compared Random Forest and XGBoost to cluster and consolidate questions, reducing redundancy and improving efficiency.`,
    },
    {
      name: 'Intruder Detector',
      description: `An 8051 microcontroller-based security system utilizing PIR sensors. 
        Alerts are triggered with an LED and buzzer, which can be stopped using a password. Programmed in assembly language.`,
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Projects</h1>
      <ul style={styles.projectList}>
        {projects.map((project, index) => (
          <li key={index} style={styles.projectItem}>
            <h2 style={styles.projectName}>{project.name}</h2>
            <p style={styles.projectDescription}>{project.description}</p>
            {project.link && (
              <a href={project.link} style={styles.projectLink} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '100px 50px',
    background: 'linear-gradient(180deg, #0D0D0D, #3B0B3B)', // Black to purple gradient
    color: '#EDEDED',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '3rem',
    color: '#E6E6FA',
    textAlign: 'center',
    marginBottom: '30px',
  },
  projectList: {
    listStyle: 'none',
    padding: 0,
  },
  projectItem: {
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#1A1A1A',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  projectName: {
    fontSize: '1.5rem',
    color: '#BA55D3',
    marginBottom: '10px',
  },
  projectDescription: {
    fontSize: '1.2rem',
    color: '#DDA0DD',
  },
  projectLink: {
    display: 'inline-block',
    marginTop: '10px',
    color: '#BA55D3',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
};

export default Projects;
