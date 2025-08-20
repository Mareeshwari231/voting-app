export default function TaskList({ tasks }) {
  return (
    <div className="card">
      <h3>Tasks</h3>
      <ul>
        {tasks.map(t => <li key={t.id}>{t.title}</li>)}
      </ul>
    </div>
  );
}
