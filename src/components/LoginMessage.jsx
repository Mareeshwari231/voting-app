export default function LoginMessage({ loggedIn }) {
  return (
    <div className="card">
      <h3>Conditional Rendering</h3>
      <p>{loggedIn ? 'Welcome User' : 'Please Login'}</p>
    </div>
  );
}
