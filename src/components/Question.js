import React from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from "@mui/material";
import MathTextRenderer from "./MathTextRenderer";
import "../styles/Question.css";

function Question({ question, handleAnswer, currentAnswer, index }) {
  return (
    <FormControl component="fieldset" className="question-container">
      <FormLabel component="legend" className="question-title">
        <strong>Q{index + 1}.</strong> <MathTextRenderer text={question.Question} />
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
            label={<MathTextRenderer text={option} />} // Use MathTextRenderer for each option
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
