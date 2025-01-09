import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [score, setScore] = useState(0);
  const [binaryNumbers, setBinaryNumbers] = useState([]);

  // Generate random binary numbers
  useEffect(() => {
    const interval = setInterval(() => {
      const binary = Math.random() > 0.5 ? 1 : 0;
      const id = Math.random();
      setBinaryNumbers((prev) => [
        ...prev,
        { id, value: binary, top: 0, left: Math.random() * 90 + '%' },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Move numbers downward
  useEffect(() => {
    const interval = setInterval(() => {
      setBinaryNumbers((prev) =>
        prev.map((num) => ({ ...num, top: num.top + 5 }))
      );
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Handle click on binary numbers
  const handleClick = (id, value) => {
    if (value === 1) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setBinaryNumbers((prev) => prev.filter((num) => num.id !== id));
  };

  return (
    <div className="container">
      {/* Particle Background */}
      <div className="particle-bg"></div>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="heading hoverable">
          Welcome to <span className="name hoverable">My Portfolio</span>
        </h1>
        <p className="subheading hoverable">A world of creativity and innovation</p>

        {/* Glowing Circle */}
        <div className="art-wrapper">
          <div className="art"></div>
        </div>
      </section>

      {/* Mini-Game Section */}
      <section className="mini-game">
        <h2 className="mini-game-title hoverable">Binary Clicker!</h2>
        <p className="score hoverable">Score: {score}</p>
        <div className="binary-container">
          {binaryNumbers.map((num) => (
            <div
              key={num.id}
              className="binary hoverable"
              style={{ top: `${num.top}%`, left: num.left }}
              onClick={() => handleClick(num.id, num.value)}
            >
              {num.value}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
