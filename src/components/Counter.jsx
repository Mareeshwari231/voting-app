import { useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <h3>Counter</h3>
      <p>Count: {count}</p>
      <div className="row">
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
    </div>
  );
}
