import React from "react";
import { useVotes } from "../VotesContext";

export default function ResultsPage() {
  const { candidates, leading } = useVotes();

  return (
    <div style={{ padding: 24 }}>
      <h1>Results Page</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{ marginTop: 20 }}>Leading Candidate: {leading}</h3>
    </div>
  );
}
