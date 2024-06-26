import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ColorModeProvider } from "./theme-context"; // Import the provider

ReactDOM.render(
  <React.StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
