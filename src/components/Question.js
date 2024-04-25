import React from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from "@mui/material";
import MathJax from "react-mathjax";
import "../styles/Question.css";

function Question({ question, handleAnswer, currentAnswer, index }) {
  // Function to check and prepare the text for MathJax rendering
  const prepareMathText = (text) => {
    // This regex replaces all instances of math-related expressions with LaTeX compatible versions
    const updatedText = text.replace(
      /(\d+)\.x\.y\^(\d+)\.z/g,
      `\$-\$9xy^{$2}z`
    );
    return `$$${updatedText}$$`; // Wrap with $$ for MathJax
  };

  return (
    <FormControl component="fieldset" className="question-container">
      <FormLabel component="legend" className="question-title">
        <strong>Q{index + 1}.</strong>{" "}
        <MathJax.Provider>
          <MathJax.Node inline formula={prepareMathText(question.Question)} />
        </MathJax.Provider>
      </FormLabel>
      <RadioGroup
        value={currentAnswer}
        onChange={(event) => handleAnswer(parseInt(event.target.value, 10))}
      >
        {question.Options.map((option, optionIndex) => (
          <FormControlLabel
            key={optionIndex}
            value={optionIndex}
            control={<Radio />}
            label={
              <MathJax.Provider>
                <MathJax.Node inline formula={option} />
              </MathJax.Provider>
            }
            className={`option ${
              currentAnswer === optionIndex ? "selected" : ""
            }`}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default Question;
