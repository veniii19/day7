import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import VotingPage from "./pages/VotingPage";
import ResultsPage from "./pages/ResultsPage";

export default function App() {
  return (
    <>
      <nav style={styles.nav}>
        <NavLink to="/" style={styles.link} end>Vote</NavLink>
        <NavLink to="/results" style={styles.link}>Results</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<VotingPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: 12,
    padding: "12px 16px",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    background: "white",
    zIndex: 10,
  },
  link: ({ isActive }) => ({
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: 8,
    background: isActive ? "#efefef" : "transparent",
  }),
};
