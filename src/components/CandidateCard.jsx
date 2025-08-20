import React from "react";

export default function CandidateCard({ name, id, votes, onVote }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>Votes: {votes}</p>
      <button style={styles.button} onClick={() => onVote(id)}>
        Vote
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "16px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
  button: {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "none",
    background: "#007bff",
    color: "white",
    cursor: "pointer",
  },
};
