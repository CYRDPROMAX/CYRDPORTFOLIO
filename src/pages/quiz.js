import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    question: "What does 'HTML' stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    answer: 0,
  },
  {
    question: "What is the latest version of JavaScript?",
    options: ["ES5", "ES6", "ES7"],
    answer: 1,
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft"],
    answer: 1,
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(
    Math.floor(Math.random() * questions.length)
  );
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    if (index === questions[currentQuestion].answer) {
      setFeedback("Correct!");
    } else {
      setFeedback(
        `Incorrect! The correct answer is: ${
          questions[currentQuestion].options[
            questions[currentQuestion].answer
          ]
        }.`
      );
    }
  };

  return (
    <div className="quiz-container">
      <h3 className="quiz-question">{questions[currentQuestion].question}</h3>
      <div className="quiz-options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`quiz-option ${
              selectedOption === index
                ? index === questions[currentQuestion].answer
                  ? "correct"
                  : "incorrect"
                : ""
            }`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && <p className="quiz-feedback">{feedback}</p>}
    </div>
  );
}

export default Quiz;
