import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Header from "./components/Header";
import {
  ThemeProvider,
  Button,
  Typography,
  Box,
  Container,
} from "@mui/material";
import "./styles/App.css";
import theme from "./theme"; // make sure the path is correct to where you define your theme
import { CssBaseline } from "@mui/material";

const difficulties = ["Any", "Easy", "Medium", "Hard"];

function App() {
  const [difficulty, setDifficulty] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = (level) => {
    setDifficulty(level);
    setQuizStarted(true); // Set quiz started to true
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setQuizStarted={setQuizStarted} setDifficulty={setDifficulty} />
      <Container
        maxWidth
        className="app-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        {!quizStarted && (
          <Typography className="app-title">Welcome to the MyQuizApp</Typography>
        )}
        <Container
          maxWidth="sm"
          className="content-box"
          sx={{ marginTop: "85px" }}
        >
          {!quizStarted && (
            <Typography className="sub-heading">
              Select the difficulty to start the quiz:
            </Typography>
          )}
          {difficulty ? (
            <Quiz
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              setQuizStarted={setQuizStarted}
            />
          ) : (
            <Box className="button-grid">
              {difficulties.map((level) => (
                <Button
                  key={level}
                  sx={{
                    bgcolor:
                      level === "Easy"
                        ? "#388e3c"
                        : level === "Medium"
                        ? "#FF8A08"
                        : level === "Hard"
                        ? "#d32f2f"
                        : "#1976d2",
                    color: level === "Medium" ? "white" : "white",
                    "&:hover": {
                      bgcolor:
                        level === "Easy"
                          ? "#2e7d32"
                          : level === "Medium"
                          ? "#FF6500"
                          : level === "Hard"
                          ? "#c62828"
                          : "#1565c0",
                    },
                    height: 80,
                    borderRadius: "25px",
                    fontSize: "1.2rem",
                    width: "100%",
                    padding: "10px 0",
                    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
                    margin: "5px",
                  }}
                  onClick={() => handleStartQuiz(level)}
                >
                  {level}
                </Button>
              ))}
            </Box>
          )}
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
