import React from "react";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>My Portfolio</h1>
      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#skills" style={styles.link}>Skills</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "linear-gradient(90deg, #0D0D0D, #3B0B3B)",
    color: "#EDEDED",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#EDEDED",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  },
  link: {
    color: "#DDA0DD",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.3s ease",
  },
};

export default Navbar;
