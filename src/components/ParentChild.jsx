import { useState } from 'react';
function Child({ title }) {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <h4>{title}</h4>
      <button onClick={() => setCount(c => c + 1)}>
        Child Count: {count}
      </button>
    </div>
  );
}
export default function ParentChild() {
  return <Child title="I came from Parent (prop)" />;
}
