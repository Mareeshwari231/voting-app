import { useVotes } from '../context/VotesContext.jsx';

export default function ResultsPage() {
  const { votes, total, leading } = useVotes();
  const label = leading.max === 0
    ? 'No votes yet'
    : (leading.leaders.length === 1
        ? `Leading Candidate: ${leading.leaders[0]}`
        : `Tie: ${leading.leaders.join(' & ')}`);

  return (
    <div className="container">
      <h2>Results</h2>
      <div className="card">
        <p>Total Votes — A: {votes.A} | B: {votes.B} | C: {votes.C} (Total: {total})</p>
        <p><strong>{label}</strong></p>
      </div>
    </div>
  );
}
