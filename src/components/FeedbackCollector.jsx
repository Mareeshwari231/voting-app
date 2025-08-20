import { useState } from 'react';
export default function FeedbackCollector() {
  const [good, setGood] = useState(0);
  const [avg, setAvg] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div className="card">
      <h3>Feedback Collector</h3>
      <div className="row">
        <button onClick={() => setGood(g => g + 1)}>Good</button>
        <button onClick={() => setAvg(a => a + 1)}>Average</button>
        <button onClick={() => setBad(b => b + 1)}>Bad</button>
      </div>
      <p>Good: {good}  Average: {avg} | Bad: {bad}</p>
    </div>
  );
}
