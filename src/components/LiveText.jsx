import { useState } from 'react';
export default function LiveText() {
  const [text, setText] = useState('');
  return (
    <div className="card">
      <h3>Live Text</h3>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type here"
      />
      <p>You typed: {text}</p>
    </div>
  );
}
