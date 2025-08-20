export default function AlertButton() {
  return (
    <div className="card">
      <h3>Alert Button</h3>
      <button onClick={() => alert('Button clicked!')}>Show Alert</button>
    </div>
  );
}
