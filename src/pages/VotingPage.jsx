import React from "react";
import CandidateCard from "../components/CandidateCard";
import { useVotes } from "../VotesContext";

export default function VotingPage() {
  const { candidates, vote, leading } = useVotes();

  return (
    <div style={{ padding: 24 }}>
      <h1>Voting Page</h1>
      <div style={{ display: "flex", gap: 16 }}>
        {candidates.map((c) => (
          <CandidateCard
            key={c.id}
            id={c.id}
            name={c.name}
            votes={c.votes}
            onVote={vote}
          />
        ))}
      </div>
      <h3 style={{ marginTop: 20 }}>Leading Candidate: {leading}</h3>
    </div>
  );
}
