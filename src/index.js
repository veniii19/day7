import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { VotesProvider } from "./VotesContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <VotesProvider>
        <App />
      </VotesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
