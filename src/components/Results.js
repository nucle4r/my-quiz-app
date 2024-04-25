import React from "react";
import { Button } from "@mui/material";
import MathTextRenderer from "./MathTextRenderer"; // Import the MathTextRenderer component
import "../styles/Results.css";

function Results({ userAnswers, questions, handleBack }) {
  const score = userAnswers.reduce((acc, answer, index) => {
    return (
      acc +
      (answer === questions[index].CorrectOption
        ? questions[index].MarksAllocated
        : 0)
    );
  }, 0);
  const totalMarks = questions.reduce(
    (acc, question) => acc + question.MarksAllocated,
    0
  );
  const percentage = (score / totalMarks) * 100;

  const getColorForPercentage = (percentage) => {
    if (percentage >= 75) return "#4caf50"; // Green
    else if (percentage >= 50) return "#ff9800"; // Orange
    else return "#f44336"; // Red
  };

  return (
    <div className="results-container">
      <h2>Your Results</h2>
      <p className="score">
        Your score: {score} out of {totalMarks}
      </p>
      <div
        className="percentage-circle"
        style={{ backgroundColor: getColorForPercentage(percentage) }}
      >
        {percentage.toFixed(2)}%
      </div>
      {questions.map((question, index) => (
        <div key={index} className="result-details">
          <p>
            <strong>Q{index + 1}: <MathTextRenderer text={question.Question} /></strong>
          </p>
          <p
            className={
              userAnswers[index] === null
                ? ""
                : userAnswers[index] === question.CorrectOption
                ? "correct-answer"
                : "wrong-answer"
            }
          >
            <strong>Your answer:</strong>{" "}
            <MathTextRenderer text={userAnswers[index] !== null ? question.Options[userAnswers[index]] : "No Answer"} />
          </p>
          <p className="highlight">
            <strong>Correct answer:</strong>{" "}
            <MathTextRenderer text={question.Options[question.CorrectOption]} />
          </p>
        </div>
      ))}

      <Button
        variant="contained"
        color="secondary"
        onClick={handleBack}
        sx={{ width:"90%", margin: "20px" }}
      >
        Back to Start
      </Button>
    </div>
  );
}

export default Results;
