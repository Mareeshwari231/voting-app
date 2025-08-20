import { useVotes } from '../context/VotesContext.jsx';

export default function VotingPage() {
  const { votes, setVotes } = useVotes();

  const vote = key =>
    setVotes(v => ({ ...v, [key]: v[key] + 1 }));

  return (
    <div className="container">
      <h2>Voting Page</h2>
      <div className="card">
        <h3>Candidates</h3>
        <div className="row">
          <button onClick={() => vote('A')}>Vote A ({votes.A})</button>
          <button onClick={() => vote('B')}>Vote B ({votes.B})</button>
          <button onClick={() => vote('C')}>Vote C ({votes.C})</button>
        </div>
      </div>
    </div>
  );
}
