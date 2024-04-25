import React, { useState, useEffect } from "react";
import Question from "./Question";
import Results from "./Results";
import questions from "../assets/quiz_questions.json";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../styles/Quiz.css";

function Quiz({ difficulty, setDifficulty, setQuizStarted }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const filteredQuestions = questions.filter((q) =>
      difficulty === "Any" ? true : q.DifficultyLevel === difficulty
    );
    const selected = filteredQuestions
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    setSelectedQuestions(selected);
    setUserAnswers(Array(selected.length).fill(null));
    setCurrentQuestionIndex(0);
    setSubmitted(false);
  }, [difficulty]);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleBack = () => {
    setDifficulty("");
    setQuizStarted(false);
  };

  if (submitted) {
    return (
      <Results
        userAnswers={userAnswers}
        questions={selectedQuestions}
        handleBack={handleBack}
      />
    );
  }

  if (
    selectedQuestions.length === 0 ||
    selectedQuestions[currentQuestionIndex] === undefined
  ) {
    return <p>Loading questions...</p>;
  }

  return (
    <div className="quiz-container">
      <Question
        question={selectedQuestions[currentQuestionIndex]}
        handleAnswer={handleAnswer}
        currentAnswer={userAnswers[currentQuestionIndex]}
        index={currentQuestionIndex} // Pass the current index to the Question component
      />
      <div className="navigation-buttons">
        <Button
          variant="contained"
          color="secondary"
          disabled={currentQuestionIndex <= 0}
          onClick={() => setCurrentQuestionIndex((current) => current - 1)}
        >
          <ArrowBackIosIcon sx={{ fontSize: "18px" }} /> Previous
        </Button>
        {currentQuestionIndex < selectedQuestions.length - 1 && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCurrentQuestionIndex((current) => current + 1)}
          >
            Next <ArrowForwardIosIcon sx={{ fontSize: "18px" }} />
          </Button>
        )}
        {currentQuestionIndex === selectedQuestions.length - 1 && (
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
