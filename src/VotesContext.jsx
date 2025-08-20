
import React, { createContext, useContext, useMemo, useState } from "react";

const VotesContext = createContext();

const INITIAL = [
  { id: "A", name: "Candidate A", votes: 0 },
  { id: "B", name: "Candidate B", votes: 0 },
  { id: "C", name: "Candidate C", votes: 0 },
];

export function VotesProvider({ children }) {
  const [candidates, setCandidates] = useState(INITIAL);

  const vote = (id) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, votes: c.votes + 1 } : c))
    );
  };

  const totals = useMemo(
    () =>
      candidates.reduce(
        (acc, c) => ({ ...acc, [c.id]: c.votes }),
        {}
      ),
    [candidates]
  );

  const leading = useMemo(() => {
    const max = Math.max(...candidates.map((c) => c.votes));
    const leaders = candidates.filter((c) => c.votes === max);
    if (max === 0) return "—";
    return leaders.length > 1
      ? `Tie: ${leaders.map((l) => l.name).join(" & ")}`
      : leaders[0].name;
  }, [candidates]);

  const value = { candidates, vote, totals, leading };
  return <VotesContext.Provider value={value}>{children}</VotesContext.Provider>;
}

export const useVotes = () => useContext(VotesContext);
