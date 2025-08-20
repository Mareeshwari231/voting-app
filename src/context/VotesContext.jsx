import { createContext, useContext, useMemo, useState } from 'react';

const VotesContext = createContext();

export function VotesProvider({ children }) {
  const [votes, setVotes] = useState({ A: 0, B: 0, C: 0 });
  const total = votes.A + votes.B + votes.C;

  const leading = useMemo(() => {
    const max = Math.max(votes.A, votes.B, votes.C);
    const leaders = Object.entries(votes)
      .filter(([, v]) => v === max)
      .map(([k]) => k);
    return { leaders, max };
  }, [votes]);

  return (
    <VotesContext.Provider value={{ votes, setVotes, total, leading }}>
      {children}
    </VotesContext.Provider>
  );
}

export function useVotes() {
  return useContext(VotesContext);
}
